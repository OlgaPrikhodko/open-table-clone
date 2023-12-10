import fullStar from "../../public/icons/full-star.png";
import halfStar from "../../public/icons/half-star.png";
import emptyStar from "../../public/icons/empty-star.png";
import Image from "next/image";
import { Review } from "@prisma/client";
import { calculateReviewRatingAverage } from "../../utils/calculateReviewRatingAverage";

const FULL_STARS_COUNT = 5;

function RatingStars({ reviews }: { reviews: Review[] }) {
  const rating = calculateReviewRatingAverage(reviews);

  const fullStarsCount = Math.floor(rating);
  const halfStarValue = rating % 1;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < fullStarsCount; i++) {
      stars.push(fullStar);
    }
    if (halfStarValue !== 0) {
      if (halfStarValue <= 0.2) stars.push(emptyStar);
      else if (halfStarValue > 0.2 && halfStarValue <= 0.7)
        stars.push(halfStar);
      else if (halfStarValue > 0.7) stars.push(fullStar);
    }
    const emptyStarCount = FULL_STARS_COUNT - stars.length;

    for (let i = 0; i < emptyStarCount; i++) {
      stars.push(emptyStar);
    }

    return stars.map((star, index) => (
      <Image
        src={star}
        className="mr-2 h-4 w-4"
        alt="Review star"
        key={index}
      />
    ));
  };

  return <div className="flex items-center">{renderStars()}</div>;
}

export default RatingStars;
