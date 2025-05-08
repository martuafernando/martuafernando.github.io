import type Project from "~/domains/Project";

export const getProjects = async (): Promise<Project[]> => {
	const modules = import.meta.glob<{ frontmatter: Project }>(
		"/src/routes/projects/**/**/index.mdx",
	);

	const projects = Object.values(modules).map(async (it) => {
		const value = await it();
		const data = value.frontmatter;

		return {
			...data,
			desktopThumbnailUrl: `${data.desktopThumbnailUrl}?jsx`,
			mobileThumbnailUrl: `${data.mobileThumbnailUrl}?jsx`,
		};
	});

	const result = await Promise.all(projects);
	return result;
};
