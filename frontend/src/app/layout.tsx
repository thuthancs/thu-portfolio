import type { Metadata } from "next";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
