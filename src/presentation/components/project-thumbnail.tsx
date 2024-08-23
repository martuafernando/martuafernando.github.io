import { getImageProps } from "next/image";
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
    <Link
      ref={ref}
      href={href}
      className="block rounded-lg mt-8 text-center transition-all cursor-pointer duration-1000 ease-in-out pb-8 overflow-hidden relative group"
    >
      <picture>
        <source
          media={`(min-width: ${breakpoint.sm}px)`}
          srcSet={desktop}
        />
        <img
          className="w-full object-contain"
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

const ProjectThumbnailSkeleton = () => (
  <div className="animate-pulse rounded-lg mt-8 text-center pb-8 overflow-hidden">
    <div className="bg-gray-300 h-96 w-full"></div>
    <div className="mt-8 bg-gray-300 h-8 w-3/4 mx-auto"></div>
    <div className="mt-2 bg-gray-300 h-6 w-1/2 mx-auto"></div>
  </div>
);

export {ProjectThumbnail, ProjectThumbnailSkeleton};
