from typing import Any, Dict, List
import json
import httpx

from ..core.config import settings


class LLMClient:
    async def chat(self, messages: List[Dict[str, str]], temperature: float = 0.3) -> str:
        provider = settings.DEFAULT_LLM_PROVIDER.lower()

        if provider == "openrouter" and settings.OPENROUTER_API_KEY:
            try:
                return await self._chat_openrouter(messages, temperature)
            except Exception:
                if settings.NVIDIA_API_KEY:
                    return await self._chat_nvidia(messages, temperature)

        if provider == "mock" or not settings.OPENROUTER_API_KEY:
            return self._chat_mock(messages)

        return self._chat_mock(messages)

    async def _chat_openrouter(self, messages: List[Dict[str, str]], temperature: float) -> str:
        payload = {
            "model": settings.DEFAULT_LLM_MODEL,
            "messages": messages,
            "temperature": temperature,
        }
        headers = {
            "Authorization": f"Bearer {settings.OPENROUTER_API_KEY}",
            "Content-Type": "application/json",
        }
        async with httpx.AsyncClient(timeout=30) as client:
            resp = await client.post(f"{settings.OPENROUTER_BASE_URL}/chat/completions", json=payload, headers=headers)
            resp.raise_for_status()
            data = resp.json()
            return data["choices"][0]["message"]["content"].strip()

    async def _chat_nvidia(self, messages: List[Dict[str, str]], temperature: float) -> str:
        payload = {
            "model": settings.NVIDIA_MODEL,
            "messages": messages,
            "temperature": temperature,
        }
        headers = {
            "Authorization": f"Bearer {settings.NVIDIA_API_KEY}",
            "Content-Type": "application/json",
        }
        async with httpx.AsyncClient(timeout=30) as client:
            resp = await client.post(f"{settings.NVIDIA_BASE_URL}/chat/completions", json=payload, headers=headers)
            resp.raise_for_status()
            data = resp.json()
            return data["choices"][0]["message"]["content"].strip()

    def _chat_mock(self, messages: List[Dict[str, str]]) -> str:
        user = ""
        for m in reversed(messages):
            if m.get("role") == "user":
                user = m.get("content", "")
                break

        return (
            "Aku belum kasih jawaban langsung dulu ya. Coba jelaskan langkahmu pelan-pelan: "
            "1) informasi yang diketahui, 2) rumus/konsep yang dipakai, 3) hasil akhirnya. "
            f"Dari jawabanmu: '{user[:120]}' kita cek bareng letak miskonsepsinya."
        )


llm_client = LLMClient()
