"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/types/movie";

export default function PosterCard({ movie }: { movie: Movie }) {
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
    <Link
      href={`/title/${movie.id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative aspect-[2/3] w-24 shrink-0 overflow-hidden rounded-md bg-zinc-900 shadow-lg transition duration-300 hover:scale-105 sm:w-28 md:w-32 lg:w-36"
    >
      {showVideo ? (
        <video src={movie.videoPath} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <Image src={movie.posterPath} alt={movie.title} fill className="object-cover" />
      )}
    </Link>
  );
}