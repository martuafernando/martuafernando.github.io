import type {
	AdjacentProjects,
	Project,
	ProjectImage,
} from "~/domain/project";

/** Shared dummy media — swap each `src` for a real asset later. */
const placeholder = (alt: string): ProjectImage => ({
	src: "/images/placeholder.svg",
	alt,
	width: 1600,
	height: 1000,
});

export const projects: Project[] = [
	{
		slug: "buncis-pertamina-kontinental",
		title: "BUNCIS — Pertamina Kontinental",
		detailTitle: "BUNCIS",
		eyebrow: "Freelance · 2023",
		year: "2023",
		summary: {
			en: "A Bunker Calculation & Identification System for PT Pertamina Trans Kontinental — automating Remain-On-Board fuel calculations on Odoo.",
			id: "Sistem Perhitungan Bunker untuk PT Pertamina Trans Kontinental — mengotomatiskan perhitungan bahan bakar Remain-On-Board di Odoo.",
		},
		cardSummary: {
			en: "An automated Remain-On-Board (ROB) bunker calculation system built on Odoo for a Pertamina subsidiary, replacing a slow manual process.",
			id: "Sistem perhitungan bunker Remain-On-Board (ROB) otomatis berbasis Odoo untuk anak perusahaan Pertamina, menggantikan proses manual yang lambat.",
		},
		tags: ["Python", "Odoo", "PostgreSQL", "REST API"],
		wide: true,
		cover: {
			src: "/images/projects/buncis-pertamina-kontinental/cover.webp",
			alt: "BUNCIS web app on a laptop and Android app on a phone",
			width: 1600,
			height: 1000
		},
		gallery: [
			{
				src: "/images/projects/buncis-pertamina-kontinental/surat-keterangan-project-buncis.webp",
				alt: "Surat Keterangan project BUNCIS from Pertamina Trans Kontinental",
				width: 620,
				height: 802
			}
		],
		role: "Back End Developer",
		engagement: {
			en: "Freelance · Aug–Nov 2023 (~4 months)",
			id: "Freelance · Agu–Nov 2023 (~4 bulan)",
		},
		stack: ["Python", "Odoo", "PostgreSQL", "REST API", "QWeb"],
		delivered: {
			en: [
				"RESTful APIs for Android",
				"Bunker calculation web app",
				"ROB calculation logic",
				"VPS deployment",
			],
			id: [
				"RESTful API untuk Android",
				"Aplikasi web perhitungan bunker",
				"Logika perhitungan ROB",
				"Deployment VPS",
			],
		},
		links: { source: "https://github.com/martuafernando" },
		caseStudy: [
			{
				segLabel: { en: "The problem", id: "Masalahnya" },
				heading: { en: "Why it needed building", id: "Latar Belakang" },
				paragraphs: {
					en: [
						"PT Pertamina Trans Kontinental's Surabaya port needed Remain-On-Board (ROB) bunker fuel figures calculated and reconciled reliably — work that was slow and error-prone by hand. They needed one system, built on their Odoo stack, to automate the calculation and make it faster and more dependable than the manual method.",
					],
					id: [
						"PT Pertamina Trans Kontinental membutuhkan sistem untuk menghitung angka bahan bakar bunker Remain-On-Board (ROB) andal — perhitungan manual menjadi masalah karena tidak efisien dan rawan kesalahan. Mereka membutuhkan sistem untuk mengotomatiskan perhitungan dan membuatnya lebih cepat dan lebih andal daripada metode manual yang kompleks.",
					],
				},
			},
			{
				segLabel: { en: "My role", id: "Peran saya" },
				heading: {
					en: "What I contributed",
					id: "Kontribusi",
				},
				paragraphs: {
					en: [
						"As a freelance Back End Developer I built the system on Odoo and Python: initiating and implementing the business automation that drives the Remain-On-Board (ROB) calculation, plus the RESTful APIs behind the Android client. The goal was to replace a slow, error-prone manual process with something faster and more reliable — operations software where a wrong number costs more than a missing feature.",
					],
					id: [
						"Sebagai Back End Developer, saya merancang dan membangun sistem menggunakan Odoo dan Python untuk mengotomatisasi proses bisnis yang dapat melakukan perhitungan Remain-On-Board (ROB), serta membuat RESTful API untuk keperluan aplikasi Android. Tujuannya adalah menggantikan proses manual yang lambat dan rawan kesalahan dengan sistem yang lebih cepat, andal, dan dapat diakses dari beberapa lokasi sekaligus",
					],
				},
			},
			{
				segLabel: { en: "The build", id: "Pembangunan" },
				heading: { en: "What I built", id: "Yang saya bangun" },
				checks: {
					en: [
						"RESTful APIs on Odoo powering the Android client.",
						"A web application for bunker calculation and identification.",
						"Automated Remain-On-Board (ROB) calculation logic.",
						"Backend and web deployed to a VPS.",
					],
					id: [
						"RESTful API di Odoo untuk support aplikasi Android.",
						"Aplikasi web untuk perhitungan dan identifikasi bunker.",
						"Logika perhitungan Remain-On-Board (ROB) otomatis.",
						"Backend dan web yang di-deploy ke VPS.",
					],
				},
			},
			{
				segLabel: { en: "Outcome", id: "Hasil" },
				heading: { en: "Impact", id: "Dampak" },
				impact: [
					{
						value: "2",
						label: {
							en: "platforms (web + Android)",
							id: "platform (web + Android)",
						},
					},
					{ value: "~4 mo", label: { en: "to delivery", id: "hingga rilis" } },
					{ value: "VPS", label: { en: "self-deployed", id: "deploy mandiri" } },
				],
				paragraphs: {
					en: [
						"This automation significantly speeds up ROB calculations compared to the manual method. Calculations that previously took several minutes can now be performed instantly. The calculation results from the system also produce figures that are 100% consistent with manual calculations, so the system's results can be relied upon for operations.",
					],
					id: [
						"Otomatisasi ini secara signifikan mempercepat perhitungan ROB dibandingkan metode manual. Perhitungan yang sebelumnya perlu dilakukan selama beberapa menit hingga jaminan kini dapat dilakukan secara instan. Hasil perhitungan dari sistem juga menghasilkan angka yang 100% sesuai dengan perhitungan manual sehingga hasil perhitungan sistem ini dapat diandalkan untuk operasional.",
					],
				},
			},
		],
	},
	{
		slug: "cari-resto",
		title: "Cari Resto",
		detailTitle: "Cari Resto",
		eyebrow: "Personal · 2023",
		year: "2023",
		summary: {
			en: "A fast, framework-free restaurant discovery app — search, filter, and map nearby places to eat, with zero build step and instant loads.",
			id: "Aplikasi pencari restoran yang cepat tanpa framework — cari, filter, dan petakan tempat makan terdekat, tanpa langkah build dan dengan pemuatan instan.",
		},
		tags: ["HTML5", "CSS3", "JavaScript"],
		cover: {
			src: "/images/projects/cari-resto/cover.webp",
			alt: "Cari Resto app on a phone showing nearby restaurants on a map",
			width: 900,
			height: 1600
		},
		gallery: [
			{
				src: "/images/projects/cari-resto/home-page.webp",
				alt: "Cari Resto home page showing search and filter UI",
				width: 900,
				height: 1600
			},
			{
				src: "/images/projects/cari-resto/detail-page.webp",
				alt: "Cari Resto detail page showing restaurant information",
				width: 1600,
				height: 900
			},
			{
				src: "/images/projects/cari-resto/favorite-page.webp",
				alt: "Cari Resto favorite page showing saved restaurants",
				width: 1600,
				height: 900
			},
		],
		role: "Designer & Developer",
		engagement: {
			en: "Solo project",
			id: "Proyek mandiri",
		},
		stack: ["HTML5", "CSS3", "JavaScript", "Geolocation API"],
		delivered: {
			en: [
				"Search & filter UI",
				"Map integration",
				"Responsive layout",
				"No-framework build",
			],
			id: [
				"UI pencarian & filter",
				"Integrasi peta",
				"Tata letak responsif",
				"Build tanpa framework",
			],
		},
		links: {
			live: "https://martuafernando.github.io/katalog-restoran/",
			source: "https://github.com/martuafernando",
		},
		caseStudy: [
			{
				segLabel: { en: "The problem", id: "Masalahnya" },
				heading: { en: "Why it needed building", id: "Latar Belakang" },
				paragraphs: {
					en: [
						"Finding a good place to eat nearby usually means switching between several heavy apps. The need for something simple with easy, fast access makes for an interesting case study for implementing and learning about PWAs..",
					],
					id: [
						"Mencari tempat makan yang enak di sekitar biasanya berarti berpindah-pindah beberapa aplikasi berat. Kebutuhan yang sederhana dan akses yang mudah dan cepat menjadi case study menarik untuk implementasi dan mempelajari PWA.",
					],
				},
			},
			{
				segLabel: { en: "My role", id: "Peran saya" },
				heading: {
					en: "What I contributed",
					id: "Apa yang saya kontribusikan",
				},
				paragraphs: {
					en: [
						"This is an solo project: I designed the interface and built the website using HTML, CSS, and vanilla JavaScript. I focused on implementing PWA technology and an instant search-and-filter flow, with a responsive layout from mobile to desktop.",
					],
					id: [
						"Ini proyek mandiri: saya merancang antarmuka dan membangun web dengan menggunakan HTML, CSS, dan vanila JavaScript. Saya fokus pada implementasi teknologi PWA dan alur pencarian-dan-filter yang instan, layout yang responsif dari ponsel hingga desktop.",
					],
				},
			},
			{
				segLabel: { en: "The build", id: "Pembangunan" },
				heading: { en: "What I built", id: "Yang saya bangun" },
				checks: {
					en: [
						"A Progressive Web App (PWA) with offline support and installability.",
						"A responsive search + filter interface with no framework overhead.",
						"A mobile-first layout that stays fast on slow connections.",
					],
					id: [
						"Progressive Web App (PWA) dengan dukungan offline dan dapat diinstal.",
						"Antarmuka pencarian + filter responsif tanpa beban framework.",
						"Tata letak mobile-first yang tetap cepat di koneksi lambat.",
					],
				},
			},
			{
				segLabel: { en: "Outcome", id: "Hasil" },
				heading: { en: "Impact", id: "Dampak" },
				impact: [
					{ value: "0", label: { en: "dependencies", id: "dependensi" } },
					{ value: "<1s", label: { en: "first paint", id: "paint pertama" } },
					{ value: "100%", label: { en: "responsive", id: "responsif" } },
				],
				paragraphs: {
					en: [
						"Building without a framework forced me to understand what frameworks actually buy you — and where they're overkill. I came away with sharper fundamentals in the DOM, state, and CSS layout, and a real appreciation for how much you can ship with the platform alone when performance matters.",
					],
					id: [
						"Membangun tanpa framework memaksa saya memahami apa yang sebenarnya diberikan framework — dan di mana itu berlebihan. Saya keluar dengan fondasi yang lebih tajam dalam DOM, state, dan tata letak CSS, serta apresiasi nyata terhadap seberapa banyak yang bisa dirilis hanya dengan platform ketika performa penting.",
					],
				},
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
