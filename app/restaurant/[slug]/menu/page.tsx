import Header from "../components/Header";
import Menu from "../components/Menu";
import RestaurantNavBar from "../components/RestaurantNavBar";

export default function RestaurantMenu() {
  return (
    <>
      <Header />

      <div className="0 m-auto -mt-11 flex w-2/3 items-start justify-between">
        <div className="w-[100%] rounded bg-white p-3 shadow">
          <RestaurantNavBar />
          <Menu />
        </div>
      </div>
    </>
  );
}
