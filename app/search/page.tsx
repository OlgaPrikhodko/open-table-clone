import NavBar from "../components/NavBar";

export default function Search() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        <NavBar />

        {/* HEADER */}
        <div className="bg-gradient-to-r from-[#0f1f47] to-[#5f6984]">
          <div className="text-center">
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
        <div className="m-auto flex w-2/3 items-start justify-between py-4">
          {/* SEARCH SIDEBAR */}
          <div className="w-1/5">
            <div className="border-b pb-4">
              <h1 className="mb-2">Region</h1>
              <p className="text-reg font-light">Mazeikiai</p>
              <p className="text-reg font-light">Vilnius</p>
              <p className="text-reg font-light">Shailiai</p>
              <p className="text-reg font-light">Klaipeda</p>
              <p className="text-reg font-light">Kaunas</p>
            </div>

            <div className="mt-3 border-b pb-4">
              <h1 className="mb-2">Cuisine</h1>
              <p className="text-reg font-light">Mexican</p>
              <p className="text-reg font-light">Italian`</p>
              <p className="text-reg font-light">Chianise</p>
              <p className="text-reg font-light">Getman</p>
              <p className="text-reg font-light">France</p>
            </div>

            <div className="mt-3 pb-4">
              <h1 className="mb-2">Price</h1>
              <div className="flex">
                <button className="w-full rounded-l border p-2 text-reg font-light">
                  $
                </button>
                <button className="w-full border-t border-b p-2 text-reg font-light">
                  $$
                </button>
                <button className="w-full rounded-r border p-2 text-reg font-light">
                  $$$
                </button>
              </div>
            </div>
          </div>
          {/* SEARCH SIDEBAR */}

          <div className="w-5/6">
            {/* RESTAURANT CARD */}
            <div className="flex border-b pb-5">
              <img
                src="https://resizer.otstatic.com/v2/photos/legacy/2/54381049.jpg"
                alt=""
                className="w-44 rounded"
              />
              <div className="pl-5">
                <h2 className="text-3xl">The Pembroke</h2>
                <div className="flex items-start">
                  <div className="mb-2 flex">******</div>
                  <p className="ml-2 text-sm">Awesome</p>
                </div>

                <div className="mb-9">
                  <div className="flex text-reg font-light">
                    <p className="mr-4">$$$</p>
                    <p className="mr-4">Global, International</p>
                    <p className="mr-4">Dupont Circle</p>
                  </div>
                </div>

                <div className="text-red-600">
                  <a href="">View more information</a>
                </div>
              </div>
            </div>
            {/* RESTAURANT CARD */}
          </div>
        </div>
      </main>
    </main>
  );
}
