import React, { useState } from "react";
import useDebounce from "../hooks/useDebounce";

export default function DebounceDemo() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  return (
    <div>
      <h2>Debounce Hook Demo</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>Debounced Value: {debouncedSearch}</p>
    </div>
  );
}
