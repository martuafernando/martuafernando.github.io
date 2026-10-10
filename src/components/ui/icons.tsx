import { component$ } from "@builder.io/qwik";

interface IconProps {
	class?: string;
}

const stroke = {
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round" as const,
	"stroke-linejoin": "round" as const,
};

export const ArrowRight = component$<IconProps>((p) => (
	<svg viewBox="0 0 24 24" class={p.class} {...stroke}>
		<path d="M5 12h14M13 6l6 6-6 6" />
	</svg>
));

export const ArrowUpRight = component$<IconProps>((p) => (
	<svg viewBox="0 0 24 24" class={p.class} {...stroke}>
		<path d="M7 17 17 7M9 7h8v8" />
	</svg>
));

export const ArrowLeft = component$<IconProps>((p) => (
	<svg viewBox="0 0 24 24" class={p.class} {...stroke}>
		<path d="M19 12H5M11 18l-6-6 6-6" />
	</svg>
));

export const DownloadIcon = component$<IconProps>((p) => (
	<svg viewBox="0 0 24 24" class={p.class} {...stroke}>
		<path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
	</svg>
));

export const MoonIcon = component$<IconProps>((p) => (
	<svg viewBox="0 0 24 24" class={p.class} {...stroke} stroke-width={1.8}>
		<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
	</svg>
));

export const SunIcon = component$<IconProps>((p) => (
	<svg viewBox="0 0 24 24" class={p.class} {...stroke} stroke-width={1.8}>
		<circle cx="12" cy="12" r="4.2" />
		<path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
	</svg>
));

export const GitHubIcon = component$<IconProps>((p) => (
	<svg viewBox="0 0 24 24" class={p.class} fill="currentColor">
		<path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.34c.85 0 1.71.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
	</svg>
));

export const LinkedInIcon = component$<IconProps>((p) => (
	<svg viewBox="0 0 24 24" class={p.class} fill="currentColor">
		<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34v-7.2H6.06v7.2h2.28zM7.2 10.1a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64zm11.14 8.24v-3.95c0-2.11-.45-3.74-2.92-3.74-1.19 0-1.98.65-2.31 1.27h-.03v-1.07h-2.19v7.2h2.28v-3.56c0-.94.18-1.85 1.34-1.85 1.15 0 1.16 1.07 1.16 1.91v3.5h2.27z" />
	</svg>
));

export const InstagramIcon = component$<IconProps>((p) => (
	<svg
		viewBox="0 0 24 24"
		class={p.class}
		fill="none"
		stroke="currentColor"
		stroke-width={1.9}
	>
		<rect x="3" y="3" width="18" height="18" rx="5" />
		<circle cx="12" cy="12" r="3.6" />
		<circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
	</svg>
));

export const socialIcons: Record<
	string,
	typeof GitHubIcon
> = {
	github: GitHubIcon,
	linkedin: LinkedInIcon,
	instagram: InstagramIcon,
};
