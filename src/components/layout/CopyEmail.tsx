import { component$, useSignal } from "@builder.io/qwik";
import { t, ui, useLang } from "~/i18n";

/** One-click copy for the contact address, with a short confirmation. */
export const CopyEmail = component$<{ email: string }>(({ email }) => {
	const lang = useLang();
	const copied = useSignal(false);

	return (
		<button
			class="copy-btn"
			type="button"
			aria-live="polite"
			onClick$={async () => {
				let ok = false;
				try {
					await navigator.clipboard.writeText(email);
					ok = true;
				} catch {
					// Fallback for browsers that refuse the async clipboard API.
					const box = document.createElement("textarea");
					box.value = email;
					box.style.position = "fixed";
					box.style.opacity = "0";
					document.body.appendChild(box);
					box.select();
					ok = document.execCommand("copy");
					box.remove();
				}
				if (!ok) return;
				copied.value = true;
				setTimeout(() => {
					copied.value = false;
				}, 1800);
			}}
		>
			{t(copied.value ? ui.copied : ui.copyEmail, lang.value)}
		</button>
	);
});
