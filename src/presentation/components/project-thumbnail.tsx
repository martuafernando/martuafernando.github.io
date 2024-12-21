import React from "react";
import Link from "next/link";
import Project from "@/domain/entities/project";
import Image from "next/image";

interface ProjectThumbnailProps {
  project: Project;
  href: string;
}

function ProjectThumbnail(props: Readonly<ProjectThumbnailProps>) {
  const { project, href } = props;

  return (
    <Link
      href={href}
      className="block mt-8 text-center cursor-pointer group hover"
    >
      <div
        className="relative rounded-lg overflow-hidden"
        style={{ paddingTop: "75%" }}
      >
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={project.desktopThumbnailUrl}
          width={project.desktopThumbnailWidth}
          height={project.desktopThumbnailHeight}
          alt={project.thumbnailAlt}
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
      </div>
    </Link>
  );
}

ProjectThumbnail.displayName = "ProjectThumbnail";

export default ProjectThumbnail;
