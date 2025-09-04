import React, { useState } from "react";
import usePrevious from "../hooks/usePrevious";

export default function PreviousDemo() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <h2>usePrevious Hook Demo</h2>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount !== undefined ? prevCount : "-"}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
