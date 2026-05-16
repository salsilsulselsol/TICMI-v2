"""
TICMI Multi-Agent AI System.

Current runtime uses internal orchestrator for compatibility and speed.
"""

from .graph import create_agent_graph, get_agent_graph
from .nodes import diagnostic_agent_node, socratic_agent_node, entry_node
from .state_manager import StateManager

__all__ = [
    "create_agent_graph",
    "get_agent_graph",
    "diagnostic_agent_node",
    "socratic_agent_node",
    "entry_node",
    "StateManager",
]
