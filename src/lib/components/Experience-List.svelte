<script lang="ts">
	import type Experience from '$lib/models/Experience';
	import type { ClassValue } from 'svelte/elements';
	import ExperienceItem from './Experience-Item.svelte';

	const props: { class?: ClassValue; experience: Experience[] } = $props();
	const { experience } = props;
</script>

<div class={props.class}>
	{#each experience as exp}
		<ExperienceItem experience={exp} class="border-t first:border-none py-8" />
	{/each}
</div>
