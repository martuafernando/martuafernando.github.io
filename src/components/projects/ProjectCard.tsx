import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { ArrowUpRight } from "../ui/icons";
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
				class="prow reveal"
				style={`--d:${index * 50}ms`}
				aria-label={`${project.title} case study`}
			>
				<span class="year">{project.year}</span>
				<div class="prow-main">
					<h3>{project.title}</h3>
					<p class="summary">
						{t(project.cardSummary ?? project.summary, lang.value)}
					</p>
					<div class="tags">
						{project.tags.slice(0, 3).map((tag) => (
							<Tag key={tag}>{tag}</Tag>
						))}
					</div>
				</div>
				<span class="prow-arrow">
					<ArrowUpRight />
				</span>
			</Link>
		);
	},
);
