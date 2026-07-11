"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileDropdown from "./ProfileDropdown";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "/browse" },
    { label: "TV Shows", href: "/browse/tv-shows" },
    { label: "Movies", href: "/browse/movies" },
    { label: "New & Popular", href: "/browse/new-popular" },
    { label: "My List", href: "/browse/my-list" }
  ];
  const isLandingPage = pathname === "/";
  const isAuthPage = pathname.startsWith("/auth") || pathname === "/signin";

  return (
    <nav className={`relative z-30 px-4 py-4 md:px-8 ${isLandingPage ? "absolute left-0 right-0 top-0 bg-gradient-to-b from-black/90 via-black/45 to-transparent text-white" : isAuthPage ? "absolute left-0 right-0 top-0 bg-transparent text-white" : "sticky top-0 bg-[#000000] text-white"}`}>
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="shrink-0 text-2xl font-black tracking-[0.18em] text-[#DB202C] md:text-3xl">
          NETFLIX
        </Link>

        {!isAuthPage ? (
          <>
            {isLandingPage ? (
              <Link href="/auth/signin" className="rounded-md bg-[#DB202C] px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-[#f3121c]">
                Sign In
              </Link>
            ) : (
              <>
                <div className="hidden items-center gap-4 lg:flex lg:gap-6">
                  {navLinks.map((link) => {
                    const isActive = link.href === "/browse" ? pathname === "/browse" : pathname === link.href;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={isActive ? "font-semibold text-white" : "text-zinc-300 transition duration-200 hover:text-white"}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                  <button type="button" aria-label="Search" className="text-zinc-200 transition duration-200 hover:text-white">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                      <path d="M10 4a6 6 0 104.472 10.013l4.758 4.758 1.414-1.414-4.758-4.758A6 6 0 0010 4zm0 2a4 4 0 110 8 4 4 0 010-8z" />
                    </svg>
                  </button>
                  <button type="button" aria-label="Notifications" className="text-zinc-200 transition duration-200 hover:text-white">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                      <path d="M12 22a2.5 2.5 0 002.45-2h-4.9A2.5 2.5 0 0012 22zm8-6v-1l-2-2V10a6 6 0 10-12 0v3l-2 2v1h16z" />
                    </svg>
                  </button>
                  <div className="hidden md:block">
                    <ProfileDropdown />
                  </div>
                  <button
                    type="button"
                    aria-label="Open menu"
                    aria-expanded={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen((value) => !value)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white transition duration-200 hover:bg-white/10 lg:hidden"
                  >
                    <span className="sr-only">Open menu</span>
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                      <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </>
        ) : null}
      </div>

      {!isLandingPage && !isAuthPage && isMobileMenuOpen ? (
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/95 p-4 shadow-2xl lg:hidden">
          <div className="grid gap-2">
            {navLinks.map((link) => {
              const isActive = link.href === "/browse" ? pathname === "/browse" : pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-lg px-3 py-3 text-sm ${isActive ? "bg-white/10 font-semibold text-white" : "text-zinc-300"}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-2 border-t border-white/10 pt-3">
              <ProfileDropdown />
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}