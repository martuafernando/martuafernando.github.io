import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { ArrowUpRight } from "../icons";
import { projects } from "~/data/projects";

export const Work = component$(() => {
	const total = projects.length;

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
					{projects.map((p, i) => (
						<Link
							key={p.slug}
							href={`/projects/${p.slug}/`}
							class={["pcard reveal", p.wide && "card-wide"]}
							style={`--d:${i * 70}ms`}
							aria-label={`${p.title} case study`}
						>
							<div class="pcard-media">
								{p.thumbnail ? (
									<img
										src={p.thumbnail.src}
										alt={p.thumbnail.alt}
										width={1600}
										height={1000}
										loading="lazy"
										decoding="async"
									/>
								) : (
									<div class="ph" style={`background:${p.gradient}`}>
										<div class="ph-art">
											<div class="grid-lines" />
											<div class="label">{p.detailTitle}</div>
										</div>
									</div>
								)}
								<span class="pcard-index">
									{String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
								</span>
								<span class="pcard-arrow">
									<ArrowUpRight />
								</span>
							</div>
							<div class="pcard-body">
								<div class="top">
									<h3>{p.title}</h3>
									<span class="year">{p.year}</span>
								</div>
								<p class="summary">{p.cardSummary ?? p.summary}</p>
								<div class="tags">
									{p.tags.map((t) => (
										<span class="tag" key={t}>
											{t}
										</span>
									))}
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
});
