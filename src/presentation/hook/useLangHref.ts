import { usePathname } from "next/navigation";

export default function useLangHref() {
  const pathname = usePathname()

  return (segment: string) => {
  
    const parts = pathname.split("/").filter(Boolean);
    const lang = parts[0];

    return `/${lang}/${segment}`.replace('//', '/')
  }
};