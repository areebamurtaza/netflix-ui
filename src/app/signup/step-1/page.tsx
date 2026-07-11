"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import FormInput from "@/components/FormInput";
import Button from "@/components/Button";

export default function SignupStep1Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/signup/step-2");
  };
  return (
    <main className="min-h-screen bg-white px-4 py-16 text-zinc-900">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-md items-center">
        <form onSubmit={handleSubmit} className="w-full space-y-6 rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#E50914]">Step 1</p>
            <h1 className="text-3xl font-bold">Create your account</h1>
            <p className="text-sm text-zinc-500">This white page keeps the signup flow visually distinct from the dark browsing surfaces.</p>
          </div>
          <FormInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <FormInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit">Next</Button>
          <p className="text-sm text-zinc-500">
            Already have an account? <Link href="/signin" className="font-semibold text-zinc-900 underline decoration-[#E50914] decoration-2 underline-offset-4">Sign in</Link>
          </p>
        </form>
      </div>
    </main>
  );
}