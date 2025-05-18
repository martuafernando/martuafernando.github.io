import {
	type ClassList,
	component$,
	type Signal,
} from "@builder.io/qwik";
import { Select as SelectUi } from "~/components/ui/basic";
import { LuCheck } from "@qwikest/icons/lucide";

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
			class={props.class}
			bind:value={props["bind:value"]}
			value={props.value}
		>
			<SelectUi.Trigger>
				<SelectUi.DisplayValue placeholder={props.placeholder} />
			</SelectUi.Trigger>
			<SelectUi.Popover floating={props.floating} gutter={8}>
				{props.items.map((item) => {
					const value = typeof item === "string" ? item : item.value;
					const label = typeof item === "string" ? item : item.label;

					return (
						<SelectUi.Item key={value} value={value}>
							<SelectUi.ItemLabel>{label}</SelectUi.ItemLabel>
							<SelectUi.ItemIndicator>
								<LuCheck class="h-4 w-4" />
							</SelectUi.ItemIndicator>
						</SelectUi.Item>
					);
				})}
			</SelectUi.Popover>
		</SelectUi.Root>
	);
});
