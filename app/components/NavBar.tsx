import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between bg-white p-2">
      <Link href="/" className="text-2xl font-bold text-gray-700">
        OpenTable
      </Link>

      <div>
        <div className="flex">
          <button className="mr-3 rounded border bg-blue-400 p-2 px-4 text-white">
            SignIn
          </button>
          <button className="rounded border p-2 px-4">SignUp</button>
        </div>
      </div>
    </nav>
  );
}
