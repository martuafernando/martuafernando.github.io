import type Experience from "~/domains/Experience";

export async function getExperiences() {
	const modules = import.meta.glob<{
		frontmatter: Experience;
	}>("/src/routes/experiences/**/*.mdx");

	const experiences = Object.values(modules).map(async (it) => {
		const value = await it();
		const data = value.frontmatter;

		return {
			...data,
			companyLogoUrl: `${data.companyLogoUrl}?jsx`,
			companyLogoHorizontalUrl: `${data.companyLogoHorizontalUrl}?jsx`,
		};
	});

	const result = await Promise.all(experiences);

	return result;
}