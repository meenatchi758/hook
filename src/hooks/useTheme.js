import { useState, useEffect } from "react";

/**
 * Custom hook to manage light/dark theme
 * @returns {Object} - { theme, toggleTheme }
 */
export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage for saved theme
    const saved = localStorage.getItem("theme");
    return saved ? saved : "light";
  });

  useEffect(() => {
    document.body.dataset.theme = theme; // set data attribute on body
    localStorage.setItem("theme", theme); // persist in localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}
