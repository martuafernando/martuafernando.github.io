import type { TimelineNode } from "~/domain/experience";

export const timeline: TimelineNode[] = [
	{
		period: "2022 — 2024",
		badge: "2 yrs",
		title: "Software Engineer",
		org: "eHealth.co.id",
		current: true,
		subRoles: [
			{ role: "Software Engineer · Freelance", meta: "Oct 2024 – Dec 2024 · Remote" },
			{ role: "Software Engineer · Internship", meta: "Mar 2024 – Oct 2024 · Remote" },
			{
				role: "Junior Software Engineer · Internship",
				meta: "Dec 2022 – Mar 2024 · Remote",
			},
		],
		points: [
			"Built and integrated features across a FHIR/HL7 medical-records platform using TypeScript, Python, Kotlin, and Odoo.",
			"Reviewed pull requests and wrote test cases to safeguard code quality before deployment.",
			"Diagnosed and resolved bugs that improved overall system reliability.",
		],
	},
	{
		period: "2022 — 2023",
		badge: "Education",
		title: "Practicum Assistant",
		org: "Information Technology, ITS",
		subRoles: [
			{ role: "Computer Networking", meta: "Aug 2023 – Dec 2023" },
			{ role: "Operating Systems", meta: "Feb 2023 – Jun 2023" },
			{ role: "Data Structures", meta: "Aug 2022 – Dec 2022" },
		],
		points: [
			"Authored practicum modules and taught core CS material to undergraduate students.",
			"Collaborated with the teaching team to deliver consistent, effective lab sessions.",
		],
	},
	{
		period: "2022 — 2023",
		badge: "Design",
		title: "Product Design Assistant",
		org: "Paideia Educational Solutions",
		points: [
			"Redesigned UI components in Figma to improve usability and visual consistency.",
			"Shaped flows for new features and iterated through design-review feedback.",
		],
	},
	{
		period: "Education",
		title: "Information Technology",
		org: "Institut Teknologi Sepuluh Nopember (ITS)",
		points: [
			"Focus on cyber security, IoT, system integration, and cloud computing.",
		],
	},
];
