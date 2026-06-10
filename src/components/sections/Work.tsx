import { component$ } from "@builder.io/qwik";
import { ProjectCard } from "../projects";
import { getProjects } from "~/data/projects";

export const Work = component$(() => {
	const projects = getProjects();

	return (
		<section class="section" id="work">
			<div class="wrap">
				<div class="section-head reveal">
					<span class="eyebrow">Selected Work</span>
					<h2>Projects I've designed, built, and shipped.</h2>
					<p class="lede">
						A mix of production systems and personal builds. Each one has its own
						story — open any project for the full case study.
					</p>
				</div>
				<div class="work-grid">
					{projects.map((project, i) => (
						<ProjectCard
							key={project.slug}
							project={project}
							index={i}
							total={projects.length}
						/>
					))}
				</div>
			</div>
		</section>
	);
});
