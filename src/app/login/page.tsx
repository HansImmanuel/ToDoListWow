"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    router.push("/homepage"); 
  }; //ini ga ada auth hans, jadi lsg ke homepage walau input akun asal"an

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-950">
      <div className="w-full max-w-md rounded-2xl bg-white/[0.05] p-8 shadow-xl ring-1 ring-white/[0.1]">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Welcome To-Do(ers)!
        </h1>
        <p className="text-zinc-400 text-center mb-8">
          Let’s make things happen, sign in!
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-lg bg-white/[0.05] px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="isi lekku"
              className="w-full rounded-lg bg-white/[0.05] px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 transition-colors"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-400">
          Don’t have an account?{" "}
          <a
            href="/register" //path url sign up ny ke 404 hans
            className="font-medium text-indigo-400 hover:text-indigo-300"
          >
            Sign up 
          </a>
        </p>
      </div>
    </div>
  );
}
