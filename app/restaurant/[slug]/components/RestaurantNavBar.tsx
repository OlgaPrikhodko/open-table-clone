import Link from "next/link";

function RestaurantNavBar() {
  return (
    <nav className="flex border-b pb-2 text-reg">
      <Link href="/restaurant/mr-whites-leicester" className="mr-7">
        Overviev1
      </Link>
      <Link href="/restaurant/mr-whites-leicester/menu" className="mr-7">
        Menu
      </Link>
    </nav>
  );
}

export default RestaurantNavBar;
