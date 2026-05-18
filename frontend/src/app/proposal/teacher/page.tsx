import ProposalShell from "@/components/proposal/ProposalShell";

const gaps = [
  { topic: "Komposisi Fungsi", students: 21 },
  { topic: "Operasi Matriks", students: 16 },
  { topic: "Model Anuitas", students: 13 },
  { topic: "Fungsi Kuadrat", students: 10 },
];

export default function ProposalTeacherPage() {
  return (
    <ProposalShell title="Guru Dashboard" subtitle="Ringkasan gap konsep dan rekomendasi intervensi">
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-3xl border border-white/10 bg-[#0f1530]/75 p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-300">Kelas XI IPA 1</p>
          <h2 className="mt-2 text-xl font-semibold text-white">Heatmap Topik Lemah</h2>
          <div className="mt-4 space-y-3">
            {gaps.map((item) => (
              <div key={item.topic}>
                <div className="flex justify-between text-sm text-slate-100">
                  <span>{item.topic}</span>
                  <span>{item.students} siswa</span>
                </div>
                <div className="mt-1 h-2 rounded-full bg-white/10">
                  <div className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" style={{ width: `${Math.min(100, item.students * 3)}%` }} />
                </div>
              </div>
            ))}
          </div>
        </article>
        <article className="space-y-4">
          <div className="rounded-3xl border border-fuchsia-200/30 bg-fuchsia-200/10 p-5 text-sm text-fuchsia-50/95">
            <p className="text-xs uppercase tracking-[0.16em]">Rekomendasi AI</p>
            Prioritaskan 2 sesi remedial aljabar PLSV untuk 21 siswa sebelum materi invers lanjutan.
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#0f1530]/75 p-5 text-sm">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-300">Aksi Cepat</p>
            <div className="mt-3 grid gap-2">
              <button className="rounded-xl bg-white/10 px-3 py-2 text-left hover:bg-white/20">Buat kelompok remedial otomatis</button>
              <button className="rounded-xl bg-white/10 px-3 py-2 text-left hover:bg-white/20">Ekspor ringkasan progress kelas</button>
              <button className="rounded-xl bg-white/10 px-3 py-2 text-left hover:bg-white/20">Kirim tugas penguatan prasyarat</button>
            </div>
          </div>
        </article>
      </div>
    </ProposalShell>
  );
}
