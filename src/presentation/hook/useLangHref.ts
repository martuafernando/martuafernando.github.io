import { usePathname } from "next/navigation";

export default function useLangHref() {
  return (segment: string) => {
    const pathname = usePathname()
  
    const parts = pathname.split("/").filter(Boolean);
    const lang = parts[0];

    return `/${lang}/${segment}`.replace('//', '/')
  }
};