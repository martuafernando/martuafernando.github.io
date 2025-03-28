export default interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly projectUrl?: string;

  readonly role: string;
  readonly tools: string[];

  readonly category: string;
  readonly thumbnailAlt: string;

  readonly content: string;

  readonly desktopThumbnailUrl: string;
  readonly desktopThumbnailWidth: number;
  readonly desktopThumbnailHeight: number;

  readonly mobileThumbnailUrl: string;
  readonly mobileThumbnailWidth: number;
  readonly mobileThumbnailHeight: number;
}