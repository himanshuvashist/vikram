import type { Metadata } from "next";
import { interFont } from "@/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShutterBlaze",
  description: "Photography and videography in faridabad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interFont.className}>{children}</body>
    </html>
  );
}
