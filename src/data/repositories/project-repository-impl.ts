import Project from "@/domain/entities/project";
import ProjectDetail from "@/domain/entities/project-detail";
import { ProjectRepository } from "@/domain/repositories/project-repository";

export default class ProjectRepositoryImpl implements ProjectRepository {
  getProjects(): Promise<Project[]> {
    return Promise.resolve(projects);
  }

  getProjectDetail(id: string): Promise<ProjectDetail | null> {
    const project = projects.find((project) => project.id === id);
    return Promise.resolve(project ?? null);
  }
}

const projects = [
  {
    id: "cari-resto",
    title: "Cari Resto",
    description: "Cari Resto is a web application that helps users find restaurants based on their preferences. The goal of this project is to fulfill the requirements of the Front-End Web Developer Expert class from Dicoding.",
    projectUrl: "https://martuafernando.github.io/katalog-restoran/",
    role: "Developer",
    tools: ["HTML", "CSS", "JavaScript"],
    thumbnailAlt: "Cari Resto Thumbnail",
    category: "Web Development",
    desktopThumbnailUrl: "/images/portfolio-thumbnail/cari-resto-desktop-thumbnail.jpg",
    desktopThumbnailWidth: 1600,
    desktopThumbnailHeight: 1000,
    mobileThumbnailUrl: "/images/portfolio-thumbnail/cari-resto-mobile-thumbnail.jpg",
    mobileThumbnailWidth: 800,
    mobileThumbnailHeight: 1000,
  },
];