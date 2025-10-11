import { notFound } from 'next/navigation'
import ContentLayout from '../../../components/layout/ContentLayout'
import { writings } from '../content'

interface WritingDetailProps {
  params: {
    id: string
  }
}

export default function WritingDetail({ params }: WritingDetailProps) {
  const writing = writings.find(w => w.id === params.id)

  if (!writing) {
    notFound()
  }

  // Mock content sections for now - you can expand this
  const sections = [
    { id: 'introduction', title: 'Introduction', level: 1 },
    { id: 'main-content', title: 'Main Content', level: 1 },
    { id: 'key-insights', title: 'Key Insights', level: 1 },
    { id: 'conclusion', title: 'Conclusion', level: 1 },
  ]

  const content = `
    <h2 id="introduction">Introduction</h2>
    <p>This is the introduction to "${writing.title}". Here I'll share my thoughts and reflections on this topic.</p>
    
    <h2 id="main-content">Main Content</h2>
    <p>This is where the main content of the article goes. I'll expand on the ideas and concepts related to ${writing.title}.</p>
    
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    
    <h2 id="key-insights">Key Insights</h2>
    <p>Here are the key insights and takeaways from this piece:</p>
    <ul>
      <li>Insight 1: Important learning or observation</li>
      <li>Insight 2: Another key point to consider</li>
      <li>Insight 3: Final takeaway or reflection</li>
    </ul>
    
    <h2 id="conclusion">Conclusion</h2>
    <p>In conclusion, this piece explores ${writing.title} and provides insights into the topic. Thank you for reading!</p>
  `

  return (
    <ContentLayout
      title={`./${writing.title}`}
      description={`(n) ${writing.description}`}
      sections={sections}
    >
      <div className="prose prose-lg max-w-none">
        <div className="mb-8 text-sm text-gray-600">
          <span className="font-medium">Category:</span> {writing.category.join(', ')} • 
          <span className="font-medium ml-2">Date:</span> {writing.date} • 
          <span className="font-medium ml-2">Type:</span> Writing
        </div>
        
        <div 
          dangerouslySetInnerHTML={{ __html: content }}
          className="space-y-6"
        />
      </div>
    </ContentLayout>
  )
}

// Generate static params for all writings
export async function generateStaticParams() {
  return writings.map((writing) => ({
    id: writing.id,
  }))
}
