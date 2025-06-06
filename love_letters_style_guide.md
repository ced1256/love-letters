# 💕 Love Letters Website - Complete Style Guide

This is the complete styling system from your love letters website. Use this as a base for any new project to maintain the same cute, romantic aesthetic.

## 🎨 Color Palette

```css
/* Primary Pink Palette */
bg-pink-200     /* Light pink background (main bg) */
bg-pink-300     /* Medium pink (header bars) */
bg-pink-400     /* Accent buttons */
bg-pink-500     /* Primary buttons */
bg-pink-600     /* Button hover states */
bg-pink-800     /* Dark text/headings */

/* Text Colors */
text-pink-700   /* Medium text */
text-pink-800   /* Dark headings/labels */
text-pink-600   /* Links */

/* Accent Colors */
bg-white        /* Cards/forms */
bg-gray-100     /* Light backgrounds */
text-gray-700   /* Secondary text */
text-gray-500   /* Muted text */

/* Status Colors */
bg-red-100 border-red-300 text-red-700  /* Error messages */
```

## 📱 Layout Patterns

### **Full Screen Container**

```jsx
<div className="min-h-screen bg-pink-200 flex items-center justify-center p-4">
  {/* Content */}
</div>
```

### **Card/Form Container**

```jsx
<div className="bg-white rounded-lg shadow-lg p-6">{/* Form content */}</div>
```

### **Header Section**

```jsx
<div className="bg-pink-300 p-4">
  <div className="max-w-4xl mx-auto flex items-center justify-between">
    {/* Header content */}
  </div>
</div>
```

## 🎯 Typography

### **Main Heading**

```jsx
<h1 className="text-4xl font-bold text-pink-800 mb-2">our letters🌱</h1>
```

### **Section Headings**

```jsx
<h2 className="text-2xl font-bold text-pink-800 mb-2">Section Title 💌</h2>
```

### **Subheadings**

```jsx
<h3 className="text-lg font-bold text-pink-800 mb-2">Card Title</h3>
```

### **Body Text**

```jsx
<p className="text-pink-700">Sweet romantic description text</p>
```

### **Labels**

```jsx
<label className="block text-pink-800 font-medium mb-1">Field Label</label>
```

## 🔘 Form Elements

### **Text Input**

```jsx
<input
  type="text"
  className="w-full p-3 border-2 border-pink-300 rounded-lg focus:border-pink-500 outline-none text-black"
  placeholder="Your cute placeholder"
  required
/>
```

### **Textarea**

```jsx
<textarea
  rows={6}
  className="w-full p-3 border-2 border-pink-300 rounded-lg focus:border-pink-500 outline-none resize-none text-black"
  placeholder="Write your heart out... 💖"
  required
/>
```

### **Primary Button**

```jsx
<button
  type="submit"
  className="w-full bg-pink-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-pink-600 disabled:opacity-50"
>
  Save Letter 💖
</button>
```

### **Secondary Button**

```jsx
<button className="bg-pink-400 text-white px-3 py-1 rounded text-sm hover:bg-pink-500">
  Edit
</button>
```

### **Danger Button**

```jsx
<button className="bg-red-400 text-white px-3 py-1 rounded text-sm hover:bg-red-500">
  Delete
</button>
```

### **Text Link Button**

```jsx
<button className="text-pink-600 hover:text-pink-700 font-medium">
  Register
</button>
```

## 🎴 Card Components

### **Letter Card**

```jsx
<div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg">
  <h3 className="text-lg font-bold text-pink-800 mb-2">Letter Title</h3>
  <p className="text-gray-700 mb-3 line-clamp-3">Letter content preview...</p>
  <div className="flex items-center justify-between text-sm text-pink-600 mb-3">
    <span>From: Author</span>
    <span>Date</span>
  </div>
  <div className="flex space-x-2">{/* Action buttons */}</div>
</div>
```

### **Empty State Card**

```jsx
<div className="text-center py-16">
  <Heart className="w-16 h-16 text-pink-400 mx-auto mb-4" />
  <h2 className="text-2xl font-bold text-pink-800 mb-2">No letters yet! 💌</h2>
  <p className="text-pink-700 mb-6">Start writing your first love letter!</p>
  <button className="bg-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-600">
    Write Your First Letter 💕
  </button>
</div>
```

## 🔔 Status Messages

### **Error Message**

```jsx
<div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg text-sm">
  Error message here
</div>
```

### **Success Message** (can adapt)

```jsx
<div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg text-sm">
  Success message here
</div>
```

## 🪟 Modal/Overlay

### **Modal Overlay**

```jsx
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
  <div className="bg-white rounded-lg max-w-lg w-full p-6">
    {/* Modal content */}
  </div>
</div>
```

### **Modal Header**

```jsx
<div className="flex items-center justify-between mb-4">
  <h2 className="text-xl font-bold text-pink-800">Modal Title 💕</h2>
  <button className="text-gray-500 hover:text-gray-700 text-xl">✕</button>
</div>
```

## 📱 Grid Layouts

### **Cards Grid**

```jsx
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  {/* Card items */}
</div>
```

### **Form Grid**

```jsx
<form className="space-y-4">{/* Form fields */}</form>
```

### **Button Group**

```jsx
<div className="flex space-x-3">
  <button className="flex-1 bg-pink-500 text-white py-3 rounded-lg">
    Primary Action
  </button>
  <button className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg">
    Secondary Action
  </button>
</div>
```

## 🔄 Loading States

### **Loading Screen**

```jsx
<div className="min-h-screen bg-pink-200 flex items-center justify-center">
  <div className="text-center">
    <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4 animate-pulse" />
    <p className="text-pink-800">Loading your love letters...</p>
  </div>
</div>
```

### **Spinning Loader**

```jsx
<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
```

## 🎨 Global CSS (globals.css)

```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans), Arial, Helvetica, sans-serif;
}

/* Line clamp utilities */
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
```

## 📦 Layout Structure (layout.tsx)

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Love Letters - Our Digital Love Story",
  description: "A romantic space to share and cherish our love letters",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

## 💝 Romantic Emojis & Language

Use these throughout your text for the cute, romantic feel:

- 🌱 💕 💖 💌 ❤️
- "baobeiii", "gorgeous", "i love youu"
- "heyy", "js thought i'd make this"
- "Write your heart out..."
- "Your cute username"
- "A sweet title..."

## 🎯 Key Design Principles

1. **Pink color scheme** - Soft, romantic, feminine
2. **Rounded corners** - `rounded-lg` on most elements
3. **Subtle shadows** - `shadow-md`, `shadow-lg` for depth
4. **Hover effects** - Always include hover states
5. **Generous spacing** - Use `p-4`, `p-6`, `mb-4`, `space-y-4`
6. **Emojis in headings** - Make everything feel personal and cute
7. **Consistent button styling** - Pink primary, gray secondary
8. **Clean typography** - Geist font family

Copy this entire guide and use it as the foundation for any new project to get the exact same aesthetic! 💕
