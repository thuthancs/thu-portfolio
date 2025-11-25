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
    id: "on-product-thinking",
    title: "on product thinking",
    description: "some thoughts on categorizing products and what it means to build things that people truly want. this is my attempt to put into words some mental models and frameworks that i find useful for me when approaching product development, especially in this interesting time of AI.",
    category: ["thoughts", "product"],
  },
  {
    id: "empirical-self-improvement",
    title: "empirical self improvement",
    description: "how to approach self-improvement in empirically by treating yourself as a scientific experiment. this involves forming hypotheses, running experiments, collecting data, and analyzing results to make informed decisions about personal growth and development.",
    category: ["thoughts", "self-improvement"],
  },
  {
    id: "tidbits-of-life",
    title: "tidbits of life - you cannot pour from an empty cup",
    description: "the past few days have taught me something very important: you cannot pour from an empty cup. i know this wisdom is not something new, but it takes some hands-on experience to actually internalize it. in a nutshell, here is what happened and what i did that has significantly improved my mindset",
    category: ["story", "reflection"],
    date: "2025-11-15",
  },
  {
    id: "fun-and-cool",
    title: "fun and cool are just subjective concepts",
    description: "every sort of problem is fun and cool as long as you care about it deeply and personally. virality or adoption is probably just a side effect of that. the most personal is the most creative.",
    category: ["thoughts", "reflection"],
  },
]
