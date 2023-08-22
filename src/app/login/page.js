"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function LogininPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  // Async function because we'll be talking to DB.
  const onLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>LOGIN 🔐</h1>
      <br />
      <hr />
      <label htmlFor="email">Email</label>
      <input
        className="p-2 text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="email"
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        className="p-2 text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button
        onClick={onLogin}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Login here
      </button>
      <Link href="/signup">Don't have an account yet?</Link>
    </div>
  );
}
