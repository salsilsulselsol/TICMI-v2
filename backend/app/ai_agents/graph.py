from typing import Dict, Any

from .nodes import entry_node, diagnostic_agent_node, socratic_agent_node, resolution_check_node
from .state_manager import state_manager


def _merge_state(base: Dict[str, Any], updates: Dict[str, Any]) -> Dict[str, Any]:
    if "messages" in updates:
        incoming = updates.get("messages", [])
        if incoming:
            base.setdefault("messages", [])
            base["messages"].extend(incoming)
        updates = {k: v for k, v in updates.items() if k != "messages"}
    base.update(updates)
    return base


class TicmiAgentGraph:
    async def process_message(self, session_id: str, user_message: str, current_topic: str | None = None, user_id: str | None = None) -> Dict[str, Any]:
        state = state_manager.create_session(session_id=session_id, user_id=user_id, current_topic=current_topic)
        state_manager.add_message(session_id, "user", user_message)

        working = {
            "messages": list(state_manager.get_messages(session_id)),
            "current_error_type": state.get("current_error_type"),
            "prerequisite_resolved": state.get("prerequisite_resolved", False),
            "user_competency_level": state.get("user_competency_level", "intermediate"),
            "session_id": session_id,
            "current_topic": current_topic,
            "diagnostic_complete": False,
            "socratic_turns": state.get("socratic_turns", 0),
        }

        initial_len = len(working["messages"])

        _merge_state(working, await entry_node(working))
        _merge_state(working, await diagnostic_agent_node(working))

        if working.get("current_error_type"):
            while True:
                _merge_state(working, await socratic_agent_node(working))
                _merge_state(working, await resolution_check_node(working))
                if working.get("prerequisite_resolved") or working.get("socratic_turns", 0) >= 3:
                    break

        for msg in working.get("messages", [])[initial_len:]:
            state_manager.update_state(session_id, {"messages": [msg]})

        state_manager.update_state(
            session_id,
            {
                "current_error_type": working.get("current_error_type"),
                "prerequisite_resolved": working.get("prerequisite_resolved", False),
                "socratic_turns": working.get("socratic_turns", 0),
            },
        )

        assistant = [m for m in working.get("messages", []) if m.get("role") == "assistant"]
        response = assistant[-1]["content"] if assistant else "Coba jelaskan lagi langkahmu, biar kita cek konsep dasarnya."

        return {
            "response": response,
            "state": working,
            "routing_info": {
                "error_type": working.get("current_error_type"),
                "prerequisite_resolved": working.get("prerequisite_resolved", False),
                "socratic_turns": working.get("socratic_turns", 0),
            },
        }


_agent_graph_instance: TicmiAgentGraph | None = None


def get_agent_graph() -> TicmiAgentGraph:
    global _agent_graph_instance
    if _agent_graph_instance is None:
        _agent_graph_instance = TicmiAgentGraph()
    return _agent_graph_instance


def create_agent_graph() -> TicmiAgentGraph:
    return get_agent_graph()
