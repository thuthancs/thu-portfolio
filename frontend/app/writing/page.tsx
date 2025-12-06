"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import Sidebar from "../../components/layout/Sidebar"
import type { Writing } from "./content"
import { writings as fallbackWritings, getWritings } from "./content"

export default function WritingPage() {
  const [writingList, setWritingList] = useState<Writing[]>(fallbackWritings)
  const [selectedId, setSelectedId] = useState<string>(fallbackWritings[0]?.id ?? "")

  const selectedWriting = writingList.find((w) => w.id === selectedId)

  useEffect(() => {
    ;(async () => {
      try {
        const loaded = await getWritings()
        if (loaded.length > 0) {
          setWritingList(loaded)
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
        <Sidebar active="blog" />
      </div>

      <main className="flex-1 pt-10 pb-6 pr-8 pl-2 overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Heading */}
          <header className="mb-10">
            <h1 className="text-4xl font-bold">
              <span className="text-4xl">./blog</span>{" "}
              <span className="text-xl font-normal align-middle">(n) thoughts and reflections</span>
            </h1>
          </header>

          <div className="flex-1 flex gap-8 px-6 pb-0 overflow-hidden items-stretch">
            {/* List */}
            <aside className="w-80 flex-shrink-0 flex flex-col">
              <div className="space-y-3 overflow-y-auto pr-2">
                {writingList.map((writing) => {
                  const isActive = writing.id === selectedId
                  return (
                    <button
                      key={writing.id}
                      onClick={() => setSelectedId(writing.id)}
                      className={`w-full text-left rounded-full px-5 py-3 text-sm font-medium border-2 transition-colors ${
                        isActive
                          ? "border-[#4BAF4F] bg-[#4BAF4F] text-white"
                          : "border-transparent bg-white hover:bg-black/5"
                      }`}
                    >
                      {writing.title}
                    </button>
                  )
                })}
              </div>
            </aside>

            {/* Preview pane */}
            <section className="flex-1 min-h-[600px] bg-white border-2 border-grey rounded-3xl flex flex-col overflow-hidden">
              {selectedWriting ? (
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
                      <h2 className="text-2xl font-semibold mb-2">{selectedWriting.title}</h2>
                      {selectedWriting.date && (
                        <p className="text-xs text-gray-500 mb-2">
                          {new Date(selectedWriting.date).toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                      )}
                      {selectedWriting.category && selectedWriting.category.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {selectedWriting.category.map((cat) => (
                            <span
                              key={cat}
                              className="inline-flex items-center rounded-full bg-[#f5f5f0] px-3 py-1 text-xs font-medium border border-gray-300"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                      )}
                      <p className="text-sm text-gray-700 max-w-prose">{selectedWriting.description}</p>
                    </div>

                    <div className="text-sm">
                      <Link
                        href={`/writing/${selectedWriting.id}`}
                        className="underline font-medium hover:text-black"
                      >
                        read full post
                      </Link>
                      {selectedWriting.link && (
                        <>
                          <span className="mx-2 text-gray-400">·</span>
                          <a
                            href={selectedWriting.link}
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
