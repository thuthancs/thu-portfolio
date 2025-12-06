/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import Sidebar from "../../components/layout/Sidebar"
import { getTagColorClasses } from "../../lib/utils"
import type { Project } from "./content"
import { projects as fallbackProjects, getProjects } from "./content"

export default function ProjectsPage() {
  const [projectList, setProjectList] = useState<Project[]>(fallbackProjects)
  const [selectedId, setSelectedId] = useState<string>(fallbackProjects[0]?.id ?? "")

  const selectedProject = projectList.find((p) => p.id === selectedId)

  useEffect(() => {
    ;(async () => {
      try {
        const loaded = await getProjects()
        if (loaded.length > 0) {
          setProjectList(loaded)
          setSelectedId(loaded[0].id)
        }
      } catch {
        // silence – we'll just use the fallback list that is already set
      }
    })()
  }, [])

  return (
    <div className="h-screen bg-[#f5f5f0] flex overflow-hidden">
      <div className="ml-6 mr-4 my-6">
        <Sidebar active="projects" />
      </div>

      <main className="flex-1 pt-10 pb-6 pr-8 pl-2 overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Heading */}
          <header className="mb-10">
              <h1 className="text-4xl font-bold">
                <span className="text-4xl">./projects</span>{" "}
                <span className="text-xl font-normal align-middle">
                  (n) learning by doing to become a better engineer :)
                </span>
              </h1>
            </header>

          <div className="flex-1 flex gap-8 px-6 pb-0 overflow-hidden items-stretch">
            {/* Project list */}
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
                  {/* Image / media */}
                  <div className="border-b-2 border-grey bg-black/5">
                    {selectedProject.image ? (
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-64 object-cover"
                      />
                    ) : (
                      <div className="h-64 flex items-center justify-center text-sm text-gray-500">
                        preview coming soon
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8 flex flex-col gap-6 overflow-y-auto">
                    <div>
                      <h2 className="text-2xl font-semibold mb-2">
                        <Link
                          href={`/projects/${selectedProject.id}`}
                        >
                          {selectedProject.title.replace(/-/g, " ")}
                        </Link>
                      </h2>
                      {selectedProject.tags && selectedProject.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {selectedProject.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border ${getTagColorClasses(
                                tag
                              )}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <p className="text-sm text-gray-700 max-w-prose">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="space-y-4 text-sm text-gray-800 max-w-prose">
                      <div>
                        <h3 className="font-semibold mb-1">Problem Statement</h3>
                        <p>{selectedProject.problem}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Solution</h3>
                        <p>{selectedProject.solution}</p>
                      </div>
                    </div>

                    
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


