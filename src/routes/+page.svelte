<script>
	import FloatingBottomNavigationBar from '$lib/components/Floating-Bottom-Navigation-Bar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<slot />
<div class="h-screen"></div>
<FloatingBottomNavigationBar />
<!-- <Footer /> -->

<style lang="postcss">
	@reference "tailwindcss";

	@theme {
		--color-background: oklch(98.26% 0.0095 299.24);
	}
	:global(html) {
		background-color: theme(--color-background);
	}
</style>
