"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import FormInput from "@/components/FormInput";
import Navbar from "../Navbar";
import Button from "@/components/Button";
import Footer from "../Footer";

interface SignupStep1FormProps {
  email: string;
}

export default function SignupStep1Form({ email }: SignupStep1FormProps) {
  const router = useRouter();
  const [currentEmail, setCurrentEmail] = useState(email);
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/signup/step-2?email=${encodeURIComponent(currentEmail)}`);
  }

  return (
     
    
    <form onSubmit={handleSubmit} className="w-full space-y-6 rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#DB202C]">Step 1 of 3</p>
        <h1 className="text-3xl font-black">Create a password to start your membership</h1>
        <p className="text-sm text-zinc-500">The email is prefilled from the previous step and locked for this screen.</p>
      </div>
      <FormInput label="Email" type="email" value={currentEmail} onChange={(event) => setCurrentEmail(event.target.value)} />
      <FormInput label="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <div className="pt-2">
        <Button type="submit" w-full max-w-440px variant="primary">Next</Button>
      </div>
      <p className="text-sm text-zinc-500">
        Already have an account? <Link href="/auth/signin" className="font-semibold text-zinc-900 underline decoration-[#DB202C] decoration-2 underline-offset-4">Sign in</Link>
      </p>
    </form>
    
     
  );
  

}