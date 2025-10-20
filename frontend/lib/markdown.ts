import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

export interface MarkdownContent {
  id: string
  title: string
  description: string
  category: string[]
  date?: string
  link?: string
  content: string
  sections: Array<{
    id: string
    title: string
    level: number
  }>
}

const contentDirectory = path.join(process.cwd(), '..', 'content')

export async function getMarkdownContent(type: 'writing' | 'projects' | 'creative', id: string): Promise<MarkdownContent | null> {
  try {
    const fullPath = path.join(contentDirectory, type, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Process markdown to HTML
    const processedContent = await remark()
      .use(remarkHtml)
      .process(content)

    const htmlContent = processedContent.toString()

    // Extract headings for TOC
    const sections = extractHeadingsFromMarkdown(content)

    return {
      id,
      title: data.title || '',
      description: data.description || '',
      category: data.category || [],
      date: data.date,
      link: data.link,
      content: htmlContent,
      sections
    }
  } catch (error) {
    console.error(`Error reading markdown file for ${type}/${id}:`, error)
    return null
  }
}

export async function getAllMarkdownContent(type: 'writing' | 'projects' | 'creative'): Promise<MarkdownContent[]> {
  try {
    const directory = path.join(contentDirectory, type)
    const filenames = fs.readdirSync(directory)
    const markdownFiles = filenames.filter(name => name.endsWith('.md'))

    const allContent = await Promise.all(
      markdownFiles.map(async (filename) => {
        const id = filename.replace(/\.md$/, '')
        return await getMarkdownContent(type, id)
      })
    )

    return allContent.filter((content): content is MarkdownContent => content !== null)
  } catch (error) {
    console.error(`Error reading markdown files for ${type}:`, error)
    return []
  }
}

function extractHeadingsFromMarkdown(markdown: string): Array<{ id: string; title: string; level: number }> {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm
  const headings: Array<{ id: string; title: string; level: number }> = []
  let match

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length
    const rawTitle = match[2].trim()
    const title = cleanMarkdownFormatting(rawTitle)
    const id = rawTitle
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')

    headings.push({ id, title, level })
  }

  return headings
}

function cleanMarkdownFormatting(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold **text**
    .replace(/\*(.*?)\*/g, '$1') // Remove italic *text*
    .replace(/`(.*?)`/g, '$1') // Remove code `text`
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links [text](url) -> text
    .replace(/#{1,6}\s*/g, '') // Remove heading markers
    .trim()
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}
