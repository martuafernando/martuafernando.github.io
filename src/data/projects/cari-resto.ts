import type { Project } from "~/domain/project";

export const cariResto: Project = {
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
					"Finding a good place to eat nearby usually means switching between several heavy apps. The need for something simple with easy, fast access makes for an interesting case study for implementing and learning about PWAs.",
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
					"This is a solo project: I designed the interface and built the website using HTML, CSS, and vanilla JavaScript. I focused on implementing PWA technology and an instant search-and-filter flow, with a responsive layout from mobile to desktop.",
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
};
