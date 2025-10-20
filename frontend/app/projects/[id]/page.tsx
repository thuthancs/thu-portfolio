import { notFound } from 'next/navigation'
import ContentLayout from '../../../components/layout/ContentLayout'
import { getMarkdownContent } from '../../../lib/markdown'
import { projects } from '../content'

interface ProjectDetailProps {
  params: {
    id: string
  }
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const { id } = await params
  
  // Try to get content from markdown first
  let markdownContent = await getMarkdownContent('projects', id)
  
  // Fallback to static data if markdown doesn't exist
  if (!markdownContent) {
    const project = projects.find(p => p.id === id)
    if (!project) {
      notFound()
    }
    
    // Use static content as fallback
    const sections = [
      { id: 'overview', title: 'Overview', level: 1 },
      { id: 'features', title: 'Features', level: 1 },
      { id: 'tech-stack', title: 'Tech Stack', level: 1 },
      { id: 'challenges', title: 'Challenges', level: 1 },
      { id: 'results', title: 'Results', level: 1 },
    ]

    const content = `
      <h2 id="overview">Overview</h2>
      <p>This is a detailed overview of the ${project.title} project. Here you can provide comprehensive information about what the project does, its purpose, and its impact.</p>
      
      <h2 id="features">Features</h2>
      <p>Key features and functionality of this project:</p>
      <ul>
        <li>Feature 1: Description of the first key feature</li>
        <li>Feature 2: Description of the second key feature</li>
        <li>Feature 3: Description of the third key feature</li>
      </ul>
      
      <h2 id="tech-stack">Tech Stack</h2>
      <p>Technologies and tools used in this project:</p>
      <ul>
        <li>Frontend: React, TypeScript, Tailwind CSS</li>
        <li>Backend: Node.js, Express</li>
        <li>Database: PostgreSQL</li>
        <li>Deployment: Vercel, Railway</li>
      </ul>
      
      <h2 id="challenges">Challenges</h2>
      <p>Key challenges faced during development and how they were overcome.</p>
      
      <h2 id="results">Results</h2>
      <p>Project outcomes, metrics, and lessons learned.</p>
    `

    return (
      <ContentLayout
        title={`./${project.title}`}
        description={`(n) ${project.description}`}
        sections={sections}
      >
        <div className="prose prose-xl max-w-none">
          <div className="mb-8 text-sm text-gray-600">
            <span className="font-medium">Category:</span> {project.category.join(', ')} • 
            <span className="font-medium ml-2">Type:</span> Project
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
          <span className="font-medium ml-2">Type:</span> Project
        </div>
        
        <div 
          dangerouslySetInnerHTML={{ __html: markdownContent.content }}
          className="space-y-6"
        />
      </div>
    </ContentLayout>
  )
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}
