import { type ClassList, component$, type JSXOutput } from "@builder.io/qwik";
import { FaJava } from "@qwikest/icons/font-awesome";
import CuOdoo from "~/media/brands/odoo_logo.svg?jsx"
import {
	SiPython,
	SiJavascript,
	SiTypescript,
	SiSvelte,
	SiRust,
	SiGo,
	SiCsharp,
	SiPhp,
	SiRuby,
	SiKotlin,
	SiDart,
} from "@qwikest/icons/simpleicons";

export interface ToolIconProps {
	class?: ClassList;
	tool: string;
}

export const ToolIcon = component$((props: ToolIconProps) => {
	const tool = props.tool.toLowerCase();

	const icons: Record<string, JSXOutput> = {
		python: <SiPython class="fill-[#3776AB]" />,
		odoo: <CuOdoo class="h-6" />,
		javascript: <SiJavascript class="fill-[#F7DF1E]" />,
		typescript: <SiTypescript class="fill-[#3178C6]" />,
		svelte: <SiSvelte class="fill-[#FF3E00]" />,
		rust: <SiRust class="fill-[#000000]" />,
		go: <SiGo class="fill-[#00ADD8]" />,
		java: <FaJava class="fill-[#007396]" />,
		csharp: <SiCsharp class="fill-[#239120]" />,
		php: <SiPhp class="fill-[#777BB4]" />,
		ruby: <SiRuby class="fill-[#CC342D]" />,
		kotlin: <SiKotlin class="fill-[#0095D5]" />,
		dart: <SiDart class="fill-[#0175C2]" />,
	};

	return icons[tool];
});
