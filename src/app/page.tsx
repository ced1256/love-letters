"use client";

import { useAuth } from "@/contexts/AuthContext";
import LoginForm from "@/components/LoginForm";
import LettersDashboard from "@/components/LettersDashboard";

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return user ? <LettersDashboard /> : <LoginForm />;
}
