import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import CallToActionComponent from "@/presentation/components/call-to-action-component";
import CommonLayout from "@/presentation/layout/common-layout";
import { Metadata } from "next";
import { FaEnvelope } from "react-icons/fa";
import AboveTheFoldSection from "@/presentation/section/above-the-fold-section";
import ProjectsSection from "@/presentation/section/projects-section";
import ExperiencesSection from "@/presentation/section/experiences-section";

export const metadata: Metadata = {
  title: "M.Fernando N.Sibarani",
  description: "M.Fernando N.Sibarani's personal website",
};

export default function Home() {
  return (
    <CommonLayout>
      <main className="mb-24">
        <AboveTheFoldSection className="w-full h-[calc(100vh-72px)] rounded-b-[64px] sm:rounded-b-[120px]" />
        <ProjectsSection className="mt-4 py-8 max-w-3xl mx-auto" />
        <ExperiencesSection className="mt-4 py-8 max-w-3xl mx-auto" />

        <section className="mt-4 py-8 max-w-5xl mx-auto">
          <CallToActionComponent
            title="Let's work together"
            links={[
              <Link
                key="email"
                href="mailto:mailto:fernandosibarani45@gmail.com"
                className="flex items-center outline outline-1 p-4 rounded-lg bg-black text-white"
              >
                <FaEnvelope size={24} />
                <span className="flex items-center ml-2 gap-1 hover-underline-animation after:bg-white">
                  Email Me <FiExternalLink size={16} />
                </span>
              </Link>,
            ]}
          />
        </section>
      </main>
    </CommonLayout>
  );
}
