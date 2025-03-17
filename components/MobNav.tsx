"use client";

import Link from "next/link";
import { Home, Tv, PlayCircle, Compass } from "lucide-react";

export default function MobNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-neutral-950 border-t border-neutral-900 px-6 py-3 flex justify-around items-center text-gray-400 md:hidden z-50">
      <Link
        href="#"
        className="flex flex-col items-center text-xs hover:text-white"
      >
        <Home size={24} /> <span>Home</span>
      </Link>
      <Link
        href="#"
        className="flex flex-col items-center text-xs hover:text-white"
      >
        <Tv size={24} /> <span>Movies</span>
      </Link>
      <Link
        href="#"
        className="flex flex-col items-center text-xs hover:text-white"
      >
        <PlayCircle size={24} /> <span>TV Shows</span>
      </Link>
      <Link
        href="#"
        className="flex flex-col items-center text-xs hover:text-white"
      >
        <Compass size={24} /> <span>Discover</span>
      </Link>
    </nav>
  );
}
