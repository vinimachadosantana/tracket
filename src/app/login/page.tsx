import SignInButtons from "@/components/SignInButtons";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Sign in to TrackET</h1>
        <p className="mt-2 text-neutral-400">Track every job application in one place.</p>
      </div>
      <div className="w-full max-w-xs">
        <SignInButtons />
      </div>
    </main>
  );
}