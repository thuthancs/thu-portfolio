"use client";

import MenuBar from "@/components/MenuBar";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/projects/mdx";
import { useMemo, useState } from "react";
import "../app/globals.css";

const FILTERS = [
  { id: "featured", label: "Featured" },
  { id: "data-analysis", label: "Data Analysis" },
  { id: "webapp", label: "Web App" },
  { id: "simulation", label: "Simulation" },
  { id: "creative-coding", label: "Creative Coding" },
  { id: "ai-ml", label: "AI/ML" },
];

// Map project slugs to one or more high-level categories.
// This keeps category logic in one place and is easy to extend
// as you add more projects.
const PROJECT_CATEGORIES = {
  "notion-chrome-extension": ["featured", "webapp"],
  "grading-dashboard": ["featured", "webapp"],
  "rl-game-learning": ["featured", "ai-ml"],
  "climate-perception-and-policy": ["data-analysis"],
  "recursive-tree": ["creative-coding"],
};

export default function SectionPage() {
  const [activeFilter, setActiveFilter] = useState("featured");

  const allProjects = getAllProjects();

  const filteredProjects = useMemo(() => {
    if (activeFilter === "featured") {
      return allProjects.filter((project) => project.featured);
    }

    return allProjects.filter((project) => {
      const categories = PROJECT_CATEGORIES[project.slug] ?? [];
      return categories.includes(activeFilter);
    });
  }, [allProjects, activeFilter]);

  return (
    <div className="home-shell">
      <MenuBar />

      <section aria-labelledby="projects-heading">
        <div className="section-header">
          <h1 id="projects-heading" className="section-title">
            Projects
          </h1>
        </div>

        {/* Filter buttons */}
        <div className="section-filters" role="tablist" aria-label="Project categories">
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`section-filter-button${
                activeFilter === filter.id ? " section-filter-button--active" : ""
              }`}
              role="tab"
              aria-selected={activeFilter === filter.id}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="projects-grid" aria-live="polite">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                thumbnail={project.thumbnail}
                title={project.title}
                tags={project.tags}
                summary={project.summary}
                href={`/projects/${project.slug}`}
              />
            ))
          ) : (
            <p className="section-empty-state">
              No projects in this category yet. Check back soon.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
