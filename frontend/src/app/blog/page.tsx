import BlogCard from "@/components/BlogCard";
import MenuBar from "@/components/MenuBar";

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
];

export default function BlogPage() {
  return (
    <div className="home-shell">
      <MenuBar />

      <section aria-labelledby="blog-heading">
        <div className="section-header">
          <h1 id="blog-heading" className="section-title">
            Blog
          </h1>
        </div>

        {/* List of blog cards */}
        <ul className="mt-6 space-y-3" aria-live="polite">
          {posts.map((post) => (
            <li key={post.title}>
              <BlogCard date={post.date} title={post.title} href={post.href} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
