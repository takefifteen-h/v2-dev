import { GeistSans } from "geist/font/sans";

import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Ismail Shaikhnag - Web Developer",
  description:
    "Ismail Shaikhnag is a skilled web developer dedicated to crafting exceptional digital experiences through design and code.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
