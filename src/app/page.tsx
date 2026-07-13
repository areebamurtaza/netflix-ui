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
    
    <main className="min-h-screen bg-[#141414] text-white">
      <Navbar />

    
      <section className="relative min-h-[45rem] overflow-hidden bg-black flex items-center">
        
       
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/home-bg.png" 
            alt="Netflix hero collage" 
            fill 
            priority
            className="object-cover opacity-60" 
          />
         
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black via-black/30 to-black" />
        </div>
        
        
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-28 text-center md:px-8">
          <div className="space-y-6 flex flex-col items-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#DB202C]">Unlimited entertainment</p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl text-white">
              Unlimited movies, TV shows and more
            </h1>
            <p className="max-w-xl text-base text-zinc-300 md:text-xl">
              Watch anywhere. Cancel anytime. Stream a Netflix-inspired experience built with routing and reusable UI blocks.
            </p>
            
            <form
              onSubmit={(event) => {
                event.preventDefault();
                router.push(`/signup/step-1?email=${encodeURIComponent(heroEmail)}`);
              }}
              className="flex w-full max-w-2xl flex-col gap-3 sm:flex-row pt-2"
            >
              <input 
                value={heroEmail} 
                onChange={(event) => setHeroEmail(event.target.value)} 
                type="email" 
                placeholder="Email address" 
                className="w-full rounded-md border border-zinc-700 bg-black/40 backdrop-blur-sm px-4 py-4 text-base text-white outline-none focus:border-[#DB202C] focus:ring-1 focus:ring-[#DB202C]" 
              />
              <button type="submit" className="inline-flex shrink-0 items-center justify-center rounded-md bg-[#DB202C] px-8 py-4 text-lg font-bold text-white transition duration-200 hover:bg-[#f3121c]">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </section>

      
      <section className="space-y-4 bg-black px-4 py-16 md:px-8">
        {[
          { title: "Enjoy on your TV", copy: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.", image: "/images/poster1.png", reverse: false },
          { title: "Download your shows to watch offline", copy: "Save your favorites easily and always have something to watch.", image: "/images/poster2.png", reverse: true },
          { title: "Watch everywhere", copy: "Stream on your phone, tablet, laptop, and TV without missing a beat.", image: "/images/poster3.png", reverse: false },
          { title: "Create profile for children", copy: "Kids profiles come with a fun, child-friendly experience and titles for the whole family.", image: "/images/poster5.png", reverse: true },
        ].map((feature) => (
          <div key={feature.title} className={`mx-auto grid max-w-7xl items-center gap-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 p-6 md:grid-cols-2 md:p-10 ${feature.reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="space-y-4">
              <h2 className="text-3xl font-black md:text-5xl text-white">{feature.title}</h2>
              <p className="text-base leading-7 text-zinc-400 md:text-lg">{feature.copy}</p>
            </div>
            <div className="relative h-64 overflow-hidden rounded-2xl bg-black md:h-96">
              <Image src={feature.image} alt={feature.title} fill className="object-cover" />
            </div>
          </div>
        ))}
      </section>

      <section className="bg-black px-4 py-16 md:px-8">
        <div className="mx-auto max-w-4xl space-y-4">
          <h2 className="text-3xl font-black md:text-5xl text-white">Frequently Asked Questions</h2>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 text-white p-4 md:p-8">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-4 pb-20 md:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-zinc-900/40 border border-zinc-800 p-6 md:p-10">
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-black md:text-4xl text-white">Ready to watch? Enter your email to create or restart your membership.</h2>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                router.push(`/signup/step-1?email=${encodeURIComponent(footerEmail)}`);
              }}
              className="flex flex-col gap-3 sm:flex-row pt-2"
            >
              <input value={footerEmail} onChange={(event) => setFooterEmail(event.target.value)} type="email" placeholder="Email address" className="w-full rounded-md border border-zinc-700 bg-black/40 px-4 py-3 text-base text-white outline-none focus:border-[#DB202C]" />
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