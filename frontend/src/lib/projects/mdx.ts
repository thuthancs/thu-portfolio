import type { ProjectMetaData } from "./types";

const projects: ProjectMetaData[] = [
  {
    slug: "notion-chrome-extension",
    title: "Notion + Chrome Extension",
    summary:
      "Chrome extension integration that automates Notion database updates for scalable, multi-use workflows.",
    thumbnail: "/project_previews/notion_ce.png",
    tags: ["automation", "javascript"],
    featured: true,
  },
  {
    slug: "grading-dashboard",
    title: "Grading Data Dashboard",
    summary:
      "Interactive dashboard for grading data and significance testing to support data-informed decisions.",
    thumbnail: "/project_previews/grading_dashboard.png",
    tags: ["javascript", "python", "react", "d3.js"],
    featured: true,
  },
  {
    slug: "rl-game-learning",
    title: "RL Game Tutorials",
    summary:
      "Interactive tutorials introducing RL concepts through simple games like snake and flappy bird.",
    thumbnail: "/project_previews/rl.png",
    tags: ["javascript", "python", "react"],
    featured: true,
  },
  {
    slug: "recursive-tree",
    title: "Recursive Tree",
    summary:
      "Creative-coding visualization that renders a branching recursive tree using python",
    thumbnail: "/project_previews/recursive_trees.png",
    tags: ["nature", "python"],
    featured: false,
  },
  {
    slug: "climate-perception-and-policy",
    title: "Climate Perception and Policy",
    summary:
      "Analysis of how climate change perceptions influence policy support using survey data.",
    thumbnail: "/project_previews/climate_perception.png",
    tags: ["research", "climate", "R"],
    featured: false,
  },
];

export function getFeaturedProjects(): ProjectMetaData[] {
  return projects.filter((p) => p.featured);
}

export function getAllProjects(): ProjectMetaData[] {
  return projects;
}