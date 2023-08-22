"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function SignUpPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  // Async function because we'll be talking to DB.
  const onSignup = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>SIGNUP 🔐</h1>
      <br />
      <hr />
      <label htmlFor="username">Username</label>
      <input
        className="p-2 text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
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
        onClick={onSignup}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Signup here
      </button>
      <Link href="/login">Visit Login Page</Link>
    </div>
  );
}
