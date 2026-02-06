import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="glass group rounded-3xl p-6 transition hover:-translate-y-1 hover:border-white/30">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl text-neon">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white group-hover:text-neon">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{description}</p>
    </div>
  );
}
