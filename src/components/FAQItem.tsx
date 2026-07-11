"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 text-left text-lg font-medium text-zinc-900"
      >
        <span>{question}</span>
        <span className="text-2xl leading-none text-[#DB202C]">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-600">{answer}</p>}
    </div>
  );
}