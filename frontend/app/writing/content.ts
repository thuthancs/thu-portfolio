import { getAllMarkdownContent, MarkdownContent } from '../../lib/markdown'

export interface Writing {
  id: string
  title: string
  description: string
  category: string[]
  date?: string
  link?: string
}

// Convert MarkdownContent to Writing interface
function markdownToWriting(content: MarkdownContent): Writing {
  return {
    id: content.id,
    title: content.title,
    description: content.description,
    category: content.category,
    date: content.date,
    link: content.link,
  }
}

// Get all writings from markdown files
export async function getWritings(): Promise<Writing[]> {
  const markdownContent = await getAllMarkdownContent('writing')
  return markdownContent.map(markdownToWriting)
}

// Fallback static data for when markdown files don't exist
export const writings: Writing[] = [
  {
    id: "on-being-carefree",
    title: "on being carefree",
    description: "what my name taught me about living intentionally",
    category: ["personal", "reflection"],
    date: "2024-01-15",
  },
  {
    id: "designing-for-ai",
    title: "designing for ai",
    description: "how might we create better interfaces for ai products that feel human",
    category: ["design", "ai"],
    date: "2024-02-03",
  },
  {
    id: "traveling-while-learning",
    title: "traveling while learning",
    description: "lessons from studying cs across 4 different cities",
    category: ["education", "travel"],
    date: "2024-01-28",
  },
  {
    id: "vietnamese-handwriting-ml",
    title: "vietnamese handwriting ml",
    description: "building a model to generate my own handwriting style",
    category: ["technical", "ml"],
    date: "2024-02-10",
  },
  {
    id: "san-francisco-heart",
    title: "san francisco heart",
    description: "why this city captured my heart and changed my perspective",
    category: ["personal", "cities"],
    date: "2024-01-20",
  },
  {
    id: "minerva-university-experience",
    title: "minerva university experience",
    description: "what it's like to study at a global university",
    category: ["education", "personal"],
    date: "2024-02-05",
  },
]
