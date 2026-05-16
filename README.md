# TICMI (Teach Me) - Adaptive Digital Learning Platform
## High School Mathematics with Multi-Agent AI Architecture

### Overview
TICMI is an adaptive learning platform that detects prerequisite knowledge gaps and performs Socratic remediation based on the "Student-as-Teacher" paradigm.

### Tech Stack
- **Frontend:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, Zustand, React Flow
- **Backend:** FastAPI (Python 3.10+), PostgreSQL, WebSockets
- **AI/Agent Layer:** LangGraph, ChromaDB, Google Gemini 1.5 Pro / Ollama

### Project Structure
```
ticmi/
├── backend/
│   ├── app/
│   │   ├── ai_agents/       # LangGraph multi-agent workflow
│   │   ├── api/             # FastAPI routers
│   │   ├── core/            # Core configuration
│   │   ├── models/          # SQLAlchemy models
│   │   └── schemas/         # Pydantic schemas
│   └── requirements.txt
├── frontend/
│   └── src/
│       ├── app/             # Next.js App Router
│       ├── components/      # React components
│       ├── hooks/           # Custom hooks
│       ├── store/           # Zustand state management
│       └── types/           # TypeScript types
└── docker-compose.yml
```

### Getting Started

#### Local Development (Recommended)
Lihat [README_LOCAL.md](./README_LOCAL.md) untuk panduan lengkap setup tanpa Docker.

#### Quick Start
1. Install backend dependencies: `pip install -r backend/requirements.txt`
2. Install frontend dependencies: `npm install` (in frontend directory)
3. Run locally: Follow instructions in README_LOCAL.md
