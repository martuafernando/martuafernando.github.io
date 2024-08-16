import Image from "next/image";
import useWindowWidth from "../hooks/useWindowWidth";
import React, { forwardRef, RefAttributes } from "react";
import Link from "next/link";
import Project from "@/domain/entities/project";

interface ProjectThumbnailProps {
  project: Project;
  href: string;
}

const ProjectThumbnail: React.ForwardRefExoticComponent<
  ProjectThumbnailProps & RefAttributes<HTMLAnchorElement>
> = forwardRef<HTMLAnchorElement, ProjectThumbnailProps>((props, ref) => {
  const isMobile = useWindowWidth() < 640;

  return (
    <Link
      ref={ref}
      href={props.href}
      className="block rounded-lg mt-8 text-center transition-all cursor-pointer duration-1000 ease-in-out py-8 overflow-hidden relative group"
    >
      <Image
        className="mx-auto duration-1000 scale-95"
        src={
          isMobile
            ? props.project.mobileThumbnailUrl
            : props.project.desktopThumbnailUrl
        }
        alt={props.project.thumbnailAlt}
        width={
          isMobile
            ? props.project.mobileThumbnailWidth
            : props.project.desktopThumbnailWidth
        }
        height={
          isMobile
            ? props.project.mobileThumbnailHeight
            : props.project.desktopThumbnailHeight
        }
        priority={true}
      />
      <h4 className="mt-8 text-3xl font-semibold">{props.project.title}</h4>
      <p className="mt-2 text-gray-500">{props.project.category}</p>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
    </Link>
  );
});

export default ProjectThumbnail;
