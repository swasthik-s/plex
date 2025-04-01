import Image from "next/image";

interface MovieProps {
  movie: {
    title: string;
    year: string | number;
    image: string;
  };
}

export default function MovieCard({ movie }: MovieProps) {
  return (
    <div className="flex-shrink-0 w-[242px]">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.image}`} // TMDB image URL
        alt={movie.title}
        width={242}
        height={407}
        className="rounded-lg object-cover"
        priority
      />
      <h3 className="text-lg font-bold mt-2">{movie.title}</h3>
      <p className="text-sm text-gray-400">{movie.year}</p>
    </div>
  );
}
