import Footer from "@/presentation/components/footer-component";
import Header from "@/presentation/components/header-component";

export default function CommonLayout({
  children,
  className = '',
}: {
  readonly children: React.ReactNode;
  readonly className?: string;
}) {
  return (
    <>
      <Header />
      <main className={`my-20 bg-white ${className}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
