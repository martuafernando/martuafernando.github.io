export default interface Project {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly thumbnailAlt: string;

  readonly desktopThumbnailUrl: string;
  readonly desktopThumbnailWidth: number;
  readonly desktopThumbnailHeight: number;

  readonly mobileThumbnailUrl: string;
  readonly mobileThumbnailWidth: number;
  readonly mobileThumbnailHeight: number;
}