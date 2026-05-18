import ProposalShell from "@/components/proposal/ProposalShell";

export default function ProposalContentPage() {
  return (
    <ProposalShell title="Knowledge Content" subtitle="Placeholder upload RPP dan sinkronisasi materi">
      <div className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-[#0f1530]/75 p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-300">Upload RPP</p>
          <div className="mt-3 rounded-2xl border border-dashed border-white/30 p-8 text-center text-sm text-slate-200">
            Drop file PDF/DOCX di sini
          </div>
          <p className="mt-3 text-xs text-slate-400">Mode proposal: belum memproses parsing dokumen.</p>
        </article>
        <article className="rounded-3xl border border-white/10 bg-[#0f1530]/75 p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-300">Materi Tersedia</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-100">
            <li>- Fase F: Fungsi Komposisi dan Invers</li>
            <li>- Fase F: Operasi Matriks</li>
            <li>- Fase D: Aljabar PLSV</li>
            <li>- Fase D: Koordinat dan Gradien</li>
          </ul>
        </article>
      </div>
    </ProposalShell>
  );
}
