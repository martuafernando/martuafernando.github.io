import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { ExperienceList } from "~/components/ui/ExperienceList";
import { getExperiences } from "~/repositories/experiences";

export default component$(() => {
	const experiences = useResource$(getExperiences);

	return (
		<>
			<h1 class="text-5xl font-bold text-center">Experience</h1>
			<div class="mt-8">
				<Resource
					value={experiences}
					onResolved={(experiences) => (
						<ExperienceList experiences={experiences} />
					)}
				/>
			</div>
		</>
	);
});
