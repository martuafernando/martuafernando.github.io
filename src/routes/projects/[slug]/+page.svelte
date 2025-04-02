<script>
	import ToolIcon from '$lib/components/Tool-Icon.svelte';
	import { breakpoint } from '$lib/constants/constant';

	const { data } = $props();
	const Component = data.content;
</script>

<div class="max-w-3xl mx-auto px-4">
	<section class="mt-12 lg:mt-20 flex items-center gap-4">
		<button
			aria-label="back"
			onclick={() => history.back()}
			class="bg-white w-12 h-12 p-2 flex-shrink-0 rounded-full cursor-pointer shadow-lg hover:bg-black hover:text-white transition-transform duration-300"
		>
			<span class="icon-[solar--arrow-left-broken] w-full h-full"></span>
		</button>
		<h1 class="text-3xl font-bold text-gray-900">{data?.title}</h1>
	</section>

	<div class="mt-6">
		<picture>
			<source
				media={`(min-width: ${breakpoint.sm}px)`}
				srcSet={data.desktopThumbnailUrl}
				width={data.desktopThumbnailWidth}
				height={data.desktopThumbnailHeight}
			/>
			<img
				class="w-full object-cover rounded-2xl shadow-lg"
				src={data.mobileThumbnailUrl}
				width={data.mobileThumbnailWidth}
				height={data.mobileThumbnailHeight}
				alt={data.thumbnailAlt}
			/>
		</picture>
	</div>

	<div class="flex flex-wrap justify-between">
		<div class="mt-6 flex flex-wrap gap-4 text-gray-600">
			<p><span class="font-semibold">Role:</span> {data.role}</p>
			<p><span class="font-semibold">Category:</span> {data.category}</p>
		</div>
		<div class="flex flex-wrap justify-end sm:justify-start gap-2 mt-4">
			{#each data.tools as tool}
				<div class="flex items-center gap-2 px-2 py-1 rounded-lg shadow-sm">
					<ToolIcon {tool} class="w-6 h-6 text-gray-700 hover:text-black" />
					<span class="text-gray-700 text-sm">{tool}</span>
				</div>
			{/each}
		</div>
	</div>

	<article
		class="mt-12 prose prose-headings:mt-16 prose-headings:text-black prose-headings:font-sans prose-h1:text-5xl prose-h2:text-3xl text-gray-700 text-xl leading-relaxed prose-img:mx-auto font-serif"
	>
		<Component />
	</article>
</div>
