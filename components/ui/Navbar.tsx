"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Bookmark,
  Maximize,
  User,
  Home,
  Tv,
  PlayCircle,
  Compass,
} from "lucide-react";
import MobNav from "./MobNav"; // Import bottom nav

export default function Navbar() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  // Handle clicks outside the search container to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isSearchExpanded &&
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchExpanded(false);
      }
    }

    // Add event listener when search is expanded
    if (isSearchExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
      // Focus the input when expanded
      searchInputRef.current?.focus();
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchExpanded]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-lg text-white h-16">
        {/* Left Section - Logo & Search */}
        <div className="flex items-center space-x-4 md:space-x-6 flex-grow">
          {/* Logo - Hidden when search is expanded on mobile */}
          <div
            className={`transition-all duration-300 ${
              isSearchExpanded
                ? "w-0 opacity-0 md:w-auto md:opacity-100"
                : "w-auto opacity-100"
            }`}
          >
            <Image src="/logo.svg" alt="Plex Logo" width={75} height={40} />
          </div>

          {/* Search Box (Desktop always visible, Mobile conditionally visible) */}
          <div
            ref={searchContainerRef}
            className={`relative transition-all duration-300 ease-in-out md:w-[489px] ${
              isSearchExpanded
                ? "w-full flex opacity-100 scale-100"
                : "w-0 md:w-[489px] hidden md:flex md:opacity-100 opacity-0 scale-95 origin-right"
            }`}
          >
            <input
              ref={searchInputRef}
              className="w-full pl-4 pr-10 py-1.5 bg-neutral-800 text-white rounded-l-full focus:outline-none"
              placeholder="Search..."
            />
            <button className="px-4 bg-neutral-800 rounded-r-full flex items-center justify-center">
              <Search className="text-gray-400" size={18} />
            </button>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex space-x-5">
            <Link
              href="#"
              className="flex items-center space-x-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-neutral-800 rounded p-2"
            >
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-neutral-800 rounded p-2"
            >
              <Tv size={18} />
              <span>Movies</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-neutral-800 rounded p-2"
            >
              <PlayCircle size={18} />
              <span>TV Shows</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-neutral-800 rounded p-2"
            >
              <Compass size={18} />
              <span>Discover</span>
            </Link>
          </nav>
        </div>

        {/* Right Section - Icons & Sign In (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <Bookmark
            size={20}
            className="cursor-pointer text-gray-400 hover:text-white"
          />
          <Maximize
            size={20}
            className="cursor-pointer text-gray-400 hover:text-white"
          />
          <button className="w-20 px-4 py-1.5 text-sm font-medium text-white bg-neutral-800 rounded hover:bg-neutral-700">
            Sign In
          </button>
        </div>

        {/* Mobile Icons */}
        <div
          className={`md:hidden flex items-center space-x-3 transition-all duration-300 ${
            isSearchExpanded
              ? "opacity-0 w-0 overflow-hidden"
              : "opacity-100 w-auto"
          }`}
        >
          <div
            className="p-2 border border-neutral-800 rounded-lg bg-neutral-950"
            onClick={toggleSearch}
          >
            <Search size={24} className="text-white cursor-pointer" />
          </div>
          <div className="p-2 border border-neutral-800 rounded-lg bg-neutral-950">
            <User size={24} className="text-white cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Bottom Navigation (Mobile) */}
      <MobNav />

      {/* Spacer to prevent content from being hidden under fixed header */}
      <div className="h-16"></div>
    </>
  );
}
