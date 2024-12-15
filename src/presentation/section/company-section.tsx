import { getAllExperience } from "@/data/repositories/experience-repository";
import Image from "next/image";
import CompanyMarqueeComonent from "../components/company-marquee";

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
      <CompanyMarqueeComonent
        experience={experience}
      />
    </section>
  );
}
