import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h3>{restaurant.name}</h3>

      <p>Меню</p>
      <Menu restaurantId={restaurant.id} />

      <p>Отзывы</p>
      <Reviews restaurantId={restaurant.id} />
    </div>
  );
};
