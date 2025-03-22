import type Position from "./Position";

export default interface Experience {
  companyName: string;
  companyUrl: string;
  companyLogoUrl: string;
  companyLogoHorizontalUrl: string;
  companyDescription: string;
  position: Position[];
}