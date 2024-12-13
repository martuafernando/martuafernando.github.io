import { getAllExperience } from "@/data/repositories/experience-repository";
import ExperienceList from "@/presentation/components/experience-list";
import Link from "next/link";

interface ExperiencesSectionProps {
  className?: string
}

export default function ExperiencesSection(props: Readonly<ExperiencesSectionProps>) {
  const { className } = props
  const experience = getAllExperience();

  return (
    <section className={className}>
      <h3 className="text-5xl font-bold text-center">Experience</h3>
      <div className="relative mt-8 max-h-96 overflow-hidden">
        <div className="experience-list">
          <ExperienceList experience={experience} />
        </div>
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </div>
      <Link
        href="/experience"
        className="mt-4 mx-auto block text-center text-blue-500 outline outline-1 p-4 rounded-lg hover:bg-blue-500 hover:text-white duration-300"
      >
        Read More
      </Link>
    </section>
  );
}
