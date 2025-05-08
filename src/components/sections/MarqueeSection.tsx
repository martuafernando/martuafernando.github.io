import {
	$,
	type ClassList,
	component$,
	useComputed$,
	useOnWindow,
	useSignal,
	useVisibleTask$,
} from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import breakpoint from "~/constants/breakpoint";

export interface MarqueeSectionsProps {
	class?: ClassList;
	imageList: Array<{ source: string; alt: string }>;
}

export const MarqueeSection = component$((props: MarqueeSectionsProps) => {
	const itemCount = useSignal<number>();

	const getItemCount = $((width: number): number => {
		const itemCounts = {
			default: 1, // Mobile fallback
			sm: 2, // Small screens
			md: 3, // Medium screens
			lg: 4, // Large screens
		};

		if (width >= breakpoint.lg) return itemCounts.lg;
		if (width >= breakpoint.md) return itemCounts.md;
		if (width >= breakpoint.sm) return itemCounts.sm;
		return itemCounts.default;
	});

	const updateItemCount = $(async () => {
		itemCount.value = await getItemCount(window.innerWidth);
	});

	const loc = useLocation();

	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(({ track }) => {
		track(() => loc.url.pathname);

		updateItemCount();
	});

	useOnWindow("resize", updateItemCount);

	/**
	 * Returns an image list that:
	 *  - Is at least 8 items long
	 *  - Has an even number of items
	 *
	 * To achieve this, the original props.imageList is duplicated
	 * until both conditions are met.
	 */
	const imageList = useComputed$(() => {
		let imageList = props.imageList;

		// Duplicate until length ≥ 8 and even
		while (imageList.length < 8 || imageList.length % 2 !== 0) {
			imageList = [...imageList, ...imageList];
		}

		return imageList;
	});

	return (
		<section class={props.class}>
			<div
				class={["animate-marquee flex gap-4 will-change-transform"]}
				style={{
					width: `${(imageList.value.length / (itemCount.value ?? 1)) * 100}%`,
					animationDuration: `${imageList.value.length}s`,
				}}
			>
				{imageList.value.map((imagePath, index) => (
					<div class="flex-1" key={`${imagePath.alt}-${index}`}>
						<img
							alt={imagePath.alt}
							src={imagePath.source}
							class="w-fit mx-auto h-12 block grayscale hover:grayscale-0 transition-all duration-300"
							width={48}
							height={48}
						/>
					</div>
				))}
			</div>
		</section>
	);
});
