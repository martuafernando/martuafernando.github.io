import { component$ } from "@builder.io/qwik";
import { ArrowRight, ArrowUpRight } from "../ui/icons";
import { timeline } from "~/data/experiences";
import { hero, skills } from "~/data/site";
import { t, ui, useLang } from "~/i18n";

export const Hero = component$(() => {
	const lang = useLang();
	const l = lang.value;
	const current = timeline[0];

	return (
		<section class="hero">
			<div class="wrap">
				<div class="hero-copy">
					<span class="hero-status" data-enter="" style="--i:0">
						<span class="dot" /> {t(hero.status, l)}
					</span>
					<h1
						data-enter=""
						style="--i:1"
						// biome-ignore lint/security/noDangerouslySetInnerHtml: trusted static copy with inline accent markup
						dangerouslySetInnerHTML={t(hero.headlineHtml, l)}
					/>
					<p class="hero-lede" data-enter="" style="--i:2">
						{t(hero.lede, l)}
					</p>
					<div class="hero-cta" data-enter="" style="--i:3">
						<a class="btn btn-primary" href="#work">
							{t(ui.viewWork, l)}
							<ArrowRight />
						</a>
						<a class="tlink" href="#contact">
							{t(ui.orGetInTouch, l)}
							<ArrowUpRight />
						</a>
					</div>
					<p class="hero-proof" data-enter="" style="--i:4">
						<span class="k">{t(ui.now, l)}</span>
						<span>
							{t(current.title, l)} · {current.org}
						</span>
					</p>
					<div class="hero-meta" data-enter="" style="--i:5">
						{hero.stats.map((s) => (
							<div class="stat" key={t(s.label, "en")}>
								<b>{s.value}</b>
								<span>{t(s.label, l)}</span>
							</div>
						))}
					</div>
				</div>
			</div>
			<div class="wrap">
				<ul class="skill-row" data-enter="" style="--i:6" aria-label="Skills">
					{skills.map((s) => (
						<li key={s}>{s}</li>
					))}
				</ul>
			</div>
		</section>
	);
});
