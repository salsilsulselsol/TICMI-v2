from typing import Dict, Any, Optional
import uuid


class StateManager:
    def __init__(self):
        self._sessions: Dict[str, Dict[str, Any]] = {}

    def create_session(self, session_id: Optional[str] = None, user_id: Optional[str] = None, current_topic: Optional[str] = None) -> Dict[str, Any]:
        if session_id is None:
            session_id = str(uuid.uuid4())

        if session_id not in self._sessions:
            self._sessions[session_id] = {
                "messages": [],
                "current_error_type": None,
                "prerequisite_resolved": False,
                "user_competency_level": "intermediate",
                "session_id": session_id,
                "user_id": user_id,
                "current_topic": current_topic,
                "diagnostic_complete": False,
                "socratic_turns": 0,
            }

        return self._sessions[session_id]

    def get_state(self, session_id: str) -> Optional[Dict[str, Any]]:
        return self._sessions.get(session_id)

    def update_state(self, session_id: str, updates: Dict[str, Any]) -> Dict[str, Any]:
        if session_id not in self._sessions:
            raise ValueError(f"Session {session_id} not found")

        state = self._sessions[session_id]
        if "messages" in updates:
            new_messages = updates["messages"]
            if isinstance(new_messages, list):
                state["messages"].extend(new_messages)
            else:
                state["messages"].append(new_messages)
            updates = {k: v for k, v in updates.items() if k != "messages"}

        state.update(updates)
        return state

    def add_message(self, session_id: str, role: str, content: str) -> Dict[str, Any]:
        return self.update_state(session_id, {"messages": [{"role": role, "content": content}]})

    def get_messages(self, session_id: str) -> list[Dict[str, str]]:
        state = self.get_state(session_id)
        if state is None:
            return []
        return state.get("messages", [])

    def delete_session(self, session_id: str) -> bool:
        if session_id in self._sessions:
            del self._sessions[session_id]
            return True
        return False


state_manager = StateManager()
