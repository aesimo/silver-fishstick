import AnimatedSection from "../../components/AnimatedSection";
import DashboardPanel from "../../components/DashboardPanel";

export default function ModeratorPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-6 py-16">
      <AnimatedSection>
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Moderator desk</p>
          <h1 className="text-3xl font-semibold">Review and curate listings</h1>
          <p className="text-white/60">Manage approvals, compliance checks, and creator feedback loops.</p>
        </div>
      </AnimatedSection>

      <div className="grid gap-6 lg:grid-cols-2">
        <DashboardPanel title="Pending reviews" description="Ideas requiring validation">
          <p>Healthcare diagnostics for rural clinics</p>
          <p>AI-augmented enterprise onboarding</p>
          <p>Carbon capture marketplaces</p>
        </DashboardPanel>
        <DashboardPanel title="Compliance signals" description="Risk flags and escalations">
          <p>2 listings flagged for IP review</p>
          <p>1 payout on hold for verification</p>
          <p>Checklist updates due today</p>
        </DashboardPanel>
      </div>

      <AnimatedSection>
        <div className="glass rounded-[32px] p-8">
          <h2 className="text-xl font-semibold">Review queue</h2>
          <p className="mt-2 text-white/60">Approve, request changes, or schedule a live review with creators.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Edge compute retail analytics",
              "Micro-mobility insurance bundles",
              "Telemedicine SaaS for campuses"
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
                <p className="font-semibold text-white">{item}</p>
                <p className="text-white/60">Awaiting final validation</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
