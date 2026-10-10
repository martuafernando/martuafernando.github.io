import { component$ } from "@builder.io/qwik";
import { ArrowUpRight } from "../ui/icons";
import { ProjectCard } from "../projects";
import { socials } from "~/data/site";
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
				<div class="work-list">
					{projects.map((project, i) => (
						<ProjectCard
							key={project.slug}
							project={project}
							index={i}
							total={projects.length}
						/>
					))}
					<a
						class="pcard pcard-more reveal"
						style={`--d:${projects.length * 80}ms`}
						href={socials[0].href}
						target="_blank"
						rel="noopener"
					>
						<div class="pcard-body">
							<h3>
								{t(ui.moreOnGithub, l)}
								<ArrowUpRight />
							</h3>
							<p class="summary">{t(ui.moreOnGithubSub, l)}</p>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
});
