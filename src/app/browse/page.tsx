import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContentRow from "@/components/ContentRow";
import Footer from "@/components/Footer";
import { movies } from "@/data/movies";

export default function BrowsePage() {
  return (
    <main className="min-h-screen bg-[#141414] text-white">
      <Navbar />
      <Hero
        title="Featured Today"
        description="A dark, cinematic landing zone for your browse experience. Hover cards to preview, scroll horizontally, and jump through fake routes like the real Netflix UI."
        imagePath={movies[0].posterPath}
      />
      <section className="space-y-8 py-10">
        <ContentRow title="Trending Now" movies={movies} />
        <ContentRow title="Because You Watched" movies={movies} />
        <ContentRow title="New Releases" movies={movies} />
      </section>
      <Footer />
    </main>
  );
}