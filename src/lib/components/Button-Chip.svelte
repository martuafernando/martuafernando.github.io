<script lang="ts">
	const { class: className, isActive, onclick, label } = $props();
</script>

<button
	class="cursor-pointer px-4 py-2 rounded-full transition-all duration-300 {isActive
		? 'bg-black text-white'
		: 'bg-gray-200'} {className}"
	{onclick}
>
	{label}
</button>
