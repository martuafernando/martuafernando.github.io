import { component$ } from "@builder.io/qwik";
import {
	type DocumentHead,
	routeLoader$,
	type StaticGenerateHandler,
} from "@builder.io/qwik-city";
import { ProjectDetail } from "~/components/projects";
import {
	getAdjacentProjects,
	getProjectBySlug,
	getProjects,
} from "~/data/projects";

export const useProject = routeLoader$(({ params, status }) => {
	const project = getProjectBySlug(params.slug);
	if (!project) {
		status(404);
		return null;
	}
	return { project, ...getAdjacentProjects(params.slug) };
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
	params: getProjects().map((p) => ({ slug: p.slug })),
});

export const head: DocumentHead = ({ resolveValue }) => {
	const data = resolveValue(useProject);
	const project = data?.project;
	return {
		title: project
			? `${project.detailTitle} — Martua Fernando`
			: "Project — Martua Fernando",
		meta: [
			{
				name: "description",
				content: project?.summary ?? "Project case study by Martua Fernando.",
			},
		],
	};
};
