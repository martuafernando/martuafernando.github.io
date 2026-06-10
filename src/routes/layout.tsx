import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { SiteFooter, SiteHeader } from "~/components/layout";
import { useScrollEffects } from "~/hooks/useScrollEffects";

export const onGet: RequestHandler = async ({ cacheControl }) => {
	cacheControl({
		staleWhileRevalidate: 60 * 60 * 24 * 7,
		maxAge: 5,
	});
};

export default component$(() => {
	useScrollEffects();

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
