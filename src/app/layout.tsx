import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/home/ui/layout/Header";

export const metadata: Metadata = {
  title: "MJE Frontend",
  description: "MJE Frontend Application",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
