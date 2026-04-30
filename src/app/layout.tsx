import type { Metadata } from "next";
import "./globals.css";
import Header from "@/home/ui/layout/Header";

export const metadata: Metadata = {
  title: "MJE Frontend",
  description: "MJE Frontend Application",
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
