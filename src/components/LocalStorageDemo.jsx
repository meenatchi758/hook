import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div style={{ background: theme === "dark" ? "#222" : "#eee", color: theme === "dark" ? "#fff" : "#000", height: "100vh", padding: "2rem" }}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
