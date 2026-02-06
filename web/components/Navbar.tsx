"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { label: "Marketplace", href: "#marketplace" },
  { label: "How it works", href: "#workflow" },
  { label: "Security", href: "#security" },
  { label: "Dashboards", href: "/dashboard" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-midnight/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          IdeaMart<span className="text-neon">.</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          {navItems.map((item) => (
            <motion.div key={item.href} whileHover={{ y: -2 }}>
              <Link href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/auth/login" className="text-sm text-white/70 transition hover:text-white">
            Sign in
          </Link>
          <Link
            href="/auth/register"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-midnight shadow-glow transition hover:-translate-y-0.5"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
