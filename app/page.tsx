import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        {/* NAVBAR */}
        <nav className="flex justify-between bg-white p-2">
          <a href="" className="text-2xl font-bold text-gray-700">
            OpenTable
          </a>

          <div>
            <div className="flex">
              <button className="mr-3 rounded border bg-blue-400 p-2 px-4 text-white">
                SignIn
              </button>
              <button className="rounded border p-2 px-4">SignUp</button>
            </div>
          </div>
        </nav>
        {/* NAVBAR */}

        {/* HEADER */}
        <div className="h-96 overflow-hidden">
          <div className="flex h-full items-center justify-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] bg-center">
            <h1 className="text-center text-7xl capitalize text-white drop-shadow">
              Mr White's Leicester (Mazeikiai)
            </h1>
          </div>
        </div>
        {/* HEADER */}
      </main>
    </main>
  );
}
