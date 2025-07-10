import { useEffect, useState } from 'react';
import Link from 'next/link';

// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black bg-opacity-80 text-white px-6 py-4 flex justify-center gap-8 shadow-md fixed top-0 w-full z-50">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/about" className="hover:underline">About Us</Link>
      <Link href="/contact" className="hover:underline">Contact Us</Link>
    </nav>
  );
}


export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    setDarkMode(saved === 'dark');
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b bg-white dark:bg-gray-900 dark:border-gray-700 transition-colors">
      <div className="flex gap-6 text-black dark:text-white">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 text-sm rounded bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </nav>
  );
}
