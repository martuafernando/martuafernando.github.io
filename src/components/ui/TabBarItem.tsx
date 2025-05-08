import { component$, Slot } from "@builder.io/qwik";
import type { ClassList } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

export interface TabBarItemProps {
	class?: ClassList;
	id: string;
	label: string;
	isActive: boolean;
	href: string;
}

/**
 * A single item inside the `TabBar` component.
 *
 * @component
 * @param {TabBarItemProps} props - Props for the TabBarItem component.
 * @returns {JSX.Element} Rendered TabBar item as a button.
 */
export const TabBarItem = component$((props: TabBarItemProps) => {
	const nav = useNavigate();
	return (
		<button
			type="button"
			key={props.id}
			class={{
				"flex items-center gap-1 px-4 py-2 rounded-full w-full cursor-pointer": true,
				"text-black bg-white": props.isActive,
				"text-white": !props.isActive,
			}}
			onClick$={() => nav(props.href)}
		>
			<Slot />
			<span
				class={{
					"text-xs whitespace-nowrap transition-all duration-300": true,
				}}
			>
				{props.label}
			</span>
		</button>
	);
});
