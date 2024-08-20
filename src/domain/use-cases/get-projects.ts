import { ProjectRepository } from "../repositories/project-repository";

export default class GetProjects {
  projectRepository: ProjectRepository;

  constructor(projectRepository: ProjectRepository) {
    this.projectRepository = projectRepository;
  }

  async execute() {
    return this.projectRepository.getProjects();
  }

}