"use client";

import { useProjectDetail } from "@/presentation/contexts/project-detail-context";
import useWindowWidth from "@/presentation/hooks/useWindowWidth";
import Image from "next/image";
import Link from "next/link";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectPage() {
  const isMobile = useWindowWidth() < 768;
  const { projectDetail, loading } = useProjectDetail();

  if (!projectDetail || loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {isMobile ? (
        <Image
          className="w-full object-contain"
          src={projectDetail.mobileThumbnailUrl}
          alt={projectDetail.thumbnailAlt}
          width={projectDetail.mobileThumbnailWidth}
          height={projectDetail.mobileThumbnailHeight}
        />
      ) : (
        <Image
          className="w-full object-contain"
          src={projectDetail.desktopThumbnailUrl}
          alt={projectDetail.thumbnailAlt}
          width={projectDetail.desktopThumbnailWidth}
          height={projectDetail.desktopThumbnailHeight}
        />
      )}

      <div className="max-w-3xl mx-auto p-4 lg:p-0">
        <section className="mt-16 flex flex-wrap justify-between gap-y-4">
          <div>
            <h1 className="text-5xl font-bold">{projectDetail?.title}</h1>
            <Link
              href="https://martuafernando.github.io/katalog-restoran/"
              className="flex items-center"
              target="_blank"
            >
              <span className="text-blue-500  flex items-center ml-2 gap-1 relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-black after:left-0 after:bottom-[-2px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right after:hover:origin-left after:duration-300">
                Visit Website <FiExternalLink size={16} />
              </span>
            </Link>

            <div className="mt-2 ml-2 flex flex-wrap gap-2">
              <p className="text-gray-500">
                <span className="font-bold">Role:</span> {projectDetail.role}
              </p>
              <span className="hidden sm:block text-gray-500">•</span>
              <p className="text-gray-500">
                <span className="font-bold">Category:</span>{" "}
                {projectDetail.category}
              </p>
            </div>
          </div>
          {getToolsIcon(projectDetail.tools)}
        </section>

        {projectDetail?.description && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold">Project Description</h2>
            <p className="text-lg text-gray-500 mt-4">
              {projectDetail.description}
            </p>
          </section>
        )}
      </div>
    </>
  );
}

function getToolsIcon(tools: string[]) {
  return (
    <div className="flex gap-2 justify-between">
      {tools.map((tool) => {
        switch (tool) {
          case "HTML":
            return (
              <div
                key={tool}
                className="flex-1 flex flex-col gap-1 items-center"
              >
                <FaHtml5 size={32} className="text-red-500" />
                <span className="text-xs">HTML</span>
              </div>
            );
          case "CSS":
            return (
              <div
                key={tool}
                className="flex-1 flex flex-col gap-1 items-center"
              >
                <FaCss3Alt size={32} className="text-blue-500" />
                <span className="text-xs">CSS</span>
              </div>
            );
          case "JavaScript":
            return (
              <div
                key={tool}
                className="flex-1 flex flex-col gap-1 items-center"
              >
                <FaNodeJs size={32} className="text-yellow-500" />
                <span className="text-xs">JavaScript</span>
              </div>
            );
          case "React":
            return (
              <div
                key={tool}
                className="flex-1 flex flex-col gap-1 items-center"
              >
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
