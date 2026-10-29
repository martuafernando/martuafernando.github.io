// Fails when an image in public/images is larger than the budget. The site is
// static and image-led, so one oversized file is the easiest way to slow every
// visitor down. Run with `pnpm check.images`.
import { readdirSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";

const ROOT = "public/images";
const BUDGET_KB = Number(process.env.IMAGE_BUDGET_KB ?? 300);
const IMAGE_EXT = new Set([
	".png",
	".jpg",
	".jpeg",
	".webp",
	".avif",
	".gif",
	".svg",
]);

const walk = (dir) =>
	readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
		const path = join(dir, entry.name);
		return entry.isDirectory() ? walk(path) : [path];
	});

const tooBig = walk(ROOT)
	.filter((file) => IMAGE_EXT.has(extname(file).toLowerCase()))
	.map((file) => ({ file, kb: Math.ceil(statSync(file).size / 1024) }))
	.filter(({ kb }) => kb > BUDGET_KB)
	.sort((a, b) => b.kb - a.kb);

if (tooBig.length > 0) {
	console.error(`Images over the ${BUDGET_KB} KB budget:`);
	for (const { file, kb } of tooBig)
		console.error(`  ${kb} KB  ${relative(".", file)}`);
	console.error(
		"Resize or re-encode them (e.g. WebP, quality ~78), or raise IMAGE_BUDGET_KB deliberately.",
	);
	process.exit(1);
}
console.log(`All images are within the ${BUDGET_KB} KB budget.`);
