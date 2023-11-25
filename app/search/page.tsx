import RestaurantCard from "./components/RestaurantCard";
import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import { PRICE, PrismaClient } from "@prisma/client";

interface SearchParamsType {
  city?: string;
  cuisine?: string;
  price?: PRICE;
}

interface QueryParamsType {
  location?: { name: { equals: string } };
  cuisine?: { name: { equals: string } };
  price?: { equals: PRICE };
}

const prisma = new PrismaClient();

const fetchRestaurantsByCity = async (searchParams: SearchParamsType) => {
  const where: QueryParamsType = {};
  if (searchParams.city) {
    const location = { name: { equals: searchParams.city.toLowerCase() } };
    where.location = location;
  }
  if (searchParams.cuisine) {
    where.cuisine = { name: { equals: searchParams.cuisine.toLowerCase() } };
  }
  if (searchParams.price) {
    where.price = { equals: searchParams.price };
  }

  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    slug: true,
    location: true,
    reviews: true,
  };

  const restaurants = await prisma.restaurant.findMany({
    where,
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
  searchParams: SearchParamsType;
}) {
  const restaurants = await fetchRestaurantsByCity(searchParams);

  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <Header />

      <div className="m-auto flex w-2/3 items-start justify-between py-4">
        <SearchSideBar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />

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
