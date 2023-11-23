import { PrismaClient, Cuisine, Location, PRICE } from "@prisma/client";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";

export interface RestaurantCardType {
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  slug: string;
  location: Location;
  price: PRICE;
}

const prisma = new PrismaClient();

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      slug: true,
      location: true,
      price: true,
    },
  });

  return restaurants;
};

export default async function Home() {
  const restaurants = await fetchRestaurants();

  return (
    <main>
      <Header />

      {/* CARDS */}
      <div className="mt-10 flex flex-wrap py-3 px-36">
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
      {/* CARDS */}
    </main>
  );
}
