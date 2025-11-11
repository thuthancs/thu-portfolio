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
                  hi, my name is thư. i grew up in a <a href="https://www.google.com/search?q=daknong&sourceid=chrome&ie=UTF-8" className="hover:underline text-blue-500">small town</a> in the central highlands of vietnam, embraced by trees, coffee, and lots of love from my family.
                  i'm studying cs @ minerva university where i got the chance
                  to travel to seoul, buenos aires, and berlin. among all the cities, san francisco
                  has my heart and is where i currently call home.
                  
                </p>
                <div>
                  <h2 className="text-xl font-bold mb-2">when i'm awake</h2>
                  <p>
                    i'm building an interactive series to teach people <a href="https://github.com/thuthancs/snake-game-rl" className="hover:underline text-blue-500">reinforcement learning via games</a>, 
                    reimplementing <a href="https://interactive-library-phi.vercel.app/" className="hover:underline text-blue-500">micro-interactions</a> on the web, learning how to write <a href="https://github.com/thuthancs/performance-optimization" className="hover:underline text-blue-500">high-performant code</a> in python,
                    exploring ways to <a href="https://github.com/thuthancs/beautiful-math" className="hover:underline text-blue-500">make art with math</a> and coding, and...well, creating a comprehensive resource on the theory and applications <a href="https://github.com/thuthancs/dsa-practice" className="hover:underline text-blue-500">data structures and algorithms</a> (yes, it's leetcode).
                    in a nutshell, i find myself juggling between two identities everyday: one who is dreamy and loves tinkering with designing beautiful things, and one who is grounded and loves diving deep into low-level, technical details to make things go brrrr!
                    the latter one emerged after me being traumatized by how long it took for my model training and simulations to finish on my laptop, so now i’m on a quest to make code go faster. life’s just too short to stare at epoch 10/100 for hours :)
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">my hopes and dreams</h2>
                  <p className="mb-4">
                    to leave the internet with a few good explanations and stories and to develop technologies 
                    that are fun, delightful, and human-centered.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">when i'm not working or napping</h2>
                  <p>you'll see me spending more time than i should solving counting problems (think combinations, permutation, etc), 
                    exploring new cafes, building clones of apps i like, making art with code/paper and trying something i'm bad at (like chess).
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">fun facts</h2>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>some of my favorite fonts are Quicksand, Georgia, Be Vietnam Pro and Helvetica :) i don't like Times New Roman</li>
                    <li>i love (and i think i'm good at) <a href="https://www.instagram.com/divachefs/" className="hover:underline text-blue-500">cooking</a> - my specialties are vietnamese dishes!</li>
                    <li>i think dark mode is overrated and solarized light is so underrated!</li>
                    <li>favourite artists: <a href="https://www.youtube.com/watch?v=atklpvgaBWA&list=RDatklpvgaBWA&start_radio=1" className="hover:underline text-blue-500">olivia dean</a> and <a href="https://www.youtube.com/watch?v=08Ndzf5-HxI&list=RD08Ndzf5-HxI&start_radio=1" className="hover:underline text-blue-500">john mayer</a></li>
                    <li>i've built over 5 versions of personal website and finally came up with the design I'm most satisfied with, which is the one you're seeing now!</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">an endless list of questions</h2>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>how might we design better interfaces for ai products?</li>
                    <li>how to learn authentically in the age of ai?</li>
                    <li>what does it mean to be a great engineer in the age of ai?</li>
                  </ul>
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
