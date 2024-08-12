"use client";

import CommonLayout from "@/presentation/layout/common-layout";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagramSquare, FaLongArrowAltDown } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { useEffect, useRef } from "react";
import useWindowWidth from "@/presentation/hooks/useWindowWidth";
import Link from "next/link";

export default function Home() {
  const isMobile = useWindowWidth() < 640;
  const imagesRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("focused");
          } else {
            entry.target.classList.remove("focused");
          }
        });
      },
      { threshold: 1.0 }
    );

    imagesRef.current.forEach((image) => {
      if (image) observer.observe(image);
    });

    return () => {
      imagesRef.current.forEach((image) => {
        if (image) observer.unobserve(image);
      });
    };
  }, []);

  return (
    <CommonLayout>
      <section className="py-8 md:p-24 max-w-5xl mx-auto">
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

      <section className="py-8 max-w-5xl mx-auto">
        <h3 className="text-5xl font-bold text-center">Projects</h3>

        <Link
          href="/projects"
          className="block rounded-lg mt-8 text-center transition-all cursor-pointer duration-1000 ease-in-out py-8 overflow-hidden"
          ref={(el) => {
            imagesRef.current[0] = el!;
          }}
        >
          <Image
            className="mx-auto duration-1000"
            src={isMobile ? "/images/potrait.png" : "/images/landscape.jpg"}
            alt="project-1"
            width={1200}
            height={900}
            layout="responsive"
          />
          <h4 className="mt-4 text-3xl font-semibold">Project 1</h4>
          <p className="mt-2 text-gray-500">Web and App Illustration</p>
        </Link>
      </section>
    </CommonLayout>
  );
}
