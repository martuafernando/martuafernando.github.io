import { getAllExperience } from "@/data/repositories/experience-repository";
import Image from "next/image";

interface CompanySectionProps {
  className?: string;
}

export default function CompanySection(props: Readonly<CompanySectionProps>) {
  const { className } = props;
  const experience = [
    ...getAllExperience(),
    ...getAllExperience(),
    ...getAllExperience(),
    ...getAllExperience(),
  ];

  return (
    <section className={`group [will-change: transform] ${className}`}>
      <div
        className={`animate-marquee flex will-change-transform`}
        style={{
          width: `${(experience.length / 4) * 100}%`,
          animationDuration: `${experience.length}s`,
        }}
      >
        {experience.map((experience, index) => (
          <>
            <div className="flex-1" key={`experience-${experience}-${index}`}>
              <Image
                className="w-fit mx-auto h-12 block grayscale hover:grayscale-0 transition-all duration-300"
                width={48}
                height={48}
                src={experience.companyLogoHorizontalUrl}
                alt={`${experience.companyName} logo`}
              />
            </div>
            <div className="flex-0 w-4"></div>
          </>
        ))}
      </div>
    </section>
  );
}
