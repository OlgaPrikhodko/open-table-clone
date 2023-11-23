import Header from "./components/Header";
import NavBar from "./components/NavBar";
import RestaurantCard from "./components/RestaurantCard";

export default function Home() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        <NavBar />

        <main>
          <Header />

          {/* CARDS */}
          <div className="mt-10 flex flex-wrap py-3 px-36">
            <RestaurantCard />
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  );
}
