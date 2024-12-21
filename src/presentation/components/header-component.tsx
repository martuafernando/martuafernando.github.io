"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./navbar-component";
import Link from "next/link";
import SelectComponent from "./select-component";
import { usePathname, useRouter } from "next/navigation";
import useWindowSize from "../hook/useWindowSize";
import { breakpoint } from "../constant/breakpoint";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isOnTop, setIsOnTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname()
  const router = useRouter()
  const windowSize = useWindowSize()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY || currentScrollY === 0);
      setIsOnTop(currentScrollY === 0)
      setLastScrollY(currentScrollY);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  function onLangChange(event: CustomEvent) {
    const lang = event.detail.value === 'EN' ? 'en' : 'id'
    const currentLang = localStorage.getItem('lang') ?? 'en'
    const newPath = pathname.replace(currentLang, lang)
    
    localStorage.setItem('lang', lang)
    router.push(newPath);
  }

  return (
    <header
      className={`fixed left-0 right-0 h-fit z-50 transition-all duration-1000 ease-in-out ${
        isVisible ? "top-0" : "-top-24"
      } ${isOnTop ? "bg-none" : "bg-white"}`}
    >
      <div className="flex items-center justify-between max-w-5xl px-4 xl:px-0 mx-auto py-2 sm:py-4">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={36} height={36} />
        </Link>
        <div className="flex items-center gap-8">
          { windowSize.width >= breakpoint.sm && <Navbar /> }
          <SelectComponent className="w-fit" items={['EN']} onChange={onLangChange} />
          { windowSize.width < breakpoint.sm && <Navbar /> }
        </div>
      </div>
    </header>
  );
}
