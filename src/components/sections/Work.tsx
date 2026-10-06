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
				<div class="work-grid">
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
						style={`--d:${projects.length * 70}ms`}
						href={socials[0].href}
						target="_blank"
						rel="noopener"
					>
						<span class="more-ico">
							<ArrowUpRight />
						</span>
						<h3>{t(ui.moreOnGithub, l)}</h3>
						<p>{t(ui.moreOnGithubSub, l)}</p>
					</a>
				</div>
			</div>
		</section>
	);
});
