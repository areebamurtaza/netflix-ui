"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import FAQItem from "@/components/FAQItem";
import Footer from "@/components/Footer";

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
      answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 1,100 a month. No extra costs, no contracts."
    },
    {
      question: "Where can I watch?",
      answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app."
    },
    {
      question: "How do I cancel?",
      answer: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-[#E50914] selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden border-b-8 border-[#232323]">
        {/* Background Image & Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/home-bg.png" 
            alt="Netflix hero collage" 
            fill 
            priority
            className="object-cover opacity-50" 
          />
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black via-black/20 to-black/80" />
        </div>
        
        {/* Centered Hero Content Wrapper */}
        <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center px-4 py-28 text-center sm:px-8">
          <h1 className="mb-4 text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-[4rem] text-white">
            Unlimited movies, TV<br/>shows and more.
          </h1>
          <p className="mb-6 text-xl sm:text-2xl text-white font-medium">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="mb-4 text-lg sm:text-xl text-white">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          
          <form
            onSubmit={(e) => { 
              e.preventDefault(); 
              router.push(`/signup/step-1?email=${encodeURIComponent(heroEmail)}`); 
            }}
            className="flex w-full max-w-3xl flex-col items-center justify-center gap-2 sm:flex-row"
          >
            <input 
              value={heroEmail} 
              onChange={(e) => setHeroEmail(e.target.value)} 
              type="email" 
              required
              placeholder="Email address" 
              className="w-full sm:flex-1 rounded-sm border border-zinc-500 bg-black/40 backdrop-blur-sm px-4 py-4 text-white outline-none focus:ring-2 focus:ring-white placeholder:text-zinc-300" 
            />
            <button type="submit" className="flex shrink-0 items-center justify-center gap-2 rounded-sm bg-[#E50914] px-8 py-4 text-2xl font-bold text-white transition hover:bg-[#f3121c]">
              Get Started
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </section>

      {/* FEATURE ROWS */}
      {[
        { 
          title: "Enjoy on your TV.", 
          copy: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.", 
          image: "/images/poster1.png", 
          reverse: false,
          imgWidth: 532,
          imgHeight: 399
        },
        { 
          title: "Download your shows to watch offline.", 
          copy: "Save your favourites easily and always have something to watch.", 
          image: "/images/poster2.png", 
          reverse: true,
          downloadBox: true, // Adds the little downloading animation box
          imgWidth: 400,
          imgHeight: 369
        },
        { 
          title: "Watch everywhere.", 
          copy: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.", 
          image: "/images/poster3.png", 
          reverse: false,
          imgWidth: 640,
          imgHeight: 480
        },
        { 
          title: "Create profiles for children.", 
          copy: "Send children on adventures with their favourite characters in a space made just for them—free with your membership.", 
          image: "/images/poster5.png", 
          reverse: true,
          imgWidth: 538,
          imgHeight: 404
        },
      ].map((feature, index) => (
        <section key={index} className="border-b-8 border-[#232323] bg-black py-16 md:py-20 px-4">
          <div className={`mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 md:gap-4 ${feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
            
            {/* Text Side */}
            <div className="flex-1 text-center lg:text-left lg:px-8">
              <h2 className="mb-4 text-3xl font-black md:text-5xl lg:text-6xl leading-tight text-white">
                {feature.title}
              </h2>
              <p className="text-lg md:text-2xl font-medium text-white">
                {feature.copy}
              </p>
            </div>

            {/* Image Side */}
            <div className="relative flex-1 w-full flex justify-center">
              <div className="relative z-10 w-full max-w-lg flex justify-center">
                <Image 
                  src={feature.image} 
                  alt={feature.title} 
                  width={feature.imgWidth} 
                  height={feature.imgHeight} 
                  className="relative z-10 object-contain" 
                  style={{ width: feature.imgWidth, height: feature.imgHeight }}
                />
                
                {/* Simulated Download Box matching the reference */}
                {feature.downloadBox && (
                  <div className="absolute bottom-[8%] left-1/2 flex w-[60%] sm:w-[50%] -translate-x-1/2 items-center gap-4 rounded-xl border-2 border-zinc-700 bg-black p-3 shadow-xl z-20">
                    <img className="h-16 w-12 object-cover" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="Stranger Things" />
                    <div className="flex-1">
                      <div className="text-sm sm:text-base font-bold text-white">Stranger Things</div>
                      <div className="text-xs sm:text-sm text-blue-500 font-medium">Downloading...</div>
                    </div>
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                )}
              </div>
            </div>

          </div>
        </section>
      ))}

      {/* FAQ SECTION */}
      <section className="border-b-8 border-[#232323] bg-black py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl flex flex-col items-center">
          <h2 className="mb-10 text-3xl font-black text-center md:text-5xl lg:text-6xl text-white">
            Frequently Asked Questions
          </h2>
          
          {/* FAQ Items mapping - relies on your external FAQItem component */}
          <div className="w-full space-y-2 mb-12">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="w-full text-center space-y-4">
            <p className="text-lg sm:text-xl text-white">
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            <form
              onSubmit={(e) => { 
                e.preventDefault(); 
                router.push(`/signup/step-1?email=${encodeURIComponent(footerEmail)}`); 
              }}
              className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center gap-2 sm:flex-row"
            >
              <input 
                value={footerEmail} 
                onChange={(e) => setFooterEmail(e.target.value)} 
                type="email" 
                required
                placeholder="Email address" 
                className="w-full sm:flex-1 rounded-sm border border-zinc-500 bg-black/40 backdrop-blur-sm px-4 py-4 text-white outline-none focus:ring-2 focus:ring-white placeholder:text-zinc-300" 
              />
              <button type="submit" className="flex shrink-0 items-center justify-center gap-2 rounded-sm bg-[#E50914] px-8 py-4 text-2xl font-bold text-white transition hover:bg-[#f3121c]">
                Get Started
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}