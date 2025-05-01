import { type ClassList, component$, type Signal } from "@builder.io/qwik";
import { Select as SelectUi } from "@qwik-ui/headless";
import { LuCheck, LuChevronDown } from "@qwikest/icons/lucide";

export interface SelectItem {
	label: string;
	value: string;
}

export interface SelectProps {
	class?: ClassList;
	items: Array<SelectItem> | string[];
	"bind:value"?: Signal<string>;
	value?: string;
}

export const Select = component$((props: SelectProps) => {
	return (
		<SelectUi.Root
			class={props.class}
			bind:value={props["bind:value"]}
			value={props.value}
		>
			<SelectUi.Trigger class="border border-gray-300 px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer">
				<SelectUi.DisplayValue placeholder="Select an option" />
				<LuChevronDown class="h-4 w-4 opacity-50 mt-0.5" />
			</SelectUi.Trigger>
			<SelectUi.Popover gutter={8} class="w-fit">
				{props.items.map((item) => {
					const value = typeof item === "string" ? item : item.value;
					const label = typeof item === "string" ? item : item.label;

					return (
						<SelectUi.Item key={value} value={value}>
							<SelectUi.ItemLabel>{label}</SelectUi.ItemLabel>
							<SelectUi.ItemIndicator>
								<LuCheck />
							</SelectUi.ItemIndicator>
						</SelectUi.Item>
					);
				})}
			</SelectUi.Popover>
		</SelectUi.Root>
	);
});
