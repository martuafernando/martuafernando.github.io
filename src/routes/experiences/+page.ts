const meta = import.meta.glob('../../content/experiences/*.svx');

export async function load() {
	const files = Object.entries(meta);

	const experiences = await Promise.all(
		files.map(async ([path, importer]) => {
			const experience: any = await importer();
			return {
				path,
				...experience.metadata,
				content: experience.default,
			};
		})
	);

	return { experiences };
}

export const prerender = true;
