import { Cuisine, Location, PRICE, Review } from "@prisma/client";
import Link from "next/link";
import Price from "../../components/Price";
import RatingStars from "../../components/RatingStars";
import { calculateReviewRatingAverage } from "../../../utils/calculateReviewRatingAverage";

interface RestaurantCardType {
  id: number;
  location: Location;
  name: string;
  main_image: string;
  slug: string;
  price: PRICE;
  cuisine: Cuisine;
  reviews: Review[];
}

function RestaurantCard({ restaurant }: { restaurant: RestaurantCardType }) {
  const renderRatingText = () => {
    const rating = calculateReviewRatingAverage(restaurant.reviews);

    if (rating > 4) return "Awersome";
    if (rating > 3 && rating <= 4) return "Good";
    if (rating > 0 && rating <= 3) return "Average";

    return "";
  };
  return (
    <div className="ml-4 flex border-b pb-5">
      <img src={restaurant.main_image} alt="" className="h-36 w-44 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>

        <div className="flex items-start">
          <RatingStars reviews={restaurant.reviews} />
          <p className="ml-2 text-sm">{renderRatingText()}</p>
        </div>

        <div className="mb-9">
          <div className="flex text-reg font-light">
            <Price price={restaurant.price} />
            <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
            <p className="mr-4 capitalize">{restaurant.location.name}</p>
          </div>
        </div>

        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
