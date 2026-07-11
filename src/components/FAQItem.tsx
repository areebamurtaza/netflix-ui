"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/15 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 text-left text-lg font-medium text-white"
      >
        <span>{question}</span>
        <span className="text-2xl leading-none text-[#E50914]">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-300">{answer}</p>}
    </div>
  );
}