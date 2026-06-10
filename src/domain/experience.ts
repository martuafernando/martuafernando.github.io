import type { Localized } from "~/i18n";

export interface SubRole {
	role: Localized;
	meta: string;
}

export interface TimelineNode {
	period: string;
	badge?: Localized;
	title: Localized;
	org: string;
	current?: boolean;
	subRoles?: SubRole[];
	points?: Localized<string[]>;
}
