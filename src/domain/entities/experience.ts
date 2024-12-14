import Position from "./position";

export default interface Experience {
  readonly id: string;
  readonly companyName: string;
  readonly companyUrl: string;
  readonly companyLogoUrl: string;
  readonly companyLogoHorizontalUrl: string;
  readonly companyDescription: string;
  readonly position: Position[];
}