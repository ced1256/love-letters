"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface User {
  id: string;
  username: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (
    username: string,
    password: string
  ) => Promise<{ error: string | null }>;
  signUp: (
    username: string,
    password: string
  ) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
}

interface RegisterUserResponse {
  success: boolean;
  message: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for a saved user session in localStorage
    try {
      const savedUser = localStorage.getItem("app_user");
      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      }
    } catch (error) {
      console.error("Failed to load user from localStorage", error);
      localStorage.removeItem("app_user");
    }
    setLoading(false);
  }, []);

  const signIn = async (username: string, password: string) => {
    for (let i = 0; i < 3; i++) {
      const { data, error } = await supabase.rpc("login", {
        p_username: username,
        p_password: password,
      });

      if (!error) {
        if (data && data.length > 0) {
          const loggedInUser: User = {
            id: data[0].user_id,
            username: data[0].username,
          };
          setUser(loggedInUser);
          localStorage.setItem("app_user", JSON.stringify(loggedInUser));
          return { error: null };
        }
        return { error: "Invalid username or password." };
      }

      const isHiccup =
        error && typeof error === "object" && Object.keys(error).length === 0;
      if (isHiccup) {
        console.log(
          `Connection hiccup during sign-in attempt ${i + 1}. Retrying...`
        );
      } else {
        console.error(`Sign-in attempt ${i + 1} failed with an error:`, error);
      }

      if (i < 2) {
        await new Promise((res) => setTimeout(res, 1000));
      }
    }

    return {
      error:
        "Failed to connect to the server. Please check your connection and try again.",
    };
  };

  const signUp = async (username: string, password: string) => {
    for (let i = 0; i < 3; i++) {
      const { data, error } = await supabase.rpc("register_user", {
        p_username: username,
        p_password: password,
      });

      if (!error) {
        const result = data as RegisterUserResponse;
        if (result.success === false) {
          return { error: result.message };
        }
        return { error: null };
      }

      const isHiccup =
        error && typeof error === "object" && Object.keys(error).length === 0;
      if (isHiccup) {
        console.log(
          `Connection hiccup during sign-up attempt ${i + 1}. Retrying...`
        );
      } else {
        console.error(`Sign-up attempt ${i + 1} failed with an error:`, error);
      }

      if (i < 2) {
        await new Promise((res) => setTimeout(res, 1000));
      }
    }

    return {
      error:
        "Failed to connect to the server. Please check your connection and try again.",
    };
  };

  const signOut = async () => {
    setUser(null);
    localStorage.removeItem("app_user");
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
