'use client';

import React, { useEffect, useRef } from "react";
import ProjectThumbnail from "@/presentation/components/project-thumbnail";
import Project from "@/domain/entities/project";

export default function ProjectList({
  projects,
}: {
  readonly projects: Project[];
}) {
  const imagesRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const currentImagesRef = imagesRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("focused");
          } else {
            entry.target.classList.remove("focused");
          }
        });
      },
      { threshold: 0.8 }
    );

    currentImagesRef.forEach((image) => {
      if (image) observer.observe(image);
    });

    return () => {
      currentImagesRef.forEach((image) => {
        if (image) observer.unobserve(image);
      });
    };
  }, [projects]);

  return (
    <>
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
    </>
  );
};
