import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { FiArrowDown, FiExternalLink } from "react-icons/fi";

interface AboveTheFoldSectionProps {
  className?: string;
}

export default function AboveTheFoldSection(
  props: Readonly<AboveTheFoldSectionProps>
) {
  const { className } = props;

  return (
    <section
      className={`flex flex-col items-center justify-center bg-[#f7f9f9] ${className}`}
    >
      <Image
        className="mx-auto"
        src="/logo.svg"
        alt="Logo"
        width={96}
        height={96}
      />
      <h2 className="mt-8 text-center text-5xl font-bold">Fernando Sibarani</h2>
      <p className="mt-4 text-center text-3xl text-black-400">
        Software Engineer
      </p>
      <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 font-bold text-lg">
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
  );
}
