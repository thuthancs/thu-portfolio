import WindowControls from "../../components/layout/WindowControls"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        {/* Browser window container */}
        <div className="bg-white border-4 border-black rounded-lg shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          {/* Window header with title and controls */}
          <div className="border-b-4 border-black p-4 flex items-center justify-between">
            <h1 className="text-4xl font-bold">
              <span className="text-4xl">./about</span>{" "}
              <span className="text-xl font-normal align-middle">(n) my name means being carefree, according to my mom :)</span>
            </h1>
            <WindowControls />
          </div>

          {/* Window content */}
          <div className="p-12 min-h-[500px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left column - Text content */}
              <div className="space-y-8">
                <p className="text-lg leading-relaxed">
                  hi, my name is thu and i'm from vietnam. i'm studying cs @ minerva university where i got the chance
                  to travel to 4 cities around the world while pursuing my degree. among all the cities, san francisco
                  has my heart.
                </p>

                <div>
                  <h2 className="text-2xl font-bold mb-4">big questions</h2>
                  <ul className="space-y-2 list-disc list-inside">
                    <li className="text-lg">how might we design better interfaces for ai products?</li>
                    <li className="text-lg"></li>
                  </ul>
                </div>
              </div>

              {/* Right column - Profile image */}
              <div className="flex justify-center lg:justify-end">
                <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <img src="/portrait.jpeg" alt="Thu's profile" className="w-120 h-auto" />
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t-4 border-black p-4 bg-white">
          </div>
        </div>
      </div>
    </div>
  )
}
