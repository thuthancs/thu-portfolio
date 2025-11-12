import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import slugifyLib from 'slugify'
import { unified } from 'unified'
import { visit } from 'unist-util-visit'

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

export async function getMarkdownContent(type: 'writing' | 'projects' | 'creative' | 'curiosity', id: string): Promise<MarkdownContent | null> {
  try {
    const fullPath = path.join(contentDirectory, type, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Parse markdown to AST
    const tree = unified().use(remarkParse).use(remarkGfm).parse(content)

    // Extract headings from AST before HTML conversion
    const sections = extractHeadingsFromAST(tree)

    // Convert markdown to HTML with auto-generated heading IDs and syntax highlighting
    const processor = unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeSlug)
      .use(rehypeHighlight)
      .use(rehypeStringify)

    const result = await processor.process(content)
    const htmlContent = result.toString()

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

export async function getAllMarkdownContent(type: 'writing' | 'projects' | 'creative' | 'curiosity'): Promise<MarkdownContent[]> {
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

function extractHeadingsFromAST(tree: any): Array<{ id: string; title: string; level: number }> {
  const headings: Array<{ id: string; title: string; level: number }> = []
  
  visit(tree, 'heading', (node: any) => {
    const level = node.depth
    const title = extractTextFromNode(node)
    const id = slugifyLib(title, { lower: true, strict: true })
    
    if (level <= 3) {
      headings.push({ id, title, level })
    }
  })
  
  return headings
}

function extractTextFromNode(node: any): string {
  if (node.value) return node.value
  if (node.children) {
    return node.children.map((child: any) => extractTextFromNode(child)).join('')
  }
  return ''
}

export function slugify(text: string): string {
  return slugifyLib(text, { lower: true, strict: true })
}
