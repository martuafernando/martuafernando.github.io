import { type ClassList, component$ } from "@builder.io/qwik";
import { ExperienceItem } from "./ExperienceItem";
import type Experience from "~/domains/Experience";

export interface ExperienceItemProps {
	class?: ClassList;
	experiences: Array<Experience>;
}

export const ExperienceList = component$((props: ExperienceItemProps) => {
	const experiences = props.experiences

	return (
		<div class={props.class}>
			{experiences.map((experience) => (
				<ExperienceItem
					key={experience.companyName}
					experience={experience}
					class="border-t first:border-none py-8"
				/>
			))}
		</div>
	);
});
