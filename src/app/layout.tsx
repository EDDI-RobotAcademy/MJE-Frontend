import type { Metadata, Viewport } from "next";
import "./globals.css";
import ConditionalHeader from "@/home/ui/layout/ConditionalHeader";

export const metadata: Metadata = {
  title: "Dehangsa",
  description: "Dehangsa",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  verification: {
    google: "WbSW1E5j3I0d7rw850rgtcRIW7sJyu0Tj8qm7IaIE78",
    other: {
      "naver-site-verification": ["7b86837c520ae5cf87ec9507d9e4f7637727f79a"],
      "msvalidate.01": ["ED25C0EC98AA9D469525B92DE3A521E3"],
    },
  },
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
