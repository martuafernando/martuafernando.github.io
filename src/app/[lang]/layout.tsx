export function generateStaticParams() {
  const languages = ['en', 'id'];
  return languages.map((lang) => ({ lang }));
}

export default function ProjectLayout({
  children,
}: Readonly<{
  readonly children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}