import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { ArrowUpRight } from "../ui/icons";
import { Tag } from "../ui/Tag";
import { ProjectMedia } from "./ProjectMedia";
import type { Project } from "~/domain/project";

interface ProjectCardProps {
	project: Project;
	index: number;
	total: number;
}

const pad = (n: number) => String(n).padStart(2, "0");

export const ProjectCard = component$<ProjectCardProps>(
	({ project, index, total }) => {
		return (
			<Link
				href={`/projects/${project.slug}/`}
				class={["pcard reveal", project.wide && "card-wide"]}
				style={`--d:${index * 70}ms`}
				aria-label={`${project.title} case study`}
			>
				<div class="pcard-media">
					<ProjectMedia project={project} />
					<span class="pcard-index">
						{pad(index + 1)} / {pad(total)}
					</span>
					<span class="pcard-arrow">
						<ArrowUpRight />
					</span>
				</div>
				<div class="pcard-body">
					<div class="top">
						<h3>{project.title}</h3>
						<span class="year">{project.year}</span>
					</div>
					<p class="summary">{project.cardSummary ?? project.summary}</p>
					<div class="tags">
						{project.tags.map((t) => (
							<Tag key={t}>{t}</Tag>
						))}
					</div>
				</div>
			</Link>
		);
	},
);
