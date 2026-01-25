"use client";

import MenuBar from "@/components/MenuBar";
import Tags from "@/components/Tags";
import { useEffect, useState } from "react";
import "../app/globals.css";

/**
 * Generic layout for a single project case study.
 *
 * @param {{ title: string; tags?: string[]; summary?: string; toc?: { id: string; label: string; depth?: number }[]; children?: React.ReactNode }} props
 */
export default function DetailPage({ title, tags = [], summary, toc = [], children }) {
  const [activeId, setActiveId] = useState(toc[0]?.id ?? null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track page scroll to render a thin progress bar.
  useEffect(() => {
    const handleScroll = () => {
      const scrollElement = document.scrollingElement || document.documentElement;
      const { scrollTop, scrollHeight, clientHeight } = scrollElement;
      const totalScrollable = scrollHeight - clientHeight;

      if (totalScrollable <= 0) {
        setScrollProgress(0);
        return;
      }

      const progress = (scrollTop / totalScrollable) * 100;
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!toc.length) return;

    const sectionIds = toc.map((item) => item.id);

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the section with the largest intersection ratio that is currently intersecting
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (!visibleEntries.length) return;

        const mostVisible = visibleEntries.reduce((prev, curr) =>
          prev.intersectionRatio > curr.intersectionRatio ? prev : curr,
        );

        const newActiveId = mostVisible.target.id;
        if (newActiveId && newActiveId !== activeId) {
          setActiveId(newActiveId);
        }
      },
      {
        root: null,
        // Slight bottom offset so the section counts as active when its header is
        // in the upper half of the viewport.
        rootMargin: "0px 0px -50% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [toc, activeId]);

  return (
    <div className="home-shell">
      <MenuBar />
      <div className={`detail-grid${toc.length === 0 ? " detail-grid--no-toc" : ""}`}>
        {/* Left column: table of contents */}
        <aside className="detail-toc">
          <h2 className="detail-toc-title">{title}</h2>
          {toc.length > 0 && (
            <nav aria-label="Table of contents">
              <ul>
                {toc.map((item) => {
                  const isNested = typeof item.depth === "number" && item.depth > 0;

                  return (
                    <li
                      key={item.id}
                      className={isNested ? "detail-toc-item detail-toc-item--nested" : "detail-toc-item"}
                    >
                      <a
                        href={`#${item.id}`}
                        className={`detail-toc-link${
                          activeId === item.id ? " detail-toc-link--active" : ""
                        }${isNested ? " detail-toc-link--nested" : ""}`}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </aside>

        {/* Right column: main content */}
        <main className="detail-content">
          {/* Horizontal scroll progress bar for project detail pages */}
          <div className="detail-scroll-progress">
            <div
              className="detail-scroll-progress-bar"
              style={{ width: `${scrollProgress}%` }}
              aria-hidden="true"
            />
          </div>

          <header className="detail-header">
            <h1 className="detail-title">{title}</h1>
            {tags.length > 0 && <Tags tags={tags} />}
            {summary && <p className="detail-summary">{summary}</p>}
          </header>

          <section className="detail-body">{children}</section>
        </main>
      </div>
    </div>
  );
}
