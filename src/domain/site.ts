import type { Localized } from "~/i18n";

export interface NavLink {
	href: string;
	label: Localized;
}

export type SocialIconName = "github" | "linkedin" | "instagram";

export interface Social {
	label: string;
	href: string;
	icon: SocialIconName;
}

export interface Stat {
	value: string;
	label: Localized;
}

export interface Value {
	k: string;
	title: Localized;
	body: Localized;
}

/** A photo/media slot rendered as an <img>. */
export interface SiteImage {
	src: string;
	alt: string;
	width: number;
	height: number;
}
