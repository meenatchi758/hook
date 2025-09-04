import { useEffect, useRef } from "react";

/**
 * Custom hook to run a callback after a delay
 * @param {Function} callback - Function to execute
 * @param {number} delay - Delay in milliseconds
 */
export default function useTimeout(callback, delay) {
  const savedCallback = useRef();

  // Remember latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return; // do nothing if delay is null
    const id = setTimeout(() => savedCallback.current(), delay);
    return () => clearTimeout(id); // cleanup on unmount or delay change
  }, [delay]);
}
