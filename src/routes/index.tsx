import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { About, Experience, Hero, Work } from "~/components/sections";

export default component$(() => {
	return (
		<>
			<Hero />
			<Work />
			<About />
			<Experience />
		</>
	);
});

export const head: DocumentHead = {
	title: "Martua Fernando — Software Engineer",
	meta: [
		{
			name: "description",
			content:
				"Martua Fernando — software engineer building data pipelines and enterprise systems, with a background in healthcare software.",
		},
	],
};
