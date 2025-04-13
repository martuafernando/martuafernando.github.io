<script lang="ts">
	const { class: className, isActive, onclick, label } = $props();
</script>

<button
	class="cursor-pointer px-4 py-2 rounded-full transition-all duration-300 {className}"
	class:bg-black={isActive}
	class:bg-gray-200={!isActive}
	class:font-medium={isActive}
	class:text-white={isActive}
	{onclick}
>
	{label}
</button>
