"use client";

import Link from "next/link";
import { profiles } from "@/data/profiles";
import ProfileAvatar from "@/components/ProfileAvatar";

export default function ProfilesPage() {
  return (
    <main className="min-h-screen bg-[#000000] px-4 py-16 text-white md:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl flex-col items-center justify-center gap-10 text-center">
        <div className="space-y-3">
          <h1 className="text-3xl font-black md:text-5xl">Who&apos;s watching?</h1>
          <p className="text-sm text-zinc-400">Choose a profile to continue into Home.</p>
        </div>

        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
          {profiles.map((profile) => (
            <ProfileAvatar key={profile.id} name={profile.name} avatarPath={profile.avatarPath} href={`/browse?profileId=${profile.id}`} />
          ))}
          <Link href="/profiles/manage" className="group flex min-w-0 flex-col items-center gap-3">
            <span className="flex h-20 w-20 items-center justify-center rounded-[1.25rem] border-2 border-dashed border-white/30 text-3xl text-zinc-400 transition duration-200 group-hover:border-white group-hover:text-white sm:h-24 sm:w-24 md:h-28 md:w-28 md:text-4xl">
              +
            </span>
            <span className="max-w-[6rem] truncate text-sm font-medium text-zinc-300 transition duration-200 group-hover:text-white sm:max-w-none">Add Profile</span>
          </Link>
        </div>

        <Link href="/profiles/manage" className="text-sm font-semibold text-zinc-300 underline decoration-[#DB202C] decoration-2 underline-offset-4 transition duration-200 hover:text-white">
          Manage Profiles
        </Link>
      </div>
    </main>
  );
}