import type { AdjacentProjects, Project } from "~/domain/project";

export const projects: Project[] = [
	{
		slug: "buncis-pertamina-kontinental",
		title: "BUNCIS — Pertamina Kontinental",
		detailTitle: "BUNCIS",
		eyebrow: "Freelance · 2023",
		year: "2023",
		summary: {
			en: "A Bunker Calculation & Identification System for PT Pertamina Trans Kontinental — automating Remain-On-Board fuel calculations on Odoo.",
			id: "Sistem Perhitungan Bunker untuk PT Pertamina Trans Kontinental — mengotomatiskan hitungan bahan bakar Remain-On-Board di Odoo.",
		},
		cardSummary: {
			en: "Automated fuel calculations for a Pertamina subsidiary — minutes of manual work, now instant.",
			id: "Hitung bahan bakar otomatis buat anak usaha Pertamina — yang dulu butuh beberapa menit, sekarang langsung jadi.",
		},
		tags: ["Python", "Odoo", "PostgreSQL", "REST API"],
		wide: true,
		cover: {
			src: "/images/projects/buncis-pertamina-kontinental/cover.webp",
			alt: "BUNCIS web app on a laptop and Android app on a phone",
			width: 1600,
			height: 1000,
		},
		gallery: [
			{
				src: "/images/projects/buncis-pertamina-kontinental/surat-keterangan-project-buncis.webp",
				alt: "Surat Keterangan project BUNCIS from Pertamina Trans Kontinental",
				width: 620,
				height: 802,
			},
		],
		role: "Back End Developer",
		engagement: {
			en: "Freelance · Aug–Nov 2023 (~4 months)",
			id: "Freelance · Agu–Nov 2023 (±4 bulan)",
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
				"RESTful API buat aplikasi Android",
				"Aplikasi web hitung bunker",
				"Logika hitung ROB",
				"Deploy ke VPS",
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
						"PT Pertamina Trans Kontinental butuh cara yang andal buat menghitung bahan bakar bunker Remain-On-Board (ROB). Kalau dihitung manual, prosesnya lama dan gampang salah. Jadi mereka butuh sistem yang mengotomatiskan hitungan ini — lebih cepat dan lebih bisa dipercaya daripada cara manual yang ribet.",
					],
				},
			},
			{
				segLabel: { en: "My role", id: "Peran" },
				heading: {
					en: "What I contributed",
					id: "Yang dikerjakan",
				},
				paragraphs: {
					en: [
						"As a freelance Back End Developer I built the system on Odoo and Python: initiating and implementing the business automation that drives the Remain-On-Board (ROB) calculation, plus the RESTful APIs behind the Android client. The goal was to replace a slow, error-prone manual process with something faster and more reliable — operations software where a wrong number costs more than a missing feature.",
					],
					id: [
						"Sebagai Back End Developer, merancang dan membangun sistem dengan Odoo dan Python untuk mengotomatiskan proses bisnis yang menghitung Remain-On-Board (ROB), plus membuat RESTful API untuk aplikasi Android. Tujuannya: mengganti proses manual yang lambat dan rawan salah dengan sistem yang lebih cepat, andal, dan bisa diakses dari banyak lokasi sekaligus.",
					],
				},
			},
			{
				segLabel: { en: "The build", id: "Proses Pembuatan" },
				heading: { en: "What I built", id: "Yang dibangun" },
				checks: {
					en: [
						"RESTful APIs on Odoo powering the Android client.",
						"A web application for bunker calculation and identification.",
						"Automated Remain-On-Board (ROB) calculation logic.",
						"Backend and web deployed to a VPS.",
					],
					id: [
						"RESTful API di Odoo yang jadi backend aplikasi Android.",
						"Aplikasi web buat hitung dan identifikasi bunker.",
						"Logika hitung Remain-On-Board (ROB) otomatis.",
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
					{ value: "~4 mo", label: { en: "to delivery", id: "sampai rilis" } },
					{
						value: "VPS",
						label: { en: "self-deployed", id: "deploy sendiri" },
					},
				],
				paragraphs: {
					en: [
						"This automation significantly speeds up ROB calculations compared to the manual method. Calculations that previously took several minutes can now be performed instantly. The calculation results from the system also produce figures that are 100% consistent with manual calculations, so the system's results can be relied upon for operations.",
					],
					id: [
						"Otomatisasi ini bikin hitungan ROB jauh lebih cepat dibanding cara manual. Hitungan yang dulu butuh beberapa menit sekarang langsung jadi. Hasilnya juga 100% sama dengan hitungan manual, jadi angkanya aman dipakai buat operasional.",
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
			id: "Aplikasi cari restoran yang ngebut tanpa framework — cari, filter, dan lihat tempat makan terdekat di peta, tanpa build step dan langsung kebuka.",
		},
		cardSummary: {
			en: "Find, filter, and map nearby places to eat. Zero dependencies.",
			id: "Cari, filter, dan lihat tempat makan terdekat di peta. Tanpa dependency.",
		},
		tags: ["HTML5", "CSS3", "JavaScript"],
		cover: {
			src: "/images/projects/cari-resto/cover.webp",
			alt: "Cari Resto app on a phone showing nearby restaurants on a map",
			width: 900,
			height: 1600,
		},
		gallery: [
			{
				src: "/images/projects/cari-resto/home-page.webp",
				alt: "Cari Resto home page showing search and filter UI",
				width: 900,
				height: 1600,
			},
			{
				src: "/images/projects/cari-resto/detail-page.webp",
				alt: "Cari Resto detail page showing restaurant information",
				width: 1600,
				height: 900,
			},
			{
				src: "/images/projects/cari-resto/favorite-page.webp",
				alt: "Cari Resto favorite page showing saved restaurants",
				width: 1600,
				height: 900,
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
				"Layout responsif",
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
						"Nyari tempat makan enak di sekitar biasanya harus bolak-balik buka beberapa aplikasi yang berat. Kebutuhan akan sesuatu yang simpel, gampang diakses, dan cepat ini jadi studi kasus menarik buat belajar dan menerapkan PWA.",
					],
				},
			},
			{
				segLabel: { en: "My role", id: "Peran" },
				heading: {
					en: "What I contributed",
					id: "Yang dikerjakan",
				},
				paragraphs: {
					en: [
						"This is an solo project: I designed the interface and built the website using HTML, CSS, and vanilla JavaScript. I focused on implementing PWA technology and an instant search-and-filter flow, with a responsive layout from mobile to desktop.",
					],
					id: [
						"Ini proyek solo: tampilan dirancang dan web dibangun sendiri dengan HTML, CSS, dan vanilla JavaScript, dengan fokus pada penerapan PWA, alur cari-dan-filter yang instan, dan layout responsif dari ponsel sampai desktop.",
					],
				},
			},
			{
				segLabel: { en: "The build", id: "Proses Pembuatan" },
				heading: { en: "What I built", id: "Yang dibangun" },
				checks: {
					en: [
						"A Progressive Web App (PWA) with offline support and installability.",
						"A responsive search + filter interface with no framework overhead.",
						"A mobile-first layout that stays fast on slow connections.",
					],
					id: [
						"Progressive Web App (PWA) yang bisa dipakai offline dan diinstal.",
						"Tampilan cari + filter yang responsif, tanpa beban framework.",
						"Layout mobile-first yang tetap ngebut walau koneksi lemot.",
					],
				},
			},
			{
				segLabel: { en: "Outcome", id: "Hasil" },
				heading: { en: "Impact", id: "Dampak" },
				impact: [
					{ value: "0", label: { en: "dependencies", id: "dependency" } },
					{ value: "<1s", label: { en: "first paint", id: "first paint" } },
					{ value: "100%", label: { en: "responsive", id: "responsif" } },
				],
				paragraphs: {
					en: [
						"Building without a framework forced me to understand what frameworks actually buy you — and where they're overkill. I came away with sharper fundamentals in the DOM, state, and CSS layout, and a real appreciation for how much you can ship with the platform alone when performance matters.",
					],
					id: [
						"Membangun tanpa framework membuat jelas apa sebenarnya yang ditawarkan framework — dan kapan itu malah berlebihan. Hasilnya, fondasi di DOM, state, dan layout CSS jadi lebih kuat, dan makin terasa betapa banyak yang bisa dirilis cuma dengan fitur bawaan browser kalau performa memang penting.",
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
		next:
			index >= 0 && index < projects.length - 1 ? projects[index + 1] : null,
	};
}
