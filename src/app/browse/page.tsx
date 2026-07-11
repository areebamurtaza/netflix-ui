import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContentRow from "@/components/ContentRow";
import Footer from "@/components/Footer";
import { movies } from "@/data/movies";

export default function BrowsePage() {
  const rows = [
    "Continue Watching",
    "Popular on Netflix",
    "Trending Now",
    "New Releases",
    "Anime",
    "US TV Dramas",
    "K-Drama",
    "Bollywood Movies",
    "TV Sci-Fi & Horror",
    "Action Movie",
    "Blockbuster Movies",
  ];

  return (
    <main className="min-h-screen bg-[#141414] text-white">
      <Navbar />
      <Hero
        title="Featured Today"
        description="Play the featured title or explore more details."
        imagePath="/images/home-bg.png"
      />
      <section className="space-y-8 py-10">
        {rows.map((row) => (
          <ContentRow key={row} title={row} movies={movies} />
        ))}
      </section>
      <Footer />
    </main>
  );
}