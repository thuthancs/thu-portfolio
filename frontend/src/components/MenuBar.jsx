"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "home", icon: "/menu-icons/home.svg" },
  { href: "/design", label: "design", icon: "/menu-icons/pen.svg" },
  { href: "/projects", label: "code", icon: "/menu-icons/code.svg" },
  { href: "/blog", label: "blog", icon: "/menu-icons/book.svg" },
];

export default function MenuBar() {
  const pathname = usePathname();

  return (
    <nav className="bottom-menu" aria-label="Primary">
      {items.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname?.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className="menu-item"
            data-label={item.label}
            aria-current={isActive ? "page" : undefined}
          >
            <Image
              src={item.icon}
              alt={item.label}
              width={28}
              height={28}
              draggable={false}
            />
          </Link>
        );
      })}
    </nav>
  );
}
