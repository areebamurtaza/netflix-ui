"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import FormInput from "@/components/FormInput";
import Button from "@/components/Button";

export default function AuthSignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/profiles");
  }

  return (
    <main className="min-h-screen bg-[#141414] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(219,32,44,0.18),transparent_45%),linear-gradient(rgba(0,0,0,0.88),rgba(0,0,0,0.88))]" />
      <div className="mx-auto flex min-h-screen max-w-md items-center px-4 py-16">
        <form onSubmit={handleSubmit} className="relative z-10 w-full space-y-6 rounded-2xl bg-black/80 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur-md">
          <div className="space-y-2 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#DB202C]">Netflix</p>
            <h1 className="text-3xl font-black">Sign In</h1>
            <p className="text-sm text-zinc-400">Use email or phone, then continue into the profile picker.</p>
          </div>

          <FormInput label="Email or phone number" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <FormInput label="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />

          <Button type="submit">Sign In</Button>

          <div className="flex items-center justify-between text-sm text-zinc-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded border-zinc-500 bg-transparent accent-[#DB202C]" />
              Remember me
            </label>
            <Link href="/auth/forgot-password/verify" className="transition duration-200 hover:text-white">
              Need help?
            </Link>
          </div>

          <p className="text-sm text-zinc-400">
            New to Netflix? <Link href="/signup/step-1" className="font-semibold text-white underline decoration-[#DB202C] decoration-2 underline-offset-4">Sign up now</Link>
          </p>
        </form>
      </div>
    </main>
  );
}