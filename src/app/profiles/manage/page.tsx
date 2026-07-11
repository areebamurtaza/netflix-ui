import Link from "next/link";

export default function ManageProfilesPage() {
  return (
    <main className="min-h-screen bg-[#000000] px-4 py-16 text-white md:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-3xl flex-col items-center justify-center gap-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#DB202C]">Profiles</p>
        <h1 className="text-3xl font-black md:text-5xl">Manage Profiles</h1>
        <p className="max-w-xl text-sm text-zinc-400 md:text-base">This is a placeholder management screen for the requested profile dropdown flow.</p>
        <Link href="/profiles" className="rounded-md bg-[#DB202C] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#f3121c]">
          Back to Profiles
        </Link>
      </div>
    </main>
  );
}