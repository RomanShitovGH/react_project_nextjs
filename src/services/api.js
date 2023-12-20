export async function getRestaurants() {
  const result = await fetch("http://localhost:3001/api/restaurants");

  return result.json();
}
export async function getRestaurant(restaurantId) {
  const result = await fetch(
    `http://localhost:3001/api/restaurant/${restaurantId}`
  );

  return result.json();
}
export async function getDishes(dishId) {
  const result = await fetch(`http://localhost:3001/api/dish/${dishId}`);

  return result.json();
}
export async function getReviews(reviewId) {
  const result = await fetch(`http://localhost:3001/api/review/${reviewId}`);

  return result.json();
}
