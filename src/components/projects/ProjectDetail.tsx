import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { ArrowLeft, ArrowRight, ArrowUpRight, GitHubIcon } from "../ui/icons";
import { Tag } from "../ui/Tag";
import { ProjectMedia } from "./ProjectMedia";
import type { Project } from "~/domain/project";
import { t, ui, useLang } from "~/i18n";

interface ProjectDetailProps {
	project: Project;
	prev: Project | null;
	next: Project | null;
}

export const ProjectDetail = component$<ProjectDetailProps>(
	({ project, prev, next }) => {
		const lang = useLang();
		const l = lang.value;

		return (
			<>
				<section class="proj-hero">
					<div class="wrap">
						<Link class="back-link" href="/#work">
							<ArrowLeft /> {t(ui.backToWork, l)}
						</Link>
						<div class="proj-head">
							<div class="lead">
								<span class="eyebrow reveal">{project.eyebrow}</span>
								<h1 class="reveal" style="--d:60ms">
									{project.detailTitle}
								</h1>
								<p class="summary reveal" style="--d:120ms">
									{t(project.summary, l)}
								</p>
							</div>
							<div class="side reveal" style="--d:160ms">
								<div class="fact-row">
									<div class="fact">
										<span class="k">{t(ui.year, l)}</span>
										<span class="v">{project.year}</span>
									</div>
									<div class="fact">
										<span class="k">{t(ui.role, l)}</span>
										<span class="v">{project.role}</span>
									</div>
								</div>
								<div class="fact-row">
									<div class="fact">
										<span class="k">{t(ui.engagement, l)}</span>
										<span class="v">{t(project.engagement, l)}</span>
									</div>
								</div>
								{project.concept && (
									<div class="fact">
										<span class="k" style="color:var(--accent)">
											{t(ui.note, l)}
										</span>
										<span
											class="v"
											style="font-weight:400;color:var(--text-muted);font-size:.9rem;"
										>
											{t(ui.conceptNote, l)}
										</span>
									</div>
								)}
								<div class="proj-actions">
									{project.links.live && (
										<a
											class="btn btn-primary"
											href={project.links.live}
											target="_blank"
											rel="noopener"
										>
											{t(ui.liveDemo, l)}
											<ArrowUpRight />
										</a>
									)}
									{project.links.source && (
										<a
											class="btn btn-ghost"
											href={project.links.source}
											target="_blank"
											rel="noopener"
										>
											<GitHubIcon /> {t(ui.source, l)}
										</a>
									)}
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="wrap proj-cover reveal">
					<div class="media">
						<ProjectMedia project={project} />
					</div>
				</section>

				<section class="section wrap">
					<div class="proj-body">
						<aside class="sticky-meta">
							<div class="meta-block">
								<span class="eyebrow">{t(ui.techStack, l)}</span>
								<div class="stack-chips">
									{project.stack.map((s) => (
										<Tag key={s}>{s}</Tag>
									))}
								</div>
							</div>
							<div class="meta-block">
								<span class="eyebrow">{t(ui.delivered, l)}</span>
								<ul>
									{t(project.delivered, l).map((d) => (
										<li key={d}>{d}</li>
									))}
								</ul>
							</div>
							{(project.links.live || project.links.source) && (
								<div class="meta-block">
									<span class="eyebrow">{t(ui.links, l)}</span>
									<ul class="plain" style="gap:.7rem">
										{project.links.live && (
											<li>
												<a
													class="tlink"
													href={project.links.live}
													target="_blank"
													rel="noopener"
												>
													{t(ui.liveDemo, l)}
												</a>
											</li>
										)}
										{project.links.source && (
											<li>
												<a
													class="tlink"
													href={project.links.source}
													target="_blank"
													rel="noopener"
												>
													{t(ui.sourceCode, l)}
												</a>
											</li>
										)}
									</ul>
								</div>
							)}
						</aside>

						<div class="prose">
							{project.caseStudy.map((seg) => (
								<div class="reveal" key={t(seg.segLabel, "en")}>
									<span class="seg-label">{t(seg.segLabel, l)}</span>
									<h2>{t(seg.heading, l)}</h2>
									{seg.impact && (
										<div class="impact-grid">
											{seg.impact.map((c) => (
												<div class="cell" key={t(c.label, "en")}>
													<b>{c.value}</b>
													<span>{t(c.label, l)}</span>
												</div>
											))}
										</div>
									)}
									{seg.checks && (
										<ul class="checks">
											{t(seg.checks, l).map((c) => (
												<li key={c}>{c}</li>
											))}
										</ul>
									)}
									{seg.paragraphs &&
										t(seg.paragraphs, l).map((para, i) => (
											<p key={i}>{para}</p>
										))}
								</div>
							))}
						</div>
					</div>

					{project.gallery && project.gallery.length > 0 && (
						<div class="gallery reveal">
							<span class="eyebrow">{t(ui.gallery, l)}</span>
							<div class="gallery-grid" style="margin-top:1.4rem">
								{project.gallery.map((shot, i) => (
									<div
										class="shot"
										style={{ "--ar": `${shot.width} / ${shot.height}` }}
										key={i}
									>
										<img
											src={shot.src}
											alt={shot.alt}
											width={shot.width}
											height={shot.height}
											loading="lazy"
											decoding="async"
										/>
									</div>
								))}
							</div>
						</div>
					)}
				</section>

				<nav class="proj-nav" aria-label="Project navigation">
					<div class="wrap">
						{prev ? (
							<Link class="prev" href={`/projects/${prev.slug}/`}>
								<span class="dir">
									<ArrowLeft /> {t(ui.previous, l)}
								</span>
								<span class="ttl">{prev.detailTitle}</span>
							</Link>
						) : (
							<a class="prev disabled" aria-disabled="true">
								<span class="dir">
									<ArrowLeft /> {t(ui.previous, l)}
								</span>
								<span class="ttl">—</span>
							</a>
						)}
						{next ? (
							<Link class="next" href={`/projects/${next.slug}/`}>
								<span class="dir">
									{t(ui.next, l)} <ArrowRight />
								</span>
								<span class="ttl">{next.detailTitle}</span>
							</Link>
						) : (
							<a class="next disabled" aria-disabled="true">
								<span class="dir">
									{t(ui.next, l)} <ArrowRight />
								</span>
								<span class="ttl">—</span>
							</a>
						)}
					</div>
				</nav>
			</>
		);
	},
);
