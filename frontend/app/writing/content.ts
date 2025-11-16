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
    id: "build-a-startup-in-two-days",
    title: "how we built a startup in 2 days",
    description: "a story of how we built a lunch box startup from scratch in just 48 hours and what i've learned about the philosophy of quick iteration, relentless execution, and craftsmanship. with that being said, being a founder is so hard and i would love to just be a normal engineer :)",
    category: ["story", "startup"],
    date: "2025-11-12",
  },
  {
    id: "tidbits-of-life",
    title: "tidbits of life - you cannot pour from an empty cup",
    description: "the past few days have taught me something very important: you cannot pour from an empty cup. i know this wisdom is not something new, but it takes some hands-on experience to actually internalize it. in a nutshell, here is what happened and what i did that has significantly improved my mindset",
    category: ["design", "ai"],
    date: "2025-11-15",
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
