# TICMI Agent Init Context

Dokumen ini adalah konteks awal untuk Copilot/agent agar langsung memahami arah proyek TICMI.

## 1) Project Overview

- Nama: TICMI (Teach Me)
- Domain: Adaptive digital learning untuk Matematika SMA
- Tujuan inti: diagnosis miskonsepsi + remediasi Socratic berbasis prasyarat
- Mode saat ini: prototipe aktif (mock mode sudah jalan)

## 2) Locked Scope (v0.3)

Scope akademik dikunci sebagai berikut:

- Jenjang target: SMA
- Materi utama: Fase F (Kelas XI-XII)
- Materi prasyarat remediasi: Fase D (SMP Kelas VII-IX)

Topik Fase F prioritas:
- Fungsi Komposisi dan Invers
- Pemodelan Fungsi Kuadrat
- Operasi Matriks
- Model Pinjaman dan Anuitas

Topik prasyarat Fase D:
- Aritmatika Bilangan Bulat
- Aljabar dan Persamaan Linear Satu Variabel
- Eksponensial dan Bentuk Akar
- Koordinat Kartesius dan Gradien Garis

Referensi: `.docs/05-scope-v0.3-locked.md`

## 3) Current Tech Stack

- Frontend: Next.js (App Router), TypeScript, Tailwind
- Backend: FastAPI
- Agent orchestration: LangGraph
- LLM routing:
  - Default: `mock`
  - Target real model: OpenRouter (fallback NVIDIA opsional)
- Data target (bertahap): Supabase Auth + Postgres

Referensi:
- `.docs/01-stack-exploration.md`
- `.docs/02-system-architecture.md`

## 4) Product/UI Direction

- Mobile-first PWA, tetapi desktop harus tetap adaptif (bukan sekadar tampilan mobile yang diperbesar)
- Halaman showcase proposal sudah dibuat hardcoded untuk demonstrasi fitur
- Fokus UX: jelas, interaktif, siap screenshot mobile-view untuk proposal

Referensi:
- `.docs/06-ui-proposal-direction.md`
- `frontend/src/app/page.tsx`

## 5) MVP Features In Scope

- Landing page produk
- Login role: `guru` / `murid`
- Diagnostic flow murid
- Remediation chat Socratic
- Progress konsep murid
- Dashboard ringkas guru (gap konsep + rekomendasi intervensi)

Out of scope sementara:
- Upload RPP full pipeline (sementara placeholder boleh)
- Social feed/gamification lanjutan
- Fitur non-esensial yang mengganggu core loop

## 6) Local Run Workflow

Gunakan script root project:

- `dev-all.bat` -> jalankan backend + frontend (2 terminal otomatis)
- `dev-backend.bat` -> backend saja
- `dev-frontend.bat` -> frontend saja
- `fix-lock.bat` -> reset masalah Windows file lock frontend (`EPERM`/`EBUSY`) lalu restart frontend

Frontend: `http://localhost:3000`  
Backend: `http://localhost:8000`

Catatan file lock (Windows):
- Hindari menjalankan frontend dev lebih dari 1 proses.
- Jika build/dev gagal karena `.next` terkunci, jalankan `fix-lock.bat`.

## 7) Coding Guidelines for Agent

- Prioritaskan progress end-to-end dibanding eksplorasi berulang
- Jika fitur kompleks, buat hardcoded/prototype state dulu lalu iterasi
- Jangan memperlebar scope di luar dokumen locked scope tanpa persetujuan user
- Pertahankan konsistensi visual dan responsive behavior
- Untuk frontend, utamakan komponen reusable dan design tokens

## 8) Next Priorities

1. Rapikan auth role guru/murid (Supabase)
2. Implement dashboard data flow dari mock ke API nyata
3. Tambah chart/stats interaktif sesuai stack frontend yang direkomendasikan
4. Hardening PWA (installability, offline shell, retry behavior)

## 9) Turbo Directive (Wajib di Awal Sesi)

Gunakan arahan `//turbo` sebagai ritual awal sebelum implementasi.

Template instruksi:

```text
//turbo
Sebelum menulis kode:
1) Baca .agent/init.md
2) Baca .docs/05-scope-v0.3-locked.md dan .docs/06-ui-proposal-direction.md
3) Ringkas konteks proyek dalam 5 bullet
4) Tulis rencana eksekusi singkat (maks 5 langkah) yang tetap dalam scope v0.3
5) Baru lanjut implementasi
```

Aturan:
- Jangan mulai coding jika ringkasan konteks belum ditampilkan.
- Jika ada request di luar scope v0.3, tandai sebagai `out-of-scope` dan minta konfirmasi.
- Prioritaskan progres end-to-end yang bisa didemokan.
