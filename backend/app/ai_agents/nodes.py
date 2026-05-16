from typing import Dict, Any

from .llm_provider import llm_client


async def entry_node(state: Dict[str, Any]) -> Dict[str, Any]:
    return {"diagnostic_complete": False}


async def diagnostic_agent_node(state: Dict[str, Any]) -> Dict[str, Any]:
    messages = state.get("messages", [])
    if not messages:
        return {"current_error_type": None, "diagnostic_complete": True}

    last_user = None
    for msg in reversed(messages):
        if msg.get("role") == "user":
            last_user = msg
            break

    if not last_user:
        return {"current_error_type": None, "diagnostic_complete": True}

    text = last_user.get("content", "").lower()

    keyword_map = {
        "pecahan": "arithmetic",
        "bagi": "arithmetic",
        "kali": "arithmetic",
        "x": "algebraic_manipulation",
        "persamaan": "algebraic_manipulation",
        "fungsi": "conceptual",
        "invers": "conceptual",
        "matriks": "procedural",
    }

    detected = None
    for key, value in keyword_map.items():
        if key in text:
            detected = value
            break

    return {
        "current_error_type": detected,
        "diagnostic_complete": True,
        "prerequisite_resolved": False,
    }


async def socratic_agent_node(state: Dict[str, Any]) -> Dict[str, Any]:
    messages = state.get("messages", [])
    error_type = state.get("current_error_type") or "general"
    turns = state.get("socratic_turns", 0)

    prompt = [
        {
            "role": "system",
            "content": (
                "Kamu tutor matematika dengan gaya Socratic dan student-as-teacher. "
                "Jangan kasih jawaban langsung. Tanyakan 1-2 pertanyaan pemandu dalam bahasa Indonesia. "
                f"Fokus error type: {error_type}."
            ),
        }
    ]

    prompt.extend(messages[-6:])

    content = await llm_client.chat(prompt)

    return {
        "messages": [{"role": "assistant", "content": content}],
        "socratic_turns": turns + 1,
    }


async def resolution_check_node(state: Dict[str, Any]) -> Dict[str, Any]:
    turns = state.get("socratic_turns", 0)
    return {"prerequisite_resolved": turns >= 2}
