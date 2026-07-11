import Navbar from "@/components/Navbar";
import ContentRow from "@/components/ContentRow";
import Hero from "@/components/Hero";
import { movies } from "@/data/movies";

export default function NewPopularPage() {
	const rows = [
		"New on Netflix",
		"Top 10 TV Shows",
		"Top 10 Movies",
		"Coming This Week",
		"Worth the Wait",
		"Coming Next Week",
	];

	return (
		<main className="min-h-screen bg-[#141414] text-white">
			<Navbar />
			<Hero title="New & Popular" description="Discover the latest arrivals and most-watched titles." imagePath="/images/home-bg.png" />
			<section className="space-y-8 py-10">
				{rows.map((row) => (
					<ContentRow key={row} title={row} movies={movies} />
				))}
			</section>
		</main>
	);
}
