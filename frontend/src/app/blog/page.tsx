import MenuBar from "@/components/MenuBar";
import Link from "next/link";
import "../globals.css";

const posts: { date: string; title: string; href?: string }[] = [
  {
    date: "2025-12-19",
    title: "reflection on 2025",
    href: "/blog/reflection-on-2025",
  },
  {
    date: "2025-12-31",
    title: "why everyone should watch culinary class wars",
    href: "/blog/ccw-review",
  },
  {
    date: "2026-06-26",
    title: "design is care",
    href: "/blog/design-is-care",
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
          {posts.map((post) => {
            const isExternal = post.href?.startsWith("http");

            return (
              <li key={post.title} className="blog-list-item">
                {post.href ? (
                  isExternal ? (
                    <a
                      href={post.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blog-list-link"
                    >
                      <span className="blog-list-title">{post.title}</span>
                      <span className="blog-list-date">{post.date}</span>
                    </a>
                  ) : (
                    <Link href={post.href} className="blog-list-link">
                      <span className="blog-list-title">{post.title}</span>
                      <span className="blog-list-date">{post.date}</span>
                    </Link>
                  )
                ) : (
                  <div className="blog-list-link">
                    <span className="blog-list-title">{post.title}</span>
                    <span className="blog-list-date">{post.date}</span>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
