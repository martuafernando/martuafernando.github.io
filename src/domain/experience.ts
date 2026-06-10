export interface SubRole {
	role: string;
	meta: string;
}

export interface TimelineNode {
	period: string;
	badge?: string;
	title: string;
	org: string;
	current?: boolean;
	subRoles?: SubRole[];
	points?: string[];
}
