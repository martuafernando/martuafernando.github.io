import { component$ } from "@builder.io/qwik";
import { ArrowRight, ArrowUpRight } from "../icons";
import { hero, skills } from "~/data/site";

export const Hero = component$(() => {
	return (
		<section class="hero">
			<div class="hero-orb a" />
			<div class="hero-orb b" />
			<div class="wrap">
				<span class="hero-status" data-enter="" style="--i:0">
					<span class="dot" /> {hero.status}
				</span>
				<h1 data-enter="" style="--i:1">
					I architect &amp; build
					<br />
					software that <span class="accent">holds up.</span>
				</h1>
				<p class="hero-lede" data-enter="" style="--i:2">
					{hero.lede}
				</p>
				<div class="hero-cta" data-enter="" style="--i:3">
					<a class="btn btn-primary" href="#work">
						View Work
						<ArrowRight />
					</a>
					<a class="tlink" href="#contact">
						Or get in touch
						<ArrowUpRight />
					</a>
				</div>
				<div class="hero-meta" data-enter="" style="--i:4">
					{hero.stats.map((s) => (
						<div class="stat" key={s.label}>
							<b>{s.value}</b>
							<span>{s.label}</span>
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
