"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import ProjectRepositoryImpl from "@/data/repositories/project-repository-impl";
import ProjectDetail from "@/domain/entities/project-detail";
import GetProjectDetail from "@/domain/use-cases/get-projects-detail";

interface ProjectDetailContextProps {
  projectDetail: ProjectDetail | null;
  loading: boolean;
}

const ProjectDetailContext = createContext<
  ProjectDetailContextProps | undefined
>(undefined);

export function ProjectDetailProvider({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async (id: string) => {
      const projectRepository = new ProjectRepositoryImpl();
      const getProjectDetail = new GetProjectDetail(projectRepository);

      const projects = await getProjectDetail.execute(id);
      setProject(projects);
      setLoading(false);
    };

    fetchProjects(id);
  }, []);

  return useMemo(
    () => (
      <ProjectDetailContext.Provider
        value={{ projectDetail: project, loading }}
      >
        {children}
      </ProjectDetailContext.Provider>
    ),
    [project, loading]
  );
}

export function useProjectDetail(): ProjectDetailContextProps {
  const context = useContext(ProjectDetailContext);
  if (!context) {
    throw new Error("useProjectDetail must be used within a ProjectDetailProvider");
  }
  return context;
};
