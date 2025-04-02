<script lang="ts">
	import FloatingBottomNavigationBar from '$lib/components/Floating-Bottom-Navigation-Bar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
	const { children } = $props();
</script>

{@render children()}
<Footer />
<FloatingBottomNavigationBar class="fixed bottom-4 left-4 right-4 max-w-96 mx-auto z-50" />

<style lang="postcss">
	@reference "tailwindcss";

	@theme {
		--color-background: oklch(98.26% 0.0095 299.24);
	}

	:global(html) {
		background-color: theme(--color-background);
		max-width: 100%;
		overflow-x: hidden;
		scroll-snap-type: y proximity;
	}
</style>