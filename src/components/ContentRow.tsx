import { Movie } from "@/types/movie";
import PosterCard from "./PosterCard";

interface ContentRowProps {
  title: string;
  movies: Movie[];
}

export default function ContentRow({ title, movies }: ContentRowProps) {
  return (
    <div className="space-y-3">
      <h2 className="px-4 text-lg font-bold text-white md:px-8 md:text-2xl">{title}</h2>
      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 md:px-8">
        {movies.map((movie) => (
          <PosterCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}