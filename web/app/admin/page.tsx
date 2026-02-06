import AnimatedSection from "../../components/AnimatedSection";
import DashboardPanel from "../../components/DashboardPanel";

export default function AdminPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-6 py-16">
      <AnimatedSection>
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Admin HQ</p>
          <h1 className="text-3xl font-semibold">Marketplace operations</h1>
          <p className="text-white/60">Monitor growth, revenue, and compliance from one control center.</p>
        </div>
      </AnimatedSection>

      <div className="grid gap-6 lg:grid-cols-3">
        <DashboardPanel title="Revenue" description="Escrowed sales this month">
          <p className="text-2xl font-semibold text-white">₹1.9Cr</p>
          <p>+18% month-over-month</p>
        </DashboardPanel>
        <DashboardPanel title="Active buyers" description="Investors engaged today">
          <p className="text-2xl font-semibold text-white">146</p>
          <p>34 new conversations opened</p>
        </DashboardPanel>
        <DashboardPanel title="Risk checks" description="Compliance and security">
          <p>2 escalations in progress</p>
          <p>All payment webhooks healthy</p>
        </DashboardPanel>
      </div>

      <AnimatedSection>
        <div className="glass rounded-[32px] p-8">
          <h2 className="text-xl font-semibold">Ops checklist</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Run weekly payout reconciliation",
              "Review moderator backlog",
              "Update featured idea collections",
              "Audit JWT and webhook secrets"
            ].map((task) => (
              <div key={task} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
                <p className="font-semibold text-white">{task}</p>
                <p className="text-white/60">Owner: Ops team</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
