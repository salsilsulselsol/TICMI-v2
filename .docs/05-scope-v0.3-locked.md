# TICMI Scope Lock v0.3 (Proposal Baseline)

Tanggal: 2026-05-18  
Status: Locked untuk proposal + implementasi MVP berikutnya

## 1) Scope Akademik yang Dikunci

- Jenjang target: SMA
- Fokus materi utama: Fase F (Kelas XI-XII)
- Fokus remediasi prasyarat: Fase D (SMP Kelas VII-IX)

Tujuan inti TICMI:
- Mendeteksi kesalahan konsep pada topik Fase F
- Melacak akar masalah ke prasyarat Fase D
- Memberikan remediasi Socratic bertahap sampai konsep prasyarat dan topik utama membaik

## 2) Topik Prioritas MVP

Topik Fase F (materi utama):
- Fungsi Komposisi dan Fungsi Invers
- Pemodelan Fungsi Kuadrat
- Operasi Matriks
- Model Pinjaman dan Anuitas

Topik Fase D (prasyarat remediasi):
- Aritmatika Bilangan Bulat
- Aljabar dan Persamaan Linear Satu Variabel
- Eksponensial dan Bentuk Akar
- Koordinat Kartesius dan Gradien Garis

## 3) Mapping Awal Fase F ke Prasyarat Fase D

1. Fungsi Komposisi/Invers
- Prasyarat utama: Aljabar PLSV, Koordinat/Gradien
- Indikator gap: salah substitusi variabel, gagal isolasi variabel, bingung domain/range

2. Pemodelan Fungsi Kuadrat
- Prasyarat utama: Aljabar PLSV, Aritmatika Bilangan Bulat
- Indikator gap: salah ekspansi/faktorisasi, salah operasi tanda, gagal interpretasi koefisien

3. Operasi Matriks
- Prasyarat utama: Aritmatika Bilangan Bulat, Aljabar PLSV
- Indikator gap: salah aturan dimensi, salah operasi elemen, salah eliminasi sederhana

4. Model Pinjaman/Anuitas
- Prasyarat utama: Eksponensial/Bentuk Akar, Aritmatika Bilangan Bulat
- Indikator gap: salah pangkat/rasio, salah urutan operasi, gagal membaca parameter model

## 4) Fitur Dalam Scope MVP

- Landing page sederhana (produk + value proposition)
- Login role `guru` dan `murid`
- Sesi diagnosis murid
- Remediasi chat Socratic
- Progress konsep dasar per murid
- Dashboard ringkas guru (topik lemah + rekomendasi remedial)

## 5) Fitur Di Luar Scope MVP (Ditunda)

- Upload RPP dan knowledge customization penuh
- Social sharing lanjutan (feed, social graph, gamification luas)
- Visualisasi kompleks non-esensial di semua halaman
- Integrasi app store native

Catatan:
- Fitur foto/share hasil belajar boleh diuji sebagai eksperimen terbatas setelah core learning loop stabil.

## 6) Definisi Selesai MVP (Proposal Demo)

- Satu murid dapat menyelesaikan alur diagnosis -> remediasi -> update progres
- Sistem menampilkan minimal 1 rute prasyarat Fase D yang terdeteksi
- Guru dapat melihat ringkasan gap konsep murid di dashboard
- Aplikasi berjalan di mobile web dengan tampilan desktop yang adaptif

