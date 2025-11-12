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
    description: "a tutorial on building a chrome extension that integrates with notion api for leetcode performance tracking",
    category: ["all", "automation"],
  },
  {
    id: "meeting-translator",
    title: "meeting-translator",
    description: "translate your boring meeting notes in different styles",
    category: ["all", "automation", "ai"],
  },
  {
    id: "interview-prep-partner",
    title: "interview-prep-partner",
    description: "find accountability partner for interview prep",
    category: ["all", "fullstack"],
  },
  {
    id: "how-i-develop-this-website",
    title: "how-i-develop-this-website",
    description: "a collection of notion templates and tutorials integrations",
    category: ["all", "fullstack"],
  },
  {
    id: "vietnamese-handwriting",
    title: "vietnamese-handwriting",
    description: "how to generate your own handwriting using ml algorithms",
    category: ["all", "ai"],
  },
  {
    id: "git-clone",
    title: "git-clone",
    description: "learn git internals in-depth by writing git in python",
    category: ["all", "data"],
  },
  {
    id: "reinfocement-learning-games",
    title: "reinfocement-learning-games",
    description: "an interactive web app that teaches curious beginners about rl concepts via games",
    category: ["all", "ai"],
  },
  {
    id: "interactive-library",
    title: "interactive-library",
    description: "re-implementations of cool interactive components on the web",
    category: ["all"]
  }
]
  