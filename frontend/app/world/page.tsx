import Link from "next/link"

import Sidebar from "../../components/layout/Sidebar"
import { getTagColorClasses, getTagGroup, type TagGroup } from "../../lib/utils"
import { getCreativeProjects } from "../creative/content"
import { getDeepDives } from "../deep-dives/content"
import { getMiscs } from "../misc/content"
import { getProjects } from "../projects/content"
import { getWritings } from "../writing/content"

type WorldPageProps = {
  searchParams?: {
    tag?: string | string[]
  }
}

type WorldItem = {
  id: string
  title: string
  description: string
  type: "Project" | "Creative" | "Deep Dive" | "Blog" | "Misc"
  href: string
  labels: string[]
}

function filterItemsByTag(items: WorldItem[], tagParam?: string | string[]): WorldItem[] {
  if (!tagParam) return []

  const tagLabel = Array.isArray(tagParam) ? tagParam[0] : tagParam
  if (!tagLabel) return []

  const targetGroup: TagGroup = getTagGroup(tagLabel)
  if (targetGroup === "other") return []

  return items.filter((item) =>
    item.labels.some((label) => getTagGroup(label) === targetGroup)
  )
}

export default async function WorldPage({ searchParams }: WorldPageProps) {
  const [projects, creatives, deepDives, writings, miscs] = await Promise.all([
    getProjects(),
    getCreativeProjects(),
    getDeepDives(),
    getWritings(),
    getMiscs(),
  ])

  const allItems: WorldItem[] = [
    ...projects.map((p) => ({
      id: p.id,
      title: p.title,
      description: p.description,
      type: "Project" as const,
      href: `/projects/${p.id}`,
      labels: [...(p.tags ?? []), ...p.category],
    })),
    ...creatives.map((c) => ({
      id: c.id,
      title: c.title,
      description: c.description,
      type: "Creative" as const,
      href: `/creative/${c.id}`,
      labels: c.categories ?? [],
    })),
    ...deepDives.map((d) => ({
      id: d.id,
      title: d.title,
      description: d.description,
      type: "Deep Dive" as const,
      href: `/deep-dives/${d.id}`,
      labels: d.category,
    })),
    ...writings.map((w) => ({
      id: w.id,
      title: w.title,
      description: w.description,
      type: "Blog" as const,
      href: `/writing/${w.id}`,
      labels: w.category,
    })),
    ...miscs.map((m) => ({
      id: m.id,
      title: m.title,
      description: m.description,
      type: "Misc" as const,
      href: `/misc/${m.id}`,
      labels: m.category ?? [],
    })),
  ]

  const tagParam = searchParams?.tag
  const filteredItems = filterItemsByTag(allItems, tagParam)
  const tagLabel = Array.isArray(tagParam) ? tagParam[0] : tagParam

  return (
    <div className="h-screen bg-[#f5f5f0] flex overflow-hidden">
      <div className="ml-6 mr-4 my-6">
        <Sidebar />
      </div>

      <main className="flex-1 pt-10 pb-6 pr-8 pl-2 overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Heading */}
          <header className="mb-10">
            <h1 className="text-4xl font-bold">
              <span className="text-4xl">./world</span>{" "}
              <span className="text-xl font-normal align-middle">
                (n) explore everything by topic
              </span>
            </h1>
          </header>

          <section className="flex-1 bg-white border-2 border-grey rounded-3xl p-8 overflow-y-auto">
            {!tagLabel ? (
              <p className="text-sm text-gray-600">
                select a tag from the sidebar to see related projects, deep dives, blog posts, and more.
              </p>
            ) : filteredItems.length === 0 ? (
              <p className="text-sm text-gray-600">
                no content found for <span className="font-semibold">{tagLabel}</span> yet.
              </p>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border ${getTagColorClasses(
                        tagLabel
                      )}`}
                    >
                      {tagLabel}
                    </span>
                    <span className="text-sm text-gray-600">
                      showing {filteredItems.length} piece
                      {filteredItems.length === 1 ? "" : "s"} related to this tag
                    </span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {filteredItems.map((item) => (
                    <li
                      key={`${item.type}-${item.id}`}
                      className="border border-gray-200 rounded-2xl p-4 hover:border-black transition-colors bg-[#fdfdfb]"
                    >
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs uppercase tracking-wide text-gray-500">
                            {item.type}
                          </span>
                        </div>
                      </div>
                      <Link href={item.href} className="text-lg font-semibold">
                        {item.title}
                      </Link>
                      <p className="text-sm text-gray-700 mt-1">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  )
}


