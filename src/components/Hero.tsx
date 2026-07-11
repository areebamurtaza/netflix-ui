"use client";

import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title?: string;
  description?: string;
  imagePath?: string;
}

export default function Hero({ title, description, imagePath }: HeroProps) {
  const headline = title ?? "Unlimited movies, TV shows and more";
  const copy = description ?? "Watch anywhere. Cancel anytime.";
  const heroImage = imagePath ?? "/images/home-bg.jpg";

  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Image src={heroImage} alt={headline} fill priority className="object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/20" />
      </div>
      <div className="relative z-10 flex min-h-[28rem] items-center px-4 py-16 sm:min-h-[34rem] md:min-h-[44rem] md:px-8">
        <div className="max-w-2xl space-y-4 sm:space-y-5">
          <h1 className="text-3xl font-black leading-tight sm:text-4xl md:text-6xl">{headline}</h1>
          <p className="max-w-xl text-sm text-zinc-200 sm:text-base md:text-xl">{copy}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/browse" className="rounded-md bg-[#DB202C] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#f3121c]">
              Play
            </Link>
            <Link href="/title/1" className="rounded-md bg-white/20 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white/30">
              More Info
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}