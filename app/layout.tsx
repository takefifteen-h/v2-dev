import { GeistSans } from "geist/font/sans";

import type { Metadata } from "next";

import "./globals.css";

import GreetingAnimation from "@/components/GreetingAnimation";

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
      <body className={`${GeistSans.className} antialiased relative`}>
        <GreetingAnimation />

        {children}
      </body>
    </html>
  );
}
