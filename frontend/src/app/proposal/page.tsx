import Link from "next/link";
import ProposalShell from "@/components/proposal/ProposalShell";

export default function ProposalLandingPage() {
  return (
    <ProposalShell
      title="Landing Showcase"
      subtitle="Mobile-first PWA dengan adaptasi desktop untuk proposal"
    >
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-300/25 to-emerald-300/20 p-6">
          <h2 className="max-w-xl text-3xl font-semibold text-white">Tutor matematika adaptif untuk Fase F dengan remediasi prasyarat Fase D.</h2>
          <p className="mt-3 max-w-lg text-sm text-cyan-50/90">
            TICMI membantu murid memahami akar kesalahan konsep, bukan hanya memberi jawaban akhir.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link href="/proposal/login" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">
              Coba Login Role
            </Link>
            <Link href="/proposal/student" className="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white">
              Lihat Alur Murid
            </Link>
          </div>
        </article>

        <article className="rounded-3xl border border-white/10 bg-[#0f1530]/75 p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-300">Highlight Fitur</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-100">
            <li>Diagnosis topik Fase F</li>
            <li>Chat remediasi Socratic</li>
            <li>Progress graph murid</li>
            <li>Dashboard gap konsep guru</li>
            <li>Upload konten (placeholder RPP)</li>
            <li>Kartu snapshot performa</li>
          </ul>
        </article>
      </div>
    </ProposalShell>
  );
}
