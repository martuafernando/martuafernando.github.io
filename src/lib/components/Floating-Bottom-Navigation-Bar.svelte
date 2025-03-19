<script>
	let activeTab = $state('home');
	const menus = [
		{ id: 'home', label: 'Home', icon: 'icon-[mdi--home]', value: '/' },
		{ id: 'projects', label: 'Projects', icon: 'icon-[mdi--folder]', value: '/' },
		{ id: 'about', label: 'About', icon: 'icon-[mdi--information]', value: '/' }
	];
</script>

<div
	class="fixed bottom-4 left-4 right-4 max-w-96 mx-auto flex items-center overflow-auto bg-black border-background shadow-lg rounded-full px-4 py-3 z-50"
>
	{#each menus as menu}
		<button
			class="flex items-center gap-1 px-4 py-2 rounded-full w-full"
			class:text-black="{activeTab === menu.id}"
			class:text-white="{activeTab !== menu.id}"
			class:bg-white="{activeTab === menu.id}"
			onclick={() => (activeTab = menu.id)}
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
