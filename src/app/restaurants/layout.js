import { RestaurantsTabs } from "@/components/restaurants-tabs/component";
import { getRestaurants } from "@/services/api";

export default async function RestaurantsLayout({ children }) {
  const restaurants = await getRestaurants();

  return (
    <div>
      <RestaurantsTabs restaurants={restaurants} />
      {children}
    </div>
  );
}
