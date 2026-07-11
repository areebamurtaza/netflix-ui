import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function MyListPage() {
	return (
		<main className="min-h-screen bg-[#141414] text-white">
			<Navbar />
			<section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center gap-6 px-4 py-12 text-center md:gap-8 md:px-8 md:py-16">
				<div className="space-y-3">
					<h1 className="text-3xl font-black sm:text-4xl md:text-5xl">My List</h1>
					<p className="text-sm text-zinc-400 md:text-base">Saved titles will appear here.</p>
				</div>
				<div className="flex flex-wrap items-center justify-center gap-2 text-sm">
					{["Movies", "TV Shows", "Anime"].map((tab) => (
						<button key={tab} type="button" className="rounded-full border border-white/15 px-3 py-2 text-xs text-zinc-300 transition duration-200 hover:border-white hover:text-white sm:px-4 sm:text-sm">
							{tab}
						</button>
					))}
				</div>
				<div className="space-y-3 text-zinc-400">
					<p>Your list is currently empty.</p>
					<Link href="/browse" className="font-semibold text-white underline decoration-[#DB202C] decoration-2 underline-offset-4">
						Start adding titles
					</Link>
				</div>
			</section>
		</main>
	);
}
