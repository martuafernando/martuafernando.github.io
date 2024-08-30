export default interface Position {
  readonly title: string;
  readonly employmentType: string;
  readonly location: string;
  readonly locationType: string;
  readonly startDate: string;
  readonly endDate?: string;
  readonly descriptionPoints: string[];
}