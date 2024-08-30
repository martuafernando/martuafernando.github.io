import Experience from "@/domain/entities/experience";
import Position from "@/domain/entities/position";
import Image from "next/image";
import Link from "next/link";

export default function ExperienceItem({
  experience,
  className,
}: {
  readonly className?: string;
  readonly experience: Experience;
}) {
  const totalMonth = experience.position.reduce((acc, position) => {
    const start = new Date(position.startDate);
    const end = position.endDate ? new Date(position.endDate) : new Date();
    return (
      acc +
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth())
    );
  }, 0);
  const totalYear = Math.floor(totalMonth / 12);
  const experienceDuration = getReadableDurationFromDuration(
    totalYear,
    totalMonth % 12
  );

  return (
    <div className={className}>
      <Link href={experience.companyUrl} className="block hover:opacity-80">
        <div className="flex items-center space-x-4">
          <Image
            width={16}
            height={16}
            src={experience.companyLogoUrl}
            alt={`${experience.companyName} logo`}
            className="w-16 h-fit object-cover"
          />
          <div>
            <h3 className="text-xl font-medium text-black">
              {experience.companyName}
            </h3>
            <p className="text-sm text-black-400">{experienceDuration}</p>
          </div>
        </div>
        <p className="text-sm mt-2 text-gray-500">
          {experience.companyDescription}
        </p>
      </Link>

      <div className={`mt-4 ${experience.position.length > 1 ? "pl-4" : ""}`}>
        {experience.position.map((position) => (
          <PositionCard
            className={`mt-6 relative ${
              experience.position.length > 1
                ? `
              before:content-[''] before:absolute before:w-2 before:h-2 before:bg-gray-300 before:-left-5 before:top-3 before:rounded-full
              last:after:content-none after:content-[''] after:absolute after:w-[2px] after:h-full after:bg-gray-300 after:-left-[17px] after:top-7 after:rounded-full
              `
                : ""
            }`}
            key={position.title}
            position={position}
          />
        ))}
      </div>
    </div>
  );
}

function PositionCard({
  position,
  className,
}: {
  readonly position: Position;
  readonly className?: string;
}) {
  const duration = getReadableDuration(
    position.startDate,
    position.endDate ?? ""
  );
  return (
    <div className={className}>
      <h4 className="text-lg font-semibold text-black">{position.title} </h4>
      <p className="text-sm text-gray-500">{position.employmentType}</p>
      <p className="text-sm text-gray-500">{`${position.location} (${position.locationType})`}</p>
      <p className="text-sm text-gray-500">
        <span>
          {`${position.startDate} - ${
            position.endDate ? position.endDate : "Present"
          }`}
        </span>
        <span className="mx-2">•</span>
        <span>{duration}</span>
      </p>
      <ul className="list-disc list-outside ml-4 mt-2 text-gray-700">
        {position.descriptionPoints.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

function getReadableDuration(startDate: string, endDate: string | undefined) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  const totalMonth =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  const year = Math.floor(totalMonth / 12);
  const month = totalMonth % 12;

  let duration = "";
  if (year > 0) {
    duration += `${year} ${year === 1 ? "year" : "years"}`;
  }
  if (month > 0) {
    if (duration) duration += " ";
    duration += `${month} ${month === 1 ? "month" : "months"}`;
  }
  return duration;
}

function getReadableDurationFromDuration(year: number, month: number) {
  let duration = "";
  if (year > 0) {
    duration += `${year} ${year === 1 ? "year" : "years"}`;
  }
  if (month > 0) {
    if (duration) duration += " ";
    duration += `${month} ${month === 1 ? "month" : "months"}`;
  }
  return duration;
}
