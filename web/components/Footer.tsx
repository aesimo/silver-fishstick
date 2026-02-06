import Link from "next/link";

const links = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Support", href: "#" }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 md:flex-row md:items-center">
        <div>
          <p className="text-lg font-semibold text-white">IdeaMart</p>
          <p className="text-sm text-white/60">An idea marketplace built for the next generation of founders.</p>
        </div>
        <div className="flex items-center gap-6 text-sm text-white/60">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
