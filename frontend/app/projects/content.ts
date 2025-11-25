import { getAllMarkdownContent, MarkdownContent } from '../../lib/markdown'

export interface Project {
  id: string
  title: string
  description: string
  category: string[]
  link?: string
}

// Convert MarkdownContent to Project interface
function markdownToProject(content: MarkdownContent): Project {
  return {
    id: content.id,
    title: content.title,
    description: content.description,
    category: content.category,
    link: content.link,
  }
}

// Get all projects from markdown files
export async function getProjects(): Promise<Project[]> {
  const markdownContent = await getAllMarkdownContent('projects')
  return markdownContent.map(markdownToProject)
}

// Fallback static data for when markdown files don't exist
export const projects: Project[] = [
  {
    id: "notion-chrome-extension",
    title: "notion-chrome-extension",
    description: "a tutorial on building a chrome extension that integrates with notion for leetcode performance tracking",
    category: ["all", "automation"],
  },
  {
    id: "reinfocement-learning",
    title: "reinfocement-learning",
    description: "an interactive tutorial that teaches curious beginners about rl concepts playing games",
    category: ["all", "ai"],
  },
  {
    id: "interactive-library",
    title: "interactive-library",
    description: "re-implementations of delightful interactive components on the web",
    category: ["all"]
  },
  {
    id: "how-i-develop-this-website",
    title: "how-i-develop-this-website",
    description: "learnings and reflection on building a personal portfolio",
    category: ["all", "fullstack"],
  },
  {
    id: "meeting-translator",
    title: "meeting-translator",
    description: "translate your boring meeting notes in different styles",
    category: ["all", "automation", "ai"],
  },
  {
    id: "oss-contribution-rec",
    title: "oss-contribution-rec",
    description: "recommendation system for open source contributions",
    category: ["all", "data"],
  },
  {
    id: "vietnamese-handwriting",
    title: "vietnamese-handwriting",
    description: "how to generate your own handwriting using ml algorithms",
    category: ["all", "ai"],
  },
  {
    id: "interview-prep-partner",
    title: "interview-prep-partner",
    description: "find accountability partner for interview prep",
    category: ["all", "fullstack"],
  }
]
  