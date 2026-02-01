import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";

/**
 * @param {{
 *   thumbnail?: string;
 *   title: string;
 *   summary: string;
 *   href?: string;
 * }} props
 */
export default function ProjectCard({ thumbnail, title, summary, href }) {
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
          <div className="project-card-title-row">
            <p className="highlight">{title}</p>
          </div>

          {/* Summary */}
          <p className="description">{summary}</p>
        </div>
      </article>
    </div>
  );

  if (href) {
    const isExternal = href.startsWith('http');
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block project-card-link">
          {card}
        </a>
      );
    }
    return (
      <Link href={href} className="block project-card-link">
        {card}
      </Link>
    );
  }

  return card;
}