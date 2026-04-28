export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center">
      <div className="text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to MikeOpenClaw1
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Building something amazing with OpenClaw
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/murry1234/mikeopenclaw1"
            className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            View on GitHub
          </a>
          <a
            href="#"
            className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </main>
  )
}