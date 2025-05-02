import type { Component } from "@builder.io/qwik";
import type Experience from "~/domains/Experience";

const modules = import.meta.glob<{
	frontmatter: Experience;
	default: Component;
}>("/contents/experiences/**/*.mdx", { eager: true });

export function getAllExperiences() {
	const projects: Experience[] = Object.entries(modules).map(
		([filePath, value]) => {
			const data = value.frontmatter;
			const dir = filePath.replace(/\/[^/]+\.mdx$/, "");

			return {
				...data,
				companyLogoUrl: `${dir}/${data.companyLogoUrl}`,
				companyLogoHorizontalUrl: `${dir}/${data.companyLogoHorizontalUrl}`,
			};
		},
	);

	return projects;
}