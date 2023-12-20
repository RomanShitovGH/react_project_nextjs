import { getDishes } from "@/services/api";
import { Dish } from "../dish/component";

export const Menu = async ({ restaurantId }) => {
  const dishes = await getDishes(restaurantId);

  return (
    <div>
      {dishes.map((dish) => (
        <Dish dish={dish} />
      ))}
    </div>
  );
};
