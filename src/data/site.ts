import type { NavLink, SiteImage, Social, Stat, Value } from "~/domain/site";
import type { Localized } from "~/i18n";

export const profile = {
	name: "Martua Fernando",
	email: "martuafernando@proton.me",
	location: "Indonesia",
};

export const navLinks: NavLink[] = [
	{ href: "#work", label: { en: "Work", id: "Project" } },
	{ href: "#about", label: { en: "About", id: "Tentang" } },
	{ href: "#experience", label: { en: "Experience", id: "Pengalaman" } },
	{ href: "#contact", label: { en: "Contact", id: "Kontak" } },
];

export const socials: Social[] = [
	{
		label: "GitHub",
		href: "https://github.com/martuafernando",
		icon: "github",
	},
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
	"System Design",
	"Data Engineering",
	"Code Readability",
	"Software Reliability",
	"Software Architecture",
	"TypeScript",
	"Python",
	"PostgreSQL",
	"Oracle",
	"React",
	"Node.js",
	"Docker",
	"Podman",
	"Blockchain",
];

export const hero = {
	status: {
		en: "Open to software engineering opportunities",
		id: "Terbuka untuk opportunity software engineering",
	} satisfies Localized,

	headlineHtml: {
		en: 'Building software and <span class="accent">reliable systems.</span>',
		id: 'Membangun software dan<br /> <span class="accent">sistem yang andal.</span>',
	} satisfies Localized,

	lede: {
		en: "Software engineer focused on data, scalable apps, and systems that don't break.",
		id: "Software engineer yang fokus pada data, aplikasi skalabel, dan sistem yang andal.",
	} satisfies Localized,

	/** Floating cards around the hero portrait. */
	cards: [
		{
			label: { en: "Now", id: "Saat ini" },
			value: "Data Engineer · BNI",
		},
		{
			label: { en: "Focus", id: "Fokus" },
			value: "Systems · Data · Reliability",
		},
	] satisfies { label: Localized; value: string }[],

	stats: [
		{
			value: "3+",
			label: {
				en: "years experience",
				id: "tahun pengalaman",
			},
		},
		{
			value: "5+",
			label: {
				en: "projects delivered",
				id: "proyek diselesaikan",
			},
		},
	] satisfies Stat[],
};

export const about = {
	photo: {
		src: "/images/martuafernando.svg",
		alt: "Martua Fernando",
		width: 1000,
		height: 1200,
	} satisfies SiteImage,

	location: {
		en: "Indonesia",
		id: "Indonesia",
	} satisfies Localized,

	heading: {
		en: "Systems that stay simple as they grow.",
		id: "Sistem yang tetap sederhana saat tumbuh.",
	} satisfies Localized,

	paragraphs: [
		{
			en: "I'm Fernando — I build reliable systems end to end, from <strong>backend</strong> and <strong>data pipelines</strong> to enterprise software.",
			id: "Saya Fernando — membangun sistem andal end-to-end, dari <strong>backend</strong> dan <strong>pipeline data</strong> hingga software enterprise.",
		},
	] satisfies Localized[],

	values: [
		{
			k: "01",
			title: {
				en: "Reliability",
				id: "Keandalan",
			},
			body: {
				en: "Works the same, every time.",
				id: "Bekerja konsisten, setiap saat.",
			},
		},
		{
			k: "02",
			title: {
				en: "Clarity",
				id: "Kejelasan",
			},
			body: {
				en: "Simple design scales better.",
				id: "Desain sederhana lebih mudah tumbuh.",
			},
		},
		{
			k: "03",
			title: {
				en: "Continuous Learning",
				id: "Belajar Berkelanjutan",
			},
			body: {
				en: "Tech moves fast. Stay curious.",
				id: "Teknologi cepat berubah. Tetap penasaran.",
			},
		},
	] satisfies Value[],
};
