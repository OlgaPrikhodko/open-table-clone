export default function Reserve() {
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

        <div className="h-screen border-t">
          <div className="m-auto w-3/5 py-9">
            {/* HEADER */}
            <div>
              <h3 className="font-bold">You're almost done!</h3>
              <div className="mt-5 flex">
                <img
                  src="https://resizer.otstatic.com/v2/photos/legacy/2/54381049.jpg"
                  alt=""
                  className="h-18 w-32 rounded"
                />

                <div className="ml-4">
                  <h1 className="text-3xl font-bold">The Pembroke</h1>

                  <div className="mt-3 flex">
                    <p className="mr-6">Tue, Nov, 22, 2023</p>
                    <p className="mr-6">6:15 PM</p>
                    <p className="mr-6">2 People (Standart seating)</p>
                  </div>
                </div>
              </div>
            </div>
            {/* HEADER */}

            {/* FORM */}
            <div className="mt-10 flex w-[660px] flex-wrap justify-between">
              <input
                type="text"
                className="mb-4 w-80 rounded border p-3"
                placeholder="First name"
              />

              <input
                type="text"
                className="mb-4 w-80 rounded border p-3"
                placeholder="Last name"
              />
              <input
                type="text"
                className="mb-4 w-80 rounded border p-3"
                placeholder="Phone number"
              />
              <input
                type="text"
                className="mb-4 w-80 rounded border p-3"
                placeholder="email"
              />
              <input
                type="text"
                className="mb-4 w-80 rounded border p-3"
                placeholder="Occasion (optional)"
              />
              <input
                type="text"
                className="mb-4 w-80 rounded border p-3"
                placeholder="Requests (optional)"
              />

              <button className="w-full rounded bg-red-600 p-3 font-bold text-white disabled:bg-gray-300">
                Complete reservation
              </button>

              <p className="mt-4 text-sm">
                By clicking “Complete reservation” you agree to the OpenTable
                Terms of Use and Privacy Policy. Message & data rates may apply.
                You can opt out of receiving text messages at any time in your
                account settings or by replying STOP.
              </p>
            </div>
            {/* FORM */}
          </div>
        </div>
      </main>
    </main>
  );
}
