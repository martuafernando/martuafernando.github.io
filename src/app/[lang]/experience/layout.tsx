import CommonLayout from "@/presentation/layout/common-layout";

export default function ProjectLayout({
  children,
}: Readonly<{
  readonly children: React.ReactNode;
}>) {
  return (
    <CommonLayout>
      <main className={`my-20 px-4 max-w-5xl mx-auto`}>
        {children}
      </main>
    </CommonLayout>
  );
}
