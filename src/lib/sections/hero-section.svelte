<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	const props: { class?: ClassValue } = $props();

	const socialLinks = [
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/martuafernando',
			icon: 'icon-[fa6-brands--linkedin]'
		},
		{
			name: 'GitHub',
			url: 'https://github.com/martuafernando',
			icon: 'icon-[fa6-brands--github]'
		},
		{
			name: 'Instagram',
			url: 'https://instagram.com/martuafernando',
			icon: 'icon-[fa6-brands--instagram]'
		}
	];
</script>

<section class="flex flex-col items-center justify-center {props.class}">
	<!-- Logo Image -->
	<img class="mx-auto" src="/logos/logo.svg" alt="Logo" width="96" height="96" />

	<!-- Name & Title -->
	<h2 class="mt-8 text-center text-5xl font-bold">Fernando Sibarani</h2>
	<p class="mt-4 text-center text-3xl text-black-400">Software Engineer</p>

	<!-- Social Links -->
	<div class="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 font-bold text-lg">
		{#each socialLinks as { name, url, icon }}
			<a href={url} class="flex items-center" target="_blank" rel="noopener noreferrer">
				<span class={`${icon} text-3xl`}></span>
				<span class="flex items-center ml-2 gap-1 hover-underline-black-animation">
					{name} <span class="icon-[lets-icons--external] text-sm"></span>
				</span>
			</a>
		{/each}
	</div>
</section>
