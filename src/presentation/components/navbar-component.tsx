"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import LinkData from "@/domain/entities/link-data";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isDrawerOpen]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const links = [
    {
      href: "/",
      label: "Project",
    },
    {
      href: "/",
      label: "Contact",
    },
  ];

  return (
    <>
      <div className="hidden sm:flex justify-center">
        <DesktopNavLinks links={links} />
      </div>
      <div className="sm:hidden relative flex flex-row my-4">
        <MobileMenuButton open={isDrawerOpen} onClick={toggleDrawer} />
        <MobileDrawer isOpen={isDrawerOpen} links={links} />
      </div>
    </>
  );
}

function DesktopNavLinks({ links }: { readonly links: LinkData[] }) {
  return (
    <ul className="flex gap-4">
      {links.map((link) => (
        <li
          key={link.href}
          className="text-xl hover:text-blue-900 hover:font-semibold"
        >
          <Link href={link.href}>{link.label}</Link>{" "}
        </li>
      ))}
    </ul>
  );
}

function MobileDrawer({
  isOpen,
  links,
}: {
  readonly isOpen: boolean;
  readonly links: readonly LinkData[];
}) {
  return (
    <div
      className={`fixed flex flex-col justify-center items-center top-0 right-0 h-full w-full -z-10 bg-white text-black transition-transform duration-300 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="flex flex-col justify-center items-center gap-4">
        {links.map((link) => (
          <li
            key={link.href}
            className="text-3xl hover:text-blue-900 hover:font-semibold"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileMenuButton({
  open,
  onClick,
}: {
  readonly open: boolean;
  readonly onClick: () => void;
}) {
  return (
    <button onClick={onClick}>
      {open ? <FaTimes size={24} /> : <FaBars size={24} />}
    </button>
  );
}
