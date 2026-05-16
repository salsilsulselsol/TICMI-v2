# TICMI (Teach Me)

Adaptive digital learning platform for SMA Mathematics with agentic Socratic remediation.

## Current Prototype Scope (v0.2)

- Mobile-first web app (Next.js)
- FastAPI backend with session + chat API
- LangGraph workflow:
  - Diagnostic node
  - Socratic remediation node
  - Resolution check
- LLM routing:
  - `mock` mode (default, no API key)
  - OpenRouter (`openrouter/free` suggested)
  - Optional NVIDIA fallback endpoint

## Architecture Snapshot

- `frontend/`: Next.js UI
- `backend/`: FastAPI + LangGraph orchestration
- `.docs/`: design docs and roadmap

## Quick Start

### 1. Environment

Copy `.env.example` to `.env` and adjust values.

### 2. Run Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### 3. Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Open: `http://localhost:3000`

## Key API Endpoints

- `GET /health`
- `POST /sessions`
- `GET /sessions/{session_id}/state`
- `POST /api/v1/chat`

## Notes

- Default mode is `mock`, so prototype works without paid API.
- To use real model: set `DEFAULT_LLM_PROVIDER=openrouter` and fill `OPENROUTER_API_KEY`.
- Supabase integration can be enabled by replacing `DATABASE_URL` with Supabase Postgres connection string.
