import { component$ } from "@builder.io/qwik";
import { ArrowRight } from "../icons";
import { timeline } from "~/data/experiences";

export const Experience = component$(() => {
	return (
		<section class="section" id="experience">
			<div class="wrap xp-layout">
				<aside class="xp-aside reveal">
					<span class="eyebrow">Experience</span>
					<h2>
						A short
						<br />
						track record.
					</h2>
					<p>
						Three years across engineering, teaching, and design — building
						products and the people around them.
					</p>
					<div class="xp-actions">
						<a class="btn btn-primary" href="#contact">
							Get in touch
							<ArrowRight />
						</a>
					</div>
				</aside>

				<div class="timeline">
					{timeline.map((n, i) => (
						<div
							key={`${n.title}-${i}`}
							class={["tnode reveal", n.current && "is-current"]}
							style={`--d:${i * 70}ms`}
						>
							<div class="dot" />
							<div class="when">
								<span>{n.period}</span>
								{n.badge && <span class="badge">{n.badge}</span>}
							</div>
							<h3>{n.title}</h3>
							<div class="org">{n.org}</div>
							{n.subRoles && (
								<div class="sub-roles">
									{n.subRoles.map((s) => (
										<div class="sub" key={s.role}>
											<div class="r">{s.role}</div>
											<div class="meta">{s.meta}</div>
										</div>
									))}
								</div>
							)}
							{n.points && (
								<ul class="role-list">
									{n.points.map((pt) => (
										<li key={pt}>{pt}</li>
									))}
								</ul>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
});
