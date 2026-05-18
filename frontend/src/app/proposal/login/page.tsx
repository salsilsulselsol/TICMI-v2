import ProposalShell from "@/components/proposal/ProposalShell";

export default function ProposalLoginPage() {
  return (
    <ProposalShell title="Login Role" subtitle="Akses terpisah untuk guru dan murid">
      <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-[#0f1530]/75 p-6">
        <p className="text-xs uppercase tracking-[0.16em] text-slate-300">Masuk ke TICMI</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">Pilih peran pengguna</h2>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <button className="rounded-2xl bg-emerald-300 px-4 py-4 text-sm font-semibold text-slate-900">Masuk sebagai Murid</button>
          <button className="rounded-2xl bg-amber-300 px-4 py-4 text-sm font-semibold text-slate-900">Masuk sebagai Guru</button>
        </div>
        <div className="mt-4 rounded-2xl border border-white/15 bg-white/5 p-4 text-sm text-slate-200">
          Demo mode: autentikasi hardcoded untuk screenshot proposal.
        </div>
      </div>
    </ProposalShell>
  );
}
