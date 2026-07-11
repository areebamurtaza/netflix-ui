import SignupStep3Form from "@/components/signup/SignupStep3Form";

type SignupPageProps = {
  searchParams?: {
    email?: string;
  };
};

export default function SignupStep3Page({ searchParams }: SignupPageProps) {
  const email = searchParams?.email ?? "you@example.com";

  return (
    <main className="min-h-screen bg-white px-4 py-12 text-zinc-900">
      <div className="mx-auto max-w-6xl">
        <SignupStep3Form email={email} />
      </div>
    </main>
  );
}