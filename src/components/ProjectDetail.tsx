import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { ArrowLeft, ArrowRight, ArrowUpRight, GitHubIcon } from "./icons";
import type { Project } from "~/data/projects";

interface ProjectDetailProps {
	project: Project;
	prev: Project | null;
	next: Project | null;
}

const GALLERY_OPACITY = [0.77, 0.69, 0.61, 0.53];

export const ProjectDetail = component$<ProjectDetailProps>(
	({ project, prev, next }) => {
		return (
			<>
				<section class="proj-hero">
					<div class="wrap">
						<Link class="back-link" href="/#work">
							<ArrowLeft /> Back to all work
						</Link>
						<div class="proj-head">
							<div class="lead">
								<span class="eyebrow reveal">{project.eyebrow}</span>
								<h1 class="reveal" style="--d:60ms">
									{project.detailTitle}
								</h1>
								<p class="summary reveal" style="--d:120ms">
									{project.summary}
								</p>
							</div>
							<div class="side reveal" style="--d:160ms">
								<div class="fact-row">
									<div class="fact">
										<span class="k">Year</span>
										<span class="v">{project.year}</span>
									</div>
									<div class="fact">
										<span class="k">Role</span>
										<span class="v">{project.role}</span>
									</div>
								</div>
								<div class="fact-row">
									<div class="fact">
										<span class="k">Engagement</span>
										<span class="v">{project.engagement}</span>
									</div>
								</div>
								{project.concept && (
									<div class="fact">
										<span class="k" style="color:var(--accent)">
											Note
										</span>
										<span
											class="v"
											style="font-weight:400;color:var(--text-muted);font-size:.9rem;"
										>
											Concept project — a self-directed build.
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
											Live demo
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
											<GitHubIcon /> Source
										</a>
									)}
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="wrap proj-cover reveal">
					{project.thumbnail ? (
						<div class="media">
							<img
								src={project.thumbnail.src}
								alt={project.thumbnail.alt}
								width={1600}
								height={1000}
								decoding="async"
							/>
						</div>
					) : (
						<div class="media" style={`background:${project.gradient}`}>
							<div class="ph-art">
								<div class="grid-lines" />
								<div class="label">{project.detailTitle}</div>
							</div>
						</div>
					)}
				</section>

				<section class="section wrap">
					<div class="proj-body">
						<aside class="sticky-meta">
							<div class="meta-block">
								<span class="eyebrow">Tech stack</span>
								<div class="stack-chips">
									{project.stack.map((s) => (
										<span class="tag" key={s}>
											{s}
										</span>
									))}
								</div>
							</div>
							<div class="meta-block">
								<span class="eyebrow">Delivered</span>
								<ul>
									{project.delivered.map((d) => (
										<li key={d}>{d}</li>
									))}
								</ul>
							</div>
							{(project.links.live || project.links.source) && (
								<div class="meta-block">
									<span class="eyebrow">Links</span>
									<ul class="plain" style="gap:.7rem">
										{project.links.live && (
											<li>
												<a
													class="tlink"
													href={project.links.live}
													target="_blank"
													rel="noopener"
												>
													Live demo
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
													Source code
												</a>
											</li>
										)}
									</ul>
								</div>
							)}
						</aside>

						<div class="prose">
							{project.caseStudy.map((seg) => (
								<div class="reveal" key={seg.segLabel}>
									<span class="seg-label">{seg.segLabel}</span>
									<h2>{seg.heading}</h2>
									{seg.impact && (
										<div class="impact-grid">
											{seg.impact.map((c) => (
												<div class="cell" key={c.label}>
													<b>{c.value}</b>
													<span>{c.label}</span>
												</div>
											))}
										</div>
									)}
									{seg.checks && (
										<ul class="checks">
											{seg.checks.map((c) => (
												<li key={c}>{c}</li>
											))}
										</ul>
									)}
									{seg.paragraphs?.map((para, i) => (
										<p key={i}>{para}</p>
									))}
								</div>
							))}
						</div>
					</div>

					<div class="gallery reveal">
						<span class="eyebrow">Gallery</span>
						<div class="gallery-grid" style="margin-top:1.4rem">
							{GALLERY_OPACITY.map((op, i) => (
								<div class={["shot", i === 0 && "tall"]} key={i}>
									<div
										class="ph"
										style={`background:${project.gradient};opacity:${op}`}
									/>
								</div>
							))}
						</div>
					</div>
				</section>

				<nav class="proj-nav" aria-label="Project navigation">
					<div class="wrap">
						{prev ? (
							<Link class="prev" href={`/projects/${prev.slug}/`}>
								<span class="dir">
									<ArrowLeft /> Previous
								</span>
								<span class="ttl">{prev.detailTitle}</span>
							</Link>
						) : (
							<a class="prev disabled" aria-disabled="true">
								<span class="dir">
									<ArrowLeft /> Previous
								</span>
								<span class="ttl">—</span>
							</a>
						)}
						{next ? (
							<Link class="next" href={`/projects/${next.slug}/`}>
								<span class="dir">
									Next <ArrowRight />
								</span>
								<span class="ttl">{next.detailTitle}</span>
							</Link>
						) : (
							<a class="next disabled" aria-disabled="true">
								<span class="dir">
									Next <ArrowRight />
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
