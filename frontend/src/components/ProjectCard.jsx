import Tags from "@/components/Tags";
import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";

/**
 * @param {{
 *   thumbnail?: string;
 *   title: string;
 *   tags?: string[];
 *   summary: string;
 *   href?: string;
 * }} props
 */
export default function ProjectCard({ thumbnail, title, tags = [], summary, href }) {
  const card = (
    <div className="project-card-frame">
      <article className="project-card">
        {/* Thumbnail */}
        <div className="mt-0">
          {thumbnail && (
            <Image
              src={thumbnail}
              alt={title}
              width={600}
              height={400}
              className="w-full h-[240px] object-cover"
            />
          )}
        </div>

        {/* Text content */}
        <div>
          <p className="highlight mb-4">{title}</p>

          {/* Tags */}
          <Tags tags={tags} />

          {/* Summary */}
          <p className="description">{summary}</p>
        </div>
      </article>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {card}
      </Link>
    );
  }

  return card;
}