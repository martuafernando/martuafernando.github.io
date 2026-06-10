export interface ImpactCell {
	value: string;
	label: string;
}

export interface CaseSegment {
	segLabel: string;
	heading: string;
	paragraphs?: string[];
	checks?: string[];
	impact?: ImpactCell[];
}

export interface ProjectThumbnail {
	src: string;
	alt: string;
	width: number;
	height: number;
}

export interface ProjectLinks {
	live?: string;
	source?: string;
}

export interface Project {
	slug: string;
	/** Card title (may be longer than the detail headline). */
	title: string;
	/** Headline shown on the detail page. */
	detailTitle: string;
	/** Small kicker, e.g. "Enterprise · 2024". */
	eyebrow: string;
	year: string;
	/** Summary used on the detail page. */
	summary: string;
	/** Shorter summary for the work card (falls back to `summary`). */
	cardSummary?: string;
	tags: string[];
	/** Spans the full row in the work grid. */
	wide?: boolean;
	/** CSS gradient used for placeholder media. */
	gradient: string;
	/** Real image used for the card + cover, when available. */
	thumbnail?: ProjectThumbnail;
	/** Concept/sample project — shows a "self-directed build" note. */
	concept?: boolean;
	role: string;
	engagement: string;
	stack: string[];
	delivered: string[];
	links: ProjectLinks;
	caseStudy: CaseSegment[];
}

export interface AdjacentProjects {
	prev: Project | null;
	next: Project | null;
}
