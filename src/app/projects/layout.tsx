import CommonLayout from "@/presentation/layout/common-layout";

export const metadata = {
  title: "Projects",
  description: "Projects created by Martua Fernando",
};

export default function ProjectLayout({
  children,
}: Readonly<{
  readonly children: React.ReactNode;
}>) {
  return (
    <CommonLayout className="px-4 max-w-5xl mx-auto">{children}</CommonLayout>
  );
}
