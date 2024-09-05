import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h2>count = {count}</h2>
      <button>Increase Count</button>
    </div>
  );
}
