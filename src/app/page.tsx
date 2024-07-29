import CommonLayout from "@/layout/common-layout";

export default function Home() {
  return (
    <CommonLayout>
      <h2>Welcome to My App</h2>
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </CommonLayout>
  );
}
