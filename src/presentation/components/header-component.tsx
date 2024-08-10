import Image from "next/image";
import Navbar from "./navbar-component";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 fixed top-0 left-0 right-0 h-fit bg-white">
      <div className="flex items-center">
        <Image src="/logo.svg" alt="Logo" width={36} height={36} />
        <div className="font-bold text-2xl">artua Fernando</div>
      </div>
      <Navbar />
    </header>
  );
}