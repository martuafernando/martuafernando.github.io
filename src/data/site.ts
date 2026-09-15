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
		en: "Software engineer that focused on scalable applications, data, systems, and engineering. He enjoys building reliable software and exploring distributed systems, infrastructure, and new technologies.",
		id: "software engineer yang berfokus pada aplikasi, data, sistem, dan engineering yang skalabel. Senang membangun perangkat lunak yang andal serta eksplorasi sistem terdistribusi, infrastruktur, dan teknologi baru.",
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
		en: "I enjoy building systems that stay simple as they grow.",
		id: "Senang membangun sistem yang sederhana dan mudah dipelihara.",
	} satisfies Localized,

	paragraphs: [
		{
			en: "I'm Fernando — a software engineer who enjoys building reliable systems from end to end. My experience spans backend services, web applications, data processing, and enterprise software. I care about designing software that is maintainable, observable, and easy to evolve over time.",
			id: "Saya Fernando — seorang software engineer yang senang membangun sistem yang andal secara end-to-end. Pengalaman saya mencakup layanan backend, aplikasi web, pemrosesan data, dan perangkat lunak enterprise. Saya concern pada desain sistem yang mudah dipelihara, mudah dipantau, dan dapat berkembang seiring waktu.",
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
				en: "Software should work consistently according to what's needed.",
				id: "Perangkat lunak harus bekerja secara konsisten sesuai kebutuhan.",
			},
		},
		{
			k: "02",
			title: {
				en: "Clarity",
				id: "Kejelasan",
			},
			body: {
				en: "Simple designs and readable code scale better than unnecessary complexity.",
				id: "Desain sederhana dan kode yang mudah dibaca lebih mudah berkembang dibanding kompleksitas yang tidak perlu.",
			},
		},
		{
			k: "03",
			title: {
				en: "Continuous Learning",
				id: "Belajar Berkelanjutan",
			},
			body: {
				en: "Technology changes quickly, so curiosity and adaptation are essential.",
				id: "Teknologi berubah dengan cepat, sehingga rasa ingin tahu dan kemampuan beradaptasi sangat penting.",
			},
		},
	] satisfies Value[],
};