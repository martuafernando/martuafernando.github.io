import Project from "../entities/project";
import ProjectDetail from "../entities/project-detail";

export abstract class ProjectRepository {
  abstract getProjects(): Promise<Project[]>;
  abstract getProjectDetail(id: string): Promise<ProjectDetail|null>;
}