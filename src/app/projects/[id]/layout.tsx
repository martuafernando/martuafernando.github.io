import { ProjectDetailProvider } from "@/presentation/contexts/project-detail-context";
import CommonLayout from "@/presentation/layout/common-layout";

export default function ProjectLayout({
  params: { id },
  children,
}: Readonly<{
  readonly params: { readonly id: string };
  readonly children: React.ReactNode;
}>) {
  return (
    <ProjectDetailProvider id={id}>
      <CommonLayout>{children}</CommonLayout>
    </ProjectDetailProvider>
  );
}
