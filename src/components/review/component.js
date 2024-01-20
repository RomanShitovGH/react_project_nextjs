export const Review = ({ review }) => {
  return (
    <div>
      {review.text} - rating {review.rating}
    </div>
  );
};
