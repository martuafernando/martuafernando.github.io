import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import CallToActionComponent from "./call-to-action-component";
import { FaEnvelope } from "react-icons/fa";

export interface FooterProps {
  className?: string
}

export default function Footer(props: Readonly<FooterProps>) {
  const { className } = props

  return (
    <footer className={`bg-black text-white py-16 ${className}`}>
      <Image
        src="/logo-white.svg"
        className="text-white mx-auto"
        alt="Logo"
        width={64}
        height={64}
      />
      <CallToActionComponent
        className="my-12"
        isVertical
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
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 w-fit mx-auto mt-8 text-xl">
        <Link
          href="https://linkedin.com/in/martuafernando"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-[-2px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right after:hover:origin-left after:duration-300"
        >
          <span>LinkedIn</span>
          <FiExternalLink size={16} className="ml-2" />
        </Link>
        <Link
          href="https://github.com/martuafernando"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-[-2px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right after:hover:origin-left after:duration-300"
        >
          <span>GitHub</span>
          <FiExternalLink size={16} className="ml-2" />
        </Link>
        <Link
          href="https://instagram.com/martuafernando"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-[-2px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right after:hover:origin-left after:duration-300"
        >
          Instagram
          <FiExternalLink size={16} className="ml-2" />
        </Link>
      </div>
      <p className="text-center mt-8">&copy; 2024 Martua Fernando</p>
    </footer>
  );
}
