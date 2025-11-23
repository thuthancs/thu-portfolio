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
    category: ["story", "reflection"],
    date: "2025-11-15",
  },
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
    id: "fun-and-cool",
    title: "fun and cool are just subjective concepts",
    description: "every sort of problem is fun and cool as long as you care about it deeply and personally. virality or adoption is probably just a side effect of that. the most personal is the most creative.",
    category: ["thoughts", "reflection"],
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
