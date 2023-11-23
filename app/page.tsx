import { Inter } from "@next/font/google";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        <NavBar />

        <main>
          {/* HEADER */}
          <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
            <div className="mt-10 text-center">
              <h1 className="text-5xl font-bold text-white">
                Find your table for any occasion
              </h1>

              {/* SEARCHBAR */}
              <div className="m-auto flex justify-center py-7 text-left text-lg">
                <input
                  className="mr-3 w-[450px] rounded p-2"
                  type="text"
                  placeholder="State, city or town"
                />
                <button className="rounded bg-red-600 px-9 py-2 text-white">
                  Let's go!
                </button>
              </div>
              {/* SEARCHBAR */}
            </div>
          </div>
          {/* HEADER */}

          {/* CARDS */}
          <div className="mt-10 flex flex-wrap py-3 px-36">
            {/* CARD */}
            <div className="m-3 h-72 w-64 cursor-pointer overflow-hidden rounded border">
              <img
                src="https://resizer.otstatic.com/v2/photos/wide-huge/3/56612519.webp"
                alt=""
                className="h-36 w-full"
              />
              <div className="p-1">
                <h3 className="mb-2 text-2xl font-bold">
                  Mr White's Leicester
                </h3>
                <div className="flex items-start">
                  <div className="mb-2 flex">****</div>
                  <p className="ml-2">77 reviews</p>
                </div>
                <div className="flex text-reg font-light capitalize">
                  <p className="mr-3">mexican</p>
                  <p className="mr-3">$$$$</p>
                  <p>Mazeikai</p>
                </div>

                <p className="mt-2 text-sm font-bold">Booked 3 times today</p>
              </div>
            </div>
            {/* CARD */}
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  );
}
