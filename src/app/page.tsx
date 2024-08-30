import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaInstagramSquare,
  FaEnvelope,
} from "react-icons/fa";
import { FiExternalLink, FiArrowDown } from "react-icons/fi";
import Link from "next/link";
import ProjectList from "@/presentation/components/project-list";
import CallToActionComponent from "@/presentation/components/call-to-action-component";
import CommonLayout from "@/presentation/layout/common-layout";
import { getAllProjects } from "@/data/repositories/projects-repository";
import { Metadata } from "next";
import { getAllExperience } from "@/data/repositories/experience-repository";
import ExperienceList from "@/presentation/components/experience-list";

export const metadata: Metadata = {
  title: "M.Fernando N.Sibarani",
  description: "M.Fernando N.Sibarani's personal website",
};

export default function Home() {
  const projects = getAllProjects();
  const experience = getAllExperience();

  return (
    <CommonLayout>
      <main className="my-24 px-4 xl:px-0">
        <section className="mt-4 py-8 max-w-3xl mx-auto">
          <div className="sm:flex items-center gap-16">
            <div>
              <h2 className="text-5xl font-bold">
                Hi, I&apos;m Martua Fernando
              </h2>
              <p className="text-3xl mt-2 text-black-400">Software Engineer</p>
              <p className="mt-4 text-black-400">
                I&apos;m a Software Engineer from Indonesia with over two years
                of professional experience. Since 2022, I&apos;ve been working
                at eHealth. I&apos;m passionate about exploring new
                opportunities that allow me to expand my horizons and gain new
                experiences.
              </p>
            </div>
            <div className="hidden sm:block">
              <div className="w-48 h-48 p-8 rounded-full bg-black">
                <Image
                  className="w-full h-full"
                  src="/logo-white.svg"
                  alt="Logo"
                  width={96}
                  height={96}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-8 gap-x-8 gap-y-4 font-bold text-lg">
            <Link
              key="linkedin"
              href="https://linkedin.com/in/martuafernando"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={36} />
              <span className="flex items-center ml-2 gap-1 hover-underline-animation">
                LinkedIn <FiExternalLink size={16} />
              </span>
            </Link>
            <Link
              href="https://github.com/martuafernando"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={36} />
              <span className="flex items-center ml-2 gap-1 hover-underline-animation">
                GitHub <FiExternalLink size={16} />
              </span>
            </Link>
            <Link
              href="https://instagram.com/martuafernando"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare size={36} />
              <span className="flex items-center ml-2 gap-1 hover-underline-animation">
                Instagram <FiExternalLink size={16} />
              </span>
            </Link>
          </div>
        </section>

        <section className="mt-4 py-8 max-w-5xl mx-auto">
          <h3 className="text-5xl font-bold text-center">Projects</h3>
          <FiArrowDown size={48} className="mx-auto mt-8 animate-upDown" />
          <ProjectList projects={projects} />
        </section>

        <section className="mt-4 py-8 max-w-5xl mx-auto">
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
