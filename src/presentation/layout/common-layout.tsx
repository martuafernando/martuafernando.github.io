import Footer from "@/presentation/components/footer-component";
import Header from "@/presentation/components/header-component";

export default function CommonLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="mt-16">
        {children}
      </main>
      <Footer />
    </>
  );
}
