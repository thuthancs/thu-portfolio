import { getAllMarkdownContent, MarkdownContent } from '../../lib/markdown'

export interface Project {
  id: string
  title: string
  description: string
  category: string[]
  link?: string
  tags?: string[]
  image?: string
  problem?: string
  solution?: string
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
    tags: ["javascript", "python", "express"],
    image: "/images/notion-chrome-extension/image.png",
    problem:
      "Tracking LeetCode performance and learning progress across multiple sessions is tedious when your notes and coding activity live in separate tools.",
    solution:
      "Build a Chrome extension that hooks into LeetCode and sends structured summaries straight into Notion, so you can review patterns, mistakes, and progress without any manual copy-pasting.",
  },
  {
    id: "reinfocement-learning",
    title: "reinfocement-learning",
    description: "an interactive tutorial that teaches curious beginners about rl concepts playing games",
    category: ["all", "ai"],
    problem:
      "Reinforcement learning concepts often feel abstract and math-heavy, which makes it hard for curious beginners to build intuition.",
    solution:
      "Design playful, interactive mini-games where users can tweak RL parameters and instantly see how agents learn, turning equations into concrete, visual experiments.",
  },
  {
    id: "interactive-library",
    title: "interactive-library",
    description: "re-implementations of delightful interactive components on the web",
    category: ["all"],
    problem:
      "Developers see delightful interactive components on the web but rarely have clear, well-explained examples to learn from or adapt.",
    solution:
      "Recreate these interactions as small, well-documented components that expose the underlying ideas, making it easy to remix them into your own projects.",
  },
  {
    id: "how-i-develop-this-website",
    title: "how-i-develop-this-website",
    description: "learnings and reflection on building a personal portfolio",
    category: ["all", "fullstack"],
    problem:
      "Building a personal portfolio can feel overwhelming, and it’s hard to know which technical and design decisions actually matter.",
    solution:
      "Document the end-to-end process of building this site—architecture choices, design iterations, and trade-offs—so others can use it as a practical, opinionated blueprint.",
  },
  {
    id: "meeting-translator",
    title: "meeting-translator",
    description: "translate your boring meeting notes in different styles",
    category: ["all", "automation", "ai"],
    problem:
      "Meeting notes are often dry, messy, and hard to repurpose for different audiences like teammates, stakeholders, or future you.",
    solution:
      "Create a tool that takes raw notes and automatically rewrites them in different styles—concise summaries, action-item lists, or friendly recaps—so sharing and revisiting meetings becomes painless.",
  },
  {
    id: "oss-contribution-rec",
    title: "oss-contribution-rec",
    description: "recommendation system for open source contributions",
    category: ["all", "data"],
    problem:
      "New contributors want to help with open source but struggle to find issues that match their skills, interests, and available time.",
    solution:
      "Build a recommendation system that surfaces relevant, starter-friendly issues across projects, lowering the barrier to making meaningful contributions.",
  },
  {
    id: "vietnamese-handwriting",
    title: "vietnamese-handwriting",
    description: "how to generate your own handwriting using ml algorithms",
    category: ["all", "ai"],
    problem:
      "Digital notes rarely capture the warmth and personality of handwritten Vietnamese, especially for people far from home.",
    solution:
      "Use machine learning to learn your handwriting style and generate custom Vietnamese text, so you can bring a personal touch back into your digital communication.",
  },
  {
    id: "interview-prep-partner",
    title: "interview-prep-partner",
    description: "find accountability partner for interview prep",
    category: ["all", "fullstack"],
    problem:
      "Staying consistent with interview prep is hard when you’re doing it alone, and it’s difficult to find someone with similar goals and schedule.",
    solution:
      "Build a small matching tool that pairs people based on experience, timeline, and focus areas so they can keep each other accountable through regular practice sessions.",
  }
]
  