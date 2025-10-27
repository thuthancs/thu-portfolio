import { getAllMarkdownContent, MarkdownContent } from '../../lib/markdown'

export interface Curiosity {
  id: string
  title: string
  description: string
  category?: string[]
  date?: string
  link?: string
}

// Convert MarkdownContent to Curiosity interface
function markdownToCuriosity(content: MarkdownContent): Curiosity {
  return {
    id: content.id,
    title: content.title,
    description: content.description,
    category: content.category,
    date: content.date,
    link: content.link,
  }
}

// Get all curiosities from markdown files
export async function getCuriosities(): Promise<Curiosity[]> {
  const markdownContent = await getAllMarkdownContent('curiosity')
  return markdownContent.map(markdownToCuriosity)
}

// Fallback static data for when markdown files don't exist
export const curiosities: Curiosity[] = [
  {
    id: "1",
    title: "how many ways to permute the word mississippi?",
    description: "a review of permutations and combinations",
    category: ["Learning"],
    date: "2025"
  },
  {
    id: "2",
    title: "the history of artificial intelligence",
    description: "let's go back in time to where it all began",
    category: ["Technical"],
    date: "2025"
  },
  {
    id: "3",
    title: "how many handshakes are you away from sam altman?",
    description: "a fun network experiment to see how connected we really are",
    category: ["Technical"],
    date: "2025"
  }
]

