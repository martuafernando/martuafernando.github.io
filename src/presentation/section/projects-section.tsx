import ProjectList from "../components/project-list";
import { getAllProjects } from "@/data/repositories/projects-repository";

interface ProjectsSectionProps {
  className?: string
}

export default function ProjectsSection(props: Readonly<ProjectsSectionProps>) {
  const { className } = props
  const projects = getAllProjects();

  return (
    <section className={className}>
      <h3 className="text-5xl font-bold text-center">Projects</h3>
      <ProjectList className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-16" projects={projects} />
    </section>
  );
}
