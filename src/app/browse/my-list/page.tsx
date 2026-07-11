import Navbar from "@/components/Navbar";
import ContentRow from "@/components/ContentRow";
import { movies } from "@/data/movies";

export default function MyListPage() {
	return (
		<main className="min-h-screen bg-[#141414] text-white">
			<Navbar />
			<section className="space-y-8 py-10">
				<div className="px-4 md:px-8">
					<h1 className="text-3xl font-black md:text-5xl">My List</h1>
					<p className="mt-3 max-w-2xl text-sm text-zinc-400 md:text-base">Saved titles can reuse the same card rail pattern even without backend state.</p>
				</div>
				<ContentRow title="Your Saved Titles" movies={movies.slice(0, 4)} />
			</section>
		</main>
	);
}
