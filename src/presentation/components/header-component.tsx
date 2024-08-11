'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./navbar-component";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <header className={`flex items-center justify-between max-w-5xl px-4 lg:px-0 mx-auto sm:py-4 fixed left-0 right-0 h-fit bg-white transition-all duration-1000 ease-in-out ${isVisible ? 'top-0' : '-top-16'}`}>
      <div className="flex items-center">
        <Image src="/logo.svg" alt="Logo" width={36} height={36} />
      </div>
      <Navbar />
    </header>
  );
}