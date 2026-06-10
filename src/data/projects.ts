import type { AdjacentProjects, Project } from "~/domain/project";

export const projects: Project[] = [
	{
		slug: "buncis-pertamina-kontinental",
		title: "BUNCIS — Pertamina Kontinental",
		detailTitle: "BUNCIS",
		eyebrow: "Enterprise · 2024",
		year: "2024",
		summary:
			"A Bunker Calculation & Identification System for Pertamina Trans Kontinental — automating Remain-On-Board fuel calculations across web and Android.",
		cardSummary:
			"An automated Remain-On-Board (ROB) bunker calculation system built on Odoo for a Pertamina subsidiary, running across web and Android.",
		tags: ["Python", "Odoo", "PostgreSQL", "REST API"],
		wide: true,
		gradient: "linear-gradient(125deg,#1f5f6e,#0c2b33)",
		thumbnail: {
			src: "/projects/buncis-pertamina-kontinental/buncis-desktop-thumbnail.jpg",
			alt: "BUNCIS Pertamina Kontinental dashboard",
			width: 1600,
			height: 1000,
		},
		role: "Backend & Web Developer",
		engagement: "Internship · ~3 months",
		stack: ["Python", "Odoo", "PostgreSQL", "REST API", "QWeb"],
		delivered: [
			"RESTful APIs for Android",
			"Bunker calculation web app",
			"ROB calculation logic",
			"VPS deployment",
		],
		links: { source: "https://github.com/martuafernando" },
		caseStudy: [
			{
				segLabel: "The problem",
				heading: "Why it needed building",
				paragraphs: [
					"Pertamina Trans Kontinental's Surabaya port needed Remain-On-Board (ROB) bunker fuel figures calculated and reconciled reliably — work that spanned the office and the field, and was slow and error-prone by hand. They needed one system, reachable from both web and Android, that their Odoo stack could grow into.",
				],
			},
			{
				segLabel: "My role",
				heading: "What I contributed",
				paragraphs: [
					"As Backend & Web Developer I worked inside Odoo: building the RESTful APIs that back the Android client, crafting the web application, and collaborating with the backend team to keep the system performant across the roughly three-month engagement before deploying it ourselves.",
				],
			},
			{
				segLabel: "The build",
				heading: "What I built",
				checks: [
					"RESTful APIs on Odoo powering the Android client.",
					"A web application for bunker calculation and identification.",
					"Automated Remain-On-Board (ROB) calculation logic.",
					"Backend and web deployed to a VPS.",
				],
			},
			{
				segLabel: "Outcome",
				heading: "Impact",
				impact: [
					{ value: "2", label: "platforms (web + Android)" },
					{ value: "~3 mo", label: "to delivery" },
					{ value: "VPS", label: "self-deployed" },
				],
				paragraphs: [
					"Working inside a mature ERP taught me to design with the grain of an existing system rather than against it — extending Odoo's models and respecting its conventions kept the work maintainable. It also sharpened my instinct for data integrity: in operations software, a wrong number is worse than a missing feature.",
				],
			},
		],
	},
	{
		slug: "cari-resto",
		title: "Cari Resto",
		detailTitle: "Cari Resto",
		eyebrow: "Personal · 2023",
		year: "2023",
		summary:
			"A fast, framework-free restaurant discovery app — search, filter, and map nearby places to eat, with zero build step and instant loads.",
		tags: ["HTML5", "CSS3", "JavaScript"],
		gradient: "linear-gradient(135deg,#d98a4b,#a23b2e)",
		thumbnail: {
			src: "/projects/cari-resto/cari-resto-desktop-thumbnail.jpg",
			alt: "Cari Resto restaurant discovery app",
			width: 1600,
			height: 1000,
		},
		role: "Designer & Developer",
		engagement: "Solo project",
		stack: ["HTML5", "CSS3", "JavaScript", "Geolocation API"],
		delivered: [
			"Search & filter UI",
			"Map integration",
			"Responsive layout",
			"No-framework build",
		],
		links: {
			live: "https://martuafernando.github.io/katalog-restoran/",
			source: "https://github.com/martuafernando",
		},
		caseStudy: [
			{
				segLabel: "The problem",
				heading: "Why it needed building",
				paragraphs: [
					"Finding a good place to eat nearby usually means juggling several heavy apps. I wanted to see how far a thoughtful, hand-built web app could go with no framework at all — fast to load, easy to use, and honest about what's actually around you.",
				],
			},
			{
				segLabel: "My role",
				heading: "What I contributed",
				paragraphs: [
					"This was a solo build: I designed the interface and wrote every line of HTML, CSS, and vanilla JavaScript. I focused on a search-and-filter flow that feels instant, a layout that holds up from phone to desktop, and a map view that orients you quickly.",
				],
			},
			{
				segLabel: "The build",
				heading: "What I built",
				checks: [
					"A responsive search + filter interface with no framework overhead.",
					"Location-aware results using the browser Geolocation API.",
					"A lightweight map view to place results in context.",
					"A mobile-first layout that stays fast on slow connections.",
				],
			},
			{
				segLabel: "Outcome",
				heading: "Impact",
				impact: [
					{ value: "0", label: "dependencies" },
					{ value: "<1s", label: "first paint" },
					{ value: "100%", label: "responsive" },
				],
				paragraphs: [
					"Building without a framework forced me to understand what frameworks actually buy you — and where they're overkill. I came away with sharper fundamentals in the DOM, state, and CSS layout, and a real appreciation for how much you can ship with the platform alone when performance matters.",
				],
			},
		],
	},
	{
		slug: "helix-records",
		title: "Helix Records",
		detailTitle: "Helix Records",
		eyebrow: "Concept · 2024",
		year: "2024",
		summary:
			"A FHIR-compliant electronic health record sandbox — modelling patients, encounters, and observations the way the HL7 standard intends.",
		tags: ["TypeScript", "Kotlin", "FHIR / HL7"],
		gradient: "linear-gradient(135deg,#5566c9,#2a2d63)",
		concept: true,
		role: "Architect & Engineer",
		engagement: "Ongoing",
		stack: ["TypeScript", "Kotlin", "FHIR / HL7", "PostgreSQL", "REST"],
		delivered: [
			"FHIR resource models",
			"Validation layer",
			"REST API",
			"Reference UI",
		],
		links: { source: "https://github.com/martuafernando" },
		caseStudy: [
			{
				segLabel: "The problem",
				heading: "Why it needed building",
				paragraphs: [
					"Health data interoperability is hard, and most learning resources skip the messy reality of the FHIR standard. I wanted a clean reference implementation — a sandbox where Patient, Encounter, and Observation resources are modelled correctly and validate against the spec.",
				],
			},
			{
				segLabel: "My role",
				heading: "What I contributed",
				paragraphs: [
					"I designed the architecture and built it end to end: typed FHIR resource models, a validation layer that enforces the standard, a REST API, and a small reference UI for browsing records. The goal was correctness first — a foundation others could trust.",
				],
			},
			{
				segLabel: "The build",
				heading: "What I built",
				checks: [
					"Strongly-typed FHIR resource models for core clinical entities.",
					"A validation layer that enforces HL7 FHIR constraints on write.",
					"A REST API that speaks the FHIR interaction model.",
					"A minimal UI for browsing patients, encounters, and observations.",
				],
			},
			{
				segLabel: "Outcome",
				heading: "Impact",
				impact: [
					{ value: "3", label: "core resources" },
					{ value: "R4", label: "FHIR version" },
					{ value: "100%", label: "schema-valid" },
				],
				paragraphs: [
					"FHIR rewards patience: the standard is large, but its consistency means that once you internalise the resource model, everything composes. Building this deepened my comfort with healthcare interoperability and with designing systems whose correctness is non-negotiable.",
				],
			},
		],
	},
	{
		slug: "ledger",
		title: "Ledger",
		detailTitle: "Ledger",
		eyebrow: "Concept · 2025",
		year: "2025",
		summary:
			"A calm personal-finance dashboard — categorised spending, recurring-charge detection, and forecasts that tell you the truth.",
		tags: ["React", "Node.js", "TypeScript"],
		gradient: "linear-gradient(135deg,#3f9e7a,#1d4a3c)",
		concept: true,
		role: "Designer & Engineer",
		engagement: "Ongoing",
		stack: ["React", "Node.js", "TypeScript", "PostgreSQL"],
		delivered: [
			"Spending categorisation",
			"Recurring detection",
			"Forecast engine",
			"Dashboard UI",
		],
		links: { source: "https://github.com/martuafernando" },
		caseStudy: [
			{
				segLabel: "The problem",
				heading: "Why it needed building",
				paragraphs: [
					"Most budgeting apps either nag or overwhelm. I wanted something quiet that answers two questions well: where did the money go, and what's coming. The hard part isn't charts — it's categorisation and honest forecasting.",
				],
			},
			{
				segLabel: "My role",
				heading: "What I contributed",
				paragraphs: [
					"I designed the interface and built the full stack: a React dashboard, a Node/TypeScript API, and the logic that categorises transactions and detects recurring charges to project a realistic month ahead.",
				],
			},
			{
				segLabel: "The build",
				heading: "What I built",
				checks: [
					"Automatic transaction categorisation with manual override.",
					"Recurring-charge detection to surface subscriptions.",
					"A forecast engine that projects cashflow from real patterns.",
					"A restrained dashboard that prioritises signal over decoration.",
				],
			},
			{
				segLabel: "Outcome",
				heading: "Impact",
				impact: [
					{ value: "2", label: "questions answered" },
					{ value: "30d", label: "forecast window" },
					{ value: "1", label: "calm UI" },
				],
				paragraphs: [
					"The interesting problems were in the data, not the pixels: deduping, classifying, and forecasting messy real-world transactions. It reinforced that good product engineering is mostly about modelling the domain honestly before you draw a single chart.",
				],
			},
		],
	},
	{
		slug: "atlas",
		title: "Atlas",
		detailTitle: "Atlas",
		eyebrow: "Concept · 2025",
		year: "2025",
		summary:
			"A realtime collaborative whiteboard — low-latency multiplayer cursors, freehand drawing, and live presence that feels instant.",
		tags: ["Go", "WebSocket", "Canvas"],
		gradient: "linear-gradient(135deg,#b06fb8,#4a2d63)",
		concept: true,
		role: "Architect & Engineer",
		engagement: "Ongoing",
		stack: ["Go", "WebSocket", "Canvas", "TypeScript"],
		delivered: [
			"Realtime sync engine",
			"Multiplayer cursors",
			"Canvas renderer",
			"Presence system",
		],
		links: { source: "https://github.com/martuafernando" },
		caseStudy: [
			{
				segLabel: "The problem",
				heading: "Why it needed building",
				paragraphs: [
					"Realtime collaboration looks magical and is brutally hard underneath — latency, conflict, and presence all fight you. I wanted to build the core of a multiplayer whiteboard and feel where the real difficulty lives.",
				],
			},
			{
				segLabel: "My role",
				heading: "What I contributed",
				paragraphs: [
					"I architected the system around a Go WebSocket server and a Canvas-based client: a sync engine that broadcasts strokes and cursor positions with minimal latency, plus a presence layer so you always know who's in the room.",
				],
			},
			{
				segLabel: "The build",
				heading: "What I built",
				checks: [
					"A Go WebSocket server coordinating rooms and broadcasts.",
					"A Canvas renderer for smooth freehand drawing.",
					"Low-latency multiplayer cursors and live presence.",
					"A message protocol designed for small, frequent updates.",
				],
			},
			{
				segLabel: "Outcome",
				heading: "Impact",
				impact: [
					{ value: "<50ms", label: "sync latency" },
					{ value: "∞", label: "cursors" },
					{ value: "1", label: "shared canvas" },
				],
				paragraphs: [
					"Realtime systems are an exercise in humility about the network. Designing a compact protocol and thinking in terms of eventual, optimistic state taught me more about distributed systems than any amount of reading could.",
				],
			},
		],
	},
];

export function getProjects(): Project[] {
	return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): AdjacentProjects {
	const index = projects.findIndex((p) => p.slug === slug);
	return {
		prev: index > 0 ? projects[index - 1] : null,
		next: index >= 0 && index < projects.length - 1 ? projects[index + 1] : null,
	};
}
