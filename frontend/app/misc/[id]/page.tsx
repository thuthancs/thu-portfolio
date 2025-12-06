import { notFound } from 'next/navigation'
import ContentLayout from '../../../components/layout/ContentLayout'
import { getMarkdownContent } from '../../../lib/markdown'
import { miscs } from '../content'

interface MiscDetailProps {
  params: {
    id: string
  }
}

export default async function MiscDetail({ params }: MiscDetailProps) {
  const { id } = await params
  
  // Try to get content from markdown first
  let markdownContent = await getMarkdownContent('misc', id)
  
  // Fallback to static data if markdown doesn't exist
  if (!markdownContent) {
    const misc = miscs.find(c => c.id === id)
    if (!misc) {
      notFound()
    }
    
    // Use static content as fallback
    const sections = [
      { id: 'introduction', title: 'Introduction', level: 1 },
      { id: 'main-content', title: 'Main Content', level: 1 },
      { id: 'key-insights', title: 'Key Insights', level: 1 },
      { id: 'conclusion', title: 'Conclusion', level: 1 },
    ]

    const content = `
      <h2 id="introduction">Introduction</h2>
      <p>This is the introduction to "${misc.title}". Here I'll share my thoughts and reflections on this topic.</p>
      
      <h2 id="main-content">Main Content</h2>
      <p>This is where the main content goes. I'll expand on the ideas and concepts related to ${misc.title}.</p>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
      
      <h2 id="key-insights">Key Insights</h2>
      <p>Here are the key insights and takeaways from this piece:</p>
      <ul>
        <li>Insight 1: Important learning or observation</li>
        <li>Insight 2: Another key point to consider</li>
        <li>Insight 3: Final takeaway or reflection</li>
      </ul>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>In conclusion, this piece explores ${misc.title} and provides insights into the topic. Thank you for reading!</p>
    `

    return (
      <ContentLayout
        title={`./${misc.title}`}
        description={`(n) ${misc.description}`}
        sections={sections}
        backHref="/misc"
        backLabel="back to misc"
      >
        <div>
          <div 
            dangerouslySetInnerHTML={{ __html: content }}
            className="prose max-w-none"
          />
        </div>
      </ContentLayout>
    )
  }

  // Use markdown content
  return (
    <ContentLayout
      title={`./${markdownContent.title}`}
      description={`(n) ${markdownContent.description}`}
      sections={markdownContent.sections}
      backHref="/misc"
      backLabel="back to misc"
    >
      <div>
        <div 
          dangerouslySetInnerHTML={{ __html: markdownContent.content }}
          className="prose max-w-none"
        />
      </div>
    </ContentLayout>
  )
}

// Generate static params for all miscs
export async function generateStaticParams() {
  return miscs.map((misc) => ({
    id: misc.id,
  }))
}

