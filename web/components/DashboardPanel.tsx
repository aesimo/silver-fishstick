import { ReactNode } from "react";

interface DashboardPanelProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export default function DashboardPanel({ title, description, children }: DashboardPanelProps) {
  return (
    <div className="glass rounded-3xl p-6 shadow-card">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/60">{description}</p>
      </div>
      <div className="space-y-3 text-sm text-white/70">{children}</div>
    </div>
  );
}
