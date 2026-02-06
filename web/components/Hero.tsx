"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
            Powered by Supabase + JWT
          </span>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            Build, validate, and monetize <span className="text-gradient">breakthrough ideas</span>.
          </h1>
          <p className="text-base text-white/70 md:text-lg">
            IdeaMart is a premium marketplace where innovators, operators, and investors collaborate. Launch faster with
            curated discovery, escrowed payments, and multi-role dashboards.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/auth/register"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-midnight shadow-glow transition hover:-translate-y-0.5"
            >
              Start your marketplace
            </Link>
            <Link
              href="/dashboard"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50"
            >
              Explore dashboards
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass relative rounded-3xl p-8 shadow-card"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/60">Idea Intelligence</span>
              <span className="rounded-full bg-aurora/20 px-3 py-1 text-xs text-aurora">Live feed</span>
            </div>
            <div className="space-y-4">
              {[
                "AI-driven healthcare onboarding",
                "Climate fintech with embedded insurance",
                "Creator commerce logistics network"
              ].map((idea) => (
                <motion.div
                  key={idea}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-sm font-medium text-white">{idea}</p>
                  <p className="text-xs text-white/60">Premium listing · 8 investors following</p>
                </motion.div>
              ))}
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/70">
              <div>
                <p className="text-sm font-semibold text-white">$24.8K</p>
                <p>Marketplace revenue</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">92%</p>
                <p>Approval success</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">18h</p>
                <p>Avg. review time</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
