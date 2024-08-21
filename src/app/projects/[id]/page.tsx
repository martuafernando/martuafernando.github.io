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
    return <ProjectPageSkeleton />;
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
        <section className="mt-16">
          <h1 className="text-5xl font-bold">{projectDetail?.title}</h1>
          {projectDetail?.projectUrl && (
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
              <span className="font-bold">Role:</span> {projectDetail.role}
            </p>
            <span className="hidden sm:block text-gray-500">•</span>
            <p className="text-gray-500">
              <span className="font-bold">Category:</span>{" "}
              {projectDetail.category}
            </p>
          </div>

          <ToolsIcon tools={projectDetail.tools} className="mt-8 ml-1" />
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

function ProjectPageSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 w-full h-[300px]"></div>
      <div className="max-w-3xl mx-auto p-4 lg:p-0">
        <section className="mt-16 flex flex-wrap justify-between gap-y-4">
          <div>
            <h1 className="text-5xl font-bold bg-gray-200 h-12 w-3/4"></h1>
            <div className="mt-2 ml-1 flex flex-wrap gap-2">
              <p className="text-gray-500 bg-gray-200 h-5 w-1/4"></p>
              <span className="hidden sm:block text-gray-500">•</span>
              <p className="text-gray-500 bg-gray-200 h-5 w-1/4"></p>
            </div>
          </div>
          <div className="flex gap-2 justify-between">
            <div className="flex flex-col gap-1 items-center">
              <div className="bg-gray-200 h-12 w-12"></div>
              <span className="text-xs bg-gray-200 h-5 w-1/4"></span>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <div className="bg-gray-200 h-12 w-12"></div>
              <span className="text-xs bg-gray-200 h-5 w-1/4"></span>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <div className="bg-gray-200 h-12 w-12"></div>
              <span className="text-xs bg-gray-200 h-5 w-1/4"></span>
            </div>
          </div>
        </section>
        <section className="mt-16">
          <h2 className="text-3xl font-bold bg-gray-200 h-12 w-1/2"></h2>
          <p className="text-lg text-gray-500 mt-4 bg-gray-200 h-12 w-full"></p>
        </section>
      </div>
    </div>
  );
}
