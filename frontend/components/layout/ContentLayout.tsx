"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

interface ContentSection {
  id: string
  title: string
  level: number
}

interface ContentLayoutProps {
  title: string
  description: string
  sections: ContentSection[]
  children: React.ReactNode
  backHref?: string
  backLabel?: string
}

function getBackLink(title: string): { href: string; label: string } | null {
  // Titles come in like "./projects" or "./notion-chrome-extension"
  const base = title.replace("./", "").split(" ")[0]

  if (base === "projects") return { href: "/projects", label: "back to projects" }
  if (base === "creative") return { href: "/creative", label: "back to creative" }
  if (base === "deep-dives") return { href: "/deep-dives", label: "back to deep dives" }
  if (base === "blog") return { href: "/writing", label: "back to blog" }
  if (base === "writing") return { href: "/writing", label: "back to blog" }
  if (base === "misc") return { href: "/misc", label: "back to misc" }

  return null
}

export default function ContentLayout({
  title,
  description,
  sections,
  children,
  backHref,
  backLabel,
}: ContentLayoutProps) {
  const [activeSection, setActiveSection] = useState("")
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -70% 0px" }
    )

    const elements = sections.map((section) => document.getElementById(section.id)).filter(Boolean) as Element[]
    elements.forEach((el) => observer.current?.observe(el))

    return () => {
      elements.forEach((el) => observer.current?.unobserve(el))
    }
  }, [sections])

  const hasTableOfContents = sections && sections.length > 0
  const backLink = backHref
    ? { href: backHref, label: backLabel ?? "back" }
    : getBackLink(title)

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-2">
          {backLink && (
            <div className="mb-4 text-sm">
              <Link href={backLink.href} className="underline">
                ← {backLink.label}
              </Link>
            </div>
          )}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-xl font-normal mt-2">{description}</p>
          </div>
        </div>

        {hasTableOfContents ? (
          <div className="flex">
            {/* Table of Contents - Side */}
            <div className="w-1/4 p-6 pr-1 sticky top-8 self-start">
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`block text-sm transition-colors ${
                      activeSection === section.id
                        ? "text-[#3E80D3] font-bold"
                        : "hover:text-[#3E80D3]"
                    } ${
                      section.level === 1 ? "font-medium" : "ml-4 text-gray-600"
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Main content area */}
            <div className="w-3/4 p-8 pl-1">
              {children}
            </div>
          </div>
        ) : (
          /* Full width content when no table of contents */
          <div className="px-48 py-8">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}
