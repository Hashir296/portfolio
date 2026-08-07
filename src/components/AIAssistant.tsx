"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/profile";

type Msg = { role: "user" | "assistant"; content: string };

const chips = [
  "Who is Hashir?",
  "What projects has he built?",
  "What's his tech stack?",
  "How can I contact him?",
  "Tell me about his experience",
];

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content: `Hi — I’m ${profile.shortName}’s portfolio AI. Ask about his skills, projects, experience, education, or how to contact him.`,
    },
  ]);

  useEffect(() => {
    const openEvt = () => setOpen(true);
    window.addEventListener("open-ai-assistant", openEvt);
    return () => window.removeEventListener("open-ai-assistant", openEvt);
  }, []);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  async function send(text?: string) {
    const content = (text ?? input).trim();
    if (!content || loading) return;

    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: content,
          messages: next.filter((m) => !m.content.startsWith("Hi —")),
        }),
      });

      const data = await res.json();
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: data.content || "Please try again, or email hashir.ch296@gmail.com.",
        },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: `Connection issue. Email ${profile.email} or call ${profile.phone}.`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    send();
  }

  return (
    <>
      <motion.button
        type="button"
        aria-label="Open AI assistant"
        className="fixed bottom-6 right-6 z-[80] flex h-14 w-14 items-center justify-center rounded-full border border-[#D4B57A]/70 bg-[#152820] text-sm tracking-[0.18em] text-[#E8C97A] shadow-gold"
        onClick={() => setOpen(true)}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(176,141,87,0.45)",
            "0 0 0 14px rgba(176,141,87,0)",
            "0 0 0 0 rgba(176,141,87,0.45)",
          ],
        }}
        transition={{ duration: 2.6, repeat: Infinity }}
        whileHover={{ scale: 1.06 }}
      >
        {profile.monogram}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-end justify-end bg-black/50 p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-label="AI assistant"
              className="flex h-[min(680px,88vh)] w-full max-w-md flex-col overflow-hidden rounded-2xl border border-[#E4DCC8] bg-[#F5F1E8] shadow-soft"
              initial={{ y: 48, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 28, opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between bg-[#1F3D2B] px-4 py-3.5 text-cream">
                <div>
                  <p className="font-display text-xl text-white">{profile.monogram} AI</p>
                  <p className="text-[11px] uppercase tracking-label text-[#E8C97A]">
                    Powered by Gemini · Ask about Hashir
                  </p>
                </div>
                <button
                  type="button"
                  className="rounded-full border border-cream/30 px-3 py-1 text-sm text-cream"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>

              <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`max-w-[92%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-[15px] leading-relaxed ${
                      m.role === "user"
                        ? "ml-auto bg-[#1F3D2B] text-white"
                        : "border border-[#E4DCC8] bg-[#FAF7F0] text-[#1A1A1A]"
                    }`}
                  >
                    {m.content}
                  </div>
                ))}
                {loading && (
                  <div className="flex gap-1.5 px-2 py-1">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="h-2 w-2 rounded-full bg-[#B08D57]"
                        animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
                        transition={{ duration: 0.85, repeat: Infinity, delay: d * 0.14 }}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2.5 border-t border-[#E4DCC8] bg-[#FAF7F0] p-3">
                <div className="flex flex-wrap gap-2">
                  {chips.map((c) => (
                    <button
                      key={c}
                      type="button"
                      className="rounded-full border border-[#B08D57]/50 bg-[#F5F1E8] px-3 py-1.5 text-[11px] font-medium text-[#1F3D2B] hover:bg-[#E2C58A]/25"
                      onClick={() => send(c)}
                      disabled={loading}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <form onSubmit={onSubmit} className="flex gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about Hashir…"
                    className="flex-1 rounded-full border border-[#E4DCC8] bg-white px-4 py-2.5 text-[15px] text-[#1A1A1A] outline-none focus:border-[#B08D57]"
                    aria-label="Message"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-[#1F3D2B] px-5 py-2.5 text-sm font-medium text-white disabled:opacity-50"
                    disabled={loading}
                  >
                    Send
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
