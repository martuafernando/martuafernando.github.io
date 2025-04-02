const metaExperiences = import.meta.glob('../content/experiences/*.svx');
const metaProjects = import.meta.glob('../content/projects/**/*.svx');

export async function load() {
	const [ experiences, projects ] = await Promise.all([
		extractData(metaExperiences),
		extractData(metaProjects)
	])

	return { experiences, projects };
}

async function extractData(meta: Record<string, () => Promise<unknown>>) {
	const files = Object.entries(meta);

	const result = await Promise.all(
		files.map(async ([path, importer]) => {
			const item: any = await importer();
			return {
				path,
				id: RegExp(/[^\\/]+$/).exec(path)?.[0].replace(/\.svx$/, ""),
				...item.metadata,
				content: item.default,
			};
		})
	);

	return result;
}

export const prerender = true;
