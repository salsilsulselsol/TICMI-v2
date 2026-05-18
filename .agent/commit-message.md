# Prompt Generator Commit Message (Reusable)

Gunakan prompt ini untuk menghasilkan commit message yang konsisten untuk tim.

## Prompt

Buatkan commit message Git berdasarkan perubahan di working tree saya.

Aturan wajib:
1. Satu baris title dengan format Conventional Commits:
type(scope): short summary
2. Lanjut bullet point perubahan utama (3-6 poin), fokus pada dampak dan area yang diubah.
3. Gunakan Bahasa Indonesia.
4. To the point, hindari basa-basi dan kata generik.
5. Jika perubahan lintas fitur, kelompokkan sesuai flow/area.
6. Sertakan perubahan konfigurasi penting jika ada.
7. Hindari penyebutan variabel, nama fungsi, atau potongan kode teknis yang terlalu rinci.
8. Bullet harus langsung isi perubahan, tanpa awalan seperti "Ringkasan:" atau "Perubahan:".
9. Jangan tampilkan perintah git, cukup hasil akhir.

Format output:
- title
- bullet list

## Contoh Output Singkat

feat(proposal-ui): tambah halaman proposal dan rapikan alur kerja lokal

- Menambah halaman proposal untuk alur landing, login, murid, guru, konten, dan share.
- Menyelaraskan tampilan mobile-first agar tetap adaptif saat dibuka di desktop.
- Mengunci scope dan arah UI proposal pada dokumen kerja tim.
- Menambah script lokal untuk menjalankan layanan lebih cepat.
- Menambah langkah pemulihan saat terjadi kendala file lock di Windows.
