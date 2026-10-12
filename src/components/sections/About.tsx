import { component$ } from "@builder.io/qwik";
import { about } from "~/data/site";
import { t, ui, useLang } from "~/i18n";

export const About = component$(() => {
	const lang = useLang();
	const l = lang.value;

	return (
		<section class="section section-tint" id="about">
			<div class="wrap about-grid">
				<div class="about-photo reveal">
					<div class="photo-frame">
						<img
							src={about.photo.src}
							alt={about.photo.alt}
							width={about.photo.width}
							height={about.photo.height}
							loading="lazy"
							decoding="async"
						/>
					</div>
					<div class="photo-tag">
						<span class="ring" /> {t(about.location, l)}
					</div>
				</div>
				<div class="about-body">
					<span class="eyebrow reveal">{t(ui.about, l)}</span>
					<h2 class="reveal" style="--d:60ms">
						{t(about.heading, l)}
					</h2>
					{about.paragraphs.map((p, i) => (
						<p
							key={i}
							class="reveal"
							style={`--d:${120 + i * 60}ms`}
							// biome-ignore lint/security/noDangerouslySetInnerHtml: trusted static copy with inline emphasis
							dangerouslySetInnerHTML={t(p, l)}
						/>
					))}
					<p class="about-stack reveal" style="--d:240ms">
						<span>{t(about.stackLabel, l)}</span> {about.stack.join(", ")}
					</p>
					<p class="values-label reveal" style="--d:280ms">
						{t(about.focusLabel, l)}
					</p>
					<div class="values reveal" style="--d:300ms">
						{about.focus.map((v) => (
							<div class="value" key={v.k}>
								<div class="vk">{v.k}</div>
								<h4>{t(v.title, l)}</h4>
								<p>{t(v.body, l)}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
});
