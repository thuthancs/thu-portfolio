import WindowControls from "../../components/layout/WindowControls"

export default function MiscPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] flex items-center justify-center p-8">
      <div className="w-full max-w-6xl bg-white border-4 border-black rounded-lg shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        {/* Window header */}
        <div className="border-b-4 border-black p-4 flex items-center justify-between">
          <h1 className="text-4xl font-bold">
            <span className="text-4xl">./curiosity</span>{" "}
            <span className="text-xl font-normal align-middle">(n) random things i've learned :)</span>
          </h1>
          <WindowControls />
        </div>

        {/* Window content */}
        <div className="p-12 min-h-[500px] flex items-center justify-center">
          <div className="text-center">
            <p className="text-2xl font-medium text-gray-600">
              to be updated soon :)
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t-4 border-black p-4 bg-white"></div>
      </div>
    </div>
  )
}
