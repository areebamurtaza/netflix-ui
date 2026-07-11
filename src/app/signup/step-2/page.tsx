import SignupStep2Form from "@/components/signup/SignupStep2Form";

type SignupPageProps = {
  searchParams?: {
    email?: string;
  };
};

export default function SignupStep2Page({ searchParams }: SignupPageProps) {
  const email = searchParams?.email ?? "you@example.com";
  return (
    <main className="min-h-screen bg-white px-4 py-16 text-zinc-900">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-md items-center">
        <SignupStep2Form email={email} />
      </div>
    </main>
  );
}