import Link from "next/link";

function RestaurantCard() {
  return (
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
          <Link href="/restaurant/mr-whites-leicester">
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
