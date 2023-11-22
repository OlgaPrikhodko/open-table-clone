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

        {/* DESCRIPTION PORTION */}
        <div className="0 m-auto -mt-11 flex w-2/3 items-start justify-between">
          <div className="w-[70%] rounded bg-white p-3 shadow">
            {/* RESTAURANT NAVBAR */}
            <nav className="flex border-b pb-2 text-reg">
              <a href="" className="mr-7">
                Overviev
              </a>
              <a href="" className="mr-7">
                Menu
              </a>
            </nav>
            {/* RESTAURANT NAVBAR */}

            {/* TITLE */}
            <div className="mt-4 border-b pb-6">
              <h1 className="text-6xl font-bold">Mr White's Leicester</h1>
            </div>
            {/* TITLE */}

            {/* RATING */}
            <div className="flex items-end pt-2">
              <div className="ratings flex items-center">
                <p>*****</p>
                <p className="ml-3 text-reg">4.9</p>
              </div>
              <div>
                <p className="ml-4 text-reg">600 reviews</p>
              </div>
            </div>
            {/* RATING */}

            {/* DESCRIPTION */}
            <div className="mt-4">
              <p className="text-lg font-light">
                Marco Pierre White has returned to the capital's West End – for
                the first time in 10 years. Located in Leicester Square, Mr.
                White’s is now serving succulent steaks, authentic Italian
                pizza, and Mr. White’s very own London Dry Gin in their lively
                restaurant & bar.
              </p>
            </div>
            {/* DESCRIPTION */}
          </div>
        </div>
        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  );
}
