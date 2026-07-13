"use client";

// --- MOCKS FOR PREVIEW ENVIRONMENT ---
// When copying this back to your Next.js project, remove these mock definitions
// and uncomment your actual imports below:
import { useState } from "react";
import navbar from "./Navbar";
import hero from "./Hero";
import footer from "./Footer";

 import Image from "next/image";
 import Link from "next/link";
//const Image = ({ src, alt, fill, className, priority }: any) => (
  //<img src={src} alt={alt} className={`${className} ${fill ? 'absolute inset-0 w-full h-full object-cover' : ''}`} loading={priority ? "eager" : "lazy"} />
//);
//const Link = ({ href, children, className }: any) => <a href={href} className={className}>{children}</a>;
// --- END MOCKS ---

interface HeroProps {
  title?: string;
  description?: string;
  imagePath?: string;
}

export default function Hero({ title, description, imagePath }: HeroProps) {
  // Defaulting to Money Heist styling as requested
  const headline = title ?? "MONEY HEIST";
  const copy = description ?? "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.";
  const heroImage = imagePath ?? "/images/mh.png";

  return (
    <section className="relative w-full h-[56.25vw] min-h-[60vh] max-h-[95vh] bg-[#141414] text-white">
      {/* 1. Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={heroImage} 
          alt={headline} 
          fill 
          priority 
          className="object-cover" 
        />
        {/* Left-to-right gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
        {/* Bottom-to-top gradient to blend smoothly into the content rows below */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/10 to-transparent" />
      </div>

      {/* 2. Main Hero Content (Title, Description, Buttons) */}
      <div className="absolute top-[35%] z-10 flex w-full flex-col px-4 md:px-12 lg:px-16">
        <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl space-y-4 sm:space-y-6">
          
          {/* Title - Styled to resemble the heavy impact of a show logo */}
          <h1 className="text-4xl font-black uppercase tracking-tight drop-shadow-xl sm:text-5xl md:text-7xl lg:text-[5rem] leading-none">
            {headline}
          </h1>
          
          {/* Description */}
          <p className="text-xs font-medium text-white drop-shadow-md sm:text-sm md:text-lg lg:text-xl line-clamp-3 md:line-clamp-none">
            {copy}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2 md:gap-4">
            {/* Play Button */}
            <Link 
              href="/browse" 
              className="flex items-center gap-2 rounded-[4px] bg-white px-4 py-1.5 text-sm font-bold text-black transition duration-200 hover:bg-white/80 md:px-7 md:py-2.5 md:text-lg"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 md:h-7 md:w-7">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play
            </Link>
            
            {/* More Info Button */}
            <Link 
              href="/browse/movies/" 
              className="flex items-center gap-2 rounded-[4px] bg-gray-500/70 px-4 py-1.5 text-sm font-bold text-white transition duration-200 hover:bg-gray-500/50 md:px-7 md:py-2.5 md:text-lg"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 md:h-7 md:w-7">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4 M12 8h.01" />
              </svg>
              More Info
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Right Side Floating Controls (Mute Button & Maturity Rating) */}
      <div className="absolute bottom-[25%] right-0 z-10 flex items-center gap-4">
        {/* Mute Button */}
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 bg-transparent text-gray-200 transition hover:border-white hover:bg-white/10 hover:text-white md:h-12 md:w-12">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 md:h-6 md:w-6">
            <path d="M11 5L6 9H2v6h4l5 4V5z M22 9l-6 6 M16 9l6 6" />
          </svg>
        </button>
        
        {/* Maturity Rating Badge */}
        <div className="flex h-10 items-center border-l-4 border-zinc-300 bg-gray-900/60 pl-3 pr-10 text-sm font-medium text-white md:h-12 md:text-base">
          A
        </div>
      </div>
    </section>
  );
}