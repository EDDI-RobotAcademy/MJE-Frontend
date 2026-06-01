import type { Metadata, Viewport } from "next";
import "./globals.css";
import ConditionalHeader from "@/home/ui/layout/ConditionalHeader";

export const metadata: Metadata = {
  title: "Dehangsa",
  description: "Dehangsa",
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
        <ConditionalHeader />
        {children}
      </body>
    </html>
  );
}
