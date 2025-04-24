import { $, component$, Slot, useOnWindow, useSignal } from "@builder.io/qwik";
import _ from "lodash";
import type { RequestHandler } from "@builder.io/qwik-city";
import { TabBar } from "~/components/ui/TabBar";
import { useThrottle } from "~/hooks/useThrottle";

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
	const isVisible = useSignal<boolean>(true);

	// store last Y to get the direction
	// if current Y > lastScrollY the scroll go down
	const lastScrollY = useSignal<number>(0);

	useOnWindow(
		"scroll",
		useThrottle(
			$(() => {
				const currentY = window.scrollY;
				isVisible.value = currentY > lastScrollY.value || currentY === 0;
				lastScrollY.value = currentY;
			}),
			300,
		),
	);

	return (
		<>
			<Slot />
			<TabBar
				class={{
					"fixed left-4 right-4 max-w-96 mx-auto z-50 transition-all duration-300 ease-in": true,
					"bottom-4": isVisible.value,
					"-bottom-24": !isVisible.value,
				}}
			/>
		</>
	);
});
