"use client";

import { useAuth } from "@/contexts/AuthContext";
import LoginForm from "@/components/LoginForm";
import LettersDashboard from "@/components/LettersDashboard";
import { Heart } from "lucide-react";

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-pink-200 flex items-center justify-center">
        <div className="text-center">
          <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4 animate-pulse" />
          <p className="text-pink-800">Loading your love letters...</p>
        </div>
      </div>
    );
  }

  return user ? <LettersDashboard /> : <LoginForm />;
}
