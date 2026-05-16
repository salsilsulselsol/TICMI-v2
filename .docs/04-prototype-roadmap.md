# TICMI Prototype Roadmap

Tanggal: 2026-05-16

## Phase 0 - Foundation (3-5 hari)

1. Finalisasi stack V1
2. Setup Supabase project + schema awal
3. Setup FastAPI + Next.js local dev flow
4. Setup OpenRouter key + fallback policy

## Phase 1 - Core Learning Loop (7-10 hari)

1. Implement diagnosis endpoint
2. Implement LangGraph workflow V1
3. Integrasi ChromaDB retrieval untuk materi Fase D/F
4. Build remediation chat mobile-first

## Phase 2 - Teacher Visibility (4-6 hari)

1. Endpoint analytics ringkas
2. Dashboard guru: gap heatmap sederhana
3. Export report per siswa

## Phase 3 - Hardening (4-7 hari)

1. Logging + trace + prompt audit
2. Uji fallback model provider
3. Optimasi latency dan error handling
4. Basic security review (RLS, auth, secret management)

## Deliverable demo

- Skenario 1 siswa full journey (diagnosis -> remediasi -> mastery update)
- Skenario guru melihat rekomendasi intervensi

