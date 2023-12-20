import Counter from "../counter/component";

export const Dish = async ({ dish }) => {
  return (
    <div>
      {dish.name}
      <Counter />
    </div>
  );
};
