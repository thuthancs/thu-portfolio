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
            <div>
              <div className="flex flex-row flex-wrap justify-center gap-2 mb-12">
                <div className="text-center">
                  <div className="border-4 border-black">
                    <img src="/portraits/vietnam.jpg" alt="Vietnam" className="w-48 h-48 object-cover" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="border-4 border-black">
                    <img src="/portraits/seoul.jpeg" alt="Seoul" className="w-48 h-48 object-cover" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="border-4 border-black">
                    <img src="/portraits/sf.jpeg" alt="San Francisco" className="w-48 h-48 object-cover" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="border-4 border-black">
                    <img src="/portraits/germany.jpeg" alt="Germany" className="w-48 h-48 object-cover" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="border-4 border-black">
                    <img src="/portraits/ba.jpeg" alt="Buenos Aires" className="w-48 h-48 object-cover" />
                  </div>
                </div>
              </div>

              {/* Text content */}
              <div className="space-y-8">
                <p>
                  hi, my name is thư. i grew up in a <a href="https://www.google.com/search?q=daknong&sourceid=chrome&ie=UTF-8" className="underline hover:text-blue-500">small town</a> in the central highlands of vietnam, embraced by trees, coffee, and lots of love from my family.
                  i'm studying cs @ minerva university where i got the chance
                  to travel to seoul, buenos aires, and berlin. among all the cities, san francisco
                  has my heart and is where i currently call home :) 
                  
                </p>
                <div>
                  <h2 className="text-xl font-bold mb-2">my mission</h2>
                  <p className="mb-4">
                    to leave the internet with a few good explanations and stories and to develop technologies 
                    that are fun, delightful, and human-centered.
                  </p>
                  
                  <p>we’re bombarded with new information every day, and sometimes we feel pressured to create more. but i believe invention and innovation are byproducts of deep understanding. i don’t set out to create things—but by understanding something deeply enough, i find ways and ideas to create something new.
                    i have always loved learning and i always will. my hopes and dreams are simple: i want to create something on the internet that someone stumbles upon and messages me about—”this is cool” or “this helps me understand something i used to struggle with.” if just one person (not me!) finds it helpful, that’s enough.</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">big questions</h2>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>how might we design better interfaces for ai products?</li>
                    <li>how to learn authentically in the age of ai?</li>
                    <li>what does it mean to be a great engineer in the age of ai?</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">current pursuits</h2>
                  <p>
                    i must admit that i have way too many interests that given the constraint of a human lifetime, i might not be able to explore them all. but here are a few that i'm currently building.
                    i'm building an <a href="https://github.com/thuthancs/snake-game-rl" className="underline hover:text-blue-500">interactive series</a> to teach people reinforcement learning via games, 
                    exploring ways to redesign popular apps' ui/ux, and learning how to write high-performant code in python!
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">in my free time</h2>
                  <p>you'll see me spending more time than i should solving counting problems (think combinations, permutation, etc), 
                    exploring new cafes, building clones of apps i like, making art with code/paper and try something i'm bad at :)
                  </p>
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
