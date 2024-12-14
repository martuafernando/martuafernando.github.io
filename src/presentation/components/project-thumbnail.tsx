import React, { forwardRef, RefAttributes, useState  } from "react";
import Link from "next/link";
import Project from "@/domain/entities/project";
import { breakpoint } from "../constant/breakpoint";
import ToolsIcon from "./tools-icon-component";
import useWindowSize from "../hook/useWindowSize";

interface ProjectThumbnailProps {
  project: Project;
  href: string;
}

const ProjectThumbnail: React.ForwardRefExoticComponent<
  ProjectThumbnailProps & RefAttributes<HTMLAnchorElement>
> = forwardRef<HTMLAnchorElement, ProjectThumbnailProps>(
  ({ project, href }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const window = useWindowSize()

    if (window.width < breakpoint.sm) {
      return (
        <Link
          ref={ref}
          href={href}
          className="block mt-8 text-center transition-all cursor-pointer duration-1000 ease-in-out group hover"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative rounded-lg overflow-hidden">
            <picture>
              <source
                media={`(min-width: ${breakpoint.sm}px)`}
                srcSet={project.desktopThumbnailUrl}
                width={project.desktopThumbnailWidth}
                height={project.desktopThumbnailHeight}
              />
              <img
                className="w-full object-contain duration-1000 ease-in-out"
                src={project.mobileThumbnailUrl}
                width={project.mobileThumbnailWidth}
                height={project.mobileThumbnailHeight}
                alt={project.thumbnailAlt}
              />
            </picture>
            <div className={`absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-0'}`}></div>
            <h4 className={`absolute inset-x-0 transition-all text-xl px-2 text-white font-semibold ${isHovered ? 'bottom-8' : '-bottom-16'}`}>
              {project.title}
            </h4>
          </div>
          <ToolsIcon
            className="mt-4 justify-center"
            tools={project.tools ?? []}
            iconSize={24}
          />
        </Link>
      );
    }

    return (
      <Link
        ref={ref}
        href={href}
        className="block mt-8 text-center transition-all cursor-pointer duration-1000 ease-in-out group hover"
      >
        <div className="relative rounded-lg overflow-hidden">
          <picture>
            <source
              media={`(min-width: ${breakpoint.sm}px)`}
              srcSet={project.desktopThumbnailUrl}
              width={project.desktopThumbnailWidth}
              height={project.desktopThumbnailHeight}
            />
            <img
              className="w-full object-contain duration-1000 ease-in-out"
              src={project.mobileThumbnailUrl}
              width={project.mobileThumbnailWidth}
              height={project.mobileThumbnailHeight}
              alt={project.thumbnailAlt}
            />
          </picture>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
          <h4 className="absolute inset-x-0 group-hover:bottom-8 transition-all text-xl text-white font-semibold">
            {project.title}
          </h4>
        </div>
        <ToolsIcon
          className="mt-4 justify-center"
          tools={project.tools ?? []}
          iconSize={24}
        />
      </Link>
    );
  }
);

ProjectThumbnail.displayName = "ProjectThumbnail";

export default ProjectThumbnail;
