import { component$ } from "@builder.io/qwik";
import type { ClassList } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import SvgLogo from "~/media/logo.svg?jsx";
import { Navbar } from "./Navbar";

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
		<header class={props.class}>
			<div class="flex items-center justify-between px-4 xl:px-0 mx-auto py-2 sm:py-4">
				<Link
					class="flex items-center text-xl hover-underline-animation"
					href="/"
				>
					<SvgLogo class="h-auto w-7 pt-1" width={24} height={28} />
					<span class="font-semibold">artuaFernando</span>
				</Link>
				<Navbar />
			</div>
		</header>
	);
});
