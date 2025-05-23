import { type ClassList, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type Project from "~/domains/Project";
import { ToolIcon } from "./ToolIcon";
import { Card } from "./basic";

export interface ProjectItemProps {
	class?: ClassList;
	project: Project;
	href: string;
}

export const ProjectItem = component$((props: ProjectItemProps) => {
	const { project, href } = props;

	return (
		<Link href={href}>
			<Card.Root class="border-none shadow-none">
				<Card.Image
					decoding="async"
					loading="lazy"
					src={project.desktopThumbnailUrl}
					width={project.desktopThumbnailWidth}
					height={project.desktopThumbnailHeight}
					alt={project.thumbnailAlt}
					class="transition rounded-md hover:brightness-50"
				/>
				<Card.Content class="flex justify-between items-center mt-2 p-0">
					<p class="text-start font-semibold text-black">{project.title}</p>
					<div class="text-end flex gap-1 items-center">
						{project.tools.map((tool) => (
							<ToolIcon key={tool} tool={tool} class="w-auto h-6" />
						))}
					</div>
				</Card.Content>
			</Card.Root>
			{/* <div
				class="relative rounded-lg overflow-hidden"
				style="padding-top: 75%;"
			>
				<img
					decoding="async"
					loading="lazy"
					class="absolute top-0 left-0 w-full h-full object-cover"
					src={project.desktopThumbnailUrl}
					width={project.desktopThumbnailWidth}
					height={project.desktopThumbnailHeight}
					alt={project.thumbnailAlt}
				/>
				<div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
			</div> */}
		</Link>
	);
});
