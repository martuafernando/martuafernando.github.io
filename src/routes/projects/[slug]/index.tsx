import { component$ } from "@builder.io/qwik";
import {
	type DocumentHead,
	routeLoader$,
	type StaticGenerateHandler,
} from "@builder.io/qwik-city";
import { ProjectDetail } from "~/components/ProjectDetail";
import { projects } from "~/data/projects";

export const useProject = routeLoader$(({ params, status }) => {
	const index = projects.findIndex((p) => p.slug === params.slug);
	if (index === -1) {
		status(404);
		return null;
	}
	return {
		project: projects[index],
		prev: index > 0 ? projects[index - 1] : null,
		next: index < projects.length - 1 ? projects[index + 1] : null,
	};
});

export default component$(() => {
	const data = useProject();
	if (!data.value) {
		return (
			<section class="section wrap">
				<p>Project not found.</p>
			</section>
		);
	}
	return (
		<ProjectDetail
			project={data.value.project}
			prev={data.value.prev}
			next={data.value.next}
		/>
	);
});

export const onStaticGenerate: StaticGenerateHandler = () => ({
	params: projects.map((p) => ({ slug: p.slug })),
});

export const head: DocumentHead = ({ resolveValue }) => {
	const data = resolveValue(useProject);
	const project = data?.project;
	return {
		title: project
			? `${project.detailTitle} — Fernando Sibarani`
			: "Project — Fernando Sibarani",
		meta: [
			{
				name: "description",
				content: project?.summary ?? "Project case study by Fernando Sibarani.",
			},
		],
	};
};
