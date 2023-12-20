import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h3>{restaurant.name}</h3>

      <p>Меню</p>
      <Menu dishes={restaurant.menu} />

      <p>Отзывы</p>
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
