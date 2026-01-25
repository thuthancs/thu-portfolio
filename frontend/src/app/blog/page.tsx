import MenuBar from "@/components/MenuBar";
import Link from "next/link";
import "../globals.css";

const posts: { date: string; title: string; href?: string }[] = [
  {
    date: "2025-12-19",
    title: "Reflection on 2025",
    href: "/blog/reflection-on-2025",
  },
  {
    date: "2025-12-31",
    title: "Why everyone should watch Culinary Class Wars",
    href: "/blog/ccw-review",
  },
  {
    date: "2026-01-06",
    title: "React from First Principles (P1) - Abstraction of the DOM",
    href: "/blog/react-p1",
  },
  {
    date: "2026-01-26",
    title: "React from First Principles (P2) - Components and State Management",
    href: "/blog/react-p2",
  },
  {
    date: "2026-01-27",
    title: "React from First Principles (P3) - Reconciliation and Diffing",
    href: "/blog/react-p3",
  },
  {
    date: "2026-01-28",
    title: "React from First Principles (P4) - Hooks and Context",
    href: "/blog/react-p4",
  },
  {
    date: "2026-01-29",
    title: "React from First Principles (P5) - Error Handling and Testing",
    href: "/blog/react-p5",
  },
  {
    date: "2026-01-30",
    title: "React from First Principles (P6) - Performance Optimization and Debugging",
    href: "/blog/react-p6",
  },
];

export default function BlogPage() {
  return (
    <div className="home-shell">
      <MenuBar />

      <section aria-labelledby="blog-heading" className="section-container">
        <div className="section-header">
          <h1 id="blog-heading" className="section-title">
            blog
          </h1>
        </div>

        {/* List of blog posts */}
        <ul className="blog-list" aria-live="polite">
          {posts.map((post) => (
            <li key={post.title} className="blog-list-item">
              {post.href ? (
                <Link href={post.href} className="blog-list-link">
                  <span className="blog-list-date">{post.date}</span>
                  <span className="blog-list-separator">|</span>
                  <span className="blog-list-title">{post.title}</span>
                </Link>
              ) : (
                <div className="blog-list-link">
                  <span className="blog-list-date">{post.date}</span>
                  <span className="blog-list-separator">|</span>
                  <span className="blog-list-title">{post.title}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
