"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";

type Plan = {
  name: string;
  price: string;
  resolution: string;
  devices: string;
  isFeatured?: boolean;
};

export default function SignupStep3Page() {
  const router = useRouter();

  const plans: Plan[] = [
    {
      name: "Mobile",
      price: "$6.99",
      resolution: "480p",
      devices: "Phone, tablet",
    },
    {
      name: "Standard",
      price: "$15.49",
      resolution: "1080p",
      devices: "TV, computer, phone, tablet",
      isFeatured: true,
    },
    {
      name: "Premium",
      price: "$22.99",
      resolution: "4K + HDR",
      devices: "All devices, up to 4 screens",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-4 py-12 text-zinc-900">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-2 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#E50914]">Step 3</p>
          <h1 className="text-3xl font-black md:text-5xl">Choose your plan</h1>
          <p className="mx-auto max-w-2xl text-sm text-zinc-500 md:text-base">
            Pick a Netflix-style plan with a clean comparison grid and strong red accent.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-2xl border p-6 shadow-sm transition duration-200 ${plan.isFeatured ? "border-[#E50914] bg-[#fff5f5] ring-2 ring-[#E50914]" : "border-zinc-200 bg-white hover:border-zinc-300"}`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E50914]">{plan.name}</p>
              <div className="mt-4 space-y-2">
                <h2 className="text-3xl font-black">{plan.price}</h2>
                <p className="text-sm text-zinc-600">{plan.resolution}</p>
                <p className="text-sm text-zinc-600">{plan.devices}</p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-zinc-600">
                <li>Unlimited movies and TV shows</li>
                <li>Watch on your favorite devices</li>
                <li>Cancel anytime</li>
              </ul>
            </article>
          ))}
        </div>

        <div className="flex justify-center gap-3">
          <Button variant="secondary" onClick={() => router.push("/signup/step-2")}>Back</Button>
          <Button onClick={() => router.push("/pofiles")}>Continue</Button>
        </div>
      </div>
    </main>
  );
}