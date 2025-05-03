import {
	type ClassList,
	component$,
	type Signal,
} from "@builder.io/qwik";
import { Select as SelectUi } from "@qwik-ui/headless";
import { LuCheck, LuChevronDown } from "@qwikest/icons/lucide";

export type TPlacement = 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end';

export interface SelectItem {
	label: string;
	value: string;
}

export interface SelectProps {
	class?: ClassList;
	items: Array<SelectItem> | string[];
	"bind:value"?: Signal<string>;
	value?: string;
	placeholder?: string;
	floating?: TPlacement;
}

export const Select = component$((props: SelectProps) => {
	return (
		<SelectUi.Root
			class={["bg-white rounded-xl select", props.class]}
			bind:value={props["bind:value"]}
			value={props.value}
		>
			<SelectUi.Trigger class="min-h-[44px] flex justify-center items-center mt-0.5 py-1 px-4 cursor-pointer font-medium">
				<SelectUi.DisplayValue placeholder={props.placeholder} />
				<LuChevronDown class="h-4 w-4 opacity-50 mt-0.5" />
			</SelectUi.Trigger>
			<SelectUi.Popover class="w-fit !py-2 !px-1 rounded-xl shadow-2xl" floating={props.floating} gutter={8}>
				{props.items.map((item) => {
					const value = typeof item === "string" ? item : item.value;
					const label = typeof item === "string" ? item : item.label;

					return (
						<SelectUi.Item class="flex justify-between items-center gap-8 px-4 py-2 cursor-pointer rounded-md hover:bg-gray-200" key={value} value={value}>
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
