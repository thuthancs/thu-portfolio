import type { ProjectMetaData } from "./types";

const projects: ProjectMetaData[] = [
  {
    slug: "inline",
    title: "inline",
    summary:
      "📖 a chrome extension that enables seamless online reading experience (e.g., add comment, ask questions about specific text in-browser and save to notion pages). say bye to manual copy-pasting!",
    thumbnail: "/project_previews/inline.svg",
    tags: ["automation", "javascript"],
    featured: true,
  },
  {
    slug: "open-paper",
    title: "open paper",
    summary:
      "📚 Open Paper is a workbench for managing your research library. Read, annotate, and understand your papers all in one place. Use an AI assistant to conduct your literature review.",
    thumbnail: "/project_previews/open_paper.png",
    tags: ["research", "webapp"],
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
    slug: "one-shape-one-color",
    title: "One Shape, One Color",
    summary:
      "First prompt of Genuary Art.",
    thumbnail: "/project_previews/genuary1.png",
    tags: ["art", "python"],
    featured: false,
  },
  {
    slug: "principles-animation",
    title: "12 Principles of Animation",
    summary:
      "Second prompt of Genuary Art.",
    thumbnail: "/project_previews/bouncing_ball.gif",
    tags: ["animation", "python"],
    featured: false,
  },
  {
    slug: "climate-perception-and-policy",
    title: "Climate Perception and Policy",
    summary:
      "Analysis of how climate change perceptions influence policy support using survey data.",
    thumbnail: "/project_previews/climate_perception2.png",
    tags: ["research", "climate", "R"],
    featured: false,
  },
  {
    slug: "airport-queue-simulation",
    title: "Airport Queue Simulation",
    summary:
      "Simulation modeling airport queue dynamics and passenger flow optimization.",
    thumbnail: "/project_previews/airport_queue.png",
    tags: ["simulation", "python"],
    featured: false,
  },
  {
    slug: "traffic-across-4-cities",
    title: "Traffic Network Across 4 Cities",
    summary:
      "Agent-based simulation of traffic patterns and congestion across multiple urban environments.",
    thumbnail: "/project_previews/traffic_cities.png",
    tags: ["simulation", "python"],
    featured: false,
  },
  {
    slug: "bacteria-growth",
    title: "Bacteria Growth",
    summary:
      "Mathematical modeling and simulation of bacterial population growth dynamics.",
    thumbnail: "/project_previews/bacteria_growth.png",
    tags: ["simulation", "python"],
    featured: false,
  },
  {
    slug: "forest-fire-spread",
    title: "Forest Fire Spread",
    summary:
      "Cellular automata simulation of wildfire propagation and containment strategies.",
    thumbnail: "/project_previews/forest_fire.png",
    tags: ["simulation", "python"],
    featured: false,
  },
  {
    slug: "vietnamese-letters-classification-generation",
    title: "Vietnamese Letters Classification and Generation",
    summary:
      "Machine learning models for classifying and generating Vietnamese letters using deep learning techniques.",
    thumbnail: "/project_previews/vietnamese_letters.png",
    tags: ["ai-ml", "python"],
    featured: false,
  },
  {
    slug: "github-colors",
    title: "GitHub Colors",
    summary:
      "A fun visualization of programming language colors used on GitHub.",
    thumbnail: "/project_previews/github_colors.jpg",
    tags: ["fun", "visualization"],
    featured: false,
  },
  {
    slug: "github-pets",
    title: "GitHub Pets",
    summary:
      "Interactive pet collection inspired by GitHub's contribution graph.",
    thumbnail: "/project_previews/github_pets.png",
    tags: ["fun", "interactive"],
    featured: false,
  },
];

export function getFeaturedProjects(): ProjectMetaData[] {
  return projects.filter((p) => p.featured);
}

export function getAllProjects(): ProjectMetaData[] {
  return projects;
}