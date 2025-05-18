import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

const LINKS = [
	{
		href: "/projects/",
		label: "Projects",
	},
	{
		href: "/experiences/",
		label: "Experiences",
	},
];

/**
 * A navbar that show navigation links
 *
 * @component
 * @returns {JSX.Element} The rendered Navbar component.
 */
export const Navbar = component$(() => {
	const loc = useLocation();
	const pathname = loc.url.pathname;

	return (
		<nav class="hidden sm:flex justify-center">
			<ul class="flex gap-8">
				{LINKS.map((link) => (
					<li key={link.href}>
						<Link
							class={{
								"hover-underline-animation font-bold text-primary": true,
								"after:scale-x-100": pathname === link.href,
							}}
							href={link.href}
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
});
