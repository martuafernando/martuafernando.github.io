import type Position from "./Position";

export default interface Experience {
  companyName: string;
  companyDescription: string;
  companyUrl: string;
  companyLogoUrl: string;
  companyLogoHorizontalUrl: string;
  position: Position[];
}