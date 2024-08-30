import { getAllExperience } from "@/data/repositories/experience-repository";
import ExperienceList from "@/presentation/components/experience-list";

export default function ExperiencePage() {
  const experience = getAllExperience();

  return (
    <main className="my-20 bg-white px-4 max-w-5xl mx-auto">
      <section className="mt-4 py-8 max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold text-center">Experience</h2>
        <div className="mt-8">
          <ExperienceList experience={experience} />
        </div>
      </section>
    </main>
  );
}
