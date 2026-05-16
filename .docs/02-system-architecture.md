# TICMI System Architecture (Prototype)

Tanggal: 2026-05-16

## A. High-Level Components

1. Mobile-first Web App (Next.js/PWA)
2. API + Orchestration (FastAPI + LangGraph)
3. Data & Retrieval (Supabase + ChromaDB)
4. LLM Gateway (OpenRouter primary, NVIDIA fallback)
5. Observability (logs, traces, evaluation)

## B. Request Flow (Socratic Remediation)

1. Siswa kirim jawaban diagnosis.
2. FastAPI menyimpan attempt ke Supabase.
3. LangGraph mengeksekusi node:
   - Diagnostic Agent
   - Prerequisite Router
   - Socratic Verifier
   - Knowledge Tracker
4. Node retrieval ambil konteks dari ChromaDB.
5. LLM dipanggil via OpenRouter; jika gagal/rate-limit, fallback ke NVIDIA endpoint.
6. Respons di-stream ke frontend via WebSocket.
7. State hasil sesi + mastery update disimpan ke Supabase.

## C. Data Model Minimal

- `users`
- `student_profiles`
- `learning_sessions`
- `diagnostic_attempts`
- `prerequisite_map`
- `remediation_events`
- `mastery_snapshots`
- `teacher_class_views`

## D. Agent Graph V1

- `intake_node`
- `diagnose_node`
- `gap_classifier_node`
- `retrieve_curriculum_context_node`
- `socratic_question_node`
- `evaluate_student_explanation_node`
- `decide_next_step_node`
- `final_feedback_node`

## E. Non-Functional Target

- P95 API response < 1.2s (non-LLM endpoint)
- Median first token LLM < 2.5s
- Availability target prototype: 99%
- Semua prompt dan output penting tersimpan untuk evaluasi

