# TICMI UI Direction (Proposal)

Tanggal: 2026-05-18  
Status: Baseline desain untuk proposal dan implementasi awal

## 1) Prinsip Utama

- Mobile-first, bukan mobile-only.
- Layout dimulai dari layar kecil, lalu di-enhance untuk tablet/desktop.
- Tujuan belajar harus tetap jelas, ringkas, dan fokus di semua ukuran layar.

## 2) Aturan Responsive yang Disepakati

- Mobile (360-430px): prioritas satu kolom, CTA utama di area bawah yang mudah dijangkau.
- Tablet (768-1024px): dua panel ringan jika dibutuhkan (konten + progress).
- Desktop (>= 1280px): gunakan ruang lebih lega untuk context panel, analytics, dan navigasi sekunder.

Yang dihindari:
- Menampilkan kanvas mobile kecil di tengah layar desktop.
- Sekadar memperbesar elemen mobile tanpa perubahan struktur informasi.

## 3) Arah Visual

- Warna: gunakan palet yang tegas dan edukatif, bukan default ungu-putih generik.
- Tipografi: pilih kombinasi font yang modern dan mudah baca untuk materi matematika.
- Komponen: konsisten, kontras jelas, dan state (normal/hover/disabled/error) lengkap.
- Motion: transisi halus pada progress, feedback jawaban, dan perpindahan step.

## 4) Struktur Halaman MVP

1. Landing Page
- Menjelaskan nilai utama TICMI untuk murid dan guru.
- CTA jelas ke login/try demo.

2. Login Role
- Pilihan role `murid` atau `guru` dari awal.
- Alur login sederhana tanpa friksi.

3. Murid
- Diagnostic flow
- Remediation chat
- Progress concept map ringkas

4. Guru
- Ringkasan kelas
- Daftar murid dan topik lemah
- Rekomendasi intervensi sederhana

## 5) Komponen Proposal yang Wajib Ditunjukkan

- Kartu progress konsep
- Grafik perkembangan per topik
- Timeline sesi remediasi
- Panel rekomendasi guru

## 6) Catatan Implementasi Frontend

- Gunakan design tokens (`--color-*`, `--radius-*`, `--space-*`) sejak awal.
- Gunakan komponen reusable agar tampilan konsisten lintas halaman.
- Pastikan aksesibilitas dasar: ukuran font, kontras, dan tap target.

## 7) Fitur Visual Eksperimental (Setelah MVP)

- Visual "Strava-like" untuk streak/progress belajar.
- Snapshot performa yang bisa di-share (foto/screenshot card).
- Creative coding sebagai aksen di landing/progress, bukan di semua layar.

