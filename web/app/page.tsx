import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import StatCard from "../components/StatCard";
import AnimatedSection from "../components/AnimatedSection";

const features = [
  {
    title: "Multi-role dashboards",
    description: "Run curated experiences for innovators, moderators, and enterprise buyers with tailored tooling.",
    icon: "🧭"
  },
  {
    title: "Supabase-powered data",
    description: "Secure Postgres-backed listings, storage, and analytics with Supabase service roles.",
    icon: "🛡️"
  },
  {
    title: "Instant payouts",
    description: "Wallet flows support Razorpay or Cashfree webhook integrations for escrow and payouts.",
    icon: "💳"
  }
];

const stats = [
  { label: "Listings", value: "1.2K", description: "Ideas curated and validated." },
  { label: "Buyers", value: "380+", description: "Investors and operators onboarded." },
  { label: "Revenue", value: "₹2.8Cr", description: "Ideas sold through the marketplace." }
];

export default function HomePage() {
  return (
    <div className="space-y-24 pb-20">
      <Hero />

      <AnimatedSection className="mx-auto w-full max-w-6xl px-6">
        <div id="marketplace" className="grid gap-8 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-6">
        <div id="workflow" className="glass rounded-[32px] p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">How IdeaMart works</p>
              <h2 className="mt-4 text-3xl font-semibold">Move from concept to transaction in days.</h2>
              <p className="mt-4 text-white/70">
                Moderated submissions, smart pricing, and escrowed payments ensure every idea is vetted, monetized, and
                protected. Build community trust while powering new ventures.
              </p>
            </div>
            <div className="space-y-4 text-sm text-white/70">
              {[
                "Creators submit detailed ideas and supporting assets.",
                "Moderators review, request clarifications, and approve listings.",
                "Buyers unlock full details, negotiate, and pay via escrow.",
                "Wallets settle payouts instantly with webhook automation."
              ].map((step, index) => (
                <div key={step} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white">
                    0{index + 1}
                  </span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-6">
        <div id="security" className="glass rounded-[32px] p-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Security & Compliance</p>
          <h2 className="mt-4 text-3xl font-semibold">JWT-protected APIs, role-based access, and audit-ready logs.</h2>
          <p className="mt-4 text-white/70">
            The backend includes Supabase service role access, structured request validation, and webhook verification
            stubs for regulated payment providers.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="glass rounded-full px-4 py-2 text-xs text-white/70">SOC-ready logging</span>
            <span className="glass rounded-full px-4 py-2 text-xs text-white/70">Granular roles</span>
            <span className="glass rounded-full px-4 py-2 text-xs text-white/70">Encrypted JWT sessions</span>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
