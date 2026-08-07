"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const moods: Record<string, { bg: string; accent: string; ink: string }> = {
  forest: {
    bg: "#F5F1E8",
    accent: "#B08D57",
    ink: "#1A1A1A",
  },
  gold: {
    bg: "#F3EEE3",
    accent: "#B08D57",
    ink: "#1A1A1A",
  },
  burgundy: {
    bg: "#F1EBE2",
    accent: "#6E2C2C",
    ink: "#1A1A1A",
  },
};

/** Scroll-linked cinematic color grading via CSS variables */
export default function MoodScroller() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const sections = gsap.utils.toArray<HTMLElement>("[data-mood]");
    const triggers = sections.map((section) => {
      const key = section.dataset.mood || "forest";
      const mood = moods[key] || moods.forest;
      return ScrollTrigger.create({
        trigger: section,
        start: "top 55%",
        end: "bottom 45%",
        onEnter: () => apply(mood),
        onEnterBack: () => apply(mood),
      });
    });

    function apply(mood: { bg: string; accent: string; ink: string }) {
      document.documentElement.style.setProperty("--mood-bg", mood.bg);
      document.documentElement.style.setProperty("--mood-accent", mood.accent);
      document.documentElement.style.setProperty("--mood-ink", mood.ink);
    }

    return () => triggers.forEach((t) => t.kill());
  }, []);

  return null;
}
