"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Movie } from "@/types/movie";
import PosterCard from "./PosterCard";

interface ContentRowProps {
  title: string;
  movies: Movie[];
}

export default function ContentRow({ title, movies }: ContentRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group space-y-3">
      <h2 className="px-4 text-lg font-bold text-white md:px-8 md:text-2xl">{title}</h2>
      
      {/* Left Arrow */}
      <div 
        className="absolute top-1/2 left-2 z-40 hidden h-full cursor-pointer items-center justify-center opacity-0 transition group-hover:opacity-100 md:flex"
        onClick={() => scroll("left")}
      >
        <ChevronLeft className="h-10 w-10 text-white bg-black/50 rounded-full" />
      </div>

      {/* Movie Row */}
      <div
        ref={rowRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide px-4 pb-2 md:px-8 overflow-hidden"
      >
        {movies.map((movie) => (
          <div key={movie.id} className="min-w-[250px] md:min-w-[300px] h-[150px] md:h-[170px] relative">
            <PosterCard movie={movie} />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <div 
        className="absolute top-1/2 right-2 z-40 hidden h-full cursor-pointer items-center justify-center opacity-0 transition group-hover:opacity-100 md:flex"
        onClick={() => scroll("right")}
      >
        <ChevronRight className="h-10 w-10 text-white bg-black/50 rounded-full" />
      </div>
    </div>
  );
}