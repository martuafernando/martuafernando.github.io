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
  ]

  return (
    <section className={`group [will-change: transform] ${className}`}>
      <div className="flex w-[200%] justify-between gap-16 animate-marquee [animation-duration:_5s] sm:[animation-duration:_30s] will-change-transform">
        {experience.map((experience, index) => (
          <Image
            key={`experience.id-${index}`}
            width={48}
            height={48}
            src={experience.companyLogoHorizontalUrl}
            alt={`${experience.companyName} logo`}
            className="w-auto h-12 block grayscale hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </div>
    </section>
  );
}
