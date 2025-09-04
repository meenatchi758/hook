import React from "react";
import useGeolocation from "../hooks/useGeolocation.js";

export default function GeolocationDemo() {
  const { latitude, longitude, error } = useGeolocation();

  return (
    <div>
      <h2>useGeolocation Hook Demo</h2>
      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <p>
          Latitude: {latitude ?? "Loading..."} <br />
          Longitude: {longitude ?? "Loading..."}
        </p>
      )}
    </div>
  );
}
