import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { ProjectList } from "~/components/ui";
import { getProjects } from "~/repositories/projects";

export default component$(() => {
	const projects = useResource$(getProjects);

	return (
		<>
			<h1 class="text-5xl font-bold text-center mt-8">Projects</h1>
			<Resource
				value={projects}
				onResolved={(projects) => {
					return (
						<ProjectList projects={[...projects]} class="mx-auto mt-12 mb-8" />
					);
				}}
			/>
		</>
	);
});
