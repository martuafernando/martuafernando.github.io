<script lang="ts">
	import type Project from '$lib/models/Project';
	import type { ClassValue } from 'svelte/elements';

	let indexActive = $state(0);
	let container: HTMLDivElement;
	const props: { class?: ClassValue; projects: Project[] } = $props();
	const { projects } = props;

	function updateBackground() {
		if (!container) return;
		indexActive = Math.round(container.scrollLeft / (window.innerWidth * 0.8));
	}
</script>

<div class="relative overflow-hidden w-full h-screen {props.class}">
	<div
		class="absolute inset-0 bg-cover bg-center blur-2xl"
		style="background-image: url({projects[indexActive]?.mobileThumbnailUrl});"
	></div>

	<div
		class="absolute flex items-center overflow-x-auto gap-4 p-4 snap-x snap-mandatory"
		bind:this={container}
		onscroll={updateBackground}
	>
		{#each projects as project, index}
			<img
				alt={project.title}
				title={project.title}
				src={project.mobileThumbnailUrl}
				class="flex-shrink-0 w-[80vw] h-[65vh] rounded-2xl shadow-2xl my-16 text-2xl font-bold snap-center bg-cover bg-center transition-all duration-500 will-change-transform object-cover"
				class:h-[75vh]={indexActive === index}
				class:cursor-pointer={indexActive === index}
			/>
		{/each}
	</div>
</div>
