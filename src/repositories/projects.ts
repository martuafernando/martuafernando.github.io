import type Project from "~/domains/Project";

const modules = import.meta.glob<{ frontmatter: Project }>(
	"/src/routes/projects/**/**/index.mdx", { eager: true }
);

export function getProjects(): Project[] {

	const projects = Object.values(modules).map((it) => {
		const value = it;
		const data = value.frontmatter;

		return {
			...data,
			desktopThumbnailUrl: `${data.desktopThumbnailUrl}?jsx`,
			mobileThumbnailUrl: `${data.mobileThumbnailUrl}?jsx`,
		};
	});

	const result = projects;
	return result;
}
