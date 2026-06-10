import type { NavLink, SiteImage, Social, Stat, Value } from "~/domain/site";
import type { Localized } from "~/i18n";

export const profile = {
	name: "Martua Fernando",
	mark: "FS",
	email: "martuafernando@proton.me",
	location: "Indonesia",
};

export const navLinks: NavLink[] = [
	{ href: "#work", label: { en: "Work", id: "Karya" } },
	{ href: "#about", label: { en: "About", id: "Tentang" } },
	{ href: "#experience", label: { en: "Experience", id: "Pengalaman" } },
	{ href: "#contact", label: { en: "Contact", id: "Kontak" } },
];

export const socials: Social[] = [
	{ label: "GitHub", href: "https://github.com/martuafernando", icon: "github" },
	{
		label: "LinkedIn",
		href: "https://linkedin.com/in/martuafernando",
		icon: "linkedin",
	},
	{
		label: "Instagram",
		href: "https://instagram.com/martuafernando",
		icon: "instagram",
	},
];

export const skills: string[] = [
	"TypeScript",
	"Python",
	"Kotlin",
	"Odoo",
	"System Architecture",
	"FHIR / HL7",
	"PostgreSQL",
	"React",
	"Node.js",
];

export const hero = {
	status: {
		en: "Available for select work · Remote",
		id: "Tersedia untuk proyek pilihan · Remote",
	} satisfies Localized,
	headlineHtml: {
		en: 'I architect &amp; build<br />software that <span class="accent">holds up.</span>',
		id: 'Saya merancang &amp; membangun<br />perangkat lunak yang <span class="accent">andal.</span>',
	} satisfies Localized,
	lede: {
		en: "Martua Fernando — a software architect and fullstack engineer crafting reliable systems across healthcare, education, and enterprise. TypeScript, Python, Kotlin.",
		id: "Martua Fernando — arsitek perangkat lunak dan fullstack engineer yang membangun sistem andal di bidang kesehatan, pendidikan, dan enterprise. TypeScript, Python, Kotlin.",
	} satisfies Localized,
	stats: [
		{
			value: "3+",
			label: { en: "years shipping", id: "tahun berkarya" },
		},
		{
			value: "5",
			label: { en: "featured projects", id: "proyek unggulan" },
		},
		{
			value: "FHIR / HL7",
			label: { en: "standards-fluent", id: "fasih standar" },
		},
	] satisfies Stat[],
};

export const about = {
	photo: {
		src: "/images/placeholder.svg",
		alt: "Martua Fernando",
		width: 1000,
		height: 1200,
	} satisfies SiteImage,
	location: {
		en: "Bandung · Indonesia",
		id: "Bandung · Indonesia",
	} satisfies Localized,
	heading: {
		en: "Engineer first, but I sweat the details others skip.",
		id: "Engineer sejati, tapi saya cermat pada detail yang sering dilewatkan.",
	} satisfies Localized,
	paragraphs: [
		{
			en: "I'm Fernando — I design and build software end to end, from data models and APIs to the interface people actually touch. My work spans <strong>electronic health records</strong> built to the FHIR/HL7 standard, <strong>educational platforms</strong>, and <strong>enterprise systems</strong> on Odoo.",
			id: "Saya Fernando — saya merancang dan membangun perangkat lunak secara menyeluruh, dari model data dan API hingga antarmuka yang digunakan orang. Pekerjaan saya mencakup <strong>rekam medis elektronik</strong> sesuai standar FHIR/HL7, <strong>platform pendidikan</strong>, dan <strong>sistem enterprise</strong> di Odoo.",
		},
		{
			en: "I started in product design before moving into engineering, so I think in systems <em>and</em> in users. I care about code that's reviewable, architectures that won't surprise you at 3am, and interfaces that feel quiet and obvious.",
			id: "Saya memulai dari desain produk sebelum beralih ke engineering, jadi saya berpikir dalam sistem <em>dan</em> pengguna. Saya peduli pada kode yang mudah ditinjau, arsitektur yang tidak mengejutkan di jam 3 pagi, dan antarmuka yang terasa tenang dan jelas.",
		},
	] satisfies Localized[],
	values: [
		{
			k: "01",
			title: { en: "Reliability", id: "Keandalan" },
			body: {
				en: "Tested, observable systems that fail loudly and recover gracefully.",
				id: "Sistem teruji dan terpantau yang gagal dengan jelas dan pulih dengan baik.",
			},
		},
		{
			k: "02",
			title: { en: "Clarity", id: "Kejelasan" },
			body: {
				en: "Code and UI that the next person — including future me — can read.",
				id: "Kode dan UI yang bisa dibaca orang berikutnya — termasuk saya di masa depan.",
			},
		},
		{
			k: "03",
			title: { en: "Craft", id: "Ketelitian" },
			body: {
				en: "The last 10% of polish is where good becomes trusted.",
				id: "10% sentuhan akhir adalah saat 'baik' menjadi 'terpercaya'.",
			},
		},
	] satisfies Value[],
};
