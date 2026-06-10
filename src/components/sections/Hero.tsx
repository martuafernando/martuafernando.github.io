import { component$ } from "@builder.io/qwik";
import { ArrowRight, ArrowUpRight } from "../ui/icons";
import { hero, skills } from "~/data/site";
import { t, ui, useLang } from "~/i18n";

export const Hero = component$(() => {
	const lang = useLang();
	const l = lang.value;

	return (
		<section class="hero">
			<div class="hero-orb a" />
			<div class="hero-orb b" />
			<div class="wrap">
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
				<div class="hero-meta" data-enter="" style="--i:4">
					{hero.stats.map((s) => (
						<div class="stat" key={t(s.label, "en")}>
							<b>{s.value}</b>
							<span>{t(s.label, l)}</span>
						</div>
					))}
				</div>
			</div>
			<div class="marquee" data-enter="" style="--i:5" aria-hidden="true">
				<div class="marquee-track">
					{[...skills, ...skills].map((s, i) => (
						<span key={`${s}-${i}`}>{s}</span>
					))}
				</div>
			</div>
		</section>
	);
});
