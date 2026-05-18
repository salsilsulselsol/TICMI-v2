import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TICMI PWA Showcase",
  description: "Mobile-first adaptive math learning UI for SMA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
