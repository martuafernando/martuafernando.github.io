<script>
	import ProjectList from "$lib/components/Project-List.svelte";

	export let data;
</script>

<h1 class="text-5xl font-bold text-center mt-8">Projects</h1>
<ProjectList projects={data.projects} class="mx-auto max-w-screen-2xl px-2 mt-12 mb-8" />