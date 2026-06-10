import type { NavLink, Social, Stat, Value } from "~/domain/site";

export const profile = {
	name: "Martua Fernando",
	mark: "FS",
	email: "martuafernando@proton.me",
	location: "Indonesia",
};

export const navLinks: NavLink[] = [
	{ href: "#work", label: "Work" },
	{ href: "#about", label: "About" },
	{ href: "#experience", label: "Experience" },
	{ href: "#contact", label: "Contact" },
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
	status: "Available for select work · Remote",
	lede: "Martua Fernando — a software architect and fullstack engineer crafting reliable systems across healthcare, education, and enterprise. TypeScript, Python, Kotlin.",
	stats: [
		{ value: "3+", label: "years shipping" },
		{ value: "5", label: "featured projects" },
		{ value: "FHIR / HL7", label: "standards-fluent" },
	] satisfies Stat[],
};

export const about = {
	photoGradient: "linear-gradient(150deg,#c98b6d,#7d4a3a)",
	heading: "Engineer first, but I sweat the details others skip.",
	paragraphs: [
		"I'm Fernando — I design and build software end to end, from data models and APIs to the interface people actually touch. My work spans <strong>electronic health records</strong> built to the FHIR/HL7 standard, <strong>educational platforms</strong>, and <strong>enterprise systems</strong> on Odoo.",
		"I started in product design before moving into engineering, so I think in systems <em>and</em> in users. I care about code that's reviewable, architectures that won't surprise you at 3am, and interfaces that feel quiet and obvious.",
	],
	values: [
		{
			k: "01",
			title: "Reliability",
			body: "Tested, observable systems that fail loudly and recover gracefully.",
		},
		{
			k: "02",
			title: "Clarity",
			body: "Code and UI that the next person — including future me — can read.",
		},
		{
			k: "03",
			title: "Craft",
			body: "The last 10% of polish is where good becomes trusted.",
		},
	] satisfies Value[],
};
