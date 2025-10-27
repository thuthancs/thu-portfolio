import WindowControls from "../../components/layout/WindowControls"
import ProjectCard from "../../components/ui/ProjectCard"
import { writings } from "./content"

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] flex items-center justify-center p-8">
      <div className="w-full max-w-6xl bg-white border-4 border-black rounded-lg shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        {/* Window header */}
        <div className="border-b-4 border-black p-4 flex items-center justify-between">
          <h1 className="text-4xl font-bold">
            <span className="text-4xl">./blog</span>{" "}
            <span className="text-xl font-normal align-middle">(n) thoughts, reflections, and technical deep dives</span>
          </h1>
          <WindowControls />
        </div>

        {/* Window content */}
        <div className="p-12 min-h-[500px]">
          <div className="grid grid-cols-3 gap-8">
            {writings.map((writing) => (
              <ProjectCard 
                key={writing.id} 
                title={writing.title} 
                description={writing.description}
                href={`/writing/${writing.id}`}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t-4 border-black p-4 bg-white"></div>
      </div>
    </div>
  )
}
