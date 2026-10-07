import { component$ } from "@builder.io/qwik";
import { CopyEmail } from "./CopyEmail";
import { ArrowUpRight, socialIcons } from "../ui/icons";
import { profile, socials } from "~/data/site";
import { t, ui, useLang } from "~/i18n";

/** Contact footer — also the `#contact` scroll target for the nav. */
export const SiteFooter = component$(() => {
	const lang = useLang();
	const l = lang.value;
	return (
		<footer class="site-footer" id="contact">
			<div class="wrap">
				<div class="footer-top">
					<div class="footer-cta">
						<span class="eyebrow reveal">{t(ui.contact, l)}</span>
						<h2 class="reveal" style="--d:60ms">
							{t(ui.footerHeading, l)}
						</h2>
						<div class="footer-mail-row reveal" style="--d:120ms">
							<a class="footer-mail" href={`mailto:${profile.email}`}>
								<span class="u">{profile.email}</span>
								<ArrowUpRight />
							</a>
							<CopyEmail email={profile.email} />
						</div>
					</div>
					<div class="footer-social reveal" style="--d:160ms">
						<span class="eyebrow">{t(ui.elsewhere, l)}</span>
						{socials.map((s) => {
							const Icon = socialIcons[s.icon];
							return (
								<a key={s.label} href={s.href} target="_blank" rel="noopener">
									<Icon />
									{s.label}
								</a>
							);
						})}
					</div>
				</div>
				<div class="footer-bottom">
					<span>© 2026 Martua Fernando</span>
					<span>{t(ui.footerNote, l)}</span>
				</div>
			</div>
		</footer>
	);
});
