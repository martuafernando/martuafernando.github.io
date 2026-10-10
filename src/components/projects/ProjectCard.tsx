import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { ArrowUpRight } from "../ui/icons";
import { ProjectMedia } from "./ProjectMedia";
import { Tag } from "../ui/Tag";
import type { Project } from "~/domain/project";
import { t, useLang } from "~/i18n";

interface ProjectCardProps {
	project: Project;
	index: number;
	total: number;
}

export const ProjectCard = component$<ProjectCardProps>(
	({ project, index }) => {
		const lang = useLang();
		return (
			<Link
				href={`/projects/${project.slug}/`}
				class="pcard reveal"
				style={`--d:${index * 80}ms`}
				aria-label={`${project.title} case study`}
			>
				<div class="pcard-media">
					<ProjectMedia project={project} />
				</div>
				<div class="pcard-body">
					<span class="year">{project.year}</span>
					<h3>
						{project.title}
						<ArrowUpRight />
					</h3>
					<p class="summary">
						{t(project.cardSummary ?? project.summary, lang.value)}
					</p>
					<div class="tags">
						{project.tags.slice(0, 3).map((tag) => (
							<Tag key={tag}>{tag}</Tag>
						))}
					</div>
				</div>
			</Link>
		);
	},
);
