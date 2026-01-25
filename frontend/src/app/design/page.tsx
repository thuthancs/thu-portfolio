import MenuBar from "@/components/MenuBar";
import ProjectCard from "@/components/ProjectCard";
import { getDesignProjects } from "@/lib/design/projects";
import "../globals.css";

export default function DesignPage() {
  const designProjects = getDesignProjects();

  return (
    <div className="home-shell">
      <MenuBar />

      <section aria-labelledby="design-heading">
        <div className="section-header">
          <h1 id="design-heading" className="section-title">
            design
          </h1>
        </div>

        <div className="projects-grid design-grid" aria-live="polite">
          {designProjects.length > 0 ? (
            designProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                thumbnail={project.thumbnail}
                title={project.title}
                tags={project.tags}
                summary={project.summary}
                href={project.href}
              />
            ))
          ) : (
            <p className="section-empty-state">
              Design case studies are coming soon. Stay tuned :)
            </p>
          )}
        </div>
      </section>
    </div>
  );
}


