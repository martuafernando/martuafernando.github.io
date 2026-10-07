import type { NavLink, SiteImage, Social, Stat, Value } from "~/domain/site";
import type { Localized } from "~/i18n";

export const profile = {
	name: "Martua Fernando",
	email: "martuafernando@proton.me",
	location: "Indonesia",
};

export const navLinks: NavLink[] = [
	{ href: "#work", label: { en: "Work", id: "Proyek" } },
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
		id: "Lagi terbuka buat peluang di software engineering",
	} satisfies Localized,

	headlineHtml: {
		en: 'Building software and <span class="accent">reliable systems.</span>',
		id: 'Bikin software dan<br /> <span class="accent">sistem yang bisa diandalkan.</span>',
	} satisfies Localized,

	lede: {
		en: "Software engineer focused on data, scalable apps, and systems that don't break.",
		id: "Software engineer yang fokus di data, aplikasi yang scalable, dan sistem yang nggak gampang down.",
	} satisfies Localized,

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
				id: "proyek selesai",
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
		id: "Sistem yang tetap simpel walau makin besar.",
	} satisfies Localized,

	paragraphs: [
		{
			en: "I'm Fernando — I build reliable systems end to end, from <strong>backend</strong> and <strong>data pipelines</strong> to enterprise software.",
			id: "Fernando — membangun sistem andal secara end-to-end, mulai dari <strong>backend</strong> dan <strong>data pipeline</strong> sampai software enterprise.",
		},
	] satisfies Localized[],

	values: [
		{
			k: "01",
			title: {
				en: "Reliability",
				id: "Bisa Diandalkan",
			},
			body: {
				en: "Works the same, every time.",
				id: "Hasilnya konsisten, setiap saat.",
			},
		},
		{
			k: "02",
			title: {
				en: "Clarity",
				id: "Jelas",
			},
			body: {
				en: "Simple design scales better.",
				id: "Desain yang simpel lebih gampang dikembangkan.",
			},
		},
		{
			k: "03",
			title: {
				en: "Continuous Learning",
				id: "Terus Belajar",
			},
			body: {
				en: "Tech moves fast. Stay curious.",
				id: "Teknologi cepat berubah. Tetap penasaran.",
			},
		},
	] satisfies Value[],
};
