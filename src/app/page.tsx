import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FAQItem from "@/components/FAQItem";
import Footer from "@/components/Footer";

export default function LandingPage() {
  const faqs = [
    {
      question: "What is Netflix?",
      answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
    },
    {
      question: "How much does it cost?",
      answer: "This clone is free to explore and uses routing-only fake auth flows to mirror the Netflix experience without a backend."
    },
    {
      question: "Where can I watch?",
      answer: "Watch on your phone, tablet, laptop, and TV. The layout stays responsive from mobile up through desktop screens."
    }
  ];

  return (
    <main className="min-h-screen bg-[#141414] text-white">
      <Navbar />
      <Hero
        title="Unlimited movies, TV shows and more"
        description="Watch anywhere. Cancel anytime. Build a polished Netflix-inspired frontend with routing, bold visuals, and smooth state-free interactions."
        imagePath="/images/home-bg.png"
      />
      <section className="mx-auto max-w-6xl space-y-4 px-4 py-16 md:px-8">
        <h2 className="text-2xl font-bold md:text-4xl">Frequently Asked Questions</h2>
        {faqs.map((faq) => (
          <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </section>
      <Footer />
    </main>
  );
}