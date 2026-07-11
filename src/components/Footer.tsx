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
    <footer className="border-t border-white/10 bg-[#000000] px-4 py-12 text-sm text-zinc-400 md:px-8">
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
      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center gap-4 text-xs text-zinc-500">
        <select className="rounded-md border border-white/15 bg-black px-3 py-2 text-sm text-white">
          <option>English</option>
          <option>Hindi</option>
          <option>Urdu</option>
        </select>
        <p>© 2026 Areeba Murtaza. All rights reserved.</p>
      </div>
    </footer>
  );
}