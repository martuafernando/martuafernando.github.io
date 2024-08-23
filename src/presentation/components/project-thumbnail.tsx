import React, { forwardRef, RefAttributes } from "react";
import Link from "next/link";
import Project from "@/domain/entities/project";
import { breakpoint } from "../constant/breakpoint";

interface ProjectThumbnailProps {
  project: Project;
  href: string;
}

const ProjectThumbnail: React.ForwardRefExoticComponent<
  ProjectThumbnailProps & RefAttributes<HTMLAnchorElement>
> = forwardRef<HTMLAnchorElement, ProjectThumbnailProps>(({
  project,
  href,
}, ref) => {

  return (  
    <Link
      ref={ref}
      href={href}
      className="block rounded-lg mt-8 text-center transition-all cursor-pointer duration-1000 ease-in-out pb-8 overflow-hidden relative group"
    >
      <picture>
        <source
          media={`(min-width: ${breakpoint.sm}px)`}
          srcSet={project.desktopThumbnailUrl}
          width={project.desktopThumbnailWidth}
          height={project.desktopThumbnailHeight}
        />
        <img
          className="w-full object-contain scale-95 duration-1000 ease-in-out"
          src={project.mobileThumbnailUrl}
          width={project.mobileThumbnailWidth}
          height={project.mobileThumbnailHeight}
          alt={project.thumbnailAlt}
        />
      </picture>
      <h4 className="mt-8 text-3xl font-semibold">{project.title}</h4>
      <p className="mt-2 text-gray-500">{project.category}</p>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
    </Link>
  );
});

ProjectThumbnail.displayName = "ProjectThumbnail";

export default ProjectThumbnail;
