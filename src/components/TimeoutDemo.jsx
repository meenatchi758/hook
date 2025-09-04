import React, { useState } from "react";
import useTimeout from "../hooks/useTimeout.js";

export default function TimeoutDemo() {
  const [message, setMessage] = useState("Waiting...");

  // Run function after 3 seconds
  useTimeout(() => setMessage("Hello! Timeout triggered."), 3000);

  return (
    <div>
      <h2>useTimeout Hook Demo</h2>
      <p>{message}</p>
    </div>
  );
}
