import CommonLayout from "@/presentation/layout/common-layout";
import { Metadata } from "next";
import AboveTheFoldSection from "@/presentation/section/above-the-fold-section";
import SelectedProjectsSection from "@/presentation/section/selected-projects-section";
import CompanySection from "@/presentation/section/company-section";

export const metadata: Metadata = {
  title: "M.Fernando N.Sibarani",
  description: "M.Fernando N.Sibarani's personal website",
};

export default function Home() {
  return (
    <CommonLayout>
      <main className="pb-24 bg-[#f7f9f9]">
        <AboveTheFoldSection className="w-full h-[calc(100vh-72px)] relative z-10 bg-[#f7f9f9] rounded-b-[64px] sm:rounded-b-[120px]" />
        <CompanySection className="w-full rounded-b-[64px] pt-40 pb-16 relative -top-24 sm:rounded-b-[120px] overflow-hidden bg-white" />
        <SelectedProjectsSection className="mt-12 w-4/5 mx-auto container" />
      </main>
    </CommonLayout>
  );
}
