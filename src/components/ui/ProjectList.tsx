import { type ClassList, component$, useSignal } from "@builder.io/qwik";
import { ProjectItem } from "./ProjectItem";
import type Project from "~/domains/Project";
import { ToggleGroup } from "./ToggleGroup";
import { Select } from "./Select";

export interface ProjectListProps {
	class?: ClassList;
	projects: Array<Project>;
}

export const ProjectList = component$((props: ProjectListProps) => {
	const projects = props.projects;

	const categoryList = [
		"All",
		...[...new Set(projects.map((it) => it.category))],
	];
	const activeCategory = useSignal<string>(categoryList[0]);

	const toolsFilterOptions = [
		"All Technology",
		...[...new Set(projects.flatMap((it) => it.tools))],
	];
	const activeToolsFilterOptions = useSignal<string>(toolsFilterOptions[0]);

	const displayedProjects = projects.filter(
		(project) =>
			(activeCategory.value === categoryList[0] ||
				project.category === activeCategory.value) &&
			(activeToolsFilterOptions.value === "All Technology" ||
				project.tools.some((it) => it === activeToolsFilterOptions.value)),
	);

	return (
		<div class={props.class}>
			<div class="flex flex-wrap gap-y-4 items-center justify-between">
				<Select
					placeholder="Technology"
					items={toolsFilterOptions}
					bind:value={activeToolsFilterOptions}
					floating="bottom-start"
				/>
				<div class="flex gap-2 overflow-auto whitespace-nowrap py-4">
					<ToggleGroup items={categoryList} bind:value={activeCategory} />
				</div>
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-12 mt-6">
				{displayedProjects.map((project) => (
					<ProjectItem
						key={project.id}
						project={project}
						href={`/projects/${project.id}`}
					/>
				))}
			</div>
		</div>
	);
});
