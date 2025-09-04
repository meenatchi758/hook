import React, { useState } from "react";
import useTitle from "../hooks/useTitle";

export default function TitleDemo() {
  const [count, setCount] = useState(0);

  // Dynamically update the document title
  useTitle(`Count: ${count}`);

  return (
    <div>
      <h2>useTitle Hook Demo</h2>
      <p>Check the browser tab for dynamic title updates!</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}
