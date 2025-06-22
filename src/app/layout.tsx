import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/common/layoutWrapper";

export const metadata: Metadata = {
  title: "Najmi Briliant",
  description: "Najmi Briliant's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-jakarta relative overflow-hidden bg-primary-900">
        {/* Fixed background */}
        <div
          className="fixed inset-0 z-0 bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat"
          aria-hidden="true"
        />

        {/* Scrollable content wrapper on top of background */}
        <div className="relative z-10 h-full overflow-y-auto">
          <LayoutWrapper>{children}</LayoutWrapper>
        </div>
      </body>
    </html>
  );
}
