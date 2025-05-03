import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { HeroSection } from "~/components/sections/HeroSection";
import { MarqueeSection } from "~/components/sections/MarqueeSection";
import { ProjectShowcaseSection } from "~/components/sections/ProjectShowcaseSection";
import { getAllExperiences } from "~/repositories/experience";
import { getAllProject } from "~/repositories/project";

export default component$(() => {
	const experiences = getAllExperiences();
	const experienceImageList = experiences.map((experience) => ({
		source: experience.companyLogoHorizontalUrl,
		alt: experience.companyName,
	}));

	const projects = getAllProject();

	return (
		<>
			<HeroSection class="w-full h-[calc(100vh-196px)] relative z-10 bg-background rounded-b-[64px] sm:rounded-b-[96px] max-w-none" />
			<MarqueeSection
				class="w-full rounded-b-[64px] pt-40 pb-16 relative -top-24 sm:rounded-b-[96px] overflow-x-hidden bg-white max-w-none"
				imageList={experienceImageList}
			/>
			<ProjectShowcaseSection class="max-w-none p-0" projects={projects} />
		</>
	);
});

export const head: DocumentHead = {
	title: "Martua Fernando",
	meta: [
		{
			name: "description",
			content: "Martua Fernando personal web",
		},
	],
};
