import { type ClassList, component$, type JSXOutput } from "@builder.io/qwik";
import { FaJava } from "@qwikest/icons/font-awesome";
import CuOdoo from "~/media/brands/odoo_logo.svg?jsx";
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
	SiHtml5,
	SiCss3,
} from "@qwikest/icons/simpleicons";

export interface ToolIconProps {
	class?: ClassList;
	tool: string;
}

export const ToolIcon = component$((props: ToolIconProps) => {
	const tool = props.tool.toLowerCase();

	const icons: Record<string, JSXOutput> = {
		python: <SiPython class={[props.class, "fill-[#3776AB]"]} />,
		odoo: <CuOdoo class={[props.class, "h-6"]} />,
		javascript: <SiJavascript class={[props.class, "fill-[#F7DF1E]"]} />,
		typescript: <SiTypescript class={[props.class, "fill-[#3178C6]"]} />,
		svelte: <SiSvelte class={[props.class, "fill-[#FF3E00]"]} />,
		rust: <SiRust class={[props.class, "fill-[#000000]"]} />,
		go: <SiGo class={[props.class, "fill-[#00ADD8]"]} />,
		java: <FaJava class={[props.class, "fill-[#007396]"]} />,
		csharp: <SiCsharp class={[props.class, "fill-[#239120]"]} />,
		php: <SiPhp class={[props.class, "fill-[#777BB4]"]} />,
		ruby: <SiRuby class={[props.class, "fill-[#CC342D]"]} />,
		kotlin: <SiKotlin class={[props.class, "fill-[#0095D5]"]} />,
		dart: <SiDart class={[props.class, "fill-[#0175C2]"]} />,
		html: <SiHtml5 class={[props.class, "fill-[#E34F26]"]} />,
		css: <SiCss3 class={[props.class, "fill-[#663399]"]} />,
	};

	return icons[tool];
});
