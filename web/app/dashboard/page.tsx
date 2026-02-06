import AnimatedSection from "../../components/AnimatedSection";
import DashboardPanel from "../../components/DashboardPanel";

export default function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-6 py-16">
      <AnimatedSection>
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Creator dashboard</p>
          <h1 className="text-3xl font-semibold">Your idea portfolio</h1>
          <p className="text-white/60">Track submissions, collaboration requests, and wallet earnings.</p>
        </div>
      </AnimatedSection>

      <div className="grid gap-6 lg:grid-cols-3">
        <DashboardPanel title="Active submissions" description="Ideas awaiting moderation">
          <p>AI-led supply chain audit platform</p>
          <p>Consumer fintech for Gen Z rewards</p>
          <p>Creator economy tax automation</p>
        </DashboardPanel>
        <DashboardPanel title="Earnings" description="Payouts ready to withdraw">
          <p className="text-2xl font-semibold text-white">₹4,80,000</p>
          <p>Next payout scheduled in 2 days.</p>
        </DashboardPanel>
        <DashboardPanel title="Messages" description="Inbox from buyers and moderators">
          <p>3 new investor requests</p>
          <p>1 clarification needed</p>
          <p>Moderator approval pending</p>
        </DashboardPanel>
      </div>

      <AnimatedSection>
        <div className="glass rounded-[32px] p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Submit a new idea</h2>
              <p className="text-white/60">Upload decks, validate market fit, and set your pricing tiers.</p>
            </div>
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-midnight transition hover:-translate-y-0.5">
              Start submission
            </button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
