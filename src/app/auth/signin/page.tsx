"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image"; 
import FormInput from "@/components/FormInput";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar"; // Imported Navbar
import Footer from "@/components/Footer"; // Imported Footer

export default function AuthSignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/profiles");
  }

  return (
    // Used flex layout to handle the structural flow from Navbar down to Footer
    <main className="relative flex min-h-screen flex-col bg-[#141414] text-white overflow-x-hidden">
      
      {/* 1. Fullscreen Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home-bg.png" 
          alt="Netflix Background"
          fill
          priority
          className="object-cover"
        />
        {/* Uniform dark overlay across the whole background image */}
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      {/* 2. Top Navigation (renders the Top-Left NETFLIX text logo based on your Navbar logic) */}
      <Navbar />

      {/* 3. Center Form Content Container */}
      <div className="relative z-10 mx-auto flex flex-1 w-full max-w-md items-center px-4 py-16 md:py-24">
        <form onSubmit={handleSubmit} className="w-full space-y-6 rounded-2xl bg-black/75 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur-md md:p-12">
          <div className="space-y-2 text-left">
            {/* Removed the small centered text logo since it is now top-left */}
            <h1 className="text-3xl font-black">Sign In</h1>
            <p className="text-sm text-zinc-400">Use email or phone, then continue into the profile picker.</p>
          </div>

          <FormInput label="Email or phone number" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <FormInput label="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />

          <Button type="submit">Sign In</Button>

          <div className="flex items-center justify-between text-sm text-zinc-400">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 rounded border-zinc-500 bg-transparent accent-[#DB202C]" />
              Remember me
            </label>
            <Link href="/auth/forgot-password/verify" className="transition duration-200 hover:text-white">
              Need help?
            </Link>
          </div>

          <div className="space-y-3 pt-4 text-sm text-zinc-400">
            <p>
              New to Netflix? <Link href="/signup/step-1" className="font-semibold text-white underline decoration-[#DB202C] decoration-2 underline-offset-4">Sign up now</Link>
            </p>
            <p className="text-xs text-zinc-500 leading-relaxed">
              This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-blue-500 hover:underline cursor-pointer">Learn more.</span>
            </p>
          </div>
        </form>
      </div>

      {/* 4. Bottom Footer Wrapper */}
      {/* We layer this at z-10 and override its default solid bg to show the background image behind it */}
      <div className="relative z-10 mt-auto bg-black/75 backdrop-blur-sm">
        <Footer />
      </div>
    </main>
  );
}