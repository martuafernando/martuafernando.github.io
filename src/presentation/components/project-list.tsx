
'use client';

import React, { useEffect, useRef } from "react";
import { useProjects } from "@/presentation/contexts/project-context";
import { ProjectThumbnail, ProjectThumbnailSkeleton } from "@/presentation/components/project-thumbnail";

const ProjectList: React.FC = () => {
  const { projects, loading } = useProjects();
  const imagesRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
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

    imagesRef.current.forEach((image) => {
      if (image) observer.observe(image);
    });

    return () => {
      imagesRef.current.forEach((image) => {
        if (image) observer.unobserve(image);
      });
    };
  }, [projects]);

  if (loading) {
    return (
      <>
        <ProjectThumbnailSkeleton />
        <ProjectThumbnailSkeleton />
        <ProjectThumbnailSkeleton />
      </>
    );
  }

  return (
    <>
      {projects.map((project, i) => (
        <ProjectThumbnail
          key={project.id}
          project={project}
          ref={(el) => {
            imagesRef.current[i] = el!;
          }}
          href={`/project/${project.id}`}
        />
      ))}
    </>
  );
};

export default ProjectList;
