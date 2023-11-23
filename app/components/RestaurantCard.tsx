import Link from "next/link";

export default function RestaurantCard() {
  return (
    <div className="m-3 h-72 w-64 cursor-pointer overflow-hidden rounded border">
      <Link href="/restaurant/MrWhitesLeicester">
        <img
          src="https://resizer.otstatic.com/v2/photos/wide-huge/3/56612519.webp"
          alt=""
          className="h-36 w-full"
        />

        <div className="p-1">
          <h3 className="mb-2 text-2xl font-bold">Mr White's Leicester</h3>

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
      </Link>
    </div>
  );
}
