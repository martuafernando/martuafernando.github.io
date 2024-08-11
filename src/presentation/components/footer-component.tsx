import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

export default function Footer({ className }: { readonly className?: string }) {
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
        <a
          href="https://linkedin.com/in/martuafernando"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <span className="ml-2">LinkedIn</span>
          <FiExternalLink size={16} className="ml-2" />
        </a>
        <a
          href="https://github.com/martuafernando"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <span className="ml-2">GitHub</span>
          <FiExternalLink size={16} className="ml-2" />
        </a>
        <a
          href="https://instagram.com/martuafernando"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          Instagram
          <FiExternalLink size={16} className="ml-2" />
        </a>
      </div>
      <p className="text-center mt-8">&copy; 2024 Martua Fernando</p>
    </footer>
  );
}
