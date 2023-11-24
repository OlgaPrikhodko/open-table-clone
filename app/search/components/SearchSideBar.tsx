import { Cuisine, Location } from "@prisma/client";

function SearchSideBar({
  locations,
  cuisines,
}: {
  locations: Location[];
  cuisines: Cuisine[];
}) {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {locations.map((location) => (
          <p className="text-reg font-light capitalize" key={location.id}>
            {location.name}
          </p>
        ))}
      </div>

      <div className="mt-3 border-b pb-4">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <p className="text-reg font-light capitalize" key={cuisine.id}>
            {cuisine.name}
          </p>
        ))}
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
  );
}

export default SearchSideBar;
