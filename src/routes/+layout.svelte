<script lang="ts">
	import FloatingBottomNavigationBar from '$lib/components/Floating-Bottom-Navigation-Bar.svelte';
	import '../app.css';
	const { children } = $props();
</script>

{@render children()}
<FloatingBottomNavigationBar class="fixed bottom-4 left-4 right-4 max-w-96 mx-auto" />