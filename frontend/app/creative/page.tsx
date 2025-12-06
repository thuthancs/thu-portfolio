"use client"

import { useEffect, useState } from "react"

import Sidebar from "../../components/layout/Sidebar"
import { getTagColorClasses } from "../../lib/utils"
import type { CreativeProject } from "./content"
import { creativeProjects as fallbackCreativeProjects, getCreativeProjects } from "./content"

export default function CreativePage() {
  const [projectList, setProjectList] = useState<CreativeProject[]>(fallbackCreativeProjects)
  const [selectedId, setSelectedId] = useState<string>(fallbackCreativeProjects[0]?.id ?? "")

  const selectedProject = projectList.find((p) => p.id === selectedId)

  useEffect(() => {
    ;(async () => {
      try {
        const loaded = await getCreativeProjects()
        if (loaded.length > 0) {
          setProjectList(loaded)
          setSelectedId(loaded[0].id)
        }
      } catch {
        // fall back to static list
      }
    })()
  }, [])

  return (
    <div className="h-screen bg-[#f5f5f0] flex overflow-hidden">
      <div className="ml-6 mr-4 my-6">
        <Sidebar active="creative" />
      </div>

      <main className="flex-1 pt-10 pb-6 pr-8 pl-2 overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Heading */}
          <header className="mb-10">
            <h1 className="text-4xl font-bold">
              <span className="text-4xl">./creative</span>{" "}
              <span className="text-xl font-normal align-middle">
                (v) design interfaces + experiments that augment human productivity & creativity
              </span>
            </h1>
          </header>

          <div className="flex-1 flex gap-8 px-6 pb-0 overflow-hidden items-stretch">
            {/* List */}
            <aside className="w-80 flex-shrink-0 flex flex-col">
              <div className="space-y-3 overflow-y-auto pr-2">
                {projectList.map((project) => {
                  const isActive = project.id === selectedId
                  return (
                    <button
                      key={project.id}
                      onClick={() => setSelectedId(project.id)}
                      className={`w-full text-left rounded-full px-5 py-3 text-sm font-medium border-2 transition-colors ${
                        isActive
                          ? "border-[#4BAF4F] bg-[#4BAF4F] text-white"
                          : "border-transparent bg-white hover:bg-black/5"
                      }`}
                    >
                      {project.title}
                    </button>
                  )
                })}
              </div>
            </aside>

            {/* Preview pane */}
            <section className="flex-1 min-h-[600px] bg-white border-2 border-grey rounded-3xl flex flex-col overflow-hidden">
              {selectedProject ? (
                <>
                  {/* Placeholder preview area */}
                  <div className="border-b-2 border-grey bg-black/5">
                    <div className="h-64 flex items-center justify-center text-sm text-gray-500">
                      preview coming soon
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8 flex flex-col gap-6 overflow-y-auto">
                    <div>
                      <h2 className="text-2xl font-semibold mb-2">
                        {selectedProject.title.replace(/-/g, " ")}
                      </h2>
                      {selectedProject.categories && selectedProject.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {selectedProject.categories.map((cat) => (
                            <span
                              key={cat}
                              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border ${getTagColorClasses(
                                cat
                              )}`}
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                      )}
                      <p className="text-sm text-gray-700 max-w-prose">
                        {selectedProject.description}
                      </p>
                    </div>

                    {selectedProject.link && (
                      <div className="text-sm">
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline font-medium hover:text-black"
                        >
                          view project details
                        </a>
                      </div>
                    )}
                  </div>
                </>
              ) : null}
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
