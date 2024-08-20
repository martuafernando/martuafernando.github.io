"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import Project from "@/domain/entities/project";
import ProjectRepositoryImpl from "@/data/repositories/project-repository-impl";
import GetProjects from "@/domain/use-cases/get-projects";

interface ProjectContextProps {
  projects: Project[];
  loading: boolean;
}

const ProjectContext = createContext<ProjectContextProps | undefined>(
  undefined
);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectRepository = new ProjectRepositoryImpl();
      const getProjects = new GetProjects(projectRepository);

      const projects = await getProjects.execute();
      setProjects(projects);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return useMemo(
    () => (
      <ProjectContext.Provider value={{ projects, loading }}>
        {children}
      </ProjectContext.Provider>
    ),
    [projects, loading]
  );
}

export const useProjects = (): ProjectContextProps => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectProvider");
  }
  return context;
};
