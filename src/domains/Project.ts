export default interface Project {
  id: string;
  title: string;
  description: string;
  projectUrl: string;
  role: string;
  tools: string[];
  thumbnailAlt: string;
  category: string;
  desktopThumbnailUrl: string;
  desktopThumbnailWidth: number;
  desktopThumbnailHeight: number;
  mobileThumbnailUrl: string;
  mobileThumbnailWidth: number;
  mobileThumbnailHeight?: number;
}