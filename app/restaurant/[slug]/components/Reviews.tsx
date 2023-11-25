import { Review } from "@prisma/client";
import ReviewCard from "./ReviewCard";

function Reviews({ reviews }: { reviews: Review[] }) {
  return (
    <div>
      <h1 className="mt-10 mb-7 border-b pb-5 text-3xl font-bold">
        What {reviews.length} {reviews.length > 1 ? "people are " : "person is"}{" "}
        saying
      </h1>

      <div>
        {reviews.map((review) => (
          <ReviewCard review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
