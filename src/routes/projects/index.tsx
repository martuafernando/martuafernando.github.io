import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import { posix as posixPath } from "node:path";
import { ProjectList, ProjectListSkeleton } from "~/components/ui/ProjectList";
import type Project from "~/domains/Project";

export const loadProjects = server$(() => {
	const modules = import.meta.glob("/contents/projects/**/*.mdx", {
		eager: true,
	});

	const projects: Project[] = Object.entries(modules).map(
		([filePath, value]) => {
			const data = (value as { frontmatter: Project }).frontmatter;
			const dir = posixPath.dirname(filePath);

			return {
				...data,
				desktopThumbnailUrl: posixPath.join(dir, data.desktopThumbnailUrl),
				mobileThumbnailUrl: posixPath.join(dir, data.mobileThumbnailUrl),
			};
		},
	);

	return projects;
});

export default component$(() => {
	const projects = useResource$(() => {
		return loadProjects();
	});

	return (
		<>
			<h1 class="text-5xl font-bold text-center mt-8">Projects</h1>
			<Resource
				value={projects}
				onPending={() => <ProjectListSkeleton />}
				onResolved={(projects) => (
					<ProjectList
						projects={[...projects, ...projects, ...projects, ...projects]}
						class="mx-auto max-w-screen-2xl mt-12 mb-8 px-4 md:px-8"
					/>
				)}
			/>
		</>
	);
});
