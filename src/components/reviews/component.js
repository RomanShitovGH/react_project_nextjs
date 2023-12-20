import { Review } from "../review/component";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review) => (
        <Review reviewId={review} />
      ))}
    </div>
  );
};
