"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import Sidebar from "../../components/layout/Sidebar"
import type { DeepDive } from "./content"
import { deepDives as fallbackDeepDives, getDeepDives } from "./content"

export default function DeepDivesPage() {
  const [deepDivesList, setDeepDivesList] = useState<DeepDive[]>(fallbackDeepDives)
  const [selectedId, setSelectedId] = useState<string>(fallbackDeepDives[0]?.id ?? "")

  const selectedDeepDive = deepDivesList.find((d) => d.id === selectedId)

  useEffect(() => {
    ;(async () => {
      try {
        const loaded = await getDeepDives()
        if (loaded.length > 0) {
          setDeepDivesList(loaded)
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
        <Sidebar active="deep-dives" />
      </div>

      <main className="flex-1 pt-10 pb-6 pr-8 pl-2 overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Heading */}
          <header className="mb-10">
            <h1 className="text-4xl font-bold">
              <span className="text-4xl">./deep-dives</span>{" "}
              <span className="text-xl font-normal align-middle">(n) technical deep dives</span>
            </h1>
          </header>

          <div className="flex-1 flex gap-8 px-6 pb-0 overflow-hidden items-stretch">
            {/* List */}
            <aside className="w-80 flex-shrink-0 flex flex-col">
              <div className="space-y-3 overflow-y-auto pr-2">
                {deepDivesList.map((deepDive) => {
                  const isActive = deepDive.id === selectedId
                  return (
                    <button
                      key={deepDive.id}
                      onClick={() => setSelectedId(deepDive.id)}
                      className={`w-full text-left rounded-full px-5 py-3 text-sm font-medium border-2 transition-colors ${
                        isActive
                          ? "border-[#4BAF4F] bg-[#4BAF4F] text-white"
                          : "border-transparent bg-white hover:bg-black/5"
                      }`}
                    >
                      {deepDive.title}
                    </button>
                  )
                })}
              </div>
            </aside>

            {/* Preview pane */}
            <section className="flex-1 min-h-[600px] bg-white border-2 border-grey rounded-3xl flex flex-col overflow-hidden">
              {selectedDeepDive ? (
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
                      <h2 className="text-2xl font-semibold mb-2">{selectedDeepDive.title}</h2>
                      {selectedDeepDive.date && (
                        <p className="text-xs text-gray-500 mb-2">
                          {new Date(selectedDeepDive.date).toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                      )}
                      {selectedDeepDive.category && selectedDeepDive.category.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {selectedDeepDive.category.map((cat) => (
                            <span
                              key={cat}
                              className="inline-flex items-center rounded-full bg-[#f5f5f0] px-3 py-1 text-xs font-medium border border-gray-300"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                      )}
                      <p className="text-sm text-gray-700 max-w-prose">
                        {selectedDeepDive.description}
                      </p>
                    </div>

                    <div className="text-sm">
                      <Link
                        href={`/deep-dives/${selectedDeepDive.id}`}
                        className="underline font-medium hover:text-black"
                      >
                        read full deep dive
                      </Link>
                      {selectedDeepDive.link && (
                        <>
                          <span className="mx-2 text-gray-400">·</span>
                          <a
                            href={selectedDeepDive.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline font-medium hover:text-black"
                          >
                            external link
                          </a>
                        </>
                      )}
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
