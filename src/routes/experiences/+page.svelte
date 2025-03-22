<script>
	import ExperienceList from '$lib/components/Experience-List.svelte';

	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Learn to do the thing" />
</svelte:head>

<section class="mt-4 py-8 max-w-3xl mx-auto">
	<h2 class="text-5xl font-bold text-center">Experience</h2>
	<div class="mt-8">
		<ExperienceList experience={data.experiences} />
	</div>
</section>