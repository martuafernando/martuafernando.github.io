import { component$ } from "@builder.io/qwik";
import { type DocumentHead, Link } from "@builder.io/qwik-city";
import { ArrowLeft } from "~/components/ui/icons";
import { catatUangPrivacy as doc } from "~/data/catat-uang-privacy";
import { t, ui, useLang } from "~/i18n";

export default component$(() => {
	const lang = useLang();
	const l = lang.value;

	return (
		<>
			<section class="proj-hero">
				<div class="wrap">
					<Link class="back-link" href="/">
						<ArrowLeft /> {t(ui.backToHome, l)}
					</Link>
					<div class="proj-head">
						<div class="lead">
							<span class="eyebrow reveal">{t(doc.eyebrow, l)}</span>
							<h1 class="reveal" style="--d:60ms">
								{t(doc.title, l)}
							</h1>
							<p class="summary reveal" style="--d:120ms">
								{t(doc.summary, l)}
							</p>
						</div>
						<div class="side reveal" style="--d:160ms">
							<div class="fact">
								<span class="k">{t(ui.policyEffective, l)}</span>
								<span class="v">
									<time dateTime={doc.effectiveDate}>
										{t(doc.effectiveDateLabel, l)}
									</time>
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="section wrap">
				<div class="proj-body">
					<aside class="sticky-meta">
						<div class="meta-block">
							<span class="eyebrow">{t(ui.policyAtAGlance, l)}</span>
							<div style="display:flex;flex-direction:column;gap:1.1rem">
								{doc.facts.map((f) => (
									<div class="fact" key={t(f.label, "en")}>
										<span class="k">{t(f.label, l)}</span>
										<span class="v">{t(f.value, l)}</span>
									</div>
								))}
							</div>
						</div>
						<div class="meta-block">
							<span class="eyebrow">{t(ui.contact, l)}</span>
							<ul class="plain">
								<li>
									<a class="tlink" href={`mailto:${doc.contactEmail}`}>
										{doc.contactEmail}
									</a>
								</li>
							</ul>
						</div>
					</aside>

					<div class="prose">
						{doc.sections.map((seg) => (
							<div class="reveal" key={t(seg.segLabel, "en")}>
								<span class="seg-label">{t(seg.segLabel, l)}</span>
								<h2>{t(seg.heading, l)}</h2>
								{seg.paragraphs &&
									t(seg.paragraphs, l).map((para, i) => <p key={i}>{para}</p>)}
								{seg.checks && (
									<ul class="checks">
										{t(seg.checks, l).map((c) => (
											<li key={c}>{c}</li>
										))}
									</ul>
								)}
							</div>
						))}

						<div class="reveal">
							<span class="seg-label">{t(ui.contact, l)}</span>
							<h2>{t(ui.policyContactHeading, l)}</h2>
							<p>{t(ui.policyContactLede, l)}</p>
							<p>
								<a class="tlink" href={`mailto:${doc.contactEmail}`}>
									{doc.contactEmail}
								</a>
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
});

export const head: DocumentHead = {
	title: `Privacy Policy — ${doc.app}`,
	meta: [
		{
			name: "description",
			content:
				"Privacy policy for catat_uang, an offline personal finance app. All data stays on your device — no account, no server, no analytics, and no internet permission.",
		},
		{ name: "robots", content: "index, follow" },
	],
};
