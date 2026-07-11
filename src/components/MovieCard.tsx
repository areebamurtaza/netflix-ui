"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { Movie } from "@/types/movie";

export default function MovieCard({ movie }: { movie: Movie }) {
  const [showVideo, setShowVideo] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function handleMouseEnter() {
    timeoutRef.current = setTimeout(() => setShowVideo(true), 800);
  }

  function handleMouseLeave() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setShowVideo(false);
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative aspect-[2/3] w-28 shrink-0 overflow-hidden rounded-md bg-zinc-900 shadow-lg transition-transform duration-300 hover:scale-105 sm:w-32 md:w-36">
      {showVideo ? (
        <video src={movie.videoPath} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <Image src={movie.posterPath} alt={movie.title} fill className="absolute inset-0 h-full w-full object-cover" />
      )}
    </div>
  );
}