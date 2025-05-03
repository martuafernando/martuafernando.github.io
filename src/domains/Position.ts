export default interface Position {
  title: string;
  employmentType: string;
  location: string;
  locationType: string;
  startDate: string; // e.g. "2024-03"
  endDate?: string;  // optional
  descriptionPoints: string[];
}