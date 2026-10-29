// Browser smoke test for the production build. No dependencies: Node's built-in
// http / WebSocket / fetch plus a Firefox that speaks WebDriver BiDi (GitHub's
// ubuntu runners ship one). Usage: `pnpm build && pnpm test.smoke`.
// Env: FIREFOX_BIN (default "firefox"), SMOKE_PORT (4173), BIDI_PORT (9222).
import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { existsSync, readFileSync, statSync } from "node:fs";
import { mkdtempSync } from "node:fs";
import { createConnection } from "node:net";
import { tmpdir } from "node:os";
import { extname, join, normalize } from "node:path";

const DIST = join(process.cwd(), "dist");
const HTTP_PORT = Number(process.env.SMOKE_PORT ?? 4173);
const BIDI_PORT = Number(process.env.BIDI_PORT ?? 9222);
const BASE = `http://127.0.0.1:${HTTP_PORT}`;
const PAGES = [
	"/",
	"/projects/cari-resto/",
	"/projects/buncis-pertamina-kontinental/",
	"/catat-uang/privacy-policy/",
];

if (!existsSync(join(DIST, "index.html"))) {
	console.error("dist/ is missing. Run `pnpm build` first.");
	process.exit(2);
}

// ---------- static server for dist/ ----------
const TYPES = {
	".html": "text/html; charset=utf-8",
	".js": "text/javascript",
	".mjs": "text/javascript",
	".css": "text/css",
	".json": "application/json",
	".webmanifest": "application/manifest+json",
	".svg": "image/svg+xml",
	".png": "image/png",
	".jpg": "image/jpeg",
	".webp": "image/webp",
	".woff2": "font/woff2",
	".pdf": "application/pdf",
	".txt": "text/plain",
	".ico": "image/x-icon",
};
const server = createServer((req, res) => {
	let path = normalize(
		decodeURIComponent(new URL(req.url, BASE).pathname),
	).replace(/^(\.\.[/\\])+/, "");
	let file = join(DIST, path);
	if (existsSync(file) && statSync(file).isDirectory())
		file = join(file, "index.html");
	if (!existsSync(file)) {
		res.writeHead(404).end("not found");
		return;
	}
	res.writeHead(200, {
		"content-type": TYPES[extname(file)] ?? "application/octet-stream",
	});
	res.end(readFileSync(file));
});
await new Promise((r) => server.listen(HTTP_PORT, "127.0.0.1", r));

// ---------- Firefox + WebDriver BiDi ----------
const profile = mkdtempSync(join(tmpdir(), "smoke-ff-"));
const firefox = spawn(
	process.env.FIREFOX_BIN ?? "firefox",
	[
		"--headless",
		"--no-remote",
		"--profile",
		profile,
		`--remote-debugging-port=${BIDI_PORT}`,
		"about:blank",
	],
	{ stdio: "ignore" },
);
const cleanup = () => {
	try {
		firefox.kill();
	} catch {}
	server.close();
};
process.on("exit", cleanup);

const portOpen = (port) =>
	new Promise((r) => {
		const s = createConnection(port, "127.0.0.1");
		s.on("connect", () => {
			s.destroy();
			r(true);
		});
		s.on("error", () => r(false));
	});
for (let i = 0; i < 90 && !(await portOpen(BIDI_PORT)); i++)
	await new Promise((r) => setTimeout(r, 1000));
if (!(await portOpen(BIDI_PORT))) {
	console.error("Firefox did not start (is it installed? set FIREFOX_BIN).");
	process.exit(2);
}

const ws = new WebSocket(`ws://127.0.0.1:${BIDI_PORT}/session`);
let nextId = 0;
const pending = new Map();
const consoleErrors = [];
ws.onmessage = (m) => {
	const d = JSON.parse(m.data);
	if (d.method === "log.entryAdded" && d.params.level === "error")
		consoleErrors.push(d.params.text);
	if (d.id && pending.has(d.id)) {
		const p = pending.get(d.id);
		pending.delete(d.id);
		d.type === "error" ? p.rej(new Error(d.message)) : p.res(d.result);
	}
};
await new Promise((res, rej) => {
	ws.onopen = res;
	ws.onerror = rej;
});
const send = (method, params = {}) =>
	new Promise((res, rej) => {
		const id = ++nextId;
		pending.set(id, { res, rej });
		ws.send(JSON.stringify({ id, method, params }));
	});
await send("session.new", { capabilities: {} });
await send("session.subscribe", { events: ["log.entryAdded"] });
const { contexts } = await send("browsingContext.getTree", {});
const context = contexts[0].context;
const run = async (body) => {
	const r = await send("script.evaluate", {
		expression: `(async()=>{${body}})().then(v=>JSON.stringify(v===undefined?null:v))`,
		target: { context },
		awaitPromise: true,
	});
	if (r.type === "exception") throw new Error(r.exceptionDetails.text);
	return JSON.parse(r.result.value);
};
const open = async (path, width = 1100) => {
	await send("browsingContext.setViewport", {
		context,
		viewport: { width, height: 900 },
	});
	await send("browsingContext.navigate", {
		context,
		url: BASE + path,
		wait: "complete",
	});
	await run(
		`await document.fonts.ready; await new Promise(r=>setTimeout(r,1800));`,
	);
};

// ---------- tiny assertion framework ----------
const results = [];
const check = (name, ok, detail = "") => {
	results.push({ name, ok: Boolean(ok), detail });
	console.log(
		`${ok ? "  ok " : "FAIL "} ${name}${!ok && detail ? `  -> ${detail}` : ""}`,
	);
};

try {
	console.log("Pages");
	for (const p of PAGES) {
		const res = await fetch(BASE + p);
		const html = await res.text();
		check(
			`${p} responds 200 with a title and description`,
			res.status === 200 &&
				/<title[^>]*>[^<]+/.test(html) &&
				/name="description"/.test(html),
			`status ${res.status}`,
		);
	}
	check(
		"CV file is served",
		(await fetch(`${BASE}/files/martua-fernando-cv.pdf`)).headers.get(
			"content-type",
		) === "application/pdf",
	);
	check(
		"project case studies are not 404",
		(await fetch(`${BASE}/projects/does-not-exist/`)).status === 404,
	);

	for (const width of [1100, 375]) {
		console.log(`Home @${width}px`);
		await open("/", width);
		const R = await run(`
			const q = (s) => document.querySelector(s); const wait = (ms) => new Promise((r) => setTimeout(r, ms)); const R = {};
			R.hydrated = document.documentElement.classList.contains("reveal-ready");
			R.heroEntered = q(".hero").classList.contains("entered");
			R.overflow = document.documentElement.scrollWidth - innerWidth;
			R.hosts = [...new Set(performance.getEntriesByType("resource").map((r) => new URL(r.name).host))];
			const fonts = performance.getEntriesByType("resource").filter((r) => r.name.includes(".woff2"));
			R.fontKB = Math.round(fonts.reduce((a, r) => a + r.encodedBodySize, 0) / 1024);
			R.bodyFont = getComputedStyle(document.body).fontFamily;
			R.ctaLinks = [...document.querySelectorAll("a[download]")].map((a) => a.getAttribute("href"));
			R.sectionOrder = [...document.querySelectorAll("main section, footer")].map((e) => e.id || e.className.split(" ")[0]);
			// marquee runs, then pauses and resumes from the button
			const track = q(".trusted-track"); const T = () => getComputedStyle(track).transform;
			const a = T(); await wait(1000); R.marqueeRuns = a !== T();
			q(".trusted-toggle").click(); await wait(400); const p1 = T(); await wait(1000); R.marqueePauses = p1 === T() && q(".trusted-toggle").getAttribute("aria-pressed") === "true";
			q(".trusted-toggle").click(); await wait(400); const r1 = T(); await wait(1000); R.marqueeResumes = r1 !== T();
			// theme + language
			const th = document.documentElement.dataset.theme; q(".theme-toggle").click(); await wait(300); R.themeFlips = th !== document.documentElement.dataset.theme; q(".theme-toggle").click();
			const lg = document.documentElement.lang; q(".lang-toggle").click(); await wait(500); R.langFlips = lg !== document.documentElement.lang && /Software engineer yang/.test(q(".hero-lede").textContent); q(".lang-toggle").click();
			// experience details
			const d = q(".xp-more"); d.querySelector("summary").click(); await wait(300); R.detailsOpen = d.open;
			// copy-to-clipboard success path (clipboard stubbed)
			let written = null; Object.defineProperty(navigator, "clipboard", { value: { writeText: async (t) => { written = t; } }, configurable: true });
			q(".copy-btn").click(); await wait(400); R.copied = written === "martuafernando@proton.me" && q(".copy-btn").classList.contains("is-copied");
			if (innerWidth < 900) { q(".menu-btn").click(); await wait(300); R.menuOpens = document.body.classList.contains("menu-open"); }
			return R;`);
		check(
			"hydrates (reveal-ready) and the hero entrance runs",
			R.hydrated && R.heroEntered,
		);
		check("no horizontal scrolling", R.overflow <= 0, `${R.overflow}px`);
		check(
			"loads nothing from third-party hosts",
			R.hosts.length === 1 && R.hosts[0] === `127.0.0.1:${HTTP_PORT}`,
			R.hosts.join(", "),
		);
		check(
			"home downloads at most 60 KB of fonts",
			R.fontKB <= 60,
			`${R.fontKB} KB`,
		);
		check(
			"UI font is the self-hosted variable family",
			R.bodyFont.startsWith('"Plus Jakarta Sans Variable"'),
			R.bodyFont,
		);
		check(
			"CV links point at the PDF (hero + footer)",
			R.ctaLinks.length === 2 &&
				R.ctaLinks.every((h) => h === "/files/martua-fernando-cv.pdf"),
			R.ctaLinks.join(", "),
		);
		check(
			"sections follow the nav order",
			R.sectionOrder.join(",") === "hero,work,about,experience,contact",
			R.sectionOrder.join(","),
		);
		check(
			"logo marquee runs, pauses and resumes",
			R.marqueeRuns && R.marqueePauses && R.marqueeResumes,
			JSON.stringify([R.marqueeRuns, R.marqueePauses, R.marqueeResumes]),
		);
		check("theme toggle flips the theme", R.themeFlips);
		check("language toggle switches to Indonesian copy", R.langFlips);
		check("experience details open", R.detailsOpen);
		check("copy button copies the address and confirms", R.copied);
		if (width < 900) check("mobile menu opens", R.menuOpens);
	}

	console.log("Project page");
	await open("/projects/cari-resto/");
	const P = await run(`
		const fonts = performance.getEntriesByType("resource").filter((r) => r.name.includes(".woff2")).map((r) => r.name.split("/").pop());
		// Gallery images are loading="lazy": scroll them into view, then wait for them.
		const gallery = [...document.querySelectorAll(".gallery img")];
		document.querySelector(".gallery").scrollIntoView({ behavior: "instant" });
		for (let i = 0; i < 30 && !gallery.every((img) => img.complete && img.naturalWidth > 0); i++) await new Promise((r) => setTimeout(r, 200));
		return {
			prose: getComputedStyle(document.querySelector(".prose p")).fontFamily,
			serifFetched: fonts.some((f) => f.includes("source-serif-4-latin-wght-normal")),
			unusedSubsetsFetched: fonts.filter((f) => /cyrillic|greek|vietnamese|italic/.test(f)),
			galleryLoaded: gallery.length > 0 && gallery.every((i) => i.complete && i.naturalWidth > 0),
			nextOnlyChild: document.querySelectorAll(".proj-nav a").length,
			overflow: document.documentElement.scrollWidth - innerWidth,
		};`);
	check(
		"case-study prose uses the serif family",
		P.prose.startsWith('"Source Serif 4 Variable"'),
		P.prose,
	);
	check(
		"only the needed serif subset is downloaded",
		P.serifFetched && P.unusedSubsetsFetched.length === 0,
		P.unusedSubsetsFetched.join(", "),
	);
	check("gallery images load", P.galleryLoaded);
	check(
		"no horizontal scrolling on the detail page",
		P.overflow <= 0,
		`${P.overflow}px`,
	);

	console.log("Console");
	check(
		"no console errors during the run",
		consoleErrors.length === 0,
		consoleErrors.slice(0, 3).join(" | "),
	);
} catch (error) {
	check(
		"test run completed without throwing",
		false,
		String(error?.message ?? error),
	);
}

const failed = results.filter((r) => !r.ok);
console.log(
	`\n${results.length - failed.length}/${results.length} checks passed`,
);
ws.close();
cleanup();
process.exit(failed.length ? 1 : 0);
