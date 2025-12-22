import type { ProjectMetaData } from "@/lib/projects/types";

// Design-focused projects and case studies shown on the Design page.
// You can add or edit entries here; they will automatically appear in the grid.
const designProjects: ProjectMetaData[] = [
  {
    slug: "design-manifesto",
    title: "Design Manifesto",
    summary: "A work-in-progress set of guiding principles behind my design practice.",
    thumbnail: "/project_previews/design_manifesto.JPG",
    tags: ["design"],
    href: "/design/design-manifesto",
  }, 
  {
    slug: "menu-redesign",
    title: "Redesign Hiroshi Ramen Menu",
    summary: "A visual redesign of Hiroshi Ramen's menu to improve readability and hierarchy.",
    thumbnail: "/design/ramen_hiroshi_redesigned_menu.png",
    tags: ["graphic design"],
    href: "/design/menu-redesign",
  },
];

export function getDesignProjects(): ProjectMetaData[] {
  return designProjects;
}

