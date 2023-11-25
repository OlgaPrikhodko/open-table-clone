import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";

function SearchSideBar({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
}) {
  const prices = [
    {
      price: PRICE.CHEAP,
      label: "$",
      className: "rounded-l border",
    },
    {
      price: PRICE.REGULAR,
      label: "$$",
      className: "border-t border-b",
    },
    {
      price: PRICE.EXPENSIVE,
      label: "$$$",
      className: "rounded-r border",
    },
  ];

  return (
    <div className="w-1/5">
      <div className="flex flex-col border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {locations.map((location) => (
          <Link
            href={{
              pathname: "/search",
              query: { ...searchParams, city: location.name },
            }}
            className="text-reg font-light capitalize"
            key={location.id}
          >
            {location.name}
          </Link>
        ))}
      </div>

      <div className="mt-3 flex flex-col border-b pb-4">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <Link
            href={{
              pathname: "/search",
              query: { ...searchParams, cuisine: cuisine.name },
            }}
            className="text-reg font-light capitalize"
            key={cuisine.id}
          >
            {cuisine.name}
          </Link>
        ))}
      </div>

      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {prices.map(({ price, label, className }) => (
            <Link
              href={{
                pathname: "/search",
                query: { ...searchParams, price },
              }}
              className={`w-full border p-2 text-center text-reg font-light ${className}`}
              key={label}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchSideBar;
