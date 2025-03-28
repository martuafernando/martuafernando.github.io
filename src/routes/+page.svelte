<script>
	import Footer from '$lib/components/Footer.svelte';
	import ProjectSlider from '$lib/components/Project-Slider.svelte';
	import BrandMarquee from '$lib/sections/brand-marquee.svelte';
	import HeroSection from '$lib/sections/hero-section.svelte';

	export let data;
</script>

<HeroSection class="w-full h-[calc(100vh-72px)] relative z-10 bg-background rounded-b-[64px] sm:rounded-b-[120px] snap-both" />
<BrandMarquee experience={[
	...data.experiences,
	...data.experiences,
	...data.experiences,
	...data.experiences,
]} class="w-full rounded-b-[64px] pt-40 pb-16 relative -top-24 sm:rounded-b-[120px] overflow-hidden bg-white"/>
<h2 class="font-bold text-5xl text-black text-center my-16">Selected Projects</h2>
<ProjectSlider class="snap-center" projects={data.projects} />
<Footer />

<style lang="postcss">
	@reference "tailwindcss";

	@theme {
		--color-background: oklch(98.26% 0.0095 299.24);
	}

	:global(html) {
		background-color: theme(--color-background);
		max-width: 100%;
		overflow-x: hidden;
		/* scroll-snap-type: y proximity; */
	}
</style>
