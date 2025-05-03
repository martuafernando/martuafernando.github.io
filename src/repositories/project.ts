import type { Component } from "@builder.io/qwik";
import type Project from "~/domains/Project";

const modules = import.meta.glob<{
	frontmatter: Project;
	default: Component;
}>("/contents/projects/**/*.mdx", { eager: true });

export function getAllProject() {
	const projects: Project[] = Object.entries(modules).map(
		([filePath, value]) => {
			const data = value.frontmatter;
			const dir = filePath.replace(/\/[^/]+\.mdx$/, "");

			return {
				...data,
				desktopThumbnailUrl: `${dir}/${data.desktopThumbnailUrl}`,
				mobileThumbnailUrl: `${dir}/${data.mobileThumbnailUrl}`,
			};
		},
	);

	return projects;
}

export function getProjectById(id: string): null | {
	project: Project;
	Component: Component;
} {
	const entry = Object.entries(modules).find(
		([, mod]) => mod.frontmatter.id === id,
	);

	if (!entry) {
		return null;
	}

	const [filePath, value] = entry;
	const data = value.frontmatter;
	const dir = filePath.replace(/\/[^/]+\.mdx$/, "");

	return {
		project: {
			...data,
			desktopThumbnailUrl: `${dir}/${data.desktopThumbnailUrl}`,
			mobileThumbnailUrl: `${dir}/${data.mobileThumbnailUrl}`,
		},
		Component: value.default,
	};
}
