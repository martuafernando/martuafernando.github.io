import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type Project from "~/domains/Project";

export interface ProjectShowcaseProps {
	class?: string;
	projects: Project[];
}

export const ProjectShowcaseSection = component$(
	(props: ProjectShowcaseProps) => {
		const projects = [...props.projects, ...props.projects, ...props.projects];

		return (
			<div class={["relative w-full", props.class]}>
				<div class="flex items-center overflow-x-auto will-change-scroll horizontal-scrollbar scroll-smooth gap-12 p-4 snap-x snap-mandatory">
					{projects.map((project) => (
						<Link
							key={project.id}
							class="block flex-shrink-0 text-2xl font-bold snap-center"
							href={`/projects/${project.id}`}
						>
							<img
								width={project.desktopThumbnailWidth}
								height={project.desktopThumbnailHeight}
								alt={project.title}
								title={project.title}
								src={project.desktopThumbnailUrl}
								class={
									"max-w-screen sm:w-sm md:w-md lg:w-lg xl:w-xl rounded-2xl transition-all duration-500 will-change-transform object-cover"
								}
							/>
						</Link>
					))}
				</div>
			</div>
		);
	},
);
