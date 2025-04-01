"use client";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";

interface SearchBarProps {
  onResults?: (results: any[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onResults }) => {
  const [query, setQuery] = useState("");
  interface SearchResult {
    id: string | number;
    title?: string;
    name?: string;
    poster_path?: string;
    release_date?: string;
    first_air_date?: string;
    media_type?: "movie" | "tv";
  }

  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) {
        setResults([]);
        return;
      }
      try {
        const response = await fetch(`/api?query=${query}`);
        const data = await response.json();
        setResults(data.results || []);
        if (onResults) onResults(data.results || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    const delayDebounceFn = setTimeout(fetchResults, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <div className="flex flex-col gap-3 max-w-3xl mx-auto w-full relative">
      <form
        className="flex items-center flex-1 w-full gap-3 py-2 px-3 bg-neutral-800 rounded-lg group transition-all"
        onSubmit={(e) => e.preventDefault()}
      >
        <Search className="text-muted-foreground group-focus-within:text-neutral-500 size-5" />
        <input
          className="font-normal flex-1 bg-transparent outline-none"
          placeholder="Search for movies or TV shows..."
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      {results.length > 0 && (
        <ul
          className="absolute top-full left-0 w-full bg-neutral-900 shadow-lg rounded-lg mt-1 max-h-90 overflow-y-auto 
          scrollbar-hidden"
        >
          {results.map((item) => (
            <li
              key={item.id}
              className="p-2 border-b border-neutral-700 hover:bg-neutral-800 flex items-center gap-3"
            >
              <img
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w92${item.poster_path}`
                    : "/no-image.png"
                }
                alt={item.title || item.name}
                className="w-12 h-16 object-cover rounded"
              />
              <div>
                <span className="font-bold block">
                  {item.title || item.name}
                </span>
                <span className="text-sm text-gray-400 block">
                  {item.release_date?.split("-")[0] ||
                    item.first_air_date?.split("-")[0] ||
                    "N/A"}
                </span>
                <span className="text-xs text-gray-500">
                  ({item.media_type === "movie" ? "Movie" : "TV Show"})
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
