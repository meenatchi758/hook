import { useState, useEffect } from "react";

/**
 * Custom hook to get and set values in localStorage.
 *
 * @param {string} key - The key in localStorage
 * @param {any} initialValue - Default value if key doesn't exist
 * @returns {[any, function]} - Value and setter function
 */
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key:", key, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error writing localStorage key:", key, error);
    }
  }, [key, value]);

  return [value, setValue];
}
