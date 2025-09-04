import React from "react";
import useHover from "../hooks/useHover";

export default function HoverDemo() {
  const [isHovered, ref] = useHover();

  return (
    <div>
      <h2>useHover Hook Demo</h2>
      <div
        ref={ref}
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: isHovered ? "#007BFF" : "#ccc",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {isHovered ? "Hovered!" : "Hover me"}
      </div>
    </div>
  );
}
