import { requireUser } from "@/lib/session";
import SignOutButton from "@/components/SignOutButton";

export default async function DashboardPage() {
  const user = await requireUser();

  return (
    <main className="mx-auto max-w-4xl p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your applications</h1>
        <SignOutButton />
      </div>
      <p className="mt-4 text-neutral-400">
        Signed in as {user.email}.
      </p>
    </main>
  );
}