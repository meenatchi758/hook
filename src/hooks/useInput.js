import { useState } from "react";

/**
 * Custom hook to manage input state
 * @param {string} initialValue - Default value of the input
 * @returns {object} - { value, onChange, reset }
 */
export default function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  // Update value when input changes
  const onChange = (e) => setValue(e.target.value);

  // Reset value to initial
  const reset = () => setValue(initialValue);

  return { value, onChange, reset };
}
