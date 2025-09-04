import { useEffect, useRef } from "react";

/**
 * Custom hook to store and return previous value
 * @param {any} value - Current value
 * @returns {any} - Previous value
 */
export default function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value; // store current value after render
  }, [value]);

  return ref.current; // return previous value
}
