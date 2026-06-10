export interface NavLink {
	href: string;
	label: string;
}

export type SocialIconName = "github" | "linkedin" | "instagram";

export interface Social {
	label: string;
	href: string;
	icon: SocialIconName;
}

export interface Stat {
	value: string;
	label: string;
}

export interface Value {
	k: string;
	title: string;
	body: string;
}
