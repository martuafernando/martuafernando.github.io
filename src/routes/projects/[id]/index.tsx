import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { getProjectById } from "~/repositories/project";

export default component$(() => {
	const location = useLocation();
	const id = location.params.id;

	const project = getProjectById(id);

	if (!project) {
		return <p>Project not found</p>;
	}

	return (
		<div class="prose prose-headings:mt-16 prose-headings:text-black prose-headings:font-sans prose-h1:text-5xl prose-h2:text-3xl text-gray-700 text-xl leading-relaxed prose-img:mx-auto font-serif">
			<project.Component />
		</div>
	);
});
