import Navbar from "@/components/Navbar";
import ContentRow from "@/components/ContentRow";
import Hero from "@/components/Hero";
import { movies } from "@/data/movies";

export default function TvShowsPage() {
	const rows = [
		"TV Comedies",
		"Continue Watching",
		"Trending Now",
		"Popular on Netflix",
		"New Releases",
		"US TV Dramas",
		"Top Picks",
		"Top 10 TV Shows",
		"Anime",
		"K-Drama",
		"Sci-fi & Horror",
		"Crime TV Show",
	];

	return (
		<main className="min-h-screen bg-[#141414] text-white">
			<Navbar />
			<Hero title="TV Shows" description="Stream shows across comedy, drama, anime, and horror." imagePath="/images/home-bg.png" />
			<section className="space-y-8 py-10">
				{rows.map((row) => (
					<ContentRow key={row} title={row} movies={movies} />
				))}
			</section>
		</main>
	);
}
