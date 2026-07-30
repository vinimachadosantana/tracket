import { signIn } from "@/lib/auth";

export default function SignInButtons() {
  return (
    <div className="flex flex-col gap-3">
      <form
        action={async () => {
          "use server";
          await signIn("github", { redirectTo: "/dashboard" });
        }}
      >
        <button type="submit" className="w-full rounded-lg border border-neutral-700 px-4 py-2.5 hover:bg-neutral-800">
          Continue with GitHub
        </button>
      </form>

      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/dashboard" });
        }}
      >
        <button type="submit" className="w-full rounded-lg border border-neutral-700 px-4 py-2.5 hover:bg-neutral-800">
          Continue with Google
        </button>
      </form>
    </div>
  );
}
