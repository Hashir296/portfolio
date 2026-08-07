"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [info, setInfo] = useState("");
  const [error, setError] = useState("");

  async function sendViaWeb3Forms() {
    const access_key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
    if (!access_key) return null;

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key,
        name,
        email,
        subject: `[Portfolio] ${subject || "Portfolio inquiry"}`,
        message,
        from_name: name,
        replyto: email,
      }),
    });
    const data = await res.json().catch(() => ({} as { success?: boolean; message?: string }));
    if (!res.ok || data.success === false) {
      throw new Error(data.message || "Web3Forms failed");
    }
    return true;
  }

  async function sendViaApi() {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, subject, message }),
    });
    const data = await res.json();
    if (!res.ok || !data.ok) {
      throw new Error(data.error || "Failed to send. Please try again.");
    }
    return data as { note?: string };
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    setInfo("");

    try {
      // Prefer browser → Web3Forms (free, instant to Gmail)
      try {
        const w3 = await sendViaWeb3Forms();
        if (w3) {
          setStatus("success");
          setInfo("Message sent. I’ll reply soon.");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          return;
        }
      } catch {
        // fall through to API (Gmail / FormSubmit)
      }

      const data = await sendViaApi();
      setStatus("success");
      setInfo(data.note || "Message sent. I’ll reply soon.");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : `Network error. Email me directly at ${profile.email}`
      );
    }
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      className="space-y-4"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block text-[11px] uppercase tracking-[0.16em] text-[#E8C97A]">
            Name
          </span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-cream/25 bg-[#152820] px-4 py-3 text-cream outline-none placeholder:text-cream/35 focus:border-[#E8C97A]"
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-[11px] uppercase tracking-[0.16em] text-[#E8C97A]">
            Email
          </span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-cream/25 bg-[#152820] px-4 py-3 text-cream outline-none placeholder:text-cream/35 focus:border-[#E8C97A]"
            placeholder="you@email.com"
            autoComplete="email"
          />
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-1.5 block text-[11px] uppercase tracking-[0.16em] text-[#E8C97A]">
          Subject
        </span>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full border border-cream/25 bg-[#152820] px-4 py-3 text-cream outline-none placeholder:text-cream/35 focus:border-[#E8C97A]"
          placeholder="Project inquiry / Job opportunity"
        />
      </label>

      <label className="block text-sm">
        <span className="mb-1.5 block text-[11px] uppercase tracking-[0.16em] text-[#E8C97A]">
          Message
        </span>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-y border border-cream/25 bg-[#152820] px-4 py-3 text-cream outline-none placeholder:text-cream/35 focus:border-[#E8C97A]"
          placeholder="Tell me about the role or project…"
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-[#E2C58A] px-7 py-3 text-sm font-semibold tracking-wide text-charcoal transition hover:brightness-105 disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-sm text-[#E8C97A]" role="status">
          {info}
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-300" role="alert">
          {error}
        </p>
      )}
    </motion.form>
  );
}
