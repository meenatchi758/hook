import { useState, useEffect } from "react";

/**
 * Custom hook to detect media query matches
 * @param {string} query - CSS media query string
 * @returns {boolean} - Whether the query matches
 */
export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event) => setMatches(event.matches);

    mediaQueryList.addEventListener("change", listener);

    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
