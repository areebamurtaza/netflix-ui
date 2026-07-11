import Navbar from "@/components/Navbar";
import ContentRow from "@/components/ContentRow";
import { movies } from "@/data/movies";

export default function TvShowsPage() {
	return (
		<main className="min-h-screen bg-[#141414] text-white">
			<Navbar />
			<section className="space-y-8 py-10">
				<div className="px-4 md:px-8">
					<h1 className="text-3xl font-black md:text-5xl">TV Shows</h1>
					<p className="mt-3 max-w-2xl text-sm text-zinc-400 md:text-base">The same movie data can power a Netflix-style horizontal shelf on this subpage too.</p>
				</div>
				<ContentRow title="Top TV Picks" movies={movies} />
			</section>
		</main>
	);
}
