import Link from "next/link"
import WindowControls from "./WindowControls"

interface SidebarProps {
  active?: "home" | "about" | "contact" | "projects" | "creative" | "blog" | "deep-dives"
}

export default function Sidebar({ active = "about" }: SidebarProps) {
  const isAboutActive = active === "about"
  const isContactActive = active === "contact"
  const isProjectsActive = active === "projects"
  const isCreativeActive = active === "creative"
  const isBlogActive = active === "blog"
  const isDeepDivesActive = active === "deep-dives"

  return (
    <aside className="w-64 bg-[#f5f5f0] border-2 border-grey rounded-3xl flex flex-col p-6">
      <div>
        <div className="mb-10">
          <WindowControls />
        </div>

        <nav className="space-y-5 text-lg">
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">
              In a nutshell
            </p>
            <Link
              href="/about"
              className={`block w-full text-left px-4 py-2 rounded-full ${
                isAboutActive
                  ? "bg-black text-white font-semibold"
                  : "hover:bg-black/5"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`block w-full text-left px-4 py-2 rounded-full ${
                isContactActive
                  ? "bg-black text-white font-semibold"
                  : "hover:bg-black/5"
              }`}
            >
              Contact
            </Link>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">
              My Work
            </p>
            <div className="space-y-1 mb-4">
              <Link
                href="/projects"
                className={`block w-full text-left px-4 py-2 rounded-full ${
                  isProjectsActive
                    ? "bg-black text-white font-semibold"
                    : "hover:bg-black/5"
                }`}
              >
                Projects
              </Link>
              <Link
                href="/deep-dives"
                className={`block w-full text-left px-4 py-2 rounded-full ${
                  isDeepDivesActive ? "bg-black text-white font-semibold" : "hover:bg-black/5"
                }`}
              >
                Deep Dives
              </Link>
              <Link
                href="/creative"
                className={`block w-full text-left px-4 py-2 rounded-full ${
                  isCreativeActive ? "bg-black text-white font-semibold" : "hover:bg-black/5"
                }`}
              >
                Creative
              </Link>
              <Link
                href="/writing"
                className={`block w-full text-left px-4 py-2 rounded-full ${
                  isBlogActive ? "bg-black text-white font-semibold" : "hover:bg-black/5"
                }`}
              >
                Blog
              </Link>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">
                  Locations
                </p>
                <Link
                  href="/"
                  className="block w-full text-left px-4 py-2 rounded-full hover:bg-black/5"
                >
                  Home
                </Link>
                <Link
                  href="/world"
                  className="block w-full text-left px-4 py-2 rounded-full hover:bg-black/5"
                >
                  The World
                </Link>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">Tags</p>
                <Link
                  href="/world?tag=python"
                  className="flex items-center gap-2 rounded-full px-2 py-1 text-sm hover:bg-black/5"
                >
                  <span className="w-3 h-3 rounded-full bg-[#4ba3ff]" />
                  <span>python</span>
                </Link>
                <Link
                  href="/world?tag=javascript/typescript"
                  className="flex items-center gap-2 rounded-full px-2 py-1 text-sm hover:bg-black/5"
                >
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span>javascript/typescript</span>
                </Link>
                <Link
                  href="/world?tag=ai/ml"
                  className="flex items-center gap-2 rounded-full px-2 py-1 text-sm hover:bg-black/5"
                >
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span>ai/ml</span>
                </Link>
                <Link
                  href="/world?tag=data"
                  className="flex items-center gap-2 rounded-full px-2 py-1 text-sm hover:bg-black/5"
                >
                  <span className="w-3 h-3 rounded-full bg-[#e88e9a]" />
                  <span>data</span>
                </Link>
                <Link
                  href="/world?tag=misc"
                  className="flex items-center gap-2 rounded-full px-2 py-1 text-sm hover:bg-black/5"
                >
                  <span className="w-3 h-3 rounded-full bg-[#d4d2d2]" />
                  <span>misc.</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  )
}


