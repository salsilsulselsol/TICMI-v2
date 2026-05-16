"use client";

import { FormEvent, useMemo, useState } from "react";

type UiMessage = {
  role: "user" | "assistant";
  content: string;
};

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function Home() {
  const [sessionId, setSessionId] = useState("");
  const [topic, setTopic] = useState("Persamaan Linear");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<UiMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("Belum terhubung");

  const canSend = useMemo(() => !!sessionId && !!input.trim() && !loading, [sessionId, input, loading]);

  const createSession = async () => {
    setStatus("Membuat sesi...");

    try {
      const res = await fetch(`${API_BASE}/sessions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ current_topic: topic }),
      });

      if (!res.ok) {
        setStatus(`Gagal membuat sesi (${res.status})`);
        return;
      }

      const data = await res.json();
      setSessionId(data.session_id);
      setStatus("Sesi aktif");
    } catch {
      setStatus("Gagal konek ke backend. Cek backend aktif di :8000");
    }
  };

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!canSend) return;

    const userText = input.trim();
    setInput("");
    setLoading(true);
    setMessages((prev) => [...prev, { role: "user", content: userText }]);

    try {
      const res = await fetch(`${API_BASE}/api/v1/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: sessionId,
          message: userText,
          current_topic: topic,
        }),
      });

      if (!res.ok) {
        throw new Error("chat_failed");
      }

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
      setStatus("Respons diterima");
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Lagi ada kendala koneksi. Coba kirim lagi, kita lanjut cek konsep dasarnya bareng.",
        },
      ]);
      setStatus("Error koneksi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto min-h-screen max-w-md bg-sand px-4 pb-28 pt-6 text-slate-900">
      <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">TICMI Prototype</p>
        <h1 className="mt-2 text-2xl font-bold leading-tight">Tutor Matematika Adaptif</h1>
        <p className="mt-2 text-sm text-slate-600">Mode Student-as-Teacher. Sistem akan tanya balik untuk menemukan gap prasyaratmu.</p>

        <div className="mt-4 space-y-3">
          <label className="block text-sm font-medium">Topik</label>
          <input
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-teal-500"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />

          <button
            onClick={createSession}
            className="w-full rounded-xl bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
            type="button"
          >
            {sessionId ? "Buat Sesi Baru" : "Mulai Sesi"}
          </button>

          <div className="rounded-lg bg-slate-100 px-3 py-2 text-xs text-slate-700">
            <p>Status: <span className="font-semibold">{status}</span></p>
            <p className="mt-1 break-all">Session: {sessionId || "-"}</p>
            <p className="mt-1 break-all">API: {API_BASE}</p>
          </div>
        </div>
      </section>

      <section className="mt-4 space-y-3">
        {messages.map((m, idx) => (
          <article
            key={`${m.role}-${idx}`}
            className={`rounded-2xl p-3 text-sm shadow-sm ${m.role === "user" ? "ml-8 bg-teal-700 text-white" : "mr-8 bg-white text-slate-800 ring-1 ring-slate-200"}`}
          >
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide opacity-80">{m.role === "user" ? "Kamu" : "TICMI"}</p>
            <p className="leading-relaxed">{m.content}</p>
          </article>
        ))}
      </section>

      <form onSubmit={sendMessage} className="fixed bottom-0 left-0 right-0 mx-auto max-w-md border-t border-slate-200 bg-white p-3">
        <div className="flex items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="max-h-28 min-h-[44px] flex-1 resize-y rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-500"
            placeholder="Tulis cara kamu mengerjakan soal..."
          />
          <button
            type="submit"
            disabled={!canSend}
            className="rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-orange-300"
          >
            {loading ? "..." : "Kirim"}
          </button>
        </div>
      </form>
    </main>
  );
}
