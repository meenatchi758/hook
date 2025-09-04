import React from "react";
import useToggle from "../hooks/useToggle";

export default function ExampleComponent() {
  const [isVisible, toggleVisibility] = useToggle(false);

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p>Hello! This message is toggled.</p>}
    </div>
  );
}
