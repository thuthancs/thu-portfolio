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
        {thumbnail && (
          <div className="project-card-thumbnail">
            <Image
              src={thumbnail}
              alt={title}
              width={600}
              height={400}
              className="project-card-image"
            />
          </div>
        )}

        {/* Text content */}
        <div>
          <p className="highlight mb-4">{title}</p>

          {/* Summary */}
          <p className="description">{summary}</p>
        </div>
      </article>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block project-card-link">
        {card}
      </Link>
    );
  }

  return card;
}