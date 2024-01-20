import { getReviews } from "@/services/api";
import { Review } from "../review/component";

export const Reviews = async ({ restaurantId }) => {
  const reviews = await getReviews(restaurantId);

  return (
    <div>
      {reviews.map((review) => (
        <Review review={review} />
      ))}
    </div>
  );
};
