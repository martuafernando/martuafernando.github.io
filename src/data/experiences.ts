import type { TimelineNode } from "~/domain/experience";

export const timeline: TimelineNode[] = [
	{
		period: "2025 — present",
		badge: { en: "1 year +", id: "1 thn +" },
		title: { en: "Data Engineer", id: "Data Engineer" },
		org: "Bank Negara Indonesia",
		current: true,
		subRoles: [
			{
				role: {
					en: "Software Engineer · Fulltime",
					id: "Software Engineer · Penuh Waktu",
				},
				meta: "Feb 2026 - Present · Full Time",
			},
			{
				role: {
					en: "Officer Development Program · Contract",
					id: "Officer Development Program · Kontrak",
				},
				meta: "Feb 2025 - Feb 2026 · Contract",
			},
		],
		points: {
			en: [
				"Initiated superset as a data visualization tool and built custom plugins to integrate it with data pipelines.",
			],
			id: [
				"Menginisiasi Superset sebagai alat visualisasi data dan membangun plugin kustom untuk mengintegrasikannya dengan pipeline data.",
			],
		},
	},
	{
		period: "2022 — 2024",
		badge: { en: "2 years", id: "2 thn" },
		title: { en: "Software Engineer", id: "Software Engineer" },
		org: "eHealth.co.id",
		current: true,
		subRoles: [
			{
				role: {
					en: "Software Engineer · Freelance",
					id: "Software Engineer · Freelance",
				},
				meta: "Oct 2024 - Dec 2024 · Remote",
			},
			{
				role: {
					en: "Software Engineer · Internship",
					id: "Software Engineer · Magang",
				},
				meta: "Mar 2024 - Oct 2024 · Remote",
			},
			{
				role: {
					en: "Junior Software Engineer · Internship",
					id: "Junior Software Engineer · Magang",
				},
				meta: "Dec 2022 - Mar 2024 · Remote",
			},
		],
		points: {
			en: [
				"Built and integrated features across a FHIR/HL7 medical-records platform using TypeScript, Python, Kotlin, and Odoo.",
				"Reviewed pull requests and wrote test cases to safeguard code quality before deployment.",
				"Diagnosed and resolved bugs that improved overall system reliability.",
			],
			id: [
				"Membangun dan mengintegrasikan fitur pada platform rekam medis FHIR/HL7 menggunakan TypeScript, Python, Kotlin, dan Odoo.",
				"Meninjau pull request dan menulis test case untuk menjaga kualitas kode sebelum deployment.",
				"Mendiagnosis dan memperbaiki bug yang meningkatkan keandalan sistem secara keseluruhan.",
			],
		},
	},
	{
		period: "2022 — 2023",
		badge: { en: "1 year", id: "1 thn" },
		title: { en: "Practicum Assistant", id: "Asisten Praktikum" },
		org: "Information Technology, ITS",
		subRoles: [
			{
				role: { en: "Computer Networking", id: "Jaringan Komputer" },
				meta: "Aug 2023 - Dec 2023",
			},
			{
				role: { en: "Operating Systems", id: "Sistem Operasi" },
				meta: "Feb 2023 - Jun 2023",
			},
			{
				role: { en: "Data Structures", id: "Struktur Data" },
				meta: "Aug 2022 - Dec 2022",
			},
		],
		points: {
			en: [
				"Authored practicum modules and taught core CS material to undergraduate students.",
				"Collaborated with the teaching team to deliver consistent, effective lab sessions.",
			],
			id: [
				"Menyusun modul praktikum dan mengajar materi inti ilmu komputer untuk mahasiswa S1.",
				"Berkolaborasi dengan tim pengajar untuk menyampaikan sesi lab yang konsisten dan efektif.",
			],
		},
	},
	{
		period: "2022 — 2023",
		badge: { en: "1 year", id: "1 thn" },
		title: { en: "Product Design Assistant", id: "Asisten Desain Produk" },
		org: "Paideia Educational Solutions",
		points: {
			en: [
				"Redesigned UI components in Figma to improve usability and visual consistency.",
				"Shaped flows for new features and iterated through design-review feedback.",
			],
			id: [
				"Mendesain ulang komponen UI di Figma untuk meningkatkan kegunaan dan konsistensi visual.",
				"Merancang alur untuk fitur baru dan beriterasi melalui umpan balik review desain.",
			],
		},
	},
];
