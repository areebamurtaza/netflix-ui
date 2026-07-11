"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";

interface SignupStep2FormProps {
  email: string;
}

export default function SignupStep2Form({ email }: SignupStep2FormProps) {
  const router = useRouter();
  const benefits = [
    "Unlimited movies and TV shows",
    "Watch on phone, tablet, laptop, and TV",
    "Download and watch offline",
    "No ads on select plans",
  ];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/signup/step-3?email=${encodeURIComponent(email)}`);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6 rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#DB202C]">Step 2 of 3</p>
        <h1 className="text-3xl font-black">Choose your plan benefits</h1>
        <p className="text-sm text-zinc-500">{email} will move forward to the plan selector. Confirm what each Netflix plan unlocks.</p>
      </div>
      <div className="space-y-3 rounded-2xl bg-zinc-50 p-4">
        {benefits.map((benefit) => (
          <div key={benefit} className="flex items-center gap-3 text-sm text-zinc-700">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DB202C] text-[11px] font-bold text-white">✓</span>
            <span>{benefit}</span>
          </div>
        ))}
      </div>
      <Button type="submit">Next</Button>
      <p className="text-sm text-zinc-500">
        Want to go back? <Link href={`/signup/step-1?email=${encodeURIComponent(email)}`} className="font-semibold text-zinc-900 underline decoration-[#DB202C] decoration-2 underline-offset-4">Previous step</Link>
      </p>
    </form>
  );
}