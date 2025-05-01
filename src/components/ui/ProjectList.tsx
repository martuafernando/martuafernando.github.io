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

	return (
		<div class={props.class}>
			<div class="flex flex-wrap gap-y-4 items-center justify-between">
				<Select items={toolsFilterOptions} />
				<div class="flex gap-2 overflow-auto whitespace-nowrap py-4">
					<ToggleGroup items={categoryList} bind:value={activeCategory} />
				</div>
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-12 mt-6">
				{props.projects
					.filter(
						(project) =>
							activeCategory.value === categoryList[0] ||
							project.category === activeCategory.value,
					)
					.map((project) => (
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

export const ProjectListSkeleton = component$(() => {
	return (
		<div class="animate-pulse">
			<hr class="container h-1 text-gray-200 mt-4" />
			<div class="flex gap-2 overflow-auto whitespace-nowrap mt-4">
				<div class="bg-gray-200 rounded-full h-8 w-16" />
				<div class="bg-gray-200 rounded-full h-8 w-16" />
				<div class="bg-gray-200 rounded-full h-8 w-16" />
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-8 mt-6 mx-4">
				<div class="h-72 bg-gray-200 rounded " />
				<div class="h-72 bg-gray-200 rounded " />
				<div class="h-72 bg-gray-200 rounded " />
				<div class="h-72 bg-gray-200 rounded " />
				<div class="h-72 bg-gray-200 rounded " />
				<div class="h-72 bg-gray-200 rounded " />
			</div>
		</div>
	);
});
