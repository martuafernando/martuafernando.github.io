import Footer from "@/components/footer-component";
import Header from "@/components/header-component";

export default function CommonLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
