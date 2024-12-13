import { FiArrowDown } from "react-icons/fi";
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
      <FiArrowDown size={48} className="mx-auto mt-8 animate-upDown" />
      <ProjectList projects={projects} />
    </section>
  );
}
