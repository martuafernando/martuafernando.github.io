<script lang="ts">
	import { onMount } from "svelte";
	import FloatingBottomNavigationBar from '$lib/components/Floating-Bottom-Navigation-Bar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
	const { children } = $props();
	
	let isVisible = $state(true);
  let lastScrollY = 0;

	const handleScroll = () => {
    const currentScrollY = window.scrollY;
    isVisible = currentScrollY < lastScrollY || currentScrollY === 0;
    lastScrollY = currentScrollY;
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

{@render children()}
<Footer />
<FloatingBottomNavigationBar class="fixed left-4 right-4 max-w-96 mx-auto z-50 transition-all duration-300 ease-in {isVisible === false ? '-bottom-24' : 'bottom-4'}" />

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