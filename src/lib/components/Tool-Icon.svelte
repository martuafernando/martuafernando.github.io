<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	const props: { class?: ClassValue; tool: string } = $props();
	const tool = props.tool.toLowerCase();

	const icons: Record<string, string> = {
		python: 'icon-[material-icon-theme--python]',
		odoo: 'icon-[simple-icons--odoo]',
		javascript: 'icon-[material-icon-theme--javascript]',
		typescript: 'icon-[material-icon-theme--typescript]',
		svelte: 'icon-[material-icon-theme--svelte]',
		rust: 'icon-[material-icon-theme--rust]',
		go: 'icon-[material-icon-theme--go]',
		java: 'icon-[material-icon-theme--java]',
		csharp: 'icon-[material-icon-theme--csharp]',
		php: 'icon-[material-icon-theme--php]',
		ruby: 'icon-[material-icon-theme--ruby]',
		kotlin: 'icon-[material-icon-theme--kotlin]',
		dart: 'icon-[material-icon-theme--dart]'
	};

	const iconClass = icons[tool] ?? '';
</script>

<span class="{iconClass} {props.class}"></span>
