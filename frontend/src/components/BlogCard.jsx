import Link from "next/link";
import "../app/globals.css";

/**
 * Simple horizontal blog card that matches the pill-style
 * list shown in the design: date on the left, title on the right,
 * subtle rounded background, and a hover state that turns
 * the title blue.
 *
 * @param {{ date: string; title: string; href?: string }} props
 */
export default function BlogCard({ date, title, href }) {
  const content = (
    <article className="flex items-center justify-between px-6 py-3 ring-1 ring-gray-200 hover:ring-black rounded-[8px]">
      <p className="text-gray-500 flex items-center mt-0">
        {date}
      </p>
      <p className="ml-6 flex-1 flex items-center mt-0">
        {title}
      </p>
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="group block">
        {content}
      </Link>
    );
  }

  return <div className="group">{content}</div>;
}

