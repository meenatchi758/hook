import { useState, useEffect } from "react";

/**
 * Custom hook to get user's geolocation
 * @returns {Object} - { latitude, longitude, error }
 */
export default function useGeolocation() {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation((loc) => ({
        ...loc,
        error: "Geolocation is not supported by your browser",
      }));
      return;
    }

    const success = (position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      });
    };

    const error = (err) => {
      setLocation((loc) => ({ ...loc, error: err.message }));
    };

    const watcher = navigator.geolocation.getCurrentPosition(success, error);

    return () => {
      // nothing to clean up for getCurrentPosition
    };
  }, []);

  return location;
}
