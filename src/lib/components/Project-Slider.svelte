<script lang="ts">
	import type Project from '$lib/models/Project';
	import type { ClassValue } from 'svelte/elements';

	let indexActive = $state(0);
	let container: HTMLDivElement;
	const props: { class?: ClassValue; projects: Project[] } = $props();
	const { projects } = props;

	function updateBackground() {
		if (!container) return;
		indexActive = Math.round(container.scrollLeft / (window.innerWidth * 0.85));
	}
</script>

<div class="relative overflow-hidden w-full h-screen {props.class}">
	<div
		class="absolute inset-0 bg-cover bg-center blur-2xl"
		style="background-image: url({projects[indexActive]?.mobileThumbnailUrl});"
	></div>

	<div
		class="absolute top-1/2 -translate-y-[calc(50%+32px)] flex items-center overflow-x-auto gap-4 p-4 snap-x snap-mandatory"
		bind:this={container}
		onscroll={updateBackground}
	>
		{#each projects as project, index}
			<a
				class="block flex-shrink-0 text-2xl font-bold snap-center"
				href="/projects/{project.id}"
			>
				<img
					alt={project.title}
					title={project.title}
					src={project.mobileThumbnailUrl}
					class="w-[85vw] h-[65vh] rounded-2xl shadow-2xl transition-all duration-500 will-change-transform object-cover"
					class:h-[75vh]={indexActive === index}
				/>
			</a>
		{/each}
	</div>
</div>
