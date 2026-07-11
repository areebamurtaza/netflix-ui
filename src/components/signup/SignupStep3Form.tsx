"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import PlanCard from "@/components/PlanCard";

interface SignupStep3FormProps {
  email: string;
}

export default function SignupStep3Form({ email }: SignupStep3FormProps) {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState(1);

  const plans = [
    { name: "Mobile", price: "$5.99", resolution: "480p", devices: "Phone, tablet" },
    { name: "Basic", price: "$8.99", resolution: "480p", devices: "Phone, tablet, computer" },
    { name: "Standard", price: "$15.49", resolution: "1080p", devices: "TV, computer, phone, tablet" },
    { name: "Premium", price: "$22.99", resolution: "4K + HDR", devices: "All devices, up to 4 screens" },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#DB202C]">Step 3 of 3</p>
        <h1 className="text-3xl font-black md:text-5xl">Choose the plan that&apos;s right for you</h1>
        <p className="mx-auto max-w-2xl text-sm text-zinc-500 md:text-base">{email} will continue to payment after you choose a plan.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {plans.map((plan, index) => (
          <PlanCard
            key={plan.name}
            name={plan.name}
            price={plan.price}
            resolution={plan.resolution}
            devices={plan.devices}
            selected={selectedPlan === index}
            onClick={() => setSelectedPlan(index)}
          />
        ))}
      </div>

      <div className="flex justify-center gap-3">
        <Button variant="secondary" onClick={() => router.push("/signup/step-2")}>Back</Button>
        <Button onClick={() => router.push("/signup/payment")}>Next</Button>
      </div>
    </div>
  );
}