# 💕 Love Letters Website

A romantic web application built with Next.js, Tailwind CSS, and Supabase for couples to share and cherish their love letters together.

## ✨ Features

- 🔐 **Secure Authentication** - Email/password login with unique usernames
- 💌 **Love Letters** - Create, edit, and delete romantic letters
- 🎨 **Beautiful UI** - Romantic design with gradients and smooth animations
- 📱 **Responsive** - Works perfectly on all devices
- ☁️ **Cloud Storage** - All letters stored securely in Supabase
- 🚀 **Vercel Ready** - Optimized for easy deployment

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (Database + Authentication)
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd letter_website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Supabase

1. Go to [Supabase](https://supabase.com) and create a new project
2. In your Supabase dashboard, go to **SQL Editor** and run this query to create the letters table:

```sql
-- Create the letters table
CREATE TABLE letters (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Enable Row Level Security
ALTER TABLE letters ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to see all letters (for couples)
CREATE POLICY "Allow all authenticated users to view letters" ON letters
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create policy to allow users to insert their own letters
CREATE POLICY "Allow users to insert their own letters" ON letters
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create policy to allow users to update their own letters
CREATE POLICY "Allow users to update their own letters" ON letters
  FOR UPDATE USING (auth.uid() = user_id);

-- Create policy to allow users to delete their own letters
CREATE POLICY "Allow users to delete their own letters" ON letters
  FOR DELETE USING (auth.uid() = user_id);
```

3. Go to **Settings** > **API** and copy your project URL and anon key

### 4. Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Usage

1. **Sign Up**: Create an account with email, password, and a unique username
2. **Sign In**: Log in with your credentials
3. **Write Letters**: Click "New Letter" to write romantic letters
4. **View Letters**: See all letters from both partners in a beautiful grid
5. **Edit/Delete**: Manage your own letters with edit and delete options

## 🚀 Deployment on Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and import your repository
3. Add your environment variables in the Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy!

## 🎨 Customization

### Colors

The app uses a romantic pink-purple gradient theme. You can customize colors in the Tailwind classes:

- Primary: `from-pink-500 to-purple-600`
- Background: `from-pink-100 via-purple-50 to-indigo-100`

### Content

- Update the app title in `src/app/layout.tsx`
- Modify romantic messages in `src/components/LoginForm.tsx`
- Customize the footer message in the login form

## 🔒 Security Features

- Row Level Security (RLS) enabled on Supabase
- Users can only edit/delete their own letters
- All users can view letters (perfect for couples)
- Secure authentication with Supabase Auth

## 🤝 Contributing

This is a personal project, but feel free to fork it and make it your own!

## 💝 Made with Love

Created with ❤️ for couples who want to digitize their love story.

---

**Note**: Remember to keep your Supabase credentials secure and never commit them to version control!
