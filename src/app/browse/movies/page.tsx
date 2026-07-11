import Navbar from "@/components/Navbar";
import ContentRow from "@/components/ContentRow";
import Hero from "@/components/Hero";
import { movies } from "@/data/movies";

export default function MoviesPage() {
	const rows = [
		"Tamil Language Movies",
		"Trending Now",
		"Sci-Fi & Fantasy",
		"Telugu Language Movies",
		"Hindi Language Movies",
		"Children & Family Movies",
		"Action Thrillers",
		"Top 10 TV Movies",
		"Blockbuster Movies",
		"Crime",
		"Adventure",
		"New Release",
		"Continue Watching",
		"Popular on Netflix",
	];

	return (
		<main className="min-h-screen bg-[#141414] text-white">
			<Navbar />
			<Hero title="Movies" description="Browse movies across genres." imagePath="/images/home-bg.png" />
			<section className="space-y-8 py-10">
				{rows.map((row) => (
					<ContentRow key={row} title={row} movies={movies} />
				))}
			</section>
		</main>
	);
}
