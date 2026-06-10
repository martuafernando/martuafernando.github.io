import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Hero } from "~/components/sections/Hero";
import { About } from "~/components/sections/About";
import { Work } from "~/components/sections/Work";
import { Experience } from "~/components/sections/Experience";

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
	title: "Fernando Sibarani — Architect & Fullstack Engineer",
	meta: [
		{
			name: "description",
			content:
				"M Fernando Sibarani — software architect and fullstack engineer building reliable systems for healthcare, education, and enterprise.",
		},
	],
};
