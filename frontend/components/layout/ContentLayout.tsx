import WindowControls from "./WindowControls"

interface ContentSection {
  id: string
  title: string
  level: number
}

interface ContentLayoutProps {
  title: string
  description: string
  sections: ContentSection[]
  children: React.ReactNode
}

export default function ContentLayout({ title, description, sections, children }: ContentLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f5f5f0] flex items-center justify-center p-8">
      <div className="w-full max-w-6xl bg-white border-4 border-black rounded-lg shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        {/* Window header */}
        <div className="border-b-4 border-black p-4 flex items-center justify-between">
          <h1 className="text-4xl font-bold">
            <span className="text-4xl">{title}</span>{" "}
            <span className="text-xl font-normal align-middle">{description}</span>
          </h1>
          <WindowControls />
        </div>

        {/* Table of Contents - Top */}
        <div className="border-b-4 border-black p-6 bg-gray-50">
          <h2 className="text-lg font-bold mb-4">contents</h2>
          <nav className="space-y-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`block text-sm hover:text-[#3E80D3] transition-colors ${
                  section.level === 1 ? 'font-medium' : 'ml-4 text-gray-600'
                }`}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>

        {/* Main content area */}
        <div className="p-8">
          {children}
        </div>

        {/* Footer */}
        <div className="border-t-4 border-black p-4 bg-white"></div>
      </div>
    </div>
  )
}
