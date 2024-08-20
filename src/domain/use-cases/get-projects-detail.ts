import { ProjectRepository } from "../repositories/project-repository";

export default class GetProjectDetail {
  projectRepository: ProjectRepository;

  constructor(projectRepository: ProjectRepository) {
    this.projectRepository = projectRepository;
  }

  async execute(id: string) {
    return this.projectRepository.getProjectDetail(id);
  }

}