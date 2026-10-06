import { createContextId, type Signal, useContext } from "@builder.io/qwik";

/** Supported interface languages. */
export type Lang = "en" | "id";

/** A value that has an English and an Indonesian variant. */
export type Localized<T = string> = { en: T; id: T };

/** Pick the active-language variant of a localized value. */
export const t = <T>(value: Localized<T>, lang: Lang): T => value[lang];

/**
 * Reactive language signal, provided once in the root layout and consumed by
 * components via {@link useLang}. Toggling it re-renders every subscriber, so
 * the whole UI switches language without a reload.
 */
export const LangContext = createContextId<Signal<Lang>>("app.lang");

export const useLang = (): Signal<Lang> => useContext(LangContext);

/**
 * Static interface copy that isn't part of the content data layer — button
 * labels, section eyebrows, and other chrome. Content (projects, experience,
 * profile) carries its own localized fields.
 */
export const ui = {
	// Header / nav
	getInTouch: { en: "Get in touch", id: "Yuk, ngobrol" },
	// Hero
	viewWork: { en: "View Work", id: "Lihat Proyek" },
	orGetInTouch: { en: "Or get in touch", id: "Atau langsung ngobrol aja" },
	// Work
	selectedWork: { en: "Selected Work", id: "Proyek Pilihan" },
	workHeading: {
		en: "Things I've built.",
		id: "Yang udah aku bikin.",
	},
	workLede: {
		en: "Tap a project for the case study.",
		id: "Ketuk proyek buat lihat studi kasusnya.",
	},
	moreOnGithub: { en: "More on GitHub", id: "Lainnya ada di GitHub" },
	moreOnGithubSub: {
		en: "Experiments & side projects",
		id: "Eksperimen & proyek sampingan",
	},
	// About
	about: { en: "About", id: "Tentang" },
	// Experience
	experience: { en: "Experience", id: "Pengalaman" },
	experienceHeadingHtml: {
		en: "Track<br />record.",
		id: "Rekam<br />jejak.",
	},
	experienceLede: {
		en: "Engineering, teaching, design.",
		id: "Ngoding, ngajar, desain.",
	},
	details: { en: "Details", id: "Detail" },
	// Project detail
	backToWork: { en: "Back to all work", id: "Balik ke semua proyek" },
	year: { en: "Year", id: "Tahun" },
	role: { en: "Role", id: "Peran" },
	engagement: { en: "Engagement", id: "Status kerja" },
	note: { en: "Note", id: "Catatan" },
	conceptNote: {
		en: "Concept project — a self-directed build.",
		id: "Proyek konsep — dikerjakan sendiri.",
	},
	techStack: { en: "Tech stack", id: "Teknologi yang dipakai" },
	delivered: { en: "Delivered", id: "Yang dikerjakan" },
	links: { en: "Links", id: "Tautan" },
	liveDemo: { en: "Live demo", id: "Coba demo" },
	source: { en: "Source", id: "Source code" },
	sourceCode: { en: "Source code", id: "Source code" },
	gallery: { en: "Gallery", id: "Galeri" },
	previous: { en: "Previous", id: "Sebelumnya" },
	next: { en: "Next", id: "Berikutnya" },
	// Legal / privacy policy
	backToHome: { en: "Back to home", id: "Kembali ke beranda" },
	policyEffective: { en: "Effective", id: "Berlaku sejak" },
	policyAtAGlance: { en: "At a glance", id: "Sekilas" },
	policyContactHeading: {
		en: "Questions about this policy?",
		id: "Ada pertanyaan tentang kebijakan ini?",
	},
	policyContactLede: {
		en: "Write to me and I'll answer directly — there's no support desk in between.",
		id: "Kirim pesan ke saya dan akan saya jawab langsung — tidak ada meja bantuan di antaranya.",
	},
	// Footer
	contact: { en: "Contact", id: "Kontak" },
	footerHeading: {
		en: "Let's build something that lasts.",
		id: "Yuk, bikin sesuatu yang awet.",
	},
	elsewhere: { en: "Elsewhere", id: "Tautan lain" },
	footerNote: {
		en: "Designed & built with care · Indonesia",
		id: "Dirancang & dibuat sepenuh hati · Indonesia",
	},
} satisfies Record<string, Localized>;
