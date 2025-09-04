import React from "react";
import useOnlineStatus from "../hooks/useOnlineStatus.js";

export default function OnlineStatusDemo() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <h2>useOnlineStatus Hook Demo</h2>
      <p>
        You are currently:{" "}
        <strong>{isOnline ? "Online ✅" : "Offline ❌"}</strong>
      </p>
    </div>
  );
}
