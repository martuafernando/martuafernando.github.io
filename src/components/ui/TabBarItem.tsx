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
			<Slot name="icon" />
			<span
				class={{
					"text-xs whitespace-nowrap transition-all duration-300": true,
					"opacity-100 w-auto": props.isActive,
					"opacity-0 w-0": !props.isActive,
				}}
			>
				{props.label}
			</span>
		</button>
	);
});
