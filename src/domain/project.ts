import type { Localized } from "~/i18n";

export interface ImpactCell {
	value: string;
	label: Localized;
}

export interface CaseSegment {
	segLabel: Localized;
	heading: Localized;
	paragraphs?: Localized<string[]>;
	checks?: Localized<string[]>;
	impact?: ImpactCell[];
}

export interface ProjectImage {
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
	summary: Localized;
	/** Shorter summary for the work card (falls back to `summary`). */
	cardSummary?: Localized;
	tags: string[];
	/** Spans the full row in the work grid. */
	wide?: boolean;
	/** Card thumbnail + detail cover image. */
	cover: ProjectImage;
	/** Detail-page gallery screenshots. */
	gallery?: ProjectImage[];
	/** Concept/sample project — shows a "self-directed build" note. */
	concept?: boolean;
	role: string;
	engagement: Localized;
	stack: string[];
	delivered: Localized<string[]>;
	links: ProjectLinks;
	caseStudy: CaseSegment[];
}

export interface AdjacentProjects {
	prev: Project | null;
	next: Project | null;
}
