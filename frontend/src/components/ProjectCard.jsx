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
 *   codeUrl?: string;
 *   documentationUrl?: string;
 * }} props
 */
export default function ProjectCard({ thumbnail, title, tags = [], summary, href, codeUrl, documentationUrl }) {
  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

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
            {/* Code and Documentation links */}
            {(codeUrl || documentationUrl) && (
              <div className="project-card-links" onClick={handleLinkClick}>
                {codeUrl && (
                  <a
                    href={codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-link-item"
                  >
                    code
                  </a>
                )}
                {codeUrl && documentationUrl && (
                  <span className="project-card-link-separator">|</span>
                )}
                {documentationUrl && (
                  <a
                    href={documentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-link-item"
                  >
                    doc
                  </a>
                )}
              </div>
            )}
          </div>

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