import {
	component$,
	Slot,
	useContextProvider,
	useSignal,
	useVisibleTask$,
} from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { SiteFooter, SiteHeader } from "~/components/layout";
import { useScrollEffects } from "~/hooks/useScrollEffects";
import { type Lang, LangContext } from "~/i18n";

export const onGet: RequestHandler = async ({ cacheControl }) => {
	cacheControl({
		staleWhileRevalidate: 60 * 60 * 24 * 7,
		maxAge: 5,
	});
};

export default component$(() => {
	useScrollEffects();

	// Reactive language, shared with every component via context. The visible
	// task syncs the initial value from the stored preference (the pre-paint
	// script in root.tsx has already set <html lang> to match).
	const lang = useSignal<Lang>("en");
	useContextProvider(LangContext, lang);

	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(() => {
		try {
			const stored = localStorage.getItem("fs-lang");
			if (stored === "id" || stored === "en") lang.value = stored;
		} catch {
			/* ignore storage failures */
		}
	});

	return (
		<>
			<SiteHeader />
			<main id="top">
				<Slot />
			</main>
			<SiteFooter />
		</>
	);
});
