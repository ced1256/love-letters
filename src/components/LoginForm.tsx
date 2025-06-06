"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      if (isLogin) {
        const { error } = await signIn(username, password);
        if (error) {
          setError(error);
        }
      } else {
        const { error } = await signUp(username, password);
        if (error) {
          setError(error);
        } else {
          setMessage("Account created! You can now sign in. 💕");
          setIsLogin(true); // Switch to login view
        }
      }
    } catch {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-pink-200 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-pink-800 mb-2">
            our letters🌱
          </h1>
          <p className="text-pink-700">
            heyy baobeiii, js thought i'd make this so that we can send letters
            to each other and revisit them haha
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-pink-800 font-medium mb-1">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 border-2 border-pink-300 rounded-lg focus:border-pink-500 outline-none text-black"
                placeholder="Username"
                required
              />
            </div>

            <div>
              <label className="block text-pink-800 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border-2 border-pink-300 rounded-lg focus:border-pink-500 outline-none text-black"
                placeholder="Password"
                required
              />
            </div>

            {error && (
              <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {message && (
              <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg text-sm">
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pink-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-pink-600 disabled:opacity-50"
            >
              {loading
                ? isLogin
                  ? "Signing in..."
                  : "Creating account..."
                : isLogin
                ? "Sign In 💖"
                : "Create Account 💕"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
                setMessage("");
                setUsername("");
                setPassword("");
              }}
              className="text-pink-600 hover:text-pink-700 font-medium"
            >
              {isLogin ? "Register" : "Sign in"}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-pink-700">i love youu gorgeous ❤️</p>
        </div>
      </div>
    </div>
  );
}
