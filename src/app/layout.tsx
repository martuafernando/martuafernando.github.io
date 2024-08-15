import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ProjectProvider } from "@/presentation/contexts/project-context";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Martua Fernando",
  description: "Martua Fernando's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={poppins.className}>
        <ProjectProvider>{children}</ProjectProvider>
      </body>
    </html>
  );
}
