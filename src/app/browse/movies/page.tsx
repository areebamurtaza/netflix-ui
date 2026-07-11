import Navbar from "@/components/Navbar";
import ContentRow from "@/components/ContentRow";
import { movies } from "@/data/movies";

export default function MoviesPage() {
	return (
		<main className="min-h-screen bg-[#141414] text-white">
			<Navbar />
			<section className="space-y-8 py-10">
				<div className="px-4 md:px-8">
					<h1 className="text-3xl font-black md:text-5xl">Movies</h1>
					<p className="mt-3 max-w-2xl text-sm text-zinc-400 md:text-base">A simple browse subpage that reuses the same hardcoded movie set in a Netflix-style layout.</p>
				</div>
				<ContentRow title="Popular Movies" movies={movies} />
			</section>
		</main>
	);
}
