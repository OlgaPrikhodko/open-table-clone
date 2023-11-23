import RestaurantCard from "./components/RestaurantCard";
import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";

export default function Search() {
  return (
    <>
      <Header />

      <div className="m-auto flex w-2/3 items-start justify-between py-4">
        <SearchSideBar />

        <div className="w-5/6">
          <RestaurantCard />
        </div>
      </div>
    </>
  );
}
