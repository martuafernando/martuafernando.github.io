import { component$ } from "@builder.io/qwik";
import { ProjectCard } from "../projects";
import { getProjects } from "~/data/projects";
import { t, ui, useLang } from "~/i18n";

export const Work = component$(() => {
	const projects = getProjects();
	const lang = useLang();
	const l = lang.value;

	return (
		<section class="section" id="work">
			<div class="wrap">
				<div class="section-head reveal">
					<span class="eyebrow">{t(ui.selectedWork, l)}</span>
					<h2>{t(ui.workHeading, l)}</h2>
					<p class="lede">{t(ui.workLede, l)}</p>
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
