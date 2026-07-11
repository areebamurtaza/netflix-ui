"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import FormInput from "@/components/FormInput";
import Button from "@/components/Button";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/pofiles");
  };
  return (
    <main className="min-h-screen bg-white px-4 py-10 text-zinc-900">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md items-center">
        <form onSubmit={handleSubmit} className="w-full space-y-6 rounded-2xl border border-zinc-200 bg-white p-8 shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
          <div className="space-y-2 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#E50914]">Netflix</p>
            <h1 className="text-3xl font-black text-zinc-900">Sign In</h1>
            <p className="text-sm text-zinc-500">White-background sign in styled to stay visually distinct from browse and landing screens.</p>
          </div>
          <FormInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <FormInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit">Sign In</Button>
          <p className="text-sm text-zinc-500">
            New here? <Link href="/signup/step-1" className="font-semibold text-zinc-900 underline decoration-[#E50914] decoration-2 underline-offset-4">Start signup</Link>
          </p>
        </form>
      </div>
    </main>
  );
}