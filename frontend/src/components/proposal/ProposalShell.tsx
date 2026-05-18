import Link from "next/link";
import { ReactNode } from "react";

const links = [
  { href: "/proposal", label: "Landing" },
  { href: "/proposal/login", label: "Login" },
  { href: "/proposal/student", label: "Murid" },
  { href: "/proposal/teacher", label: "Guru" },
  { href: "/proposal/content", label: "Konten" },
  { href: "/proposal/share", label: "Share" },
];

export default function ProposalShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen pb-24 text-slate-100">
      <div className="mx-auto w-full max-w-6xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/80">TICMI Proposal UI</p>
            <h1 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">{title}</h1>
            <p className="mt-1 text-sm text-slate-300">{subtitle}</p>
          </div>
          <Link href="/" className="rounded-full border border-white/20 px-3 py-1 text-xs hover:bg-white/10">
            Back
          </Link>
        </header>

        <nav className="mt-5 grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-[#0f1530]/70 p-2 sm:grid-cols-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl bg-white/5 px-3 py-2 text-center text-xs text-slate-200 hover:bg-white/15"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <section className="mt-5">{children}</section>
      </div>
    </main>
  );
}
