import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://your-api-endpoint/signup", {
        email,
        password,
      });
      setMessage("Signup successful!");
    } catch (error) {
      setMessage("Signup failed, please try again.");
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Signup;
