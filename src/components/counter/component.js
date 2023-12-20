"use client";

import { useState } from "react";

export const Counter = () => {
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <button onClick={() => setAmount(amount - 1)}>-</button>
      {amount}
      <button onClick={() => setAmount(amount + 1)}>+</button>
    </div>
  );
};

export default Counter;
