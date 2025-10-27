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
    id: "designing-for-ai",
    title: "designing for ai",
    description: "how might we create better interfaces for ai products that feel human",
    category: ["design", "ai"],
    date: "2024-02-03",
  },
  {
    id: "vietnamese-handwriting-ml",
    title: "vietnamese handwriting ml",
    description: "building a model to generate my own handwriting style",
    category: ["technical", "ml"],
    date: "2024-02-10",
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
