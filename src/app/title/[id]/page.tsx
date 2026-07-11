"use client";

import { useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Image from "next/image";
import { movies } from "@/data/movies";

export default function TitleDetailPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const [isSaved, setIsSaved] = useState(false);

  const movie = useMemo(() => movies.find((entry) => entry.id === Number(params.id)) ?? movies[0], [params.id]);

  return (
    <main className="min-h-screen bg-[#141414] text-white">
      <Navbar />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={movie.posterPath} alt={movie.title} fill className="object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-6xl items-end px-4 py-12 sm:min-h-[80vh] md:px-8 md:py-16">
          <div className="max-w-2xl space-y-4 sm:space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-[#DB202C]">Title Detail</p>
            <h1 className="text-3xl font-black sm:text-4xl md:text-6xl">{movie.title}</h1>
            <p className="max-w-xl text-sm leading-6 text-zinc-300 md:text-base">A placeholder title detail page with the requested Play Now and My List actions.</p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => router.push("/browse")}>Play Now</Button>
              <Button
                variant="secondary"
                onClick={() => setIsSaved((value) => !value)}
              >
                {isSaved ? "Remove from My List" : "My List"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}