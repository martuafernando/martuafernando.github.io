"use client";

import CommonLayout from "@/presentation/layout/common-layout";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagramSquare, FaEnvelope } from "react-icons/fa";
import { FiExternalLink, FiArrowDown } from "react-icons/fi";
import Link from "next/link";
import ProjectList from "@/presentation/components/project-list";
import CallToActionComponent from "@/presentation/components/call-to-action-component";

export default function Home() {
  return (
    <CommonLayout>
      <section className="mt-4 py-8 md:p-24 max-w-5xl mx-auto">
        <div className="sm:flex items-center gap-16">
          <div>
            <h2 className="text-5xl font-bold">Hi, I'm Martua Fernando</h2>
            <p className="text-3xl mt-2 text-black-400">Software Engineer</p>
            <p className="mt-4 text-black-400">
              I'm a Software Engineer from Indonesia with over a year of
              experience. Since 2022, I've been working at eHealth. I'm
              passionate about exploring new opportunities that allow me to
              expand my horizons and gain new experiences.
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
            <span className="flex items-center ml-2 gap-1 relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-black after:left-0 after:bottom-[-2px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right after:hover:origin-left after:duration-300">
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
            <span className="flex items-center ml-2 gap-1 relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-black after:left-0 after:bottom-[-2px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right after:hover:origin-left after:duration-300">
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
            <span className="flex items-center ml-2 gap-1 relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-black after:left-0 after:bottom-[-2px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right after:hover:origin-left after:duration-300">
              Instagram <FiExternalLink size={16} />
            </span>
          </Link>
        </div>
      </section>

      <section className="mt-4 py-8 max-w-5xl mx-auto">
        <h3 className="text-5xl font-bold text-center">Projects</h3>
        <FiArrowDown size={48} className="mx-auto mt-8 animate-upDown" />
        <ProjectList />
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
              <span className="flex items-center ml-2 gap-1 relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-black after:left-0 after:bottom-[-2px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right after:hover:origin-left after:duration-300">
                Email Me <FiExternalLink size={16} />
              </span>
            </Link>,
          ]}
        />
      </section>
    </CommonLayout>
  );
}
