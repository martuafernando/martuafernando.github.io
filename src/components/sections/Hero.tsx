import { component$ } from "@builder.io/qwik";
import { ArrowRight, ArrowUpRight, DownloadIcon } from "../ui/icons";
import { timeline } from "~/data/experiences";
import { hero, profile, trusted } from "~/data/site";
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
						<a
							class="btn btn-ghost"
							href={profile.cv.href}
							download={profile.cv.filename}
						>
							{t(ui.downloadCv, l)}
							<DownloadIcon />
						</a>
						<a class="tlink" href="#contact">
							{t(ui.orGetInTouch, l)}
							<ArrowUpRight />
						</a>
					</div>
				</div>
				<div class="hero-facts" data-enter="" style="--i:4">
					<p class="hero-proof">
						<span class="k">{t(ui.now, l)}</span>
						<span>
							{t(current.title, l)} · {current.org}
						</span>
					</p>
					<div class="hero-meta">
						{hero.stats.map((s) => (
							<div class="stat" key={t(s.label, "en")}>
								<b>{s.value}</b>
								<span>{t(s.label, l)}</span>
							</div>
						))}
					</div>
				</div>
				<div class="trusted" data-enter="" style="--i:5">
					<p class="trusted-label">{t(ui.workedWith, l)}</p>
					<div class="trusted-marquee">
						<div class="trusted-track">
							{[0, 1, 2, 3].map((copy) => (
								<ul
									class="trusted-row"
									key={copy}
									aria-hidden={copy > 0 ? "true" : undefined}
								>
									{trusted.map((org) => (
										<li key={org.name}>
											{org.logo ? (
												<img
													src={org.logo.src}
													alt={org.logo.alt}
													width={org.logo.width}
													height={org.logo.height}
													loading="lazy"
													decoding="async"
												/>
											) : (
												<span class="trusted-name">{org.name}</span>
											)}
										</li>
									))}
								</ul>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
});
