import type Experience from "~/domains/Experience";

const modules = import.meta.glob<{
	frontmatter: Experience;
}>("/src/routes/experiences/**/*.mdx", { eager: true });

export function getExperiences() {
	const experiences = Object.values(modules).map((it) => {
		const value = it;
		const data = value.frontmatter;

		return {
			...data,
			companyLogoUrl: `${data.companyLogoUrl}?jsx`,
			companyLogoHorizontalUrl: `${data.companyLogoHorizontalUrl}?jsx`,
		};
	});

	const result = experiences;

	return result;
}