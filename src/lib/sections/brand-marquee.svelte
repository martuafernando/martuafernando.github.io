<script lang="ts">
	import type Experience from '$lib/models/Experience';
	import { onMount } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	const props: { class?: ClassValue; experience: Experience[] } = $props();
	const { experience } = props;

	let windowWidth = 0;
	let itemCount = $state(1);

	function updateItemCount() {
		const breakpoint = { sm: 640, md: 768, lg: 1024 };
		if (windowWidth >= breakpoint.lg) itemCount = 4;
		else if (windowWidth >= breakpoint.md) itemCount = 3;
		else if (windowWidth >= breakpoint.sm) itemCount = 2;
		else itemCount = 1;
	}

	function handleResize() {
		windowWidth = window.innerWidth;
		updateItemCount();
	}

	onMount(() => {
		windowWidth = window.innerWidth;
		updateItemCount();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});
</script>

<div class="{props.class}">
	<div
		class="flex will-change-transform animate-marquee"
		style="
			width: {(experience.length / itemCount) * 100}%;
			animation-duration: {experience.length}s;
		"
	>
		{#each experience as exp}
			<div class="flex-1">
				<img
					class="w-fit mx-auto h-12 block grayscale hover:grayscale-0 transition-all duration-300"
					width="48"
					height="48"
					src={exp.companyLogoHorizontalUrl}
					alt={`${exp.companyName} logo`}
				/>
			</div>
			<div class="flex-0 w-4"></div>
		{/each}
	</div>
</div>

<style>
	.animate-marquee {
		display: flex;
		will-change: transform;
		animation: marquee-scroll linear infinite;
	}

	@keyframes marquee-scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}
</style>
