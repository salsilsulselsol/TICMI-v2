"use client";

import { useMemo, useState } from "react";

type Role = "murid" | "guru";
type Section = "landing" | "murid" | "guru" | "konten";

const mastery = [
  { topic: "Fungsi Komposisi/Invers", value: 72 },
  { topic: "Operasi Matriks", value: 64 },
  { topic: "Model Anuitas", value: 48 },
];

const prerequisiteTrace = [
  "Gap terdeteksi di aljabar PLSV",
  "Salah isolasi variabel saat invers",
  "Butuh penguatan gradien garis",
];

const classGaps = [
  { label: "Komposisi Fungsi", count: 21 },
  { label: "Matriks", count: 16 },
  { label: "Anuitas", count: 13 },
  { label: "Fungsi Kuadrat", count: 10 },
];

export default function Home() {
  const [role, setRole] = useState<Role>("murid");
  const [section, setSection] = useState<Section>("landing");
  const [topic] = useState("Fungsi Komposisi dan Invers");
  const [sampleMessage, setSampleMessage] = useState(
    "Bu, saya paham rumusnya, tapi bingung saat harus menentukan invers dari fungsi komposisi."
  );

  const roleLabel = useMemo(() => (role === "murid" ? "Mode Murid" : "Mode Guru"), [role]);

  return (
    <main className="grain min-h-screen pb-24 text-slate-100">
      <div className="mx-auto w-full max-w-6xl px-4 pb-8 pt-6 sm:px-6 lg:px-8">
        <header className="rise-in flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">TICMI PWA Showcase</p>
            <h1 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Adaptive Math Coach</h1>
          </div>
          <div className="rounded-full border border-cyan-200/30 bg-cyan-200/10 px-3 py-1 text-xs text-cyan-100">{roleLabel}</div>
        </header>

        <section className="rise-in mt-6 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-300/20 via-blue-300/15 to-emerald-300/20 p-5 shadow-2xl shadow-black/20">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-100/80">Mobile-first, desktop-adaptive</p>
            <h2 className="mt-2 max-w-lg text-2xl font-semibold text-white sm:text-4xl">
              Diagnosis pintar untuk Fase F, remediasi akurat ke prasyarat Fase D.
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-cyan-50/85">
              Halaman ini menampilkan semua fitur proposal dalam mode hardcoded agar siap dipresentasikan dan di-screenshot dari tampilan mobile.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <button
                onClick={() => setSection("murid")}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-100"
                type="button"
              >
                Lihat Alur Murid
              </button>
              <button
                onClick={() => setSection("guru")}
                className="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                type="button"
              >
                Lihat Dashboard Guru
              </button>
            </div>
          </article>

          <article className="rounded-3xl border border-indigo-200/20 bg-[#121a38]/80 p-5 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.18em] text-indigo-100/80">Role Login</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button
                onClick={() => setRole("murid")}
                className={`rounded-2xl px-3 py-3 text-sm font-semibold transition ${role === "murid" ? "bg-emerald-300 text-slate-900" : "bg-white/10 text-white hover:bg-white/20"}`}
                type="button"
              >
                Murid
              </button>
              <button
                onClick={() => setRole("guru")}
                className={`rounded-2xl px-3 py-3 text-sm font-semibold transition ${role === "guru" ? "bg-amber-300 text-slate-900" : "bg-white/10 text-white hover:bg-white/20"}`}
                type="button"
              >
                Guru
              </button>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-indigo-100/85">
              Flow auth final tetap Supabase Auth + RLS. Untuk proposal, role switch ini jadi representasi login guru/murid.
            </p>
          </article>
        </section>

        <section className="mt-6 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="soft-scroll max-h-[560px] overflow-y-auto rounded-3xl border border-white/10 bg-[#0f1530]/75 p-5">
            {section === "landing" && (
              <div className="rise-in space-y-4">
                <h3 className="text-xl font-semibold text-white">Fitur Utama yang Ditampilkan</h3>
                <ul className="space-y-2 text-sm text-indigo-100/90">
                  <li>Landing page produk untuk murid dan guru</li>
                  <li>Login role-based (`murid` / `guru`)</li>
                  <li>Remediasi chat Socratic untuk topik Fase F</li>
                  <li>Progress graph dan statistik belajar murid</li>
                  <li>Dashboard guru: gap konsep dan rekomendasi intervensi</li>
                  <li>Halaman upload RPP/knowledge (placeholder awal)</li>
                  <li>Snapshot performa untuk fitur share</li>
                </ul>
                <button
                  onClick={() => setSection(role === "murid" ? "murid" : "guru")}
                  className="rounded-full bg-emerald-300 px-4 py-2 text-sm font-semibold text-slate-900"
                  type="button"
                >
                  Buka Workspace Sesuai Role
                </button>
              </div>
            )}

            {section === "murid" && (
              <div className="rise-in space-y-5">
                <h3 className="text-xl font-semibold text-white">Workspace Murid</h3>
                <div className="rounded-2xl border border-emerald-200/30 bg-emerald-200/10 p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-emerald-100/80">Diagnosis Topic</p>
                  <p className="mt-2 text-base font-semibold text-white">{topic}</p>
                  <p className="mt-1 text-sm text-emerald-50/85">Sistem menilai jawaban lalu memetakan gap ke materi prasyarat fase D.</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-300">Remediation Chat (Hardcoded)</p>
                  <div className="mt-3 space-y-2">
                    <p className="rounded-xl bg-cyan-200/20 p-3 text-sm text-cyan-50">{sampleMessage}</p>
                    <p className="rounded-xl bg-white/10 p-3 text-sm text-slate-100">
                      Coba kita cek pelan-pelan. Jika f(x)=2x+3, bagaimana cara menuliskan x dalam bentuk f(x)?
                    </p>
                  </div>
                  <textarea
                    value={sampleMessage}
                    onChange={(e) => setSampleMessage(e.target.value)}
                    className="mt-3 min-h-[84px] w-full rounded-xl border border-white/20 bg-[#0d1330] px-3 py-2 text-sm text-white outline-none ring-cyan-200/0 transition focus:ring-2"
                  />
                </div>

                <div className="rounded-2xl border border-amber-200/30 bg-amber-200/10 p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-amber-50/90">Prerequisite Trace</p>
                  <ul className="mt-2 space-y-1 text-sm text-amber-50/90">
                    {prerequisiteTrace.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {section === "guru" && (
              <div className="rise-in space-y-5">
                <h3 className="text-xl font-semibold text-white">Dashboard Guru</h3>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-300">Top Concept Gaps - Kelas XI IPA 1</p>
                  <div className="mt-4 space-y-3">
                    {classGaps.map((item) => (
                      <div key={item.label}>
                        <div className="flex items-center justify-between text-sm">
                          <span>{item.label}</span>
                          <span className="text-slate-300">{item.count} siswa</span>
                        </div>
                        <div className="mt-1 h-2 rounded-full bg-white/10">
                          <div className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" style={{ width: `${Math.min(100, item.count * 3)}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-fuchsia-200/30 bg-fuchsia-200/10 p-4 text-sm text-fuchsia-50/95">
                  <p className="text-xs uppercase tracking-[0.14em]">Rekomendasi Intervensi</p>
                  <p className="mt-2">Prioritaskan remedial aljabar PLSV selama 2 sesi sebelum kembali ke fungsi invers untuk 21 siswa dengan gap tertinggi.</p>
                </div>
              </div>
            )}

            {section === "konten" && (
              <div className="rise-in space-y-4">
                <h3 className="text-xl font-semibold text-white">Konten Kurikulum</h3>
                <p className="text-sm text-indigo-100/85">Halaman upload RPP bisa dimulai sebagai placeholder untuk proposal. Implementasi parsing dan indexing dilakukan setelah MVP core stabil.</p>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-white">Upload RPP (draft)</p>
                  <div className="mt-3 rounded-xl border border-dashed border-white/30 p-6 text-center text-sm text-slate-300">
                    Drop file PDF/DOCX di sini (hardcoded preview)
                  </div>
                </div>
              </div>
            )}
          </article>

          <article className="space-y-5">
            <div className="rounded-3xl border border-white/10 bg-[#0f1530]/75 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-300">Graph & Stats</p>
              <h3 className="mt-2 text-lg font-semibold text-white">Progress Murid Mingguan</h3>
              <div className="mt-4 space-y-3">
                {mastery.map((item) => (
                  <div key={item.topic}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="max-w-[72%] text-slate-100">{item.topic}</span>
                      <span className="text-slate-300">{item.value}%</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-white/10">
                      <div className="h-2 rounded-full bg-gradient-to-r from-sky-300 via-cyan-300 to-emerald-300" style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0f1530]/75 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-300">Share Snapshot</p>
              <h3 className="mt-2 text-lg font-semibold text-white">Kartu Performa</h3>
              <div className="mt-3 rounded-2xl border border-cyan-200/20 bg-gradient-to-br from-cyan-300/20 to-blue-300/20 p-4">
                <p className="text-sm text-cyan-50">Streak Belajar: 6 hari</p>
                <p className="mt-1 text-2xl font-semibold text-white">Mastery +12%</p>
                <p className="mt-2 text-xs text-cyan-50/90">Siap di-capture untuk share ke sosial sebagai motivasi belajar.</p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0f1530]/75 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-300">Menu Proposal</p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <button onClick={() => setSection("landing")} className="rounded-xl bg-white/10 px-3 py-2 text-left transition hover:bg-white/20" type="button">Landing</button>
                <button onClick={() => setSection("murid")} className="rounded-xl bg-white/10 px-3 py-2 text-left transition hover:bg-white/20" type="button">Murid</button>
                <button onClick={() => setSection("guru")} className="rounded-xl bg-white/10 px-3 py-2 text-left transition hover:bg-white/20" type="button">Guru</button>
                <button onClick={() => setSection("konten")} className="rounded-xl bg-white/10 px-3 py-2 text-left transition hover:bg-white/20" type="button">Upload RPP</button>
              </div>
            </div>
          </article>
        </section>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 border-t border-white/15 bg-[#0b1022]/90 px-4 py-3 backdrop-blur lg:hidden">
        <div className="mx-auto flex w-full max-w-md items-center justify-between text-xs text-slate-200">
          <button onClick={() => setSection("landing")} type="button">Landing</button>
          <button onClick={() => setSection("murid")} type="button">Murid</button>
          <button onClick={() => setSection("guru")} type="button">Guru</button>
          <button onClick={() => setSection("konten")} type="button">RPP</button>
        </div>
      </nav>
    </main>
  );
}
