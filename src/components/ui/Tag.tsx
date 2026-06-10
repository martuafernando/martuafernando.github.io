import { component$, Slot } from "@builder.io/qwik";

/** A monospace pill used for tech tags and stack chips. */
export const Tag = component$(() => (
	<span class="tag">
		<Slot />
	</span>
));
