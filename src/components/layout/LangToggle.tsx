import { $, component$ } from "@builder.io/qwik";
import { useLang } from "~/i18n";

/**
 * Language toggle — flips the reactive `lang` signal between EN and ID, mirrors
 * it onto `<html lang>` (which drives the active-pill CSS), and persists the
 * choice. The pre-paint script in root.tsx restores it before first paint.
 */
export const LangToggle = component$(() => {
	const lang = useLang();

	const toggle = $(() => {
		const next = lang.value === "id" ? "en" : "id";
		lang.value = next;
		document.documentElement.lang = next;
		try {
			localStorage.setItem("fs-lang", next);
		} catch {
			/* ignore storage failures */
		}
	});

	return (
		<button
			class="lang-toggle"
			type="button"
			aria-label={
				lang.value === "en"
					? "Ganti ke Bahasa Indonesia"
					: "Switch to English"
			}
			onClick$={toggle}
		>
			<span class="l-en">EN</span>
			<span class="l-id">ID</span>
		</button>
	);
});
