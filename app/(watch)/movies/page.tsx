"use client";

import { useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard";

const API_KEY = "9ea1aff10da40e32f255578b6aabb9c3"; // Replace with your TMDB API key
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`;

export default function MoviesPage() {
  interface Movie {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
  }

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const randomMovies = data.results
          .sort(() => 0.5 - Math.random())
          .slice(0, 10); // Shuffle & pick 10 random movies
        setMovies(randomMovies);
      });
  }, []);

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      <div className="mx-auto">
        {/* Header */}
        <div className="sticky top-0 left-0 w-full z-50 bg-neutral-950">
          <div className="container flex items-center justify-between h-16 px-6 md:px-12">
            <h1 className="text-xl font-bold pt-5">Best of the West</h1>
          </div>
        </div>

        {/* Movie Cards */}
        <div className="px-6 md:px-12 overflow-x-auto">
          <div className="flex gap-4">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={{
                  title: movie.title,
                  year: movie.release_date.split("-")[0], // Extract year
                  image: movie.poster_path, // TMDB image path
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
