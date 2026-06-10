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
		eyebrow: "Enterprise · 2024",
		year: "2024",
		summary: {
			en: "A Bunker Calculation & Identification System for Pertamina Trans Kontinental — automating Remain-On-Board fuel calculations across web and Android.",
			id: "Sistem Perhitungan & Identifikasi Bunker untuk Pertamina Trans Kontinental — mengotomatiskan perhitungan bahan bakar Remain-On-Board di web dan Android.",
		},
		cardSummary: {
			en: "An automated Remain-On-Board (ROB) bunker calculation system built on Odoo for a Pertamina subsidiary, running across web and Android.",
			id: "Sistem perhitungan bunker Remain-On-Board (ROB) otomatis berbasis Odoo untuk anak perusahaan Pertamina, berjalan di web dan Android.",
		},
		tags: ["Python", "Odoo", "PostgreSQL", "REST API"],
		wide: true,
		cover: placeholder("BUNCIS Pertamina Kontinental dashboard"),
		gallery: [
			placeholder("BUNCIS screenshot 1"),
			placeholder("BUNCIS screenshot 2"),
			placeholder("BUNCIS screenshot 3"),
			placeholder("BUNCIS screenshot 4"),
		],
		role: "Backend & Web Developer",
		engagement: {
			en: "Internship · ~3 months",
			id: "Magang · ~3 bulan",
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
				heading: { en: "Why it needed building", id: "Mengapa perlu dibangun" },
				paragraphs: {
					en: [
						"Pertamina Trans Kontinental's Surabaya port needed Remain-On-Board (ROB) bunker fuel figures calculated and reconciled reliably — work that spanned the office and the field, and was slow and error-prone by hand. They needed one system, reachable from both web and Android, that their Odoo stack could grow into.",
					],
					id: [
						"Pelabuhan Surabaya milik Pertamina Trans Kontinental membutuhkan angka bahan bakar bunker Remain-On-Board (ROB) yang dihitung dan direkonsiliasi dengan andal — pekerjaan yang mencakup kantor dan lapangan, lambat dan rawan kesalahan jika dilakukan manual. Mereka butuh satu sistem, yang dapat diakses dari web maupun Android, yang dapat tumbuh di atas tumpukan Odoo mereka.",
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
						"As Backend & Web Developer I worked inside Odoo: building the RESTful APIs that back the Android client, crafting the web application, and collaborating with the backend team to keep the system performant across the roughly three-month engagement before deploying it ourselves.",
					],
					id: [
						"Sebagai Backend & Web Developer saya bekerja di dalam Odoo: membangun RESTful API yang menopang klien Android, menyusun aplikasi web, dan berkolaborasi dengan tim backend untuk menjaga performa sistem selama keterlibatan sekitar tiga bulan sebelum kami melakukan deployment sendiri.",
					],
				},
			},
			{
				segLabel: { en: "The build", id: "Pembangunan" },
				heading: { en: "What we built", id: "Yang kami bangun" },
				checks: {
					en: [
						"RESTful APIs on Odoo powering the Android client.",
						"A web application for bunker calculation and identification.",
						"Automated Remain-On-Board (ROB) calculation logic.",
						"Backend and web deployed to a VPS.",
					],
					id: [
						"RESTful API di Odoo yang menggerakkan klien Android.",
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
					{ value: "~3 mo", label: { en: "to delivery", id: "hingga rilis" } },
					{ value: "VPS", label: { en: "self-deployed", id: "deploy mandiri" } },
				],
				paragraphs: {
					en: [
						"Working inside a mature ERP taught me to design with the grain of an existing system rather than against it — extending Odoo's models and respecting its conventions kept the work maintainable. It also sharpened my instinct for data integrity: in operations software, a wrong number is worse than a missing feature.",
					],
					id: [
						"Bekerja di dalam ERP yang matang mengajari saya untuk merancang searah dengan sistem yang ada, bukan melawannya — memperluas model Odoo dan menghormati konvensinya membuat pekerjaan tetap mudah dipelihara. Ini juga mempertajam insting saya soal integritas data: dalam perangkat lunak operasional, angka yang salah lebih buruk daripada fitur yang hilang.",
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
		cover: placeholder("Cari Resto restaurant discovery app"),
		gallery: [
			placeholder("Cari Resto screenshot 1"),
			placeholder("Cari Resto screenshot 2"),
			placeholder("Cari Resto screenshot 3"),
			placeholder("Cari Resto screenshot 4"),
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
				heading: { en: "Why it needed building", id: "Mengapa perlu dibangun" },
				paragraphs: {
					en: [
						"Finding a good place to eat nearby usually means juggling several heavy apps. I wanted to see how far a thoughtful, hand-built web app could go with no framework at all — fast to load, easy to use, and honest about what's actually around you.",
					],
					id: [
						"Mencari tempat makan yang enak di sekitar biasanya berarti berpindah-pindah beberapa aplikasi berat. Saya ingin melihat sejauh apa aplikasi web buatan tangan yang dipikirkan matang bisa berjalan tanpa framework sama sekali — cepat dimuat, mudah digunakan, dan jujur tentang apa yang benar-benar ada di sekitar Anda.",
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
						"This was a solo build: I designed the interface and wrote every line of HTML, CSS, and vanilla JavaScript. I focused on a search-and-filter flow that feels instant, a layout that holds up from phone to desktop, and a map view that orients you quickly.",
					],
					id: [
						"Ini proyek mandiri: saya merancang antarmuka dan menulis setiap baris HTML, CSS, dan JavaScript murni. Saya fokus pada alur pencarian-dan-filter yang terasa instan, tata letak yang konsisten dari ponsel hingga desktop, dan tampilan peta yang cepat membuat Anda berorientasi.",
					],
				},
			},
			{
				segLabel: { en: "The build", id: "Pembangunan" },
				heading: { en: "What I built", id: "Yang saya bangun" },
				checks: {
					en: [
						"A responsive search + filter interface with no framework overhead.",
						"Location-aware results using the browser Geolocation API.",
						"A lightweight map view to place results in context.",
						"A mobile-first layout that stays fast on slow connections.",
					],
					id: [
						"Antarmuka pencarian + filter responsif tanpa beban framework.",
						"Hasil yang sadar lokasi menggunakan Geolocation API browser.",
						"Tampilan peta ringan untuk menempatkan hasil dalam konteks.",
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
