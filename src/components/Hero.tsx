"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title?: string;
  description?: string;
  imagePath?: string;
}

export default function Hero({ title, description, imagePath }: HeroProps) {
  const pathname = usePathname();
  const isBrowsePage = pathname.startsWith("/browse");
  const headline = title ?? "Unlimited movies, TV shows and more";
  const copy = description ?? "Watch anywhere. Cancel anytime. Stream a handpicked Netflix-style front end with smooth routing and bold visuals.";
  const heroImage = imagePath ?? "/images/home-bg.jpg";
  const primaryLabel = isBrowsePage ? "Play" : "Get Started";
  const primaryHref = isBrowsePage ? "/browse" : "/signup/step-1";
  const secondaryLabel = isBrowsePage ? "My List" : "Sign In";
  const secondaryHref = isBrowsePage ? "/browse/my-list" : "/signin";

  return (
    <section className="relative min-h-[32rem] overflow-hidden bg-black text-white md:min-h-[40rem]">
      <Image src={heroImage} alt={headline} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
      <div className="relative z-10 flex min-h-[32rem] items-end px-4 pb-16 pt-20 md:min-h-[40rem] md:px-8 md:pb-20">
        <div className="max-w-xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#E50914]">Netflix Originals</p>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">{headline}</h1>
          <p className="max-w-lg text-sm leading-6 text-zinc-200 md:text-base">{copy}</p>
          <div className="flex flex-wrap gap-3">
            <Link href={primaryHref} className="rounded-md bg-[#E50914] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#f6121d]">
              {primaryLabel}
            </Link>
            <Link href={secondaryHref} className="rounded-md bg-white/15 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white/25">
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}