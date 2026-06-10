import { component$ } from "@builder.io/qwik";
import { PlaceholderArt } from "../ui/PlaceholderArt";
import { about, profile } from "~/data/site";

export const About = component$(() => {
	return (
		<section class="section" id="about">
			<div class="wrap about-grid">
				<div class="about-photo reveal">
					<div class="photo-frame" style={`background:${about.photoGradient}`}>
						<PlaceholderArt label={profile.mark} />
					</div>
					<div class="photo-tag">
						<span class="ring" /> {profile.location}
					</div>
				</div>
				<div class="about-body">
					<span class="eyebrow reveal">About</span>
					<h2 class="reveal" style="--d:60ms">
						{about.heading}
					</h2>
					{about.paragraphs.map((p, i) => (
						<p
							key={i}
							class="reveal"
							style={`--d:${120 + i * 60}ms`}
							// biome-ignore lint/security/noDangerouslySetInnerHtml: trusted static copy with inline emphasis
							dangerouslySetInnerHTML={p}
						/>
					))}
					<div class="values reveal" style="--d:240ms">
						{about.values.map((v) => (
							<div class="value" key={v.k}>
								<div class="vk">{v.k}</div>
								<h4>{v.title}</h4>
								<p>{v.body}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
});
