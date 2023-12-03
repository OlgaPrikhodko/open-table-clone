"use client";

import Link from "next/link";
import { useContext } from "react";
import useAuth from "../../hooks/useAuth";
import { AuthenticationContext } from "../context/AuthContext";
import AuthModal from "./AuthModal";

export default function NavBar() {
  const { data, loading } = useContext(AuthenticationContext);
  const { signout } = useAuth();

  return (
    <nav className="flex justify-between bg-white p-2">
      <Link href="/" className="text-2xl font-bold text-gray-700">
        OpenTable
      </Link>

      <div>
        {loading ? null : (
          <div className="flex">
            {data ? (
              <button
                className="mr-3 rounded border bg-blue-400 p-2 px-4 text-white"
                onClick={() => signout()}
              >
                Sign out
              </button>
            ) : (
              <>
                <AuthModal isSignIn={true} />
                <AuthModal isSignIn={false} />
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
