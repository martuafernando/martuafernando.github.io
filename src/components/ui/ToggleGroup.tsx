import { type ClassList, component$, type Signal } from "@builder.io/qwik";
import { ToggleGroup as ToggleGroupUi } from "@qwik-ui/headless";

export interface ToggleItem {
	label: string;
	value: string;
}

export interface ToggleGroupProps {
	class?: ClassList;
	items: Array<ToggleItem> | string[];
	"bind:value"?: Signal<string>;
	value?: string;
}

export const ToggleGroup = component$((props: ToggleGroupProps) => {
	const items = props.items;

	return (
		<ToggleGroupUi.Root
			class={props.class}
			value={props.value}
			bind:value={props["bind:value"]}
		>
			{items.map((item) => {
				const value = typeof item === "string" ? item : item.value;
				const label = typeof item === "string" ? item : item.label;
				const isActive = value === props["bind:value"]?.value;

				return (
					<ToggleGroupUi.Item
						key={value}
						value={value}
						aria-label={label}
						class={`min-w-16 px-4 py-2 rounded-full cursor-pointer font-semibold ${isActive ? "bg-gray-200" : "bg-none"}`}
					>
						{label}
					</ToggleGroupUi.Item>
				);
			})}
		</ToggleGroupUi.Root>
	);
});
