// app/sign-in/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleAuth = async () => {
    try {
      const endpoint = "http://localhost:5000/api/auth/signin";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token); // Store token
        router.push(`/flashcards/${data.userId}/`); // Ensure correct path with /page
      } else {
        setError(data.message || "Authentication failed");
      }
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-950">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-950 mb-6 text-center">
          Sign In
        </h1>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-green-950 rounded focus:outline-none focus:ring-2 focus:ring-green-950 text-green-950"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-green-950 rounded focus:outline-none focus:ring-2 focus:ring-green-950 text-green-950"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            onClick={handleAuth}
            className="w-full bg-green-950 text-white p-3 rounded hover:bg-green-900 transition"
          >
            Sign In
          </button>
          <p className="text-center text-green-950">
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="text-green-950 underline hover:text-green-900"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
