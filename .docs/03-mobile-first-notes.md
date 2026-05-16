# TICMI Mobile-First Product Notes

Tanggal: 2026-05-16

## 1) UX Rules

- Mulai desain dari width 390px
- Navigasi bawah (3-4 tab max)
- Satu layar satu tujuan belajar
- Batasi teks panjang; gunakan progressive disclosure

## 2) Halaman Inti V1

- Login/Onboarding siswa
- Diagnostic quiz
- Remediation chat (mode teach-me)
- Progress map konsep
- Ringkasan performa guru (mobile-optimized)

## 3) Performance Budget (Mobile)

- Initial JS < 220KB gz
- LCP < 2.8s pada mid-tier Android
- TTI < 4.0s
- Gunakan dynamic import untuk komponen berat (mis. graph visual)

## 4) Accessibility Baseline

- Font minimal 16px body
- Kontras WCAG AA
- Tap target minimal 44x44
- Mendukung keyboard dan screen reader dasar

## 5) Progressive Web App

- Installable PWA
- Offline shell + cache halaman inti
- Retry queue untuk submit jawaban saat koneksi kembali

