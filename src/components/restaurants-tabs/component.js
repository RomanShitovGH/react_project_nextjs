import Link from "next/link";

export const RestaurantsTabs = ({ restaurants }) => {
  return (
    <div>
      <h3>Рестораны</h3>
      <ul>
        {restaurants.map(({ name, id }) => (
          <li>
            <Link href={`/restaurants/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
