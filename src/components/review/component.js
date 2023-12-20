import { getReviews } from "@/services/api";

export const Review = async ({ reviewId }) => {
  const review = await getReviews(reviewId);

  return (
    <div>
      {review.text} - rating {review.rating}
    </div>
  );
};
