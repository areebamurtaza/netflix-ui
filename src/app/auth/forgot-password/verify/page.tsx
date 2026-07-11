"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import FormInput from "@/components/FormInput";
import Button from "@/components/Button";

export default function ForgotPasswordVerifyPage() {
  const router = useRouter();
  const [code, setCode] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/auth/signin");
  }

  return (
    <main className="min-h-screen bg-[#141414] px-4 py-16 text-white">
      <div className="mx-auto flex min-h-screen max-w-md items-center">
        <form onSubmit={handleSubmit} className="w-full space-y-6 rounded-2xl bg-black/80 p-8 shadow-2xl ring-1 ring-white/10">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-black">Verify your account</h1>
            <p className="text-sm text-zinc-400">Enter the verification code to return to Sign In.</p>
          </div>
          <FormInput label="Verification code" type="text" value={code} onChange={(event) => setCode(event.target.value)} />
          <Button type="submit">Verify</Button>
          <p className="text-sm text-zinc-400">
            <Link href="/auth/signin" className="font-semibold text-white underline decoration-[#DB202C] decoration-2 underline-offset-4">Back to Sign In</Link>
          </p>
        </form>
      </div>
    </main>
  );
}