"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { profiles } from "@/data/profiles";

export default function ProfilesPage() {
  const router = useRouter();
  const handleProfileClick = (profileId: number) => {
    // Navigate to the browse page for the selected profile
    router.push(`/browse?profileId=${profileId}`);
  }
  const handleAddProfileClick = () => {
    // Navigate to the add profile page
    router.push("/browse");
  }
  return (
    <main className="min-h-screen bg-[#141414] px-4 py-16 text-white md:px-8">
      <div className="mx-auto max-w-5xl space-y-10 text-center">
        <h1 className="text-3xl font-bold md:text-5xl">Who&apos;s watching?</h1>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {profiles.map((profile) => (
            <Link
              key={profile.id}
              href={`/browse?profileId=${profile.id}`}
              onClick={() => handleProfileClick(profile.id)}
              className="group flex flex-col items-center gap-3"
            >
              <span className="relative h-24 w-24 overflow-hidden rounded-xl border-2 border-transparent transition duration-200 group-hover:border-white sm:h-28 sm:w-28">
                <Image src={profile.avatarPath} alt={profile.name} fill className="object-cover" />
              </span>
              <span className="text-sm font-medium text-zinc-300 transition duration-200 group-hover:text-white">{profile.name}</span>
            </Link>
          ))}
          <Link href="/browse" onClick={handleAddProfileClick} className="group flex flex-col items-center gap-3">
            <span className="flex h-24 w-24 items-center justify-center rounded-xl border-2 border-dashed border-white/30 text-4xl text-zinc-400 transition duration-200 group-hover:border-white group-hover:text-white sm:h-28 sm:w-28">
              +
            </span>
            <span className="text-sm font-medium text-zinc-300 transition duration-200 group-hover:text-white">Add Profile</span>
          </Link>
        </div>
      </div>
    </main>
  );
}