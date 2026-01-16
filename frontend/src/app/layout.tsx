import type { Metadata } from "next";
import { Be_Vietnam_Pro, Coming_Soon } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thu Than",
  description: "Thu's Portfolio Website",
  icons: {
    icon: "/logo.PNG",
    shortcut: "/logo.PNG",
    apple: "/logo.PNG",
  },
}

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-be-vietnam",
});

const comingSoon = Coming_Soon({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-coming-soon",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      className={`${beVietnam.variable} ${comingSoon.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}