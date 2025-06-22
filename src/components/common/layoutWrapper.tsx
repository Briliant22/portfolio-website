import Navbar from "./navbar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-screen py-[64px] px-[40px] sm:px-[96px] md:px-[140px] lg:px-[200px]">
      <Navbar />
      {children}
    </main>
  );
}
