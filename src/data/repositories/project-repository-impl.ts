import Project from "@/domain/entities/project";
import { ProjectRepository } from "@/domain/repositories/project-repository";

export default class ProjectRepositoryImpl implements ProjectRepository {
  getProjects(): Promise<Project[]> {
    return Promise.resolve([
      {
        id: "cari-resto",
        title: "Cari Resto",
        thumbnailAlt: "Cari Resto Thumbnail",
        category: "Web Development",
        desktopThumbnailUrl: "/images/portfolio-thumbnail/cari-resto-desktop-thumbnail.jpg",
        desktopThumbnailWidth: 1600,
        desktopThumbnailHeight: 1000,
        mobileThumbnailUrl: "/images/portfolio-thumbnail/cari-resto-mobile-thumbnail.jpg",
        mobileThumbnailWidth: 800,
        mobileThumbnailHeight: 1000,
      },
    ]);
  }
}