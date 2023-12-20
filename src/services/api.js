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
export async function getDishes(restaurantId) {
  const result = await fetch(
    `http://localhost:3001/api/dishes?` +
      new URLSearchParams({ restaurantId: restaurantId })
  );

  return result.json();
}

export async function getReviews(restaurantId) {
  const result = await fetch(
    `http://localhost:3001/api/reviews?` +
      new URLSearchParams({ restaurantId: restaurantId })
  );

  return result.json();
}
