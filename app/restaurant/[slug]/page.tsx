import Description from "./components/Description";
import Header from "./components/Header";
import Images from "./components/Images";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Reviews from "./components/Reviews";
import Title from "./components/Title";

export default function RestaurantDetails() {
  return (
    <>
      <Header />

      <div className="0 m-auto -mt-11 flex w-2/3 items-start justify-between">
        <div className="w-[70%] rounded bg-white p-3 shadow">
          <RestaurantNavBar />
          <Title />
          <Rating />
          <Description />
          <Images />
          <Reviews />
        </div>

        <div className="relative w-[27%] text-reg">
          <ReservationCard />
        </div>
      </div>
    </>
  );
}
