# TICMI - Local Development Setup

Panduan ini untuk menjalankan prototipe TICMI (mobile-first + FastAPI + LangGraph) di lokal.

## Prasyarat

- Python `3.10+`
- Node.js `18+`
- npm `9+` (ikut dari Node.js)

## 1) Setup Environment

Dari root project `C:\projects\TICMI-v2`:

```bash
copy .env.example .env
```

Konfigurasi minimal yang perlu dicek di `.env`:

```env
DEFAULT_LLM_PROVIDER=mock
NEXT_PUBLIC_API_URL=http://localhost:8000
CORS_ORIGINS=http://localhost:3000
```

## 2) Jalankan Backend (Core Runtime)

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Cek backend:
- Health: `http://localhost:8000/health`
- Swagger: `http://localhost:8000/docs`

## 3) Jalankan Frontend

Terminal baru:

```bash
cd frontend
npm install
npm run dev
```

Catatan:
- Script `npm run dev` sudah menggunakan `next dev --webpack` untuk stabilitas lebih baik di Windows (mengurangi error lock file `EBUSY` dari Turbopack).

Buka app di:
- `http://localhost:3000`

## 4) Alur Uji Cepat (Manual)

1. Buka UI `http://localhost:3000`
2. Isi topik (misalnya `Persamaan Linear`)
3. Klik `Mulai Sesi`
4. Kirim jawaban siswa di chat
5. Pastikan respons Socratic muncul dari backend

## 5) Konfigurasi Model

### Mode gratis penuh (default)

```env
DEFAULT_LLM_PROVIDER=mock
```

### Pakai OpenRouter (opsional)

```env
DEFAULT_LLM_PROVIDER=openrouter
DEFAULT_LLM_MODEL=openrouter/free
OPENROUTER_API_KEY=<isi_key>
```

## 6) Dependency RAG Opsional (Chroma)

RAG/Chroma belum wajib untuk MVP. Kalau ingin coba:

```bash
cd backend
venv\Scripts\activate
pip install -r requirements-rag.txt
```

Jika gagal build `chroma-hnswlib` di Windows + Python 3.12:
- install Microsoft C++ Build Tools, atau
- pakai Python 3.11 untuk environment RAG, atau
- tunda Chroma dan lanjut pakai MVP tanpa RAG dulu.

## Endpoint Utama

- `GET /health`
- `POST /sessions`
- `GET /sessions/{session_id}/state`
- `POST /api/v1/chat`
- `DELETE /sessions/{session_id}`

## Troubleshooting

- `'next' is not recognized`
  - Jalankan `npm install` di folder `frontend`, lalu `npm run dev`.
- CORS error dari frontend ke backend
  - Pastikan `.env` backend berisi `CORS_ORIGINS=http://localhost:3000`.
- Frontend tidak terhubung ke backend
  - Pastikan `.env` root berisi `NEXT_PUBLIC_API_URL=http://localhost:8000`.
- Frontend error `EBUSY: resource busy or locked` saat compile (`page.tsx`, `globals.css`, dll)
  - Pastikan jalankan via `npm run dev` (script ini sudah pakai `next dev --webpack`).
  - Hentikan proses frontend yang nyangkut, lalu start ulang:
  ```bash
  cd frontend
  npm run dev
  ```
  - Jika error masih sesekali muncul, tambahkan folder project ke exclusion antivirus/Windows Defender real-time scanning.
