import type { Localized } from "~/i18n";

/** A single "fact" shown in the sticky sidebar of a policy page. */
export interface PolicyFact {
	label: Localized;
	value: Localized;
}

/**
 * One section of a policy document. A section renders its paragraphs first,
 * then its bullet list, mirroring the `.prose` layout used by case studies.
 */
export interface PolicySection {
	/** Mono kicker above the heading, e.g. "01 · What we collect". */
	segLabel: Localized;
	heading: Localized;
	paragraphs?: Localized<string[]>;
	/** Rendered as the accent-checked list (`ul.checks`). */
	checks?: Localized<string[]>;
}

export interface PolicyDocument {
	/** Product the policy covers, e.g. "catat_uang". */
	app: string;
	eyebrow: Localized;
	title: Localized;
	summary: Localized;
	/** ISO date the policy took effect — also rendered as the "last updated". */
	effectiveDate: string;
	effectiveDateLabel: Localized;
	facts: PolicyFact[];
	sections: PolicySection[];
	contactEmail: string;
}
