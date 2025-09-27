"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { isValidEmail } from "@/utils/isvalid";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    
    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Registration failed");
      router.push("/login");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B1020] via-[#1A1033] to-[#0B1020]">
      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 z-[5]">
        <span className="absolute left-[12%] top-[28%] h-1.5 w-1.5 rounded-full bg-white/50 blur-[1px] animate-[floatParticle_10s_ease-in-out_infinite,drift_22s_ease-in-out_infinite]" />
        <span className="absolute left-[22%] top-[68%] h-1 w-1 rounded-full bg-white/40 blur-[0.5px] animate-[floatParticle_12s_ease-in-out_infinite,drift_26s_ease-in-out_infinite]" />
        <span className="absolute left-[48%] top-[14%] h-1 w-1 rounded-full bg-cyan-200/50 blur-[1px] animate-[floatParticle_14s_ease-in-out_infinite,drift_20s_ease-in-out_infinite]" />
        <span className="absolute left-[72%] top-[40%] h-1.5 w-1.5 rounded-full bg-fuchsia-200/50 blur-[1px] animate-[floatParticle_16s_ease-in-out_infinite,drift_24s_ease-in-out_infinite]" />
        <span className="absolute left-[82%] top-[72%] h-1 w-1 rounded-full bg-indigo-200/50 blur-[0.5px] animate-[floatParticle_18s_ease-in-out_infinite,drift_28s_ease-in-out_infinite]" />
        <span className="absolute left-[36%] top-[82%] h-1 w-1 rounded-full bg-white/40 blur-[0.5px] animate-[floatParticle_20s_ease-in-out_infinite,drift_30s_ease-in-out_infinite]" />
      </div>

      {/* Aurora gradient layers */}
      <div className="pointer-events-none select-none absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "conic-gradient(from 180deg at 35% 15%, rgba(99,102,241,0.22), rgba(6,182,212,0.20), rgba(236,72,153,0.22), rgba(99,102,241,0.22))" }} />
        <div className="absolute -top-[38%] -left-[24%] h-[1000px] w-[1000px] rounded-full bg-gradient-to-br from-fuchsia-500/80 to-purple-700/80 blur-[120px] aurora-will-change animate-[aurora_28s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-36%] right-[-26%] h-[1100px] w-[1100px] rounded-full bg-gradient-to-br from-blue-400/80 to-cyan-500/80 blur-[130px] aurora-will-change animate-[aurora_32s_ease-in-out_infinite]" />
        <div className="absolute top-[32%] right-[8%] h-[640px] w-[640px] rounded-full bg-gradient-to-tr from-violet-500/65 to-indigo-600/65 blur-[115px] aurora-will-change animate-[aurora_36s_ease-in-out_infinite]" />
        <div className="absolute top-1/2 -left-24 h-[700px] w-[480px] -translate-y-1/2 rounded-full bg-gradient-to-b from-pink-500/65 to-fuchsia-600/55 blur-[125px] aurora-will-change animate-[aurora_40s_ease-in-out_infinite]" />
        <div className="absolute top-[8%] right-[24%] h-[360px] w-[360px] rounded-full bg-gradient-to-b from-fuchsia-400/55 to-pink-500/45 blur-[90px] aurora-will-change animate-[aurora_44s_ease-in-out_infinite]" />
        <div className="absolute left-1/2 top-1/2 z-[1] h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.28)_0%,rgba(99,102,241,0.16)_42%,rgba(0,0,0,0)_70%)] blur-[80px]" />
        <div className="absolute left-1/2 top-1/2 z-[2] h-[980px] w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.06)_18%,rgba(0,0,0,0)_45%)]" />
        <div className="absolute inset-0 z-[3] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0.20)_58%,rgba(0,0,0,0.50)_100%)]" />
        <div className="absolute inset-0 z-[4] opacity-[0.08] mix-blend-overlay bg-[url('/noise.png')]" />
      </div>

      <div className="relative z-10 w-full max-w-md rounded-2xl p-[1px] bg-gradient-to-b from-white/20 via-white/10 to-white/5">
        <div className="rounded-2xl bg-black/[0.05] backdrop-blur-md p-8 shadow-2xl ring-1 ring-white/[0.08]">
          <h1 className="text-3xl font-bold text-white text-center mb-6">Create account</h1>
          {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-zinc-200 mb-2">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg bg-white/[0.06] px-4 py-2 text-white placeholder:text-zinc-300/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-200 mb-2">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="minimum 6 characters"
                className="w-full rounded-lg bg-white/[0.06] px-4 py-2 text-white placeholder:text-zinc-300/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 transition-colors disabled:opacity-60"
            >
              {loading ? "Creating..." : "Create account"}
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-zinc-300/80">
            Already have an account? <a href="/login" className="font-medium text-indigo-300 hover:text-indigo-200">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
}