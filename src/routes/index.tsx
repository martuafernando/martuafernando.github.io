import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { About, Experience, Hero, Work } from "~/components/sections";

export default component$(() => {
	return (
		<>
			<Hero />
			<About />
			<Work />
			<Experience />
		</>
	);
});

export const head: DocumentHead = {
	title: "Martua Fernando — Architect & Fullstack Engineer",
	meta: [
		{
			name: "description",
			content:
				"Martua Fernando — software architect and fullstack engineer building reliable systems for healthcare, education, and enterprise.",
		},
	],
};
