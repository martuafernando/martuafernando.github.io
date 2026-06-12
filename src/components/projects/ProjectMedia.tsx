import { component$ } from "@builder.io/qwik";
import type { Project } from "~/domain/project";

interface ProjectMediaProps {
	project: Project;
}

/** A project's cover image (card thumbnail + detail cover). */
export const ProjectMedia = component$<ProjectMediaProps>(({ project }) => (
	<img
		src={project.cover.src}
		alt={project.cover.alt}
		width={project.cover.width}
		height={project.cover.height}
		loading="lazy"
		decoding="async"
	/>
));
