import { component$ } from "@builder.io/qwik";
import type { ClassList } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import {
	FaUpRightFromSquareSolid,
} from "@qwikest/icons/font-awesome";
import { SiGithub, SiInstagram, SiLinkedin } from "@qwikest/icons/simpleicons";
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
					class="flex items-center text-[#0a66c2]"
					target="_blank"
					rel="noopener noreferrer"
				>
					<SiLinkedin height={48} class="h-8 w-auto" />
					<span class="flex items-center ml-2 gap-1 hover-underline-animation after:bg-[#0a66c2]">
						LinkedIn <FaUpRightFromSquareSolid height={12} />
					</span>
				</Link>
				<Link
					href="https://github.com/martuafernando"
					class="flex items-center text-[#181717]"
					target="_blank"
					rel="noopener noreferrer"
				>
					<SiGithub height={48} class="h-8 w-auto" />
					<span class="flex items-center ml-2 gap-1 hover-underline-animation after:bg-[#181717]">
						GitHub <FaUpRightFromSquareSolid height={12} />
					</span>
				</Link>
				<Link
					href="https://instagram.com/martuafernando"
					class="flex items-center text-[#FF0069]"
					target="_blank"
					rel="noopener noreferrer"
				>
					<SiInstagram height={48} class="h-8 w-auto" />
					<span class="flex items-center ml-2 gap-1 hover-underline-animation after:bg-[#FF0069]">
						Instagram <FaUpRightFromSquareSolid height={12} />
					</span>
				</Link>
			</div>
		</section>
	);
});
