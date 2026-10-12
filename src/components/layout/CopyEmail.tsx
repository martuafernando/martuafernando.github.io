import { component$, useSignal } from "@builder.io/qwik";
import { CheckIcon, CopyIcon } from "../ui/icons";
import { t, ui, useLang } from "~/i18n";

/**
 * One-click copy for the contact address. Icon-only: the accessible name is
 * constant, success is shown by the check icon + tooltip and announced through
 * a separate live region.
 */
export const CopyEmail = component$<{ email: string }>(({ email }) => {
	const lang = useLang();
	const copied = useSignal(false);

	return (
		<button
			class={["copy-btn", copied.value && "is-copied"]}
			type="button"
			aria-label={t(ui.copyEmail, lang.value)}
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
			<CopyIcon class="icon-copy" />
			<CheckIcon class="icon-check" />
			<span class="copy-tip" aria-hidden="true">
				{t(ui.copied, lang.value)}
			</span>
			<span class="visually-hidden" role="status">
				{copied.value ? t(ui.copied, lang.value) : ""}
			</span>
		</button>
	);
});
