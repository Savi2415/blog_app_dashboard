// components/Sidebar.js
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-48 bg-gray-800 text-white p-6 h-screen sticky top-0">
      <h2 className="text-xl font-bold mb-4">📘 My Blog</h2>
      <nav className="flex flex-col gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </aside>
  );
}

