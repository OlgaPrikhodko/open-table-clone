import { Review } from "@prisma/client";
import { calculateReviewRatingAverage } from "../../../utils/calculateReviewRatingAverage";

function Rating({ reviews }: { reviews: Review[] }) {
  return (
    <div className="flex items-end pt-2">
      <div className="ratings flex items-center">
        <p>*****</p>
        <p className="ml-3 text-reg">
          {calculateReviewRatingAverage(reviews).toFixed(1)}
        </p>
      </div>
      <div>
        <p className="ml-4 text-reg">
          {reviews.length} review{reviews.length === 1 ? "" : "s"}
        </p>
      </div>
    </div>
  );
}

export default Rating;
