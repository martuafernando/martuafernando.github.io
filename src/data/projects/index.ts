import type { AdjacentProjects, Project } from "~/domain/project";
import { buncisPertaminaKontinental } from "./buncis-pertamina-kontinental";
import { cariResto } from "./cari-resto";

/** One file per project. Order here is the order shown on the site. */
export const projects: Project[] = [buncisPertaminaKontinental, cariResto];

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
		next:
			index >= 0 && index < projects.length - 1 ? projects[index + 1] : null,
	};
}
