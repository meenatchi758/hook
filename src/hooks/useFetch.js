import { useState, useEffect } from "react";

/**
 * Custom hook to fetch data from an API.
 *
 * @param {string} url - API endpoint to fetch
 * @returns {{ data: any, loading: boolean, error: any }} - Fetch result
 */
export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  if (!url) return;

  setLoading(true);
  setError(null);

  fetch(url)
    .then(res => res.json())
    .then(json => {
      console.log("Fetched data:", json); // <-- check this
      setData(json);
    })
    .catch(err => setError(err))
    .finally(() => setLoading(false));
}, [url]);


  return { data, loading, error };
}
