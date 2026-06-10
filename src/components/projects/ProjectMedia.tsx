import { component$ } from "@builder.io/qwik";
import { PlaceholderArt } from "../ui/PlaceholderArt";
import type { Project } from "~/domain/project";

interface ProjectMediaProps {
	project: Project;
}

/** A project's real thumbnail, or a gradient placeholder when none exists. */
export const ProjectMedia = component$<ProjectMediaProps>(({ project }) => {
	if (project.thumbnail) {
		return (
			<img
				src={project.thumbnail.src}
				alt={project.thumbnail.alt}
				width={project.thumbnail.width}
				height={project.thumbnail.height}
				loading="lazy"
				decoding="async"
			/>
		);
	}
	return (
		<div class="ph" style={`background:${project.gradient}`}>
			<PlaceholderArt label={project.detailTitle} />
		</div>
	);
});
