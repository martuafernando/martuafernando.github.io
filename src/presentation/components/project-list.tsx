"use client";

import React, { useState } from "react";
import ProjectThumbnail from "@/presentation/components/project-thumbnail";
import Project from "@/domain/entities/project";
import SelectComponent from "./select-component";
import useWindowSize from "../hook/useWindowSize";
import { breakpoint } from "../constant/breakpoint";
import useLangHref from "../hook/useLangHref";

interface ProjectListProps {
  projects: Project[];
  className?: string;
}

export default function ProjectList(props: Readonly<ProjectListProps>) {
  const { projects, className } = props;
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeFilterTools, setActiveFilterTools] = useState("All Technology");
  const window = useWindowSize();
  const generateHref = useLangHref()

  const categoryList = [
    "All",
    ...projects
      .map((it) => it.category)
      .filter((value, index, array) => array.indexOf(value) === index),
  ];

  const toolsFilterOptions = [
    "All Technology",
    ...projects.flatMap((it) => it.tools.map((it) => it)),
  ];

  function onOrderFilterChage(event: CustomEvent) {
    setActiveFilterTools(event.detail.value);
  }

  return (
    <div className={`mx-auto max-w-screen-2xl w-[95vw] ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 overflow-auto whitespace-nowrap py-6">
          {categoryList.map((category) => (
            <ButtonChip
              key={category}
              label={category}
              isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>
        {window.width >= breakpoint.sm && (
          <SelectComponent
            items={toolsFilterOptions}
            onChange={onOrderFilterChage}
          />
        )}
      </div>
      <hr className="block container mx-auto" />

      {window.width < breakpoint.sm && (
          <SelectComponent
            className="mt-6"
            items={toolsFilterOptions}
            onChange={onOrderFilterChage}
          />
        )}

      <div
        className={
          "mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-4"
        }
      >
        {projects
          .filter(
            (project) =>
              (activeCategory === "All" ||
                project.category === activeCategory) &&
              (activeFilterTools === "All Technology" ||
                project.tools.some((it) => it === activeFilterTools))
          )
          .map((project) => (
            <ProjectThumbnail
              key={project.id}
              project={project}
              href={generateHref(`/projects/${project.id}`)}
            />
          ))}
      </div>
    </div>
  );
}

interface ButtonChipProps {
  label: string;
  onClick: () => void;
  className?: string;
  isActive: boolean;
}

function ButtonChip({
  label,
  onClick,
  className,
  isActive,
}: Readonly<ButtonChipProps>) {
  return (
    <button
      className={`font-medium px-4 py-2 rounded-full transition-all duration-300 ${
        isActive ? "bg-gray-200" : "bg-transparent"
      } ${className ?? ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
