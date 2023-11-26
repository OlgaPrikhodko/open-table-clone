"use client";
import errorImage from "../../public/icons/error.png";

import Image from "next/image";

function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-200">
      <Image src={errorImage} alt="error image" className="mb-8 w-56" />
      <div className="rounded bg-white px-9 py-14 shadow">
        <h3 className="text-3xl font-bold">Well, this is embarrasing</h3>
        <p className="text-reg font-bold">We couldn't find that restaurant</p>
        <p className="mt-6 text-sm font-light">Error Code: 404</p>
      </div>
    </div>
  );
}

export default NotFound;
