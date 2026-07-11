import Navbar from "@/components/Navbar";
import ContentRow from "@/components/ContentRow";
import { movies } from "@/data/movies";

export default function NewPopularPage() {
	return (
		<main className="min-h-screen bg-[#141414] text-white">
			<Navbar />
			<section className="space-y-8 py-10">
				<div className="px-4 md:px-8">
					<h1 className="text-3xl font-black md:text-5xl">New & Popular</h1>
					<p className="mt-3 max-w-2xl text-sm text-zinc-400 md:text-base">This fake route keeps the browse navigation believable without introducing backend logic.</p>
				</div>
				<ContentRow title="Fresh Picks" movies={movies} />
			</section>
		</main>
	);
}
