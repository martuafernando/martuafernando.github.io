const PW = "C:/Users/70486/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright";
const { chromium } = require(PW);

const BASE = "http://localhost:5174";

const grab = async (page) => {
	return await page.evaluate(() => {
		const txt = (sel) => {
			const el = document.querySelector(sel);
			return el ? el.textContent.trim().replace(/\s+/g, " ").slice(0, 80) : "(missing)";
		};
		const pill = (sel) => {
			const el = document.querySelector(sel);
			if (!el) return "(missing)";
			const bg = getComputedStyle(el).backgroundColor;
			return bg;
		};
		return {
			htmlLang: document.documentElement.lang,
			navWork: txt(".nav-links a"),
			getInTouch: txt(".nav-cta-desktop"),
			heroStatus: txt(".hero-status"),
			heroH1: txt(".hero h1"),
			heroLede: txt(".hero-lede"),
			heroCta: txt(".hero-cta .btn-primary"),
			heroStat: txt(".hero-meta .stat span"),
			aboutEyebrow: txt("#about .eyebrow"),
			aboutH2: txt("#about h2"),
			workEyebrow: txt("#work .eyebrow"),
			workH2: txt("#work .section-head h2"),
			cardSummary: txt(".pcard .summary"),
			xpEyebrow: txt("#experience .eyebrow"),
			xpBadge: txt(".timeline .badge"),
			xpPoint: txt(".role-list li"),
			footerH2: txt(".footer-cta h2"),
			footerNote: txt(".footer-bottom span:last-child"),
			pillEnBg: pill(".lang-toggle .l-en"),
			pillIdBg: pill(".lang-toggle .l-id"),
		};
	});
};

(async () => {
	const browser = await chromium.launch();
	const page = await browser.newPage();
	const results = {};

	// 1. Home, initial (EN)
	await page.goto(BASE + "/", { waitUntil: "networkidle" });
	await page.waitForSelector(".lang-toggle");
	await page.waitForTimeout(800);
	results.homeInitial = await grab(page);

	// 2. Click toggle -> ID
	await page.click(".lang-toggle");
	await page.waitForTimeout(700);
	results.homeAfterToggle = await grab(page);

	// 3. Reload, expect persist ID
	await page.reload({ waitUntil: "networkidle" });
	await page.waitForTimeout(900);
	results.homeAfterReload = await grab(page);
	await page.screenshot({ path: "tmp/home-id.png", fullPage: false });

	// toggle back to EN so detail test starts clean-ish, then go to detail
	// 4. Detail page (should load in ID from storage)
	await page.goto(BASE + "/projects/buncis-pertamina-kontinental/", { waitUntil: "networkidle" });
	await page.waitForSelector(".lang-toggle");
	await page.waitForTimeout(900);
	results.detailInitial = await page.evaluate(() => {
		const txt = (sel) => { const el = document.querySelector(sel); return el ? el.textContent.trim().replace(/\s+/g," ").slice(0,80) : "(missing)"; };
		return {
			htmlLang: document.documentElement.lang,
			backLink: txt(".back-link"),
			summary: txt(".proj-hero .summary"),
			factYear: txt(".fact .k"),
			techStack: txt(".meta-block .eyebrow"),
			segLabel: txt(".prose .seg-label"),
			coverImg: (document.querySelector(".proj-cover img")||{}).getAttribute ? document.querySelector(".proj-cover img").getAttribute("src") : "(no img)",
			galleryCount: document.querySelectorAll(".gallery-grid .shot img").length,
		};
	});
	// toggle detail to EN
	await page.click(".lang-toggle");
	await page.waitForTimeout(700);
	results.detailAfterToggle = await page.evaluate(() => {
		const txt = (sel) => { const el = document.querySelector(sel); return el ? el.textContent.trim().replace(/\s+/g," ").slice(0,80) : "(missing)"; };
		return {
			htmlLang: document.documentElement.lang,
			backLink: txt(".back-link"),
			segLabel: txt(".prose .seg-label"),
		};
	});

	console.log(JSON.stringify(results, null, 2));
	await browser.close();
})().catch((e) => { console.error("ERR", e); process.exit(1); });
