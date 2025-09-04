import React, { useState } from "react";
import useClipboard from "../hooks/useClipboard.js";

export default function ClipboardDemo() {
  const [text, setText] = useState("Hello Clipboard!");
  const { copy, isCopied } = useClipboard();

  return (
    <div>
      <h2>useClipboard Hook Demo</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.3rem" }}
      />
      <button onClick={() => copy(text)}>
        {isCopied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
