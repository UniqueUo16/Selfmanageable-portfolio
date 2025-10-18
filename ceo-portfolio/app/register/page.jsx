"use client";

import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register data:", { username, password });
    alert("Form submitted! (no backend yet)");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-80 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        <label className="font-medium">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
          placeholder="Enter username"
        />

        <label className="font-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          placeholder="Enter password"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded mt-4 hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
