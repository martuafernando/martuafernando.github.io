"use client";

import React, { useEffect, useRef } from "react";
import ProjectThumbnail from "@/presentation/components/project-thumbnail";
import Project from "@/domain/entities/project";
import useWindowSize from "../hook/useWindowSize";

interface ProjectListProps {
  projects: Project[];
  className?: string;
}

export default function ProjectList(props: Readonly<ProjectListProps>) {
  const { projects, className } = props;
  const imagesRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const currentImagesRef = imagesRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const eventType = entry.isIntersecting ? "mouseover" : "mouseout";
          const event = new MouseEvent(eventType, {
            bubbles: true,
            cancelable: true,
          });
          entry.target.dispatchEvent(event);
        }
      },
      { threshold: 0.8 }
    );

    for (const image of currentImagesRef) {
      if (image) observer.observe(image);
    }

    return () => {
      for (const image of currentImagesRef) {
        if (image) observer.unobserve(image);
      }
    };
  }, [projects]);

  return (
    <div className={`mx-auto ${className}`}>
      {projects.map((project, i) => (
        <ProjectThumbnail
          key={project.id}
          project={project}
          ref={(el: HTMLElement | null) => {
            imagesRef.current[i] = el!;
          }}
          href={`/projects/${project.id}`}
        />
      ))}
    </div>
  );
}
