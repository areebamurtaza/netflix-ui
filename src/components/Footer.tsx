import Link from "next/link";

export default function Footer() {
  const columns = [
    [
      { label: "FAQ", href: "/" },
      { label: "Help Centre", href: "/signin" },
      { label: "Account", href: "/pofiles" }
    ],
    [
      { label: "Browse", href: "/browse" },
      { label: "TV Shows", href: "/browse/tv-shows" },
      { label: "Movies", href: "/browse/movies" }
    ],
    [
      { label: "New & Popular", href: "/browse/new-popular" },
      { label: "My List", href: "/browse/my-list" },
      { label: "Profiles", href: "/pofiles" }
    ]
  ];

  return (
    <footer className="border-t border-white/10 bg-[#141414] px-4 py-12 text-sm text-zinc-400 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        {columns.map((column, index) => (
          <div key={index} className="space-y-3">
            {column.map((item) => (
              <Link key={item.label} href={item.href} className="block transition duration-200 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-zinc-500"> © 2026 Areeba Murtaza. All rights reserved.</p>
    </footer>
  );
}