import { component$, Resource, useResource$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { HeroSection } from "~/components/sections/HeroSection";
import { MarqueeSection } from "~/components/sections/MarqueeSection";
import { ProjectShowcaseSection } from "~/components/sections/ProjectShowcaseSection";
import { getExperiences } from "~/repositories/experiences";
import { getProjects } from "~/repositories/projects";

export default component$(() => {
	const experienceImageList = useResource$(() => {
		const data = getExperiences()

		return data.map((experience) => ({
			source: experience.companyLogoHorizontalUrl,
			alt: experience.companyName,
		}))
	}
	);

	const projects = useResource$(getProjects);

	return (
		<>
			<HeroSection class="w-full h-[calc(100vh-196px)] relative z-10 bg-background rounded-b-[64px] sm:rounded-b-[96px] max-w-none" />
			<Resource
				value={experienceImageList}
				onResolved={(data) => (
					<MarqueeSection
						class="w-full rounded-b-[64px] pt-40 pb-16 relative -top-24 sm:rounded-b-[96px] overflow-x-hidden bg-accent max-w-none"
						imageList={data}
					/>
				)}
			/>
			<Resource
				value={projects}
				onResolved={(projects) => (
					<ProjectShowcaseSection class="max-w-none px-0" projects={projects} />
				)}
			/>
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
