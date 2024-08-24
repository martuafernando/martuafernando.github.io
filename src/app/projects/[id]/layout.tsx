import CommonLayout from "@/presentation/layout/common-layout";

export default function ProjectLayout({
  params: { id },
  children,
}: Readonly<{
  readonly params: { readonly id: string };
  readonly children: React.ReactNode;
}>) {
  return (
    <CommonLayout className="overflow-x-hidden">{children}</CommonLayout>
  );
}
