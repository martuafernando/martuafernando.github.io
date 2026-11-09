import type {
	NavLink,
	SiteImage,
	Social,
	Stat,
	TrustedOrg,
	Value,
} from "~/domain/site";
import type { Localized } from "~/i18n";

export const profile = {
	name: "Martua Fernando",
	email: "martuafernando@proton.me",
	location: "Indonesia",
	/** Replace the file at this path with the real CV (keep the name, or edit it here). */
	cv: {
		href: "/files/martua-fernando-cv.pdf",
		filename: "Martua-Fernando-CV.pdf",
	},
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

/**
 * Hero credibility strip, newest first. Logos are drawn as one-colour
 * silhouettes; add a `logo` to an entry to replace its plain-text name.
 */
export const trusted: TrustedOrg[] = [
	{ name: "Bank Negara Indonesia" },
	{
		name: "eHealth.co.id",
		logo: {
			src: "/images/logos/ehealth.svg",
			alt: "eHealth.co.id",
			width: 250,
			height: 61,
		},
	},
	{ name: "Information Technology, ITS" },
	{
		name: "Paideia Educational Solutions",
		logo: {
			src: "/images/logos/paideia.png",
			alt: "Paideia Educational Solutions",
			width: 281,
			height: 80,
		},
	},
];

export const hero = {
	status: {
		en: "Open to volunteer software engineering projects",
		id: "Terbuka untuk proyek volunteer di bidang software engineering",
	} satisfies Localized,

	headlineHtml: {
		en: 'Building software <span class="accent">you can rely on.</span>',
		id: 'Membangun software yang <span class="accent">bisa diandalkan.</span>',
	} satisfies Localized,

	lede: {
		en: "I build data pipelines and enterprise systems, with healthcare software in my background.",
		id: "Saya membangun data pipeline dan sistem enterprise, dengan bekal pengalaman di software kesehatan.",
	} satisfies Localized,

	stats: [
		{
			value: "3+",
			label: {
				en: "years building software",
				id: "tahun membangun software",
			},
		},
		{
			value: "5+",
			label: {
				en: "projects shipped",
				id: "proyek dirilis",
			},
		},
	] satisfies Stat[],
};

export const about = {
	photo: {
		src: "/images/about/martua.jpg",
		alt: "Portrait of Martua Fernando",
		width: 640,
		height: 800,
	} satisfies SiteImage,

	location: {
		en: "Indonesia",
		id: "Indonesia",
	} satisfies Localized,

	heading: {
		en: "I keep systems simple as they grow.",
		id: "Saya menjaga sistem tetap simpel seiring tumbuh.",
	} satisfies Localized,

	paragraphs: [
		{
			en: "I'm Fernando. I build reliable systems end to end, from <strong>backend</strong> and <strong>data pipelines</strong> to enterprise software.",
			id: "Saya Fernando. Saya membangun sistem andal dari ujung ke ujung, mulai dari <strong>backend</strong> dan <strong>data pipeline</strong> sampai software enterprise.",
		},
		{
			en: "Right now I'm building data pipelines at <strong>Bank Negara Indonesia</strong>. Before that, I shipped features on a <strong>FHIR/HL7</strong> medical-records platform at eHealth, and taught practicums in networking, operating systems, and data structures at ITS.",
			id: "Saat ini saya membangun data pipeline di <strong>Bank Negara Indonesia</strong>. Sebelumnya, saya merilis fitur di platform rekam medis <strong>FHIR/HL7</strong> di eHealth, dan mengampu praktikum jaringan komputer, sistem operasi, serta struktur data di ITS.",
		},
	] satisfies Localized[],

	stackLabel: { en: "My daily toolkit", id: "Perkakas harian saya" } satisfies Localized,
	stack: [
		"TypeScript",
		"Python",
		"PostgreSQL",
		"Oracle",
		"React",
		"Node.js",
		"Docker",
	],

	focusLabel: {
		en: "What I focus on",
		id: "Fokus saya",
	} satisfies Localized,

	focus: [
		{
			k: "01",
			title: { en: "Data engineering", id: "Data engineering" },
			body: {
				en: "I introduced Superset at Bank Negara Indonesia and built the custom plugins that connect it to the data pipelines.",
				id: "Saya memprakarsai Superset di Bank Negara Indonesia dan membangun plugin custom yang menghubungkannya ke data pipeline.",
			},
		},
		{
			k: "02",
			title: { en: "Healthcare software", id: "Software kesehatan" },
			body: {
				en: "I built features on a FHIR/HL7 medical-records platform with TypeScript, Python, Kotlin, and Odoo.",
				id: "Saya membangun fitur di platform rekam medis FHIR/HL7 dengan TypeScript, Python, Kotlin, dan Odoo.",
			},
		},
		{
			k: "03",
			title: { en: "Backend & enterprise", id: "Backend & enterprise" },
			body: {
				en: "I wrote the REST APIs and calculation logic on Odoo and PostgreSQL for a Pertamina subsidiary.",
				id: "Saya menulis REST API dan logika perhitungan di Odoo dan PostgreSQL untuk anak usaha Pertamina.",
			},
		},
	] satisfies Value[],
};