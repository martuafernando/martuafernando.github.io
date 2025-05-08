import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
	return (
		<article class="prose prose-headings:mt-16 prose-headings:text-black prose-headings:font-sans prose-h1:text-5xl prose-h2:text-3xl text-gray-700 text-xl leading-relaxed font-serif">
			<Slot />
		</article>
	);
});
