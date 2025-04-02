<script lang="ts">
	import { goto } from '$app/navigation';
	import type { ClassValue } from 'svelte/elements';

	let activeTab = $state('home');

	const props: { class?: ClassValue } = $props();
	const menus = [
		{ id: 'home', label: 'Home', icon: 'icon-[mdi--home]', value: '/' },
		{ id: 'projects', label: 'Projects', icon: 'icon-[mdi--folder]', value: '/projects' },
		{ id: 'experiences', label: 'Experiences', icon: 'icon-[mingcute--suitcase-fill]', value: '/experiences' }
	];
</script>

<div
	class="flex items-center overflow-auto bg-black border-background border-2 shadow-lg rounded-full px-4 py-3 {props.class}"
>
	{#each menus as menu}
		<button
			class="flex items-center gap-1 px-4 py-2 rounded-full w-full cursor-pointer"
			class:text-black={activeTab === menu.id}
			class:text-white={activeTab !== menu.id}
			class:bg-white={activeTab === menu.id}
			onclick={() => {
				activeTab = menu.id;
				goto(menu.value);
			}}
		>
			<span class="{menu.icon} text-2xl"></span>
			<span
				class="text-xs text-nowrap"
				class:opacity-100={activeTab === menu.id}
				class:opacity-0={activeTab !== menu.id}
				class:w-auto={activeTab === menu.id}
				class:w-0={activeTab !== menu.id}
			>
				{menu.label}
			</span>
		</button>
	{/each}
</div>
