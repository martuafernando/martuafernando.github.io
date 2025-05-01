import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { HeroSection } from "~/components/sections/HeroSection";
import { MarqueeSection } from "~/components/sections/MarqueeSection";

export default component$(() => {
	return (
		<>
			<HeroSection class="w-full h-[calc(100vh-96px)] relative z-10 bg-background rounded-b-[64px] sm:rounded-b-[96px] max-w-none" />
			<MarqueeSection
				class="w-full rounded-b-[64px] pt-40 pb-16 relative -top-24 sm:rounded-b-[96px] overflow-x-hidden bg-white max-w-none"
				imageList={[
					{
						source: "https://placehold.co/600x400",
						alt: "test",
					},
					{
						source: "https://placehold.co/600x400",
						alt: "test",
					},
					{
						source: "https://placehold.co/600x400",
						alt: "test",
					},
				]}
			/>
			<div class="h-[200vh]" />
		</>
	);
});

export const head: DocumentHead = {
	title: "Welcome to Qwik",
	meta: [
		{
			name: "description",
			content: "Qwik site description",
		},
	],
};
