const meta = import.meta.glob('../../content/projects/**/*.svx');

export async function load() {
	const files = Object.entries(meta);

	const projects = await Promise.all(
		files.map(async ([path, importer]) => {
			const projects: any = await importer();
			return {
				path,
				...projects.metadata,
				content: projects.default,
			};
		})
	);

	return { projects };
}

export const prerender = true;
