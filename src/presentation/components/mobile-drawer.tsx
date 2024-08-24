import LinkData from "@/domain/entities/link-data";
import Link from "next/link";

export default function MobileDrawer({
  isOpen,
  links,
}: {
  readonly isOpen: boolean;
  readonly links: readonly LinkData[];
}) {
  return (
    <div
      className={`fixed flex flex-col justify-center items-center top-0 right-0 h-full w-full -z-10 bg-white text-black transition-transform duration-300 transform-gpu ${
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