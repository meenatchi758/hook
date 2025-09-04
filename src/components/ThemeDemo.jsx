import React from "react";
import useTheme from "../hooks/useTheme.js";

export default function ThemeDemo() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h2>useTheme Hook Demo</h2>
      <p>Current Theme: <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}
