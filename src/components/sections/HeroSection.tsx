import { component$ } from "@builder.io/qwik";
import type { ClassList } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import {
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaUpRightFromSquareSolid,
} from "@qwikest/icons/font-awesome";
import SvgLogo from "~/media/logo.svg?jsx";

export interface HeroProps {
	class?: ClassList;
}

/**
 * HeroSection component renders a hero section with a logo, heading, subtitle, and social links.
 *
 * @param {HeroProps} props - Component props.
 * @returns {JSX.Element} The hero section element.
 */
export const HeroSection = component$((props: HeroProps) => {
	return (
		<section class={["flex flex-col items-center justify-center", props.class]}>
			<SvgLogo width={96} height={96} />
			<h2 class="mt-8 text-center text-5xl font-bold">Fernando Sibarani</h2>
			<p class="mt-4 text-center text-3xl text-black-400">Software Engineer</p>
			<div class="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 font-bold text-lg">
				<Link
					key="linkedin"
					href="https://linkedin.com/in/martuafernando"
					class="flex items-center"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin height={36} />
					<span class="flex items-center ml-2 gap-1">
						LinkedIn <FaUpRightFromSquareSolid height={12} />
					</span>
				</Link>
				<Link
					href="https://github.com/martuafernando"
					class="flex items-center"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub height={36} />
					<span class="flex items-center ml-2 gap-1">
						GitHub <FaUpRightFromSquareSolid height={12} />
					</span>
				</Link>
				<Link
					href="https://instagram.com/martuafernando"
					class="flex items-center"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaInstagram height={36} />
					<span class="flex items-center ml-2 gap-1">
						Instagram <FaUpRightFromSquareSolid height={12} />
					</span>
				</Link>
			</div>
		</section>
	);
});
