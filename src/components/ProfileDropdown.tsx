"use client";

import { useState } from "react";
import Link from "next/link";

const menuItems = [
  { label: "Sign Out", href: "/" },
  { label: "Switch Profile", href: "/profiles" },
  { label: "Help", href: "/auth/forgot-password/verify" },
  { label: "Account", href: "/profiles/manage" },
  { label: "Exit Profile", href: "/profiles" },
  { label: "Manage Profile", href: "/profiles/manage" },
];

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="flex items-center gap-2 rounded-md px-2 py-1 text-white transition duration-200 hover:bg-white/10"
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-sm bg-[#E50914] text-xs font-bold text-white">P</span>
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-white" aria-hidden="true">
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
      </button>

      {isOpen ? (
        <div className="absolute right-0 top-full z-50 mt-3 w-56 overflow-hidden rounded-md border border-white/10 bg-black shadow-2xl">
          <ul className="py-2 text-sm text-zinc-200">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="block px-4 py-2 transition duration-200 hover:bg-white/10 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}