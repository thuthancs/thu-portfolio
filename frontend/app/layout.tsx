import { Analytics } from "@vercel/analytics/next"
import 'highlight.js/styles/github-dark.css'
import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import type React from "react"
import { Suspense } from "react"
import "./globals.css"

const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-raleway",
})

export const metadata: Metadata = {
  title: "Thu's Portfolio",
  description: "A sneak peek into thu's computer",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} font-sans`}>
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
