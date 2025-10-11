import WindowControls from "../../components/layout/WindowControls"
import ProjectCard from "../../components/ui/ProjectCard"
import { creativeProjects } from "./content"

export default function CreativePage() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] flex items-center justify-center p-8">
      {/* Browser window container */}
      <div className="w-full max-w-7xl bg-white border-4 border-black rounded-lg shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        {/* Window header */}
        <div className="border-b-4 border-black p-4 flex items-center justify-between">
          <h1 className="text-4xl font-bold">
            <span className="text-4xl">./creative</span>{" "}
            <span className="text-xl font-normal align-middle">(v) design interfaces and experiments that augment human productivity and creativity</span>
          </h1>
          <WindowControls />
        </div>

        {/* Window content */}
        <div className="p-12 min-h-[500px]">
          <div className="grid grid-cols-3 gap-8">
            {creativeProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                title={project.title} 
                description={project.description}
                href={`/creative/${project.id}`}
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
