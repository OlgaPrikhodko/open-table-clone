// import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from "./page.module.css";

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
        </main>
      </main>
    </main>
  );
}
