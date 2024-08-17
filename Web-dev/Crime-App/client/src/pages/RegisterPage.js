import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function register(event) {
    event.preventDefault();
    await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application?json" },
    });
  }

  return (
    <div>
      <form className="register" onSubmit={register}>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Register</button>
      </form>
    </div>
  );
}