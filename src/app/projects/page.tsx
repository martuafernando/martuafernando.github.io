import { getAllProjects } from "@/data/repositories/projects-repository";
import Project from "@/domain/entities/project";
import ToolsIcon from "@/presentation/components/tools-icon-component";
import { breakpoint } from "@/presentation/constant/breakpoint";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <h1 className="text-5xl font-bold text-center">Projects</h1>
      <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

function Card({ project }: { readonly project: Project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      key={project.id}
      className="flex flex-col gap-4 shadow-xl rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      <picture>
        <source
          media={`(min-width: ${breakpoint.sm}px)`}
          srcSet={project.desktopThumbnailUrl}
          width={project.desktopThumbnailWidth}
          height={project.desktopThumbnailHeight}
        />
        <img
          className="w-full object-contain"
          src={project.mobileThumbnailUrl}
          width={project.mobileThumbnailWidth}
          height={project.mobileThumbnailHeight}
          alt={project.thumbnailAlt}
        />
      </picture>
      <div className="p-4">
        <h2 className="text-3xl font-bold">{project.title}</h2>
        <p className="mt-2 line-clamp-3">{project.description}</p>
        <ToolsIcon tools={project.tools} className="mt-4 justify-self-start" />
        <p className="text-right font-medium text-blue-500">
          <span>Read more &nbsp;</span>
          <FaArrowRight className="inline" />
        </p>
      </div>
    </Link>
  );
}
