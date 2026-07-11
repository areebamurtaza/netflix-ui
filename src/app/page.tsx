"use client";

import Navbar from "@/components/Navbar";
import FAQItem from "@/components/FAQItem";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LandingPage() {
  const router = useRouter();
  const [heroEmail, setHeroEmail] = useState("");
  const [footerEmail, setFooterEmail] = useState("");

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
    <main className="min-h-screen bg-white text-zinc-900">
      <Navbar />

      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(219,32,44,0.08),transparent_40%)]" />
        <div className="mx-auto grid min-h-[42rem] max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-8">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#DB202C]">Unlimited entertainment</p>
            <h1 className="max-w-xl text-4xl font-black leading-tight md:text-6xl">Unlimited movies, TV shows and more</h1>
            <p className="max-w-lg text-base text-zinc-600 md:text-lg">Watch anywhere. Cancel anytime. Stream a Netflix-inspired experience built with routing and reusable UI blocks.</p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                router.push(`/signup/step-1?email=${encodeURIComponent(heroEmail)}`);
              }}
              className="flex max-w-xl flex-col gap-3 sm:flex-row"
            >
              <input value={heroEmail} onChange={(event) => setHeroEmail(event.target.value)} type="email" placeholder="Email address" className="w-full rounded-md border border-zinc-300 px-4 py-3 text-base outline-none focus:border-[#DB202C]" />
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-[#DB202C] px-6 py-3 text-base font-semibold text-white transition duration-200 hover:bg-[#f3121c]">
                Get Started
              </button>
            </form>
          </div>

          <div className="relative h-[28rem] overflow-hidden rounded-3xl bg-black shadow-2xl">
            <Image src="/images/home-bg.png" alt="Netflix hero collage" fill className="object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>
        </div>
      </section>

      <section className="space-y-4 bg-white px-4 py-16 md:px-8">
        {[
          { title: "Enjoy on your TV", copy: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.", image: "/images/poster1.png", reverse: false },
          { title: "Download your shows to watch offline", copy: "Save your favorites easily and always have something to watch.", image: "/images/poster2.png", reverse: true },
          { title: "Watch everywhere", copy: "Stream on your phone, tablet, laptop, and TV without missing a beat.", image: "/images/poster3.png", reverse: false },
          { title: "Create profile for children", copy: "Kids profiles come with a fun, child-friendly experience and titles for the whole family.", image: "/images/movie1.jpeg", reverse: true },
        ].map((feature) => (
          <div key={feature.title} className={`mx-auto grid max-w-7xl items-center gap-8 rounded-3xl bg-zinc-50 p-6 md:grid-cols-2 md:p-10 ${feature.reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="space-y-4">
              <h2 className="text-3xl font-black md:text-5xl">{feature.title}</h2>
              <p className="text-base leading-7 text-zinc-600 md:text-lg">{feature.copy}</p>
            </div>
            <div className="relative h-64 overflow-hidden rounded-2xl bg-black md:h-96">
              <Image src={feature.image} alt={feature.title} fill className="object-cover" />
            </div>
          </div>
        ))}
      </section>

      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-4xl space-y-4">
          <h2 className="text-3xl font-black md:text-5xl">Frequently Asked Questions</h2>
          <div className="rounded-3xl border border-zinc-200 bg-white p-4 md:p-8">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-10 md:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-zinc-50 p-6 md:p-10">
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-black md:text-4xl">Ready to watch? Enter your email to create or restart your membership.</h2>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                router.push(`/signup/step-1?email=${encodeURIComponent(footerEmail)}`);
              }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input value={footerEmail} onChange={(event) => setFooterEmail(event.target.value)} type="email" placeholder="Email address" className="w-full rounded-md border border-zinc-300 px-4 py-3 text-base outline-none focus:border-[#DB202C]" />
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-[#DB202C] px-6 py-3 text-base font-semibold text-white transition duration-200 hover:bg-[#f3121c]">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}