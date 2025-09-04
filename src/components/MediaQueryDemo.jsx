import React from "react";
import useMediaQuery from "../hooks/useMediaQuery.js";

export default function MediaQueryDemo() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <h2>useMediaQuery Hook Demo</h2>
      <p>
        Current screen: {isMobile ? "Mobile (≤ 768px)" : "Desktop (> 768px)"}
      </p>
    </div>
  );
}
