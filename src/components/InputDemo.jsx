import React from "react";
import useInput from "../hooks/useInput";

export default function InputDemo() {
  const name = useInput("");
  const email = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name.value}, Email: ${email.value}`);
    name.reset();
    email.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" {...name} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" {...email} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
