# TICMI Technical Stack Exploration (Draft)

Tanggal: 2026-05-16
Status: Draft untuk prototipe (boleh berubah setelah validasi)

## 1) Ringkasan Rekomendasi

Untuk prototipe yang cepat, stabil, dan hemat biaya:

- Frontend mobile-first: Next.js + Tailwind + PWA (lanjut React Native/Expo kalau nanti butuh app store)
- Backend API: FastAPI (tetap)
- Database: Supabase Postgres (managed) + Supabase Auth + Supabase Realtime (opsional)
- Agent orchestration: LangGraph (utama)
- Vector store awal: ChromaDB (self-host/dev), bisa migrasi ke pgvector di Supabase saat production
- LLM provider: OpenRouter (default) + fallback NVIDIA endpoint
- Observability: LangSmith/OpenTelemetry + structured logging

## 2) Supabase vs PostgreSQL Mandiri

### Supabase cocok untuk prototipe karena:

- Sudah PostgreSQL managed, cepat setup
- Auth + Row Level Security (RLS) siap pakai
- Storage dan Realtime ada dalam satu platform
- Minim DevOps untuk tim kecil

### Risiko/limit yang harus diingat:

- Free tier ada limit dan project bisa pause jika idle
- Lock-in ringan pada fitur auth/storage bawaan

Keputusan: pakai Supabase dulu untuk kecepatan delivery prototipe.

## 3) Framework Agentic: LangGraph vs CrewAI

### LangGraph (direkomendasikan)

- Cocok untuk alur stateful, workflow bercabang, dan kontrol ketat node-by-node
- Bagus untuk use case TICMI: diagnosis -> routing prasyarat -> socratic verify -> knowledge tracker
- Mudah untuk evaluasi deterministik per step

### CrewAI

- Bagus untuk task-based multi-agent yang lebih "role collaboration"
- Cepat untuk eksperimen agen kolaboratif umum
- Biasanya lebih sedikit kontrol granular state machine dibanding graph workflow

Keputusan: LangGraph jadi framework utama. CrewAI opsional untuk eksperimen pembanding.

## 4) OpenRouter vs NVIDIA endpoint gratis

### OpenRouter

- Praktis untuk multi-model routing dalam 1 API
- Ada opsi model gratis (`openrouter/free` atau model `:free`)
- Mudah bikin fallback antar model/provider

### NVIDIA endpoints (build.nvidia.com / NIM APIs)

- Menyediakan inference endpoint gratis untuk beberapa model
- Cocok dijadikan fallback kedua jika model gratis OpenRouter throttle
- Jika self-host NIM, butuh resource GPU dan operasional lebih berat

Keputusan: default ke OpenRouter + fallback ke endpoint NVIDIA gratis.

## 5) ChromaDB itu apa dan kapan dipakai

ChromaDB adalah vector database untuk menyimpan embedding + metadata lalu melakukan semantic retrieval (RAG).

Dipakai di TICMI untuk:

- Menyimpan chunk materi kurikulum (Fase D/F)
- Mengambil konteks paling relevan untuk agen diagnostik/remediasi
- Menyimpan retrieval artifacts untuk evaluasi

Rekomendasi tahap:

- Tahap prototipe: ChromaDB lokal/self-host (simple)
- Tahap scale: pertimbangkan `pgvector` di Supabase agar jejak infrastruktur lebih sederhana

## 6) Arsitektur Backend yang direkomendasikan

- API Layer: FastAPI (`/api/v1/*`)
- Session Layer: Redis (cache state chat/sesi jangka pendek)
- Orchestration Layer: LangGraph runner service
- Data Layer:
  - Supabase Postgres (users, attempts, mastery, audit)
  - ChromaDB (knowledge retrieval)
- LLM Gateway:
  - Primary: OpenRouter
  - Fallback: NVIDIA hosted endpoint
- Realtime:
  - WebSocket untuk streaming respons AI
  - Optional Supabase Realtime untuk event dashboard guru

## 7) Prinsip Mobile-First

- Target utama layar 360px-430px dulu baru desktop enhancement
- UI learning flow satu tangan: CTA bawah, progress sticky, teks ringkas
- Streaming jawaban bertahap dengan chunk kecil agar nyaman di jaringan tidak stabil
- Simpan local draft jawaban siswa (anti kehilangan saat koneksi putus)

## 8) Rekomendasi Final Stack (V1 Prototype)

- Frontend: Next.js 14+, TypeScript, Tailwind, Zustand, PWA
- Backend: FastAPI + Uvicorn
- DB/Auth: Supabase
- Agent: LangGraph
- Retrieval: ChromaDB
- Model: OpenRouter (free-first) + NVIDIA fallback
- Queue: Redis + RQ/Celery (opsional saat load naik)
- Deployment:
  - Frontend: Vercel
  - Backend: Railway/Render/Fly.io
  - ChromaDB: container kecil

## 9) Exit Criteria Prototipe

- Siswa bisa login, mengerjakan diagnosis, dan dapat remediasi adaptif
- Agent route prasyarat tercatat per sesi
- Dashboard guru minimal tampilkan: topik lemah, progress, rekomendasi remedial
- End-to-end latency median < 4 detik (tanpa hitung waktu ketik user)

