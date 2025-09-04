import { useEffect } from "react";

/**
 * Custom hook to dynamically update the document title
 * @param {string} title - The title to set
 */
export default function useTitle(title) {
  useEffect(() => {
    const originalTitle = document.title; // store original title
    document.title = title;

    // Cleanup: restore original title when component unmounts
    return () => {
      document.title = originalTitle;
    };
  }, [title]);
}
