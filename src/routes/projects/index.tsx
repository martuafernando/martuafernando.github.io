import { component$ } from "@builder.io/qwik";
import { ProjectList } from "~/components/ui/ProjectList";
import { getAllProject } from "~/repositories/project";

export default component$(() => {
	const projects = getAllProject();

	return (
		<>
			<h1 class="text-5xl font-bold text-center mt-8">Projects</h1>
			<ProjectList
				projects={projects}
				class="mx-auto mt-12 mb-8"
			/>
		</>
	);
});
