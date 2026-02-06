interface StatCardProps {
  label: string;
  value: string;
  description: string;
}

export default function StatCard({ label, value, description }: StatCardProps) {
  return (
    <div className="glass rounded-3xl p-6">
      <p className="text-xs uppercase tracking-[0.2em] text-white/50">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-white/60">{description}</p>
    </div>
  );
}
