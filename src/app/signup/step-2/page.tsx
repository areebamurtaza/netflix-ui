"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import FormInput from "@/components/FormInput";
import Button from "@/components/Button";

export default function SignupStep2Page() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/signup/step-3");
  };

  return (
    <main className="min-h-screen bg-white px-4 py-16 text-zinc-900">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-md items-center">
        <form onSubmit={handleSubmit} className="w-full space-y-6 rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#E50914]">Step 2</p>
            <h1 className="text-3xl font-bold">Complete your profile</h1>
            <p className="text-sm text-zinc-500">A second white step keeps the fake signup flow visually separate from browse and landing pages.</p>
          </div>
          <FormInput label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <FormInput label="Phone number" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <Button type="submit">Next</Button>
          <p className="text-sm text-zinc-500">
            Want to go back? <Link href="/signup/step-1" className="font-semibold text-zinc-900 underline decoration-[#E50914] decoration-2 underline-offset-4">Previous step</Link>
          </p>
        </form>
      </div>
    </main>
  );
}