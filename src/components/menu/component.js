import { Dish } from "../dish/component";

export const Menu = ({ dishes }) => {
  return (
    <div>
      {dishes.map((dish) => (
        <Dish dishId={dish} />
      ))}
    </div>
  );
};
