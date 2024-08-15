import Project from "../entities/project";

export abstract class ProjectRepository {
  abstract getProjects(): Promise<Project[]>;
}