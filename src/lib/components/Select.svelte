<script lang="ts">
	import { writable } from 'svelte/store';

	export let items: string[] = [];
	export let className = '';
	export let onChange: (event: CustomEvent) => void;

	let selected = writable(items[0]);
	let isOpen = writable(false);

	function changeSelectedValue(selectedItem: string) {
		selected.set(selectedItem);
		if (onChange) {
			onChange(
				new CustomEvent('change', {
					detail: { value: selectedItem }
				})
			);
		}
		isOpen.set(false);
	}
</script>

<button
  aria-label="button"
	class="absolute cursor-default top-0 left-0 w-screen h-screen"
	on:click={() => isOpen.set(false)}
	class:hidden={!$isOpen}
></button>

<div class="relative w-fit {className}">
	<button
		class="flex items-center gap-4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-700 text-left focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-50 hover:shadow-md cursor-pointer"
		on:click={() => isOpen.set(!$isOpen)}
	>
		<p class="w-full">{$selected}</p>
		<span
			class="icon-[fa6-solid:chevron-down] transition-transform duration-300 will-change-transform"
			class:rotate-180={$isOpen}
		></span>
	</button>

	{#if $isOpen}
		<div
			class="absolute mt-2 px-2 py-4 w-max bg-white border border-gray-200 rounded-lg shadow-lg z-10"
		>
			{#each items as item}
				<button
					on:click={() => changeSelectedValue(item)}
					class="flex gap-8 items-center justify-between w-full text-start px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer rounded-lg"
					class:bg-blue-50={item === $selected}
				>
					{item}
					{#if item === $selected}
						<span class="icon-[fa6-solid:check" ></span>
					{/if}
				</button>
			{/each}
		</div>
	{/if}
</div>
