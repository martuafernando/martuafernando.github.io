import { component$ } from "@builder.io/qwik";
import { ArrowRight } from "../ui/icons";
import { timeline } from "~/data/experiences";
import { t, ui, useLang } from "~/i18n";

export const Experience = component$(() => {
	const lang = useLang();
	const l = lang.value;

	return (
		<section class="section" id="experience">
			<div class="wrap xp-layout">
				<aside class="xp-aside reveal">
					<span class="eyebrow">{t(ui.experience, l)}</span>
					<h2
						// biome-ignore lint/security/noDangerouslySetInnerHtml: trusted static copy with inline line break
						dangerouslySetInnerHTML={t(ui.experienceHeadingHtml, l)}
					/>
					<p>{t(ui.experienceLede, l)}</p>
					<div class="xp-actions">
						<a class="btn btn-primary" href="#contact">
							{t(ui.getInTouch, l)}
							<ArrowRight />
						</a>
					</div>
				</aside>

				<div class="timeline">
					{timeline.map((n, i) => (
						<div
							key={`${t(n.title, "en")}-${i}`}
							class={["tnode reveal", n.current && "is-current"]}
							style={`--d:${i * 70}ms`}
						>
							<div class="dot" />
							<div class="when">
								<span>{n.period}</span>
								{n.badge && <span class="badge">{t(n.badge, l)}</span>}
							</div>
							<h3>{t(n.title, l)}</h3>
							<div class="org">{n.org}</div>
							{n.points && <p class="xp-line">{t(n.points, l)[0]}</p>}
							{(n.subRoles || (n.points && n.points.en.length > 1)) && (
								<details class="xp-more">
									<summary>{t(ui.details, l)}</summary>
									{n.subRoles && (
										<div class="sub-roles">
											{n.subRoles.map((s) => (
												<div class="sub" key={t(s.role, "en")}>
													<div class="r">{t(s.role, l)}</div>
													<div class="meta">{s.meta}</div>
												</div>
											))}
										</div>
									)}
									{n.points && t(n.points, l).length > 1 && (
										<ul class="role-list">
											{t(n.points, l)
												.slice(1)
												.map((pt) => (
													<li key={pt}>{pt}</li>
												))}
										</ul>
									)}
								</details>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
});
