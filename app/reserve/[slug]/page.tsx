import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
import Header from "./components/Header";
import ReservationForm from "./components/ReservationForm";

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({ where: { slug } });

  if (!restaurant) return notFound();

  return restaurant;
};

export default async function Reserve({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { date: string; partySize: string };
}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  return (
    <div className="h-screen border-t">
      <div className="m-auto w-3/5 py-9">
        <Header
          image={restaurant.main_image}
          name={restaurant.name}
          date={searchParams.date}
          partySize={searchParams.partySize}
        />
        <ReservationForm
          slug={params.slug}
          date={searchParams.date}
          partySize={searchParams.partySize}
        />
      </div>
    </div>
  );
}
