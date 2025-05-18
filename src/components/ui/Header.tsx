import { component$ } from "@builder.io/qwik";
import type { ClassList } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import SvgLogo from "~/media/logo.svg?jsx";
import { Navbar } from "./Navbar";
import { Breadcrumb } from "./Breadcrumb";
import { cn } from "@qwik-ui/utils";

export interface HeaderProps {
	class?: ClassList;
}

/**
 * A Header with Navbar
 *
 * @component
 * @param {HeaderProps} The props for the Header component, such as additional CSS classes.
 * @returns {JSX.Element} The rendered Header component with Navbar
 */
export const Header = component$((props: HeaderProps) => {
	return (
		<header class={cn("py-2 sm:py-4", props.class)}>
			<div class="flex flex-wrap sm:flex-nowrap gap-y-2 items-center justify-between mx-auto">
				<Link class="flex items-center text-xl" href="/">
					<SvgLogo class="h-auto w-7 pt-1" width={24} height={28} />
					<span class="font-semibold text-black">artuaFernando</span>
				</Link>
				<Navbar />
			</div>
			<Breadcrumb />
		</header>
	);
});
