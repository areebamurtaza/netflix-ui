import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Netflix UI Clone",
  description: "Netflix-inspired frontend built with Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-zinc-900">{children}</body>
    </html>
  );
}
