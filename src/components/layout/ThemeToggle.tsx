import { $, component$ } from "@builder.io/qwik";
import { MoonIcon, SunIcon } from "../ui/icons";

/**
 * Theme toggle — flips the `data-theme` attribute on <html> and persists the
 * choice. Initial theme is set pre-paint by the inline script in root.tsx.
 */
export const ThemeToggle = component$(() => {
	const toggle = $(() => {
		const el = document.documentElement;
		const next = el.dataset.theme === "dark" ? "light" : "dark";
		el.dataset.theme = next;
		try {
			localStorage.setItem("fs-theme", next);
		} catch {
			/* ignore storage failures */
		}
	});

	return (
		<button
			class="theme-toggle"
			type="button"
			aria-label="Switch theme"
			onClick$={toggle}
		>
			<MoonIcon class="icon-moon" />
			<SunIcon class="icon-sun" />
		</button>
	);
});
