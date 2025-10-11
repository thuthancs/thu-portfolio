import Footer from "../components/layout/Footer"
import MenuBar from "../components/layout/MenuBar"
import WindowControls from "../components/layout/WindowControls"
import Button from "../components/ui/Button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      {/* Browser window container */}
      <div className="w-full max-w-6xl bg-white border-4 border-black rounded-2xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        {/* Window controls bar */}
        <div className="bg-white border-b-2 border-black px-4 py-3 flex items-center">
          <WindowControls />
        </div>

        {/* Menu bar */}
        <MenuBar />

        {/* Main content */}
        <main className="min-h-[500px] flex flex-col items-center justify-center px-8 py-20 bg-white">
          <div className="text-center space-y-6 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">a sneak peek into thu's computer :)</h1>
            <p className="text-xl md:text-2xl text-gray-700">
              currently exploring the intersection of code and creativity
            </p>
            <div className="pt-6">
              <Button href="/explore">start exploring</Button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
