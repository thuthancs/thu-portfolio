import { notFound } from 'next/navigation'
import ContentLayout from '../../../components/layout/ContentLayout'
import { getMarkdownContent } from '../../../lib/markdown'
import { creativeProjects } from '../content'

interface CreativeDetailProps {
  params: {
    id: string
  }
}

export default async function CreativeDetail({ params }: CreativeDetailProps) {
  const { id } = await params
  
  // Try to get content from markdown first
  let markdownContent = await getMarkdownContent('creative', id)
  
  // Fallback to static data if markdown doesn't exist
  if (!markdownContent) {
    const creative = creativeProjects.find(c => c.id === id)
    if (!creative) {
      notFound()
    }
    
    // Use static content as fallback
    const sections = [
      { id: 'concept', title: 'Concept', level: 1 },
      { id: 'process', title: 'Process', level: 1 },
      { id: 'design-decisions', title: 'Design Decisions', level: 1 },
      { id: 'outcome', title: 'Outcome', level: 1 },
    ]

    const content = `
      <h2 id="concept">Concept</h2>
      <p>This creative project explores "${creative.title}". The concept behind this work is to push boundaries and experiment with new ideas.</p>
      
      <h2 id="process">Process</h2>
      <p>Here's how I approached this creative project:</p>
      <ol>
        <li>Research and inspiration gathering</li>
        <li>Initial sketches and ideation</li>
        <li>Prototyping and iteration</li>
        <li>Final execution and refinement</li>
      </ol>
      
      <h2 id="design-decisions">Design Decisions</h2>
      <p>Key design decisions that shaped this project:</p>
      <ul>
        <li>Color palette and visual style choices</li>
        <li>Layout and composition decisions</li>
        <li>User experience considerations</li>
        <li>Technical implementation approach</li>
      </ul>
      
      <h2 id="outcome">Outcome</h2>
      <p>The final outcome of this creative project and its impact. This section would include results, feedback, and lessons learned.</p>
    `

    return (
      <ContentLayout
        title={`./${creative.title}`}
        description={`(n) ${creative.description}`}
        sections={sections}
      >
        <div className="prose prose-xl max-w-none">
          <div className="mb-8 text-sm text-gray-600">
            <span className="font-medium">Category:</span> {creative.categories?.join(', ') || 'Creative'} • 
            <span className="font-medium ml-2">Type:</span> Creative Project
          </div>
          
          <div 
            dangerouslySetInnerHTML={{ __html: content }}
            className="space-y-6"
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
    >
      <div className="prose prose-lg max-w-none">
        <div className="mb-8 text-sm text-gray-600">
          <span className="font-medium">Category:</span> {markdownContent.category.join(', ')} • 
          <span className="font-medium ml-2">Type:</span> Creative Project
        </div>
        
        <div 
          dangerouslySetInnerHTML={{ __html: markdownContent.content }}
          className="space-y-6"
        />
      </div>
    </ContentLayout>
  )
}

// Generate static params for all creative projects
export async function generateStaticParams() {
  return creativeProjects.map((creative) => ({
    id: creative.id,
  }))
}
