"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    { label: "Home", href: "/browse" },
    { label: "TV Shows", href: "/browse/tv-shows" },
    { label: "Movies", href: "/browse/movies" },
    { label: "My List", href: "/browse/my-list" }
  ];
  const isLandingPage = pathname === "/";

  return (
    <nav className={`z-30 flex items-center justify-between px-4 py-4 text-white md:px-8 ${isLandingPage ? "absolute left-0 right-0 top-0 bg-gradient-to-b from-black/90 via-black/45 to-transparent" : "sticky top-0 bg-[#141414]"}`}>
      <Link href="/" className="text-2xl font-black tracking-[0.2em] text-[#E50914] md:text-3xl">
        NETFLIX
      </Link>
      {isLandingPage ? (
        <Link href="/signin" className="rounded-md bg-[#E50914] px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-[#f6121d]">
          Sign In
        </Link>
      ) : (
        <div className="flex items-center gap-5 md:gap-7">
          {navLinks.map((link) => {
            const isActive = link.href === "/browse" ? pathname.startsWith("/browse") : pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? "text-white" : "text-zinc-400 transition duration-200 hover:text-white"}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/pofiles" className="overflow-hidden rounded-full border border-white/20">
            <Image src="/images/avatar1.jpg" alt="Profile" width={32} height={32} className="h-8 w-8 object-cover" />
          </Link>
        </div>
      )}
    </nav>
  );
}