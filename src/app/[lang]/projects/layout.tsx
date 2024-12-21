import CommonLayout from "@/presentation/layout/common-layout";

export default function ProjectLayout({
  children,
}: Readonly<{
  readonly children: React.ReactNode;
}>) {
  return (
    <CommonLayout>
      <main className={`my-36`}>
        {children}
      </main>
    </CommonLayout>
  );
}
