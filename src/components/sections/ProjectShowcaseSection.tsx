import { component$ } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import type Project from "~/domains/Project";
import { Card } from "../ui/basic";
import { cn } from "@qwik-ui/utils";

export interface ProjectShowcaseProps {
	class?: string;
	projects: Project[];
}

export const ProjectShowcaseSection = component$(
	(props: ProjectShowcaseProps) => {
		const projects = props.projects;
		const nav = useNavigate();

		return (
			<div class={["w-full", props.class]}>
				<h2 class="text-center font-semibold text-5xl">Projects</h2>
				<div class="mt-12 flex items-center overflow-x-auto will-change-scroll horizontal-scrollbar scroll-smooth gap-4 sm:gap-12 p-0 sm:p-4 snap-x snap-mandatory">
					{projects.map((project) => (
						<Link
							tabIndex={0}
							onClick$={() => nav(`/projects/${project.id}`)}
							class={cn(
								"block flex-shrink-0 text-2xl font-bold snap-center border-none cursor-pointer",
								props.class,
							)}
							key={project.id}
						>
							<Card.Image
								decoding="async"
								loading="lazy"
								width={project.desktopThumbnailWidth}
								height={project.desktopThumbnailHeight}
								alt={project.title}
								title={project.title}
								src={project.desktopThumbnailUrl}
								class={
									"max-w-[80vw] sm:max-w-[70vw] sm:w-sm md:w-md lg:w-lg xl:w-xl transition-all rounded-2xl"
								}
							/>
						</Link>
					))}
				</div>
			</div>
		);
	},
);
