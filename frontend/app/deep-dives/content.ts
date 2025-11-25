import { getAllMarkdownContent, MarkdownContent } from '../../lib/markdown'

export interface DeepDive {
  id: string
  title: string
  description: string
  category: string[]
  date?: string
  link?: string
}

// Convert MarkdownContent to DeepDive interface
function markdownToDeepDive(content: MarkdownContent): DeepDive {
  return {
    id: content.id,
    title: content.title,
    description: content.description,
    category: content.category,
    date: content.date,
    link: content.link,
  }
}

// Get all deepDives from markdown files
export async function getDeepDives(): Promise<DeepDive[]> {
  const markdownContent = await getAllMarkdownContent('deep-dives')
  return markdownContent.map(markdownToDeepDive)
}

// Fallback static data for when markdown files don't exist
export const deepDives: DeepDive[] = [
  {
    id: "understanding-react-from-first-principles",
    title: "understanding react from first principles",
    description: "this is a pretty long post on how to truly understand react. i've finally decided to sit down, take a deep breath, and read through the original documentation as well as the source code of react. sometimes, what it takes to comprehend something is simply the willingness to do the tedious task of reading code and asking lots of questions.",
    category: ["technical", "frontend"],
    date: "2025-11-20",
  },
  {
    id: "learning-the-modern-tech-stack",
    title: "how to build with the modern tech stack",
    description: "a comprehensive guide on building applications using the modern tech stack including TypeScript, NodeJS, GraphQL, Prisma, Postgres, NextJS, React, and Relay. and some notes on how to learn things you're not familiar with in a short amount of time.",
    category: ["technical", "fullstack"],
  },
  {
    id: "neural-nets-from-scratch",
    title: "neural nets from scratch",
    description: "understanding the fundamentals of neural networks by building one from scratch",
    category: ["technical", "ml"],
  },
  {
    id: "convolutional-neural-networks",
    title: "convolutional neural networks",
    description: "exploring the architecture and applications of CNNs in image processing",
    category: ["technical", "ml"],
  },
  {
    id: "k-nearest-neighbors-algorithm",
    title: "k-nearest-neighbors algorithm",
    description: "implementation of kNN from scratch in Python",
    category: ["technical", "ml"],
  }
]
