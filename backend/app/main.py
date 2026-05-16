from contextlib import asynccontextmanager
from typing import Optional

from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from .core.config import settings
from .ai_agents.graph import get_agent_graph
from .ai_agents.state_manager import state_manager


class SessionCreateRequest(BaseModel):
    user_id: Optional[str] = None
    current_topic: Optional[str] = None


class SessionCreateResponse(BaseModel):
    session_id: str
    message: str


class HealthResponse(BaseModel):
    status: str
    version: str
    agents_initialized: bool


class ChatApiRequest(BaseModel):
    session_id: str
    message: str
    user_id: Optional[str] = None
    current_topic: Optional[str] = None


class ChatApiResponse(BaseModel):
    session_id: str
    response: str
    routing_info: dict


@asynccontextmanager
async def lifespan(app: FastAPI):
    get_agent_graph()
    yield


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="Adaptive Digital Learning Platform for Mathematics",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", tags=["Root"])
async def root():
    return {"message": settings.APP_NAME, "version": settings.APP_VERSION, "docs": "/docs"}


@app.get("/health", response_model=HealthResponse, tags=["Health"])
async def health_check():
    initialized = get_agent_graph() is not None
    return HealthResponse(status="healthy", version=settings.APP_VERSION, agents_initialized=initialized)


@app.post("/sessions", response_model=SessionCreateResponse, tags=["Sessions"])
async def create_session(request: SessionCreateRequest):
    session_state = state_manager.create_session(user_id=request.user_id, current_topic=request.current_topic)
    return SessionCreateResponse(session_id=session_state["session_id"], message="Session created")


@app.get("/sessions/{session_id}/state", tags=["Sessions"])
async def get_session_state(session_id: str):
    state = state_manager.get_state(session_id)
    if state is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Session not found")

    return {
        "session_id": session_id,
        "messages_count": len(state.get("messages", [])),
        "current_error_type": state.get("current_error_type"),
        "prerequisite_resolved": state.get("prerequisite_resolved", False),
        "user_competency_level": state.get("user_competency_level", "intermediate"),
        "socratic_turns": state.get("socratic_turns", 0),
    }


@app.post("/api/v1/chat", response_model=ChatApiResponse, tags=["Chat"])
async def chat(request: ChatApiRequest):
    graph = get_agent_graph()
    result = await graph.process_message(
        session_id=request.session_id,
        user_message=request.message,
        current_topic=request.current_topic,
        user_id=request.user_id,
    )
    return ChatApiResponse(session_id=request.session_id, response=result["response"], routing_info=result["routing_info"])


@app.delete("/sessions/{session_id}", tags=["Sessions"])
async def delete_session(session_id: str):
    success = state_manager.delete_session(session_id)
    if not success:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Session not found")
    return {"message": "Session deleted"}

