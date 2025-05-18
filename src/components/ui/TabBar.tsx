import { component$, useComputed$ } from "@builder.io/qwik";
import type { ClassList } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import {
	FaHouseSolid,
	FaFolderSolid,
	FaSuitcaseSolid,
} from "@qwikest/icons/font-awesome";
import { TabBarItem } from "./TabBarItem";

export interface TabBarProps {
	class?: ClassList;
}

/**
 * A scrollable, rounded bottom tab bar component for main navigation.
 *
 * Intended to be placed near the bottom of the screen, usually in mobile or responsive layouts.
 *
 * @component
 * @param {TabBarProps} props The props for the TabBar component, such as additional CSS classes.
 * @returns {JSX.Element} The rendered TabBar component with navigation tabs.
 *
 * @example
 * ```tsx
 * <TabBar class="fixed bottom-0 left-4 right-4 max-w-96 mx-auto z-50 transition-all duration-300 ease-in" />
 * ```
 */
export const TabBar = component$((props: TabBarProps) => {
	const loc = useLocation();

	const currentPage = useComputed$(() => {
		const parts = loc.url.pathname.split("/").filter(Boolean);
		return `/${parts[0] ?? ""}`;
	});

	const activeTab = currentPage.value;

	const TABS = [
		{ id: "home", label: "Home", icon: FaHouseSolid, href: "/" },
		{
			id: "projects",
			label: "Projects",
			icon: FaFolderSolid,
			href: "/projects",
		},
		{
			id: "experiences",
			label: "Experiences",
			icon: FaSuitcaseSolid,
			href: "/experiences",
		},
	];

	return (
		<div
			class={[
				"flex gap-1 items-center overflow-auto bg-black border-background border-2 shadow-lg rounded-full px-4 py-3",
				props.class,
			]}
		>
			{TABS.map((tab) => {
				const Icon = tab.icon;
				const isActive = activeTab === tab.href;

				return (
					<TabBarItem
						key={tab.id}
						id={tab.id}
						label={tab.label}
						isActive={isActive}
						href={tab.href}
					>
						<Icon />
					</TabBarItem>
				);
			})}
		</div>
	);
});
