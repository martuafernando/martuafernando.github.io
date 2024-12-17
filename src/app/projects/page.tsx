import { getAllProjects } from "@/data/repositories/projects-repository";
import ProjectList from "@/presentation/components/project-list";

export const metadata = {
  title: "Projects",
  description: "Projects created by Martua Fernando",
};

export default function ProjectsPage() {
  const projects = [
    ...getAllProjects(),
  ];

  return (
    <>
      <h1 className="text-5xl font-bold text-center">Projects</h1>
      <div className="mt-8">
        <ProjectList projects={projects} />
      </div>
    </>
  );
}
