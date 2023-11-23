import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";

export default function Home() {
  return (
    <main>
      <Header />

      {/* CARDS */}
      <div className="mt-10 flex flex-wrap py-3 px-36">
        <RestaurantCard />
      </div>
      {/* CARDS */}
    </main>
  );
}
