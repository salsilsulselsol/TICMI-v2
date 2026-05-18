import ProposalShell from "@/components/proposal/ProposalShell";

const bars = [
  { label: "Komposisi/Invers", value: 72 },
  { label: "Matriks", value: 64 },
  { label: "Anuitas", value: 48 },
];

export default function ProposalStudentPage() {
  return (
    <ProposalShell title="Murid Workspace" subtitle="Diagnosis, chat remediasi, dan progress konsep">
      <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-3xl border border-white/10 bg-[#0f1530]/75 p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-300">Diagnostic + Remediation</p>
          <div className="mt-3 rounded-2xl border border-emerald-200/30 bg-emerald-200/10 p-4 text-sm">
            Topik aktif: Fungsi Komposisi dan Invers
          </div>
          <div className="mt-3 space-y-2 text-sm">
            <p className="rounded-xl bg-cyan-200/20 p-3">Saya masih bingung kenapa langkah inversnya harus isolasi x dulu.</p>
            <p className="rounded-xl bg-white/10 p-3">Bagus. Sekarang coba ubah `y = 2x + 3` jadi bentuk `x = ...` dulu.</p>
          </div>
          <textarea
            defaultValue="Kalau saya pindah 3 ke kiri dulu, jadi y-3 = 2x..."
            className="mt-3 min-h-[100px] w-full rounded-xl border border-white/20 bg-[#0d1330] px-3 py-2 text-sm text-white"
          />
        </article>

        <article className="space-y-4">
          <div className="rounded-3xl border border-white/10 bg-[#0f1530]/75 p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-300">Prerequisite Trace</p>
            <ul className="mt-2 space-y-2 text-sm text-slate-100">
              <li>- Gap pada aljabar PLSV</li>
              <li>- Salah isolasi variabel pada invers</li>
              <li>- Perlu penguatan gradien garis</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#0f1530]/75 p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-300">Progress Graph</p>
            <div className="mt-3 space-y-3">
              {bars.map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between text-sm">
                    <span>{bar.label}</span>
                    <span>{bar.value}%</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-gradient-to-r from-sky-300 to-emerald-300" style={{ width: `${bar.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </ProposalShell>
  );
}
