"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        <MobileDrawer
          isOpen={isDrawerOpen}
          links={links}
        />
      </div>
    </>
  );
}

function DesktopNavLinks({ links }: { links: LinkData[] }) {
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
  isOpen: boolean;
  links: LinkData[];
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
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick}>
      { open ? <FaTimes size={24} /> : <FaBars size={24} /> }
    </button>
  );
}

interface LinkData {
  href: string;
  label: string;
}
