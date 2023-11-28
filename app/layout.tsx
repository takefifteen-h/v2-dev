import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";

const GreetingAnimation = dynamic(
  () => import("@/components/GreetingAnimation"),
  {
    ssr: false,
  },
);

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
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${GeistSans.className} relative overflow-x-hidden antialiased`}
      >
        <GreetingAnimation>{children}</GreetingAnimation>
      </body>
    </html>
  );
}
