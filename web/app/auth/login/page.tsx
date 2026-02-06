"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 py-16">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">Welcome back</p>
        <h1 className="text-3xl font-semibold">Sign in to your IdeaMart workspace.</h1>
        <p className="text-white/60">Access your submissions, wallet, and collaboration room.</p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass grid gap-6 rounded-3xl p-8"
      >
        <div className="grid gap-2">
          <label className="text-sm text-white/70">Email address</label>
          <input
            type="email"
            placeholder="you@ideamart.ai"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-neon"
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-white/70">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-neon"
          />
        </div>
        <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-midnight transition hover:-translate-y-0.5">
          Sign in
        </button>
        <p className="text-sm text-white/60">
          New to IdeaMart?{" "}
          <Link href="/auth/register" className="text-white underline">
            Create an account
          </Link>
        </p>
      </motion.form>
    </div>
  );
}
