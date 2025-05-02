import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

/**
 * A navbar that show navigation links
 *
 * @component
 * @returns {JSX.Element} The rendered Navbar component.
 */
export const Navbar = component$(() => {
	const loc = useLocation();
	const pathname = loc.url.pathname;
	const links = [
		{
			href: "/projects",
			label: "Projects",
		},
		{
			href: "/experiences",
			label: "Experiences",
		},
	];

	return (
		<nav class="hidden sm:flex justify-center">
			<ul class="flex gap-8">
				{links.map((link) => (
					<li key={link.href}>
						<Link
							class={{
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
