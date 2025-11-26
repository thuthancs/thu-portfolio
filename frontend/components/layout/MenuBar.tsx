import Link from "next/link"

export default function MenuBar() {
  const menuItems = [
    { label: "about", href: "/about" },
    { label: "projects", href: "/projects" },
    { label: "creative", href: "/creative" },
    { label: "writing", href: "/writing" },
    { label: "deep dives", href: "/deep-dives" },
    { label: "misc", href: "/misc" },
    { label: "contact", href: "/contact" },
  ]

  return (
    <nav className="bg-white border-b-2 border-black px-6 py-4">
      <ul className="flex justify-center gap-8 text-xl">
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

