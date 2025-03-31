<script lang="ts">
	import type Project from '$lib/models/Project';
	import type { ClassValue } from 'svelte/elements';
	import ToolIcon from './Tool-Icon.svelte';

	const props: { class?: ClassValue; project: Project; href: string } = $props();
	const { project, href } = props;
</script>

<a {href} class="block cursor-pointer group hover {props.class}">
	<div class="relative rounded-lg overflow-hidden" style="padding-top: 75%;">
		<img
			class="absolute top-0 left-0 w-full h-full object-cover"
			src={project.desktopThumbnailUrl}
			width={project.desktopThumbnailWidth}
			height={project.desktopThumbnailHeight}
			alt={project.thumbnailAlt}
		/>
		<div
			class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"
		></div>
	</div>

	<div class="flex justify-between items-center mt-2">
		<p class="text-start text-xl font-semibold">{project.title}</p>
		<div class="text-end flex gap-1 items-center">
			{#each project.tools as tool}
				<ToolIcon {tool} class="text-4xl" />
			{/each}
		</div>
	</div>
</a>
