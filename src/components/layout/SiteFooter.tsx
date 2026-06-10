import { component$ } from "@builder.io/qwik";
import { ArrowUpRight, socialIcons } from "../ui/icons";
import { profile, socials } from "~/data/site";

/** Contact footer — also the `#contact` scroll target for the nav. */
export const SiteFooter = component$(() => {
	return (
		<footer class="site-footer" id="contact">
			<div class="wrap">
				<div class="footer-top">
					<div class="footer-cta">
						<span class="eyebrow reveal">Contact</span>
						<h2 class="reveal" style="--d:60ms">
							Let's build something that lasts.
						</h2>
						<a
							class="footer-mail reveal"
							style="--d:120ms"
							href={`mailto:${profile.email}`}
						>
							<span class="u">{profile.email}</span>
							<ArrowUpRight />
						</a>
					</div>
					<div class="footer-social reveal" style="--d:160ms">
						<span class="eyebrow">Elsewhere</span>
						{socials.map((s) => {
							const Icon = socialIcons[s.icon];
							return (
								<a
									key={s.label}
									href={s.href}
									target="_blank"
									rel="noopener"
								>
									<Icon />
									{s.label}
								</a>
							);
						})}
					</div>
				</div>
				<div class="footer-bottom">
					<span>© 2026 Martua Fernando</span>
					<span>Designed &amp; built with care · Bandung, ID</span>
				</div>
			</div>
		</footer>
	);
});
