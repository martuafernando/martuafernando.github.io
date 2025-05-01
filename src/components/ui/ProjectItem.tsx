import { type ClassList, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Project from "~/domains/Project";
import { ToolIcon } from "./TooliconGroup";

export interface ProjectItemProps {
	class?: ClassList;
	project: Project;
	href: string;
}

export const ProjectItem = component$((props: ProjectItemProps) => {
	const { project, href } = props;

	return (
		<Link href={href} class="block cursor-pointer group hover {props.class}">
			<div
				class="relative rounded-lg overflow-hidden"
				style="padding-top: 75%;"
			>
				<img
					class="absolute top-0 left-0 w-full h-full object-cover"
					src={project.desktopThumbnailUrl}
					width={project.desktopThumbnailWidth}
					height={project.desktopThumbnailHeight}
					alt={project.thumbnailAlt}
				/>
				<div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
			</div>

			<div class="flex justify-between items-center mt-2">
				<p class="text-start font-semibold">{project.title}</p>
				<div class="text-end flex gap-1 items-center">
					{project.tools.map((tool) => (
						<ToolIcon key={tool} tool={tool} class="w-8 h-8" />
					))}
				</div>
			</div>
		</Link>
	);
});
