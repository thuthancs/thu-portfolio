"use client"

import Link from "next/link"
import { useState } from "react"
import WindowControls from "../../components/layout/WindowControls"

interface WindowData {
  id: string
  title: string
  content?: string
  position: { top: string; left: string }
  size: { width: string; height: string }
  href: string
}

const windows: WindowData[] = [
  {
    id: "about",
    title: "about",
    content: "a long story about me, where i come from and the big questions i'm trying to answer",
    position: { top: "10%", left: "5%" },
    size: { width: "500px", height: "300px" },
    href: "/about",
  },
  {
    id: "creative",
    title: "creative",
    position: { top: "45%", left: "12%" },
    size: { width: "500px", height: "300px" },
    href: "/creative",
  },
  {
    id: "writing",
    title: "writing",
    position: { top: "30%", left: "35%" },
    size: { width: "500px", height: "300px" },
    href: "/writing",
  },
  {
    id: "misc",
    title: "misc",
    position: { top: "55%", left: "60%" },
    size: { width: "500px", height: "300px" },
    href: "/misc",
  },
  {
    id: "projects",
    title: "projects",
    position: { top: "8%", left: "55%" },
    size: { width: "500px", height: "300px" },
    href: "/projects",
  },
]

export default function ExplorePage() {
  const [hoveredWindow, setHoveredWindow] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#f5f5f0] relative overflow-hidden p-8">
      {windows.map((window, index) => (
        <Link
          key={window.id}
          href={window.href}
          className="absolute transition-all duration-300 ease-out block"
          style={{
            top: window.position.top,
            left: window.position.left,
            width: window.size.width,
            height: window.size.height,
            zIndex: hoveredWindow === window.id ? 50 : 10 + index,
            filter: hoveredWindow && hoveredWindow !== window.id ? "blur(3px)" : "blur(0px)",
            opacity: hoveredWindow && hoveredWindow !== window.id ? 0.7 : 1,
            transform: hoveredWindow === window.id ? "scale(1.02)" : "scale(1)",
          }}
          onMouseEnter={() => setHoveredWindow(window.id)}
          onMouseLeave={() => setHoveredWindow(null)}
        >
          {/* Window container with border and shadow */}
          <div className="w-full h-full bg-white border-4 border-black rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col cursor-pointer hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-shadow">
            {/* Window header */}
            <div className="border-b-4 border-black p-3 flex items-center gap-2">
              <WindowControls />
            </div>

            {/* Window content */}
            <div className="flex-1 p-6">
              <h2 className="text-3xl font-bold mb-4">{window.title}</h2>
              {window.content && <p className="text-lg leading-relaxed">{window.content}</p>}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}