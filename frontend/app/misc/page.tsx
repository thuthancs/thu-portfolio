import Link from "next/link"
import WindowControls from "../../components/layout/WindowControls"
import { miscs } from "./content"

export default function MiscPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] flex items-center justify-center p-8">
      <div className="w-full max-w-6xl bg-white border-4 border-black rounded-lg shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        {/* Window header */}
        <div className="border-b-4 border-black p-4 flex items-center justify-between">
          <h1 className="text-4xl font-bold">
            <span className="text-4xl">./misc</span>{" "}
            <span className="text-xl font-normal align-middle">(n) random things i've learned or find interesting :)</span>
          </h1>
          <WindowControls />
        </div>

        {/* Window content */}
        <div className="p-12 min-h-[500px]">
          <ul className="space-y-4 list-none">
            {miscs.map((item) => (
              <li key={item.id} className="flex items-start gap-3">
                <span className="text-2xl font-bold">•</span>
                <div className="flex-1">
                  <Link href={`/misc/${item.id}`} className="block group">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1 group-hover:text-blue-500 transition-colors">{item.title}</h3>
                        <p className="text-base text-gray-700">{item.description}</p>
                      </div>
                      {item.category && item.category.length > 0 && (
                        <span className="text-sm text-gray-600 whitespace-nowrap">
                          {item.category.join(', ')}
                        </span>
                      )}
                    </div>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="border-t-4 border-black p-4 bg-white"></div>
      </div>
    </div>
  )
}
