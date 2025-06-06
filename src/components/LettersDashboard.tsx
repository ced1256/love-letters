"use client";

import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { Heart, Plus, LogOut } from "lucide-react";

interface Letter {
  id: string;
  title: string;
  content: string;
  author: string;
  created_at: string;
  user_id: string;
}

export default function LettersDashboard() {
  const [letters, setLetters] = useState<Letter[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [viewingLetter, setViewingLetter] = useState<Letter | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const { user, signOut } = useAuth();

  const fetchLetters = useCallback(async () => {
    try {
      if (!user) return;

      const { data, error } = await supabase
        .from("letters")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setLetters(data || []);
    } catch (error) {
      console.error("Error fetching letters:", error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      fetchLetters();
    }
  }, [user, fetchLetters]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      const { error } = await supabase.from("letters").insert([
        {
          title: formData.title,
          content: formData.content,
          author: user.username,
          user_id: user.id,
        },
      ]);

      if (error) throw error;

      setFormData({ title: "", content: "" });
      setShowForm(false);
      fetchLetters();
    } catch (error) {
      console.error("Error saving letter:", error);
    }
  };

  const resetForm = () => {
    setFormData({ title: "", content: "" });
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-pink-200 flex items-center justify-center">
        <div className="text-center">
          <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4 animate-pulse" />
          <p className="text-pink-800">Loading your letters...</p>
        </div>
      </div>
    );
  }

  // View for reading a single letter
  if (viewingLetter) {
    return (
      <div className="min-h-screen bg-pink-200 p-4 sm:p-6 md:p-8 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl mx-auto p-6 sm:p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-pink-800 mb-2">
                {viewingLetter.title}
              </h2>
              <p className="text-sm sm:text-base text-pink-600">
                From: {viewingLetter.author} &bull;{" "}
                {new Date(viewingLetter.created_at).toLocaleDateString()}
              </p>
            </div>
            <button
              onClick={() => setViewingLetter(null)}
              className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
            >
              &times;
            </button>
          </div>
          <div className="prose max-w-none text-gray-800 whitespace-pre-wrap mt-6 text-base sm:text-lg">
            {viewingLetter.content}
          </div>
        </div>
      </div>
    );
  }

  // View for writing/editing a letter
  if (showForm) {
    return (
      <div className="min-h-screen bg-pink-200 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-pink-800">
              Write a New Letter 💕
            </h2>
            <button
              onClick={resetForm}
              className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
            >
              &times;
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-pink-800 font-medium mb-2">
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full p-3 bg-pink-50 border-2 border-pink-200 rounded-lg focus:border-pink-500 focus:ring-pink-500 outline-none text-black"
                required
              />
            </div>

            <div>
              <label className="block text-pink-800 font-medium mb-2">
                Your Letter
              </label>
              <textarea
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                rows={8}
                className="w-full p-3 bg-pink-50 border-2 border-pink-200 rounded-lg focus:border-pink-500 focus:ring-pink-500 outline-none resize-none text-black"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-pink-500 text-white py-3 rounded-lg font-medium hover:bg-pink-600"
              >
                Save Letter 💖
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-200">
      {/* Header */}
      <div className="bg-pink-300 p-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-3">
            <Heart className="w-8 h-8 text-pink-700" />
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-pink-800">
                our letters🌱
              </h1>
              <p className="text-pink-700">Hi {user?.username}! 💖</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowForm(true)}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-pink-600 flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>New Letter</span>
            </button>
            <button
              onClick={signOut}
              className="text-pink-700 hover:text-pink-800 p-2"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-4">
        {letters.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-pink-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-pink-800 mb-2">
              No letters yet! 💌
            </h2>
            <p className="text-pink-700 mb-6">
              Start writing your first love letter!
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-600"
            >
              Write Your First Letter 💕
            </button>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {letters.map((letter) => (
              <div
                key={letter.id}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer flex flex-col justify-between"
                onClick={() => setViewingLetter(letter)}
              >
                <div>
                  <h3 className="text-lg font-bold text-pink-800 mb-2">
                    {letter.title}
                  </h3>

                  <p className="text-gray-700 mb-3 line-clamp-3">
                    {letter.content}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm text-pink-600 mb-3">
                    <span>From: {letter.author}</span>
                    <span>
                      {new Date(letter.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
