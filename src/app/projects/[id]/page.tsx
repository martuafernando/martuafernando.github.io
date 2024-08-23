import { getProjectById } from "@/data/repositories/projects-repository";
import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { MDXRemote } from "next-mdx-remote/rsc";
import Project from "@/domain/entities/project";
import { breakpoint } from "@/presentation/constant/breakpoint";

export default function ProjectPage({
  params,
}: {
  readonly params: { id: string };
}) {
  const project: Project = getProjectById(params.id)!;
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    className: "w-full object-contain",
    alt: project.thumbnailAlt,
    width: project.desktopThumbnailWidth,
    height: project.desktopThumbnailHeight,
    src: project.desktopThumbnailUrl,
  });

  return (
    <>
      <picture>
        <source media={`(min-width: ${breakpoint.sm}px)`} srcSet={desktop} />
        <img
          className="w-full object-contain"
          src={project.mobileThumbnailUrl}
          width={project.mobileThumbnailWidth}
          height={project.mobileThumbnailHeight}
          alt={project.thumbnailAlt}
        />
      </picture>

      <div className="max-w-3xl mx-auto p-4 lg:p-0">
        <section className="mt-16">
          <h1 className="text-5xl font-bold">{project?.title}</h1>
          {project?.projectUrl && (
            <Link
              href="https://martuafernando.github.io/katalog-restoran/"
              className="flex items-center"
              target="_blank"
            >
              <span className="text-blue-500  flex items-center ml-1 gap-1 relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-black after:left-0 after:bottom-[-2px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right after:hover:origin-left after:duration-300">
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

          <ToolsIcon tools={project.tools} className="mt-8 ml-1" />
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

function ToolsIcon({
  tools,
  className,
}: {
  readonly tools: string[];
  readonly className?: string;
}) {
  return (
    <div className={`flex gap-2 ${className}`}>
      {tools.map((tool) => {
        switch (tool) {
          case "HTML":
            return (
              <div key={tool} className="flex flex-col gap-1 items-center">
                <FaHtml5 size={32} className="text-red-500" />
                <span className="text-xs">HTML</span>
              </div>
            );
          case "CSS":
            return (
              <div key={tool} className="flex flex-col gap-1 items-center">
                <FaCss3Alt size={32} className="text-blue-500" />
                <span className="text-xs">CSS</span>
              </div>
            );
          case "JavaScript":
            return (
              <div key={tool} className="flex flex-col gap-1 items-center">
                <FaNodeJs size={32} className="text-yellow-500" />
                <span className="text-xs">JavaScript</span>
              </div>
            );
          case "React":
            return (
              <div key={tool} className="flex flex-col gap-1 items-center">
                <FaReact size={32} className="text-blue-500" />
                <span className="text-xs">React</span>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
