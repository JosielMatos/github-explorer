import { useState } from "react";

export function Counter() {
  const [value, setValue] = useState(0);

  function increment() {
    setValue(value + 1);
  }

  return (
    <>
      <h2>{value}</h2>
      <button type='button' onClick={increment}>
        Increment++
      </button>
    </>
  );
}
