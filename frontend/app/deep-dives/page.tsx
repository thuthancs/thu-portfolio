import Link from "next/link"
import WindowControls from "../../components/layout/WindowControls"
import { DeepDive, deepDives } from "./content"

export default function DeepDivesPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] flex items-center justify-center p-8">
      <div className="w-full max-w-6xl bg-white border-4 border-black rounded-lg shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        {/* Window header */}
        <div className="border-b-4 border-black p-4 flex items-center justify-between">
          <h1 className="text-4xl font-bold">
            <span className="text-4xl">./deep-dives</span>{" "}
            <span className="text-xl font-normal align-middle">(n) technical deep dives </span>
          </h1>
          <WindowControls />
        </div>

        {/* Window content */}
        <div className="p-12 min-h-[500px]">
          <div className="flex flex-col gap-8">
            {deepDives.map((writing: DeepDive) => (
              <Link key={writing.id} href={`/deep-dives/${writing.id}`} className="block group">
                <h2 className="text-2xl font-bold group-hover:text-blue-500 transition-colors">{writing.title}</h2>
                <p className="text-lg text-gray-600 mt-2">{writing.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t-4 border-black p-4 bg-white"></div>
      </div>
    </div>
  )
}
