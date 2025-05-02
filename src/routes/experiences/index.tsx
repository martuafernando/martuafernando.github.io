import { component$ } from "@builder.io/qwik";
import { ExperienceList } from "~/components/ui/ExperienceList";
import { getAllExperiences } from "~/repositories/experience";

export default component$(() => {
	const experiences = getAllExperiences();
	return (
		<>
			<h1 class="text-5xl font-bold text-center">Experience</h1>
			<div class="mt-8">
				<ExperienceList experiences={experiences} />
			</div>
		</>
	);
});
