<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import ProjectItem from './Project-Item.svelte';
	import ButtonChip from './Button-Chip.svelte';
	import Select from './Select.svelte';
	import type Project from '$lib/models/Project';
	import type { ClassValue } from 'svelte/elements';

	const props: { class?: ClassValue; projects: Project[] } = $props();
	const { projects } = props;

	let activeCategory = writable('All');
	let activeFilterTools = writable('All Technology');
	let windowWidth = writable(0);

	onMount(() => {
		windowWidth.set(window.innerWidth);
		const updateSize = () => windowWidth.set(window.innerWidth);
		window.addEventListener('resize', updateSize);
		return () => window.removeEventListener('resize', updateSize);
	});

	const categoryList = ['All', ...[...new Set(projects.map((it) => it.category))]];

	const toolsFilterOptions = [
		'All Technology',
		...[...new Set(projects.flatMap((it) => it.tools))]
	];

	function onOrderFilterChange(event: CustomEvent) {
		activeFilterTools.set(event.detail.value);
	}
</script>

<div class={props.class}>
	<Select items={toolsFilterOptions} onChange={onOrderFilterChange} />
	<hr class="container h-1 text-gray-200 mt-4" />
	<div class="flex gap-2 overflow-auto whitespace-nowrap mt-4">
		{#each categoryList as category}
			<ButtonChip
				class="text-sm"
				label={category}
				isActive={$activeCategory === category}
				onclick={() => activeCategory.set(category)}
			/>
		{/each}
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-8 mt-6 mx-4">
		{#each projects.filter((project) => ($activeCategory === 'All' || project.category === $activeCategory) && ($activeFilterTools === 'All Technology' || project.tools.includes($activeFilterTools))) as project}
			<ProjectItem {project} href={`/projects/${project.id}`} />
		{/each}
	</div>
</div>
