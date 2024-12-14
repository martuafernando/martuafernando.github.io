import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export interface FooterProps {
  className?: string
}

export default function Footer(props: Readonly<FooterProps>) {
  const { className } = props

  return (
    <footer className={`bg-black text-white py-16 ` + className}>
      <Image
          src="/logo-white.svg"
          className="text-white mx-auto"
          alt="Logo"
          width={64}
          height={64}
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
