import { Restaurant } from "@/components/restaurant/component";
import { getRestaurant } from "@/services/api";

const RestaurantPage = async ({ params: { restaurantId } }) => {
  const restaurant = await getRestaurant(restaurantId);

  return <Restaurant restaurant={restaurant} />;
};

export default RestaurantPage;
