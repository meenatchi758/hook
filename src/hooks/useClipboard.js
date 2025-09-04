import { useState } from "react";

/**
 * Custom hook to copy text to clipboard
 * @returns {Object} - { copy, isCopied }
 */
export default function useClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // reset after 2s
    } catch (err) {
      console.error("Failed to copy:", err);
      setIsCopied(false);
    }
  };

  return { copy, isCopied };
}
