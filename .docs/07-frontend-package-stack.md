# TICMI Frontend Package Stack (Interactive + Complete)

Tanggal: 2026-05-18  
Status: Rekomendasi package untuk fase proposal dan build MVP

## 1) Core UI System

- `tailwindcss` (sudah ada)
- `shadcn/ui` (komponen solid, cepat, dan konsisten)
- `class-variance-authority`
- `clsx`
- `tailwind-merge`
- `lucide-react`

Tujuan:
- Mempercepat implementasi komponen production-ready
- Menjaga konsistensi visual antar halaman murid/guru

## 2) Motion & Interaction

- `motion` (framer-motion modern)
- `@formkit/auto-animate` (opsional untuk transisi list ringan)

Tujuan:
- Entrance animation, panel transitions, dan feedback state yang terasa hidup

## 3) Data Visualization (Dashboard)

Pilihan utama:
- `recharts`

Alternatif saat butuh visual lebih custom:
- `@visx/visx`

Tujuan:
- Grafik progress murid
- Heatmap gap konsep
- Ringkasan performa kelas

## 4) Form & Validation

- `react-hook-form`
- `zod`
- `@hookform/resolvers`

Tujuan:
- Login role-based
- Input diagnosis
- Form upload metadata konten

## 5) Supabase Client Layer

- `@supabase/supabase-js`
- `@supabase/ssr`

Tujuan:
- Auth role guru/murid
- Session handling di Next.js App Router

## 6) PWA & Device Capability

- `next-pwa` (opsional, jika butuh setup cepat service worker)
- gunakan Web Share API native browser untuk share snapshot
- gunakan `html2canvas` untuk capture kartu performa (opsional)

Tujuan:
- Installable app experience
- Fitur share performa yang mudah untuk demo

## 7) Package Install (Batch)

```bash
npm install class-variance-authority clsx tailwind-merge lucide-react motion recharts react-hook-form zod @hookform/resolvers @supabase/supabase-js @supabase/ssr
```

Opsional:

```bash
npm install @formkit/auto-animate html2canvas next-pwa
```

## 8) Urutan Adopsi yang Disarankan

1. `shadcn/ui` + utility package (`cva`, `clsx`, `tailwind-merge`, `lucide-react`)
2. `react-hook-form` + `zod` untuk form login/diagnosis
3. `recharts` untuk dashboard murid/guru
4. `motion` untuk polish interaksi
5. Supabase auth client
6. PWA hardening + share snapshot

