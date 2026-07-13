"use client";

import React, { useState } from "react";
import Footer from "../Footer";

// ==========================================
// ⚠️ MOCKS FOR PREVIEW ENVIRONMENT ONLY ⚠️
// Delete this block when pasting into VS Code!
const useRouter = () => ({ push: (url: string) => console.log("Navigating to:", url) });
const Link = ({ href, children, className }: any) => <a href={href} className={className}>{children}</a>;
const Button = ({ children, onClick, className, variant }: any) => (
  <button 
    onClick={onClick} 
    className={`flex items-center justify-center transition-colors ${
      variant === 'secondary' 
        ? 'bg-zinc-200 text-black hover:bg-zinc-300' 
        : 'bg-[#E50914] text-white hover:bg-[#f3121c]'
    } ${className || ''}`}
  >
    {children}
  </button>
);
// ==========================================

// ==========================================
// ✅ REAL IMPORTS (Uncomment in VS Code) ✅
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import Button from "@/components/Button";
// ==========================================

interface SignupStep3FormProps {
  email?: string;
}

const DeviceIcon = ({ type, className }: { type: string; className?: string }) => {
  switch (type) {
    case "Phone":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <rect x="7" y="3" width="10" height="18" rx="2" />
          <path d="M11 18h2" />
        </svg>
      );
    case "Tablet":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <path d="M11 17h2" />
        </svg>
      );
    case "Computer":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <rect x="3" y="5" width="18" height="10" rx="1" />
          <path d="M8 20h8M12 15v5" />
        </svg>
      );
    case "TV":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <rect x="2" y="6" width="20" height="11" rx="1" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      );
    default:
      return null;
  }
};

export default function SignupStep3Form({ email }: SignupStep3FormProps) {
  const router = useRouter();
  
  // Selected plan state (0 = Mobile, 1 = Basic, 2 = Standard, 3 = Premium)
  const [selectedPlan, setSelectedPlan] = useState(1);

  const plans = [
    { id: 0, name: "Mobile", price: "₹ 149", quality: "Good", resolution: "480p", devices: ["Phone", "Tablet"] },
    { id: 1, name: "Basic", price: "₹ 199", quality: "Good", resolution: "480p", devices: ["Phone", "Tablet", "Computer", "TV"] },
    { id: 2, name: "Standard", price: "₹ 499", quality: "Better", resolution: "1080p", devices: ["Phone", "Tablet", "Computer", "TV"] },
    { id: 3, name: "Premium", price: "₹ 649", quality: "Best", resolution: "4K+HDR", devices: ["Phone", "Tablet", "Computer", "TV"] },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#333] font-sans">
      
      {/* 1. Dedicated Signup Header */}
      <header className="border-b border-[#e6e6e6] bg-white">
        <div className="flex h-[75px] w-full items-center justify-between px-[4%]">
          <Link href="/" className="text-2xl font-black text-[#E50914]  md:text-3xl position-relative transition-transform hover:scale-105">
            NETFLIX
          </Link>
          <Link href="/" className="text-lg font-bold text-[#333] hover:underline md:text-[19px]">
            Sign Out
          </Link>
        </div>
      </header>

      {/* 2. Main Content Area */}
      <main className="mx-auto flex w-full max-w-[976px] flex-grow flex-col px-4 pb-20 pt-8 sm:px-8">
        
        {/* Header Section */}
        <div className="space-y-3">
          <p className="text-[13px] text-[#333]">
            Step <span className="font-bold">2</span> of <span className="font-bold">3</span>
          </p>
          <h1 className="text-[32px] font-bold text-[#333]">Choose the plan that's right for you</h1>
          
          <ul className="space-y-3 pt-2 text-[15px] md:text-lg">
            {[
              "Watch all you want. Ad-free.",
              "Recommendations just for you.",
              "Change or cancel your plan anytime."
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="h-6 w-6 shrink-0 text-[#E50914]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#333]">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Table Container */}
        <div className="mt-8 flex flex-col pb-8">
          
          {/* Table Header Row (Plan Squares) */}
          <div className="sticky top-0 z-10 grid grid-cols-5 items-end gap-2 bg-white pb-4 pt-4 md:gap-4">
            <div className="hidden sm:block" /> {/* Empty space for row labels */}
            
            {plans.map((plan, index) => {
              const isSelected = selectedPlan === index;
              return (
                <button
                  key={plan.name}
                  onClick={() => setSelectedPlan(index)}
                  className={`relative flex h-[75px] w-full cursor-pointer items-center justify-center rounded-[3px] p-2 text-center text-[13px] font-bold text-white transition-all duration-200 sm:h-[120px] sm:text-[17px] ${
                    isSelected 
                      ? "bg-[#E50914] shadow-[0_0_8px_rgba(229,9,20,0.4)]" 
                      : "bg-[#ef8e92] hover:bg-[#e50914]/80 opacity-95"
                  } ${index === 0 ? "col-span-2 sm:col-span-1" : "col-span-1"}`}
                >
                  <span>{plan.name}</span>
                  {/* Downward Caret Arrow for Selected Plan */}
                  {isSelected && (
                    <div className="absolute -bottom-[10px] left-1/2 h-0 w-0 -translate-x-1/2 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#E50914]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Table Body Rows */}
          <div className="flex flex-col border-b border-[#ccc]">
            
            {/* Price Row */}
            <div className="grid grid-cols-5 items-center gap-2 border-b border-[#ccc] py-4 md:gap-4 md:py-[18px]">
              <div className="hidden sm:block sm:col-span-1 text-[13px] md:text-[15px] font-medium text-[#333]">Monthly price</div>
              {plans.map((plan, index) => (
                <div key={`price-${index}`} className={`text-center font-bold text-[13px] sm:text-[15px] ${index === 0 ? "col-span-2 sm:col-span-1" : "col-span-1"} ${selectedPlan === index ? 'text-[#E50914]' : 'text-[#737373]'}`}>
                  <span className="sm:hidden text-[11px] block text-[#737373] font-normal mb-1">Monthly price</span>
                  {plan.price}
                </div>
              ))}
            </div>

            {/* Quality Row */}
            <div className="grid grid-cols-5 items-center gap-2 border-b border-[#ccc] py-4 md:gap-4 md:py-[18px]">
              <div className="hidden sm:block sm:col-span-1 text-[13px] md:text-[15px] font-medium text-[#333]">Video quality</div>
              {plans.map((plan, index) => (
                <div key={`quality-${index}`} className={`text-center font-bold text-[13px] sm:text-[15px] ${index === 0 ? "col-span-2 sm:col-span-1" : "col-span-1"} ${selectedPlan === index ? 'text-[#E50914]' : 'text-[#737373]'}`}>
                  <span className="sm:hidden text-[11px] block text-[#737373] font-normal mb-1">Video quality</span>
                  {plan.quality}
                </div>
              ))}
            </div>

            {/* Resolution Row */}
            <div className="grid grid-cols-5 items-center gap-2 border-b border-[#ccc] py-4 md:gap-4 md:py-[18px]">
              <div className="hidden sm:block sm:col-span-1 text-[13px] md:text-[15px] font-medium text-[#333]">Resolution</div>
              {plans.map((plan, index) => (
                <div key={`resolution-${index}`} className={`text-center font-bold text-[13px] sm:text-[15px] ${index === 0 ? "col-span-2 sm:col-span-1" : "col-span-1"} ${selectedPlan === index ? 'text-[#E50914]' : 'text-[#737373]'}`}>
                  <span className="sm:hidden text-[11px] block text-[#737373] font-normal mb-1">Resolution</span>
                  {plan.resolution}
                </div>
              ))}
            </div>

            {/* Devices Row */}
            <div className="grid grid-cols-5 items-start gap-2 py-4 md:gap-4 md:py-[18px]">
              <div className="hidden sm:block sm:col-span-1 text-[13px] md:text-[15px] font-medium text-[#333]">
                Devices you can use to watch
              </div>
              {plans.map((plan, index) => (
                <div key={`devices-${index}`} className={`flex flex-col items-center gap-3 sm:gap-4 ${index === 0 ? "col-span-2 sm:col-span-1" : "col-span-1"} ${selectedPlan === index ? 'text-[#E50914]' : 'text-[#737373]'}`}>
                  <span className="sm:hidden text-[11px] block text-[#737373] font-normal">Devices</span>
                  {plan.devices.map(device => (
                    <div key={device} className="flex flex-col items-center">
                      <DeviceIcon type={device} className="mb-1 h-5 w-5 sm:h-7 sm:w-7" />
                      <span className="text-[10px] font-bold md:text-[11px]">{device}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

          </div>

          {/* Fine Print Section */}
          <div className="mt-8 space-y-3 text-[13px] text-[#737373]">
            <p>
              HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our <Link href="#" className="text-[#0071eb] hover:underline">Terms of Use</Link> for more details.
            </p>
            <p>
              Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.
            </p>
          </div>

          {/* Next Button */}
          <div className="mt-10 flex justify-center">
            <Button 
              onClick={() => router.push("/signup/payment")}
              className="w-full max-w-[440px] rounded-[4px] py-[18px] text-[24px] font-normal tracking-wide"
              variant="primary"
            >
              Next
            </Button>
          </div>
          
        </div>
        
      </main>

      {/* 3. Dedicated Signup Footer */}
      <footer className="border-t border-[#e6e6e6] bg-[#f3f3f3] py-8 text-[#737373] w-full">
        <div className="w-full px-[4%]">
          <p className="mb-8 hover:underline cursor-pointer text-base">Questions? Call 000-800-040-1843</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 text-[13px]">
            <Link className="hover:underline" href="#">FAQ</Link>
            <Link className="hover:underline" href="#">Help Centre</Link>
            <Link className="hover:underline" href="#">Terms of Use</Link>
            <Link className="hover:underline" href="#">Privacy</Link>
            <Link className="hover:underline" href="#">Cookie Preferences</Link>
            <Link className="hover:underline" href="#">Corporate Information</Link>
          </div>
          <div className="relative mt-8 inline-block">
            <select className="appearance-none bg-transparent border border-[#737373] text-[#737373] py-3 pl-10 pr-10 rounded-[2px] text-[13px] outline-none focus:ring-2 focus:ring-black">
              <option>English</option>
              <option>Hindi</option>
            </select>
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
}