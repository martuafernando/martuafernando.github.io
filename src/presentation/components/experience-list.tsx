import Experience from "@/domain/entities/experience";
import ExperienceItem from "./experience-item";

export default function ExperienceList({
  experience,
  className,
}: {
  readonly className?: string;
  readonly experience: Experience[];
}) {
  return (
    <div className={className}>
      {experience.map((experience) => (
        <ExperienceItem
          key={experience.companyName}
          experience={experience}
          className="border-t first:border-none py-8 sm:p-8"
        />
      ))}
    </div>
  );
}
