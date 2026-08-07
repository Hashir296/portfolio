"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "./ui/Typography";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    struck: "Generic templates",
    reveal: "Editorial systems",
    copy: "Not another shadcn clone — a scroll-driven narrative built like a luxury campaign.",
  },
  {
    struck: "Static pages",
    reveal: "Cinematic scroll",
    copy: "Pinned timelines, horizontal rails, and mood grading that shift as you move.",
  },
  {
    struck: "Neon SaaS look",
    reveal: "Quiet luxury",
    copy: "Forest, cream, and brass — the visual language of heritage brands, not dashboards.",
  },
  {
    struck: "Chatbot gimmick",
    reveal: "Portfolio counsel",
    copy: "An AI assistant trained only on Hashir’s real profile, projects, and contact paths.",
  },
];

/** Ciao benefits-style strike-through → reveal panels */
export default function ContrastStory() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !root.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".contrast-panel").forEach((panel) => {
        const struck = panel.querySelector(".struck");
        const reveal = panel.querySelector(".reveal-line");
        const copy = panel.querySelector(".reveal-copy");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top 70%",
            end: "top 35%",
            scrub: true,
          },
        });

        tl.fromTo(struck, { opacity: 1, x: 0 }, { opacity: 0.25, x: -12 })
          .fromTo(reveal, { y: 40, opacity: 0, filter: "blur(8px)" }, { y: 0, opacity: 1, filter: "blur(0px)" }, 0.15)
          .fromTo(copy, { y: 24, opacity: 0 }, { y: 0, opacity: 1 }, 0.25);
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="contrast"
      className="bg-forest py-24 text-cream md:py-32"
      data-mood="forest"
    >
      <div className="container-editorial">
        <SectionLabel>Craft over clutter</SectionLabel>
        <h2 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.05]">
          What this portfolio refuses<span className="text-gold">.</span>
        </h2>

        <div className="mt-16 space-y-16 md:space-y-24">
          {panels.map((p) => (
            <div key={p.reveal} className="contrast-panel relative max-w-3xl">
              <p className="struck relative inline-block font-display text-3xl text-cream/50 md:text-5xl">
                <span className="relative">
                  {p.struck}
                  <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-burgundy" />
                </span>
              </p>
              <p className="reveal-line mt-3 font-display text-4xl italic text-gold md:text-6xl">
                {p.reveal}
              </p>
              <p className="reveal-copy mt-4 max-w-xl text-cream/75">{p.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
