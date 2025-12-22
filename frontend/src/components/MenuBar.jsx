"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../app/globals.css";

export default function MenuBar() {
  const pathname = usePathname();

  const isProjects = pathname?.startsWith("/projects");
  const isDesign = pathname?.startsWith("/design");
  const isBlog = pathname?.startsWith("/blog");
  const isMisc = pathname?.startsWith("/misc");
  const isAbout = pathname === "/" && !isProjects && !isDesign && !isBlog && !isMisc;

  const linkClass = (active) =>
    active ? "text-black" : "text-[#666666] hover:text-black";

  return (
    <nav className="menu-bar">
      <ul>
        <li>
          <Link href="/" className={linkClass(isAbout)}>
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className={linkClass(isProjects)}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/design" className={linkClass(isDesign)}>
            Design
          </Link>
        </li>
        <li>
          <Link href="/blog" className={linkClass(isBlog)}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="/misc" className={linkClass(isMisc)}>
            Misc.
          </Link>
        </li>
      </ul>
    </nav>
  );
}