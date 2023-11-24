import RestaurantCard from "./components/RestaurantCard";
import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchRestaurantsByCity = async (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    slug: true,
    location: true,
  };
  if (!city) return prisma.restaurant.findMany({ select });

  const restaurants = await prisma.restaurant.findMany({
    where: { location: { name: { equals: city.toLowerCase() } } },
    select,
  });

  return restaurants;
};

const fetchLocations = async () => {
  return prisma.location.findMany();
};

const fetchCuisines = async () => {
  return prisma.cuisine.findMany();
};

export default async function Search({
  searchParams,
}: {
  searchParams: { city: string };
}) {
  const restaurants = await fetchRestaurantsByCity(searchParams.city);

  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();
  return (
    <>
      <Header />

      <div className="m-auto flex w-2/3 items-start justify-between py-4">
        <SearchSideBar locations={locations} cuisines={cuisines} />

        <div className="w-5/6">
          {restaurants.length === 0 && (
            <p>Sorry we found no restaurants in this area</p>
          )}

          {restaurants.length !== 0 &&
            restaurants.map((restaurant) => (
              <RestaurantCard restaurant={restaurant} key={restaurant.id} />
            ))}
        </div>
      </div>
    </>
  );
}
