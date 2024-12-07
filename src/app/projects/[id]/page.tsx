import {
  getAllProjects,
  getProjectById,
} from "@/data/repositories/projects-repository";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { MDXRemote } from "next-mdx-remote/rsc";
import Project from "@/domain/entities/project";
import { breakpoint } from "@/presentation/constant/breakpoint";
import ToolsIcon from "@/presentation/components/tools-icon-component";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const project: Project = getProjectById(params.id)!;
  return {
    title: `${project.title} - M.Fernando N.Sibarani`,
    description: project.description,
  };
}

export default function ProjectPage({
  params,
}: {
  readonly params: { id: string };
}) {
  const project: Project = getProjectById(params.id)!;

  return (
    <>
      <div className="relative z-10">
        <picture>
          <source
            media={`(min-width: ${breakpoint.sm}px)`}
            srcSet={project.desktopThumbnailUrl}
            width={project.desktopThumbnailWidth}
            height={project.desktopThumbnailHeight}
          />
          <img
            className="w-full object-contain transform-gpu box-border animate-scaleDown"
            src={project.mobileThumbnailUrl}
            width={project.mobileThumbnailWidth}
            height={project.mobileThumbnailHeight}
            alt={project.thumbnailAlt}
          />
        </picture>
      </div>

      <div className="max-w-3xl mx-auto p-4 lg:p-0">
        <section className="mt-16">
          <h1 className="text-5xl font-bold">{project?.title}</h1>
          {project?.projectUrl && (
            <Link
              href="https://martuafernando.github.io/katalog-restoran/"
              className="flex items-center"
              target="_blank"
            >
              <span className="text-blue-500  flex items-center ml-1 gap-1 hover-underline-animation">
                Visit Website <FiExternalLink size={16} />
              </span>
            </Link>
          )}

          <div className="mt-2 ml-1 flex flex-wrap gap-2">
            <p className="text-gray-500">
              <span className="font-bold">Role:</span> {project.role}
            </p>
            <span className="hidden sm:block text-gray-500">•</span>
            <p className="text-gray-500">
              <span className="font-bold">Category:</span> {project.category}
            </p>
          </div>

          <ToolsIcon tools={project.tools ?? []} className="mt-8 ml-1" />
        </section>

        {project?.description && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold">Project Description</h2>
            <p className="text-lg text-gray-500 mt-4">{project.description}</p>
          </section>
        )}

        <article className="mt-16 prose prose-headings:text-black prose-h1:text-5xl prose-h2:text-3xl">
          <MDXRemote source={project.content} />
        </article>
      </div>
    </>
  );
}

export function generateStaticParams() {
  const projects = getAllProjects();

  if (!projects || projects.length === 0) {
    return [{ id: "" }];
  }

  const params = projects.map((project) => ({
    id: project.id,
  }));

  return params;
}
