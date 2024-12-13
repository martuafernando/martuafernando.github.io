"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./navbar-component";
import Link from "next/link";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isOnTop, setIsOnTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
        <Navbar />
      </div>
    </header>
  );
}
