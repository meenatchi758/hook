import React from "react";
import useFetch from "../hooks/useFetch";

export default function UserList() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data && data.length > 0
        ? data.map((user) => <li key={user.id}>{user.name}</li>)
        : <p>No users found</p>}
    </ul>
  );
}
