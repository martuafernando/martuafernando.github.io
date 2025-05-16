import { $, component$, Slot, useOnWindow, useSignal } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Header, TabBar } from "~/components/ui";
import { useDebouncer } from "~/hooks/useDebouncer";
import { FooterSection } from "~/components/sections/FooterSection";

export const onGet: RequestHandler = async ({ cacheControl }) => {
	// Control caching for this request for best performance and to reduce hosting costs:
	// https://qwik.dev/docs/caching/
	cacheControl({
		// Always serve a cached response by default, up to a week stale
		staleWhileRevalidate: 60 * 60 * 24 * 7,
		// Max once every 5 seconds, revalidate on the server to get a fresh version of this page
		maxAge: 5,
	});
};

export default component$(() => {
	const isScrollingDown = useSignal<boolean>(false);
	const isOnTop = useSignal<boolean>(true);
	// store last Y to get the direction
	// if current Y > lastScrollY the scroll go down
	const lastScrollY = useSignal<number>(0);

	useOnWindow(
		"scroll",
		useDebouncer(
			$(() => {
				const currentY = window.scrollY;
				isScrollingDown.value = currentY > lastScrollY.value;
				lastScrollY.value = currentY;
				isOnTop.value = currentY === 0;
			}),
			50,
		),
	);

	return (
		<>
			<Header
				class={[
					"fixed left-0 right-0 h-fit z-50 transition-all duration-300 ease-in-out",
					isOnTop.value ? "bg-none" : "bg-white",
					isScrollingDown.value ? "-top-24" : "top-0",
				]}
			/>
			<main class="min-h-screen">
				<Slot />
			</main>
			<FooterSection class="px-4 sm:px-0" />
			<TabBar
				class={[
					"fixed left-4 right-4 max-w-96 mx-auto z-50 transition-all duration-300 ease-in sm:hidden",
					isScrollingDown.value ? "-bottom-24" : "bottom-4",
				]}
			/>
		</>
	);
});
