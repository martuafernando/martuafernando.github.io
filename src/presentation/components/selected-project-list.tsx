"use client";

import React, { useEffect, useRef } from "react";
import SelectedProjectThumbnail from "@/presentation/components/selected-project-thumbnail";
import Project from "@/domain/entities/project";
import useLangHref from "../hook/useLangHref";

interface SelectedProjectListProps {
  projects: Project[];
  className?: string;
}

export default function SelectedProjectList(props: Readonly<SelectedProjectListProps>) {
  const { projects, className } = props;
  const imagesRef = useRef<HTMLElement[]>([]);
  const generateHref = useLangHref()

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
        <SelectedProjectThumbnail
          key={project.id}
          project={project}
          ref={(el: HTMLElement | null) => {
            imagesRef.current[i] = el!;
          }}
          href={generateHref(`/projects/${project.id}`)}
        />
      ))}
    </div>
  );
}
