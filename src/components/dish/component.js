import Counter from "../counter/component";
import { getDishes } from "@/services/api";

export const Dish = async ({ dishId }) => {
  const dish = await getDishes(dishId);

  return (
    <div>
      {dish.name}
      <Counter />
    </div>
  );
};
