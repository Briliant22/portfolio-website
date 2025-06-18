import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Najmi Briliant",
  description: "Najm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen overflow-x-hidden antialiased font-frutiger`}
      >
        {children}
      </body>
    </html>
  );
}
