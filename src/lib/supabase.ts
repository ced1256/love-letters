import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      letters: {
        Row: {
          id: string;
          title: string;
          content: string;
          author: string;
          created_at: string;
          user_id: string;
        };
        Insert: {
          id?: string;
          title: string;
          content: string;
          author: string;
          created_at?: string;
          user_id: string;
        };
        Update: {
          id?: string;
          title?: string;
          content?: string;
          author?: string;
          created_at?: string;
          user_id?: string;
        };
      };
    };
  };
};
