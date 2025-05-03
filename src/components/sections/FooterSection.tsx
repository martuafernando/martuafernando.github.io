import { type ClassList, component$ } from "@builder.io/qwik";
import SvgLogo from "~/media/logo-white.svg?jsx";
import {
	FaEnvelopeSolid,
	FaUpRightFromSquareSolid,
} from "@qwikest/icons/font-awesome";
import { Link } from "@builder.io/qwik-city";

export interface FooterSectionProps {
	class?: ClassList;
}

export const FooterSection = component$((props: FooterSectionProps) => {
	return (
		<footer class={["bg-black text-white py-16", props.class]}>
			<SvgLogo class="mx-auto" />
			<div class="mx-auto text-center flex flex-col justify-center sm:justify-between items-center flex-wrap gap-8 bg-black text-white rounded-xl my-12">
				<h2 class="text-4xl font-bold">Let's work together</h2>
				<div class="flex justify-center gap-8">
					<Link
						key="email"
						href="mailto:mailto:fernandosibarani45@gmail.com"
						class="flex items-center outline p-4 rounded-lg bg-black text-white"
					>
						<FaEnvelopeSolid />
						<span class="flex items-center ml-2 gap-1 hover-underline-animation after:bg-white">
							Email Me <FaUpRightFromSquareSolid />
						</span>
					</Link>
				</div>
			</div>
			<div class="flex flex-wrap justify-center gap-x-8 gap-y-2 w-fit mx-auto mt-8 text-xl">
				<Link
					href="https://linkedin.com/in/martuafernando"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center relative hover-underline-animation after:bg-white"
				>
					<span>LinkedIn</span>
					<FaUpRightFromSquareSolid class="ml-2" />
				</Link>
				<Link
					href="https://github.com/martuafernando"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center relative hover-underline-animation after:bg-white"
				>
					<span>GitHub</span>
					<FaUpRightFromSquareSolid class="ml-2" />
				</Link>
				<Link
					href="https://instagram.com/martuafernando"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center relative hover-underline-animation after:bg-white"
				>
					<span>Instagram</span>
					<FaUpRightFromSquareSolid class="ml-2" />
				</Link>
			</div>
			<p class="text-center mt-8">&copy; 2024 Martua Fernando</p>
		</footer>
	);
});
