"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "#home", label: "Home" },
  { href: "#summary", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[55] transition ${
        scrolled
          ? "border-b border-ivory/80 bg-cream/95 text-charcoal shadow-sm backdrop-blur-md"
          : "bg-transparent text-cream"
      }`}
    >
      <div className="container-editorial flex h-16 items-center justify-between md:h-[4.25rem]">
        <a href="#home" className="font-display text-xl tracking-[0.2em] text-[#E2C58A]">
          {profile.monogram}
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[13px] tracking-wide transition hover:text-[#E2C58A] ${
                scrolled ? "text-charcoal/85" : "text-cream/90"
              }`}
            >
              {l.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("open-ai-assistant"))}
            className="rounded-full bg-[#E2C58A] px-4 py-2 text-[12px] font-semibold tracking-wide text-charcoal"
          >
            Ask AI
          </button>
          <a
            href={profile.cv}
            download={profile.cvFileName}
            className={`rounded-full border px-4 py-2 text-[12px] font-semibold tracking-wide transition ${
              scrolled
                ? "border-[#B08D57] text-charcoal hover:bg-[#E2C58A]/25"
                : "border-[#E2C58A]/60 text-[#E2C58A] hover:bg-[#E2C58A]/15"
            }`}
          >
            CV
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
        </button>
      </div>

      {open && (
        <div className="border-t border-ivory bg-cream px-4 py-4 text-charcoal md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-2.5 text-sm"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <button
            type="button"
            className="mt-2 rounded-full bg-forest px-4 py-2 text-sm text-cream"
            onClick={() => {
              setOpen(false);
              window.dispatchEvent(new CustomEvent("open-ai-assistant"));
            }}
          >
            Ask AI
          </button>
        </div>
      )}
    </header>
  );
}
