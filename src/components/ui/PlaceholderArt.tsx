import { component$ } from "@builder.io/qwik";

interface PlaceholderArtProps {
	/** Large overlay label, usually the project/brand name. */
	label: string;
}

/** Gradient placeholder texture (grid lines + label) for empty media slots. */
export const PlaceholderArt = component$<PlaceholderArtProps>(({ label }) => (
	<div class="ph-art">
		<div class="grid-lines" />
		<div class="label">{label}</div>
	</div>
));
