import ProposalShell from "@/components/proposal/ProposalShell";

export default function ProposalSharePage() {
  return (
    <ProposalShell title="Share Snapshot" subtitle="Kartu performa siap capture untuk kebutuhan proposal">
      <div className="mx-auto max-w-2xl">
        <article className="rounded-3xl border border-cyan-200/25 bg-gradient-to-br from-cyan-300/20 via-blue-300/20 to-emerald-300/20 p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-50/90">Murid: Aulia Kelas XI</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Mastery +12% Minggu Ini</h2>
          <p className="mt-2 text-sm text-cyan-50/90">Streak belajar 6 hari, gap terbesar berhasil diturunkan di topik Komposisi/Invers.</p>
          <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
            <div className="rounded-xl bg-white/10 p-3">
              <p className="text-slate-200">Sesi</p>
              <p className="mt-1 text-lg font-semibold text-white">9</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3">
              <p className="text-slate-200">Akurasi</p>
              <p className="mt-1 text-lg font-semibold text-white">78%</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3">
              <p className="text-slate-200">Streak</p>
              <p className="mt-1 text-lg font-semibold text-white">6 hari</p>
            </div>
          </div>
          <button className="mt-5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">Share Result</button>
        </article>
      </div>
    </ProposalShell>
  );
}
