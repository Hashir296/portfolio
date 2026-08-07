"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAV = [
  { id: "home", label: "01" },
  { id: "summary", label: "02" },
  { id: "skills", label: "03" },
  { id: "experience", label: "04" },
  { id: "projects", label: "05" },
  { id: "education", label: "06" },
  { id: "contact", label: "07" },
];

export default function ScrollChrome({ ready }: { ready: boolean }) {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("home");

  useEffect(() => {
    if (!ready) return;

    const t = window.setTimeout(() => ScrollTrigger.refresh(), 100);

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const triggers = NAV.map((item) =>
      ScrollTrigger.create({
        trigger: `#${item.id}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(item.id),
        onEnterBack: () => setActive(item.id),
      })
    );

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      triggers.forEach((trig) => trig.kill());
    };
  }, [ready]);

  if (!ready) return null;

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[2px] bg-ivory/40">
        <div
          className="h-full origin-left bg-gold"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <nav
        aria-label="Section navigation"
        className="fixed right-4 top-1/2 z-[70] hidden -translate-y-1/2 flex-col gap-3 md:right-8 md:flex"
      >
        {NAV.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-label={`Go to ${item.id}`}
            className="group relative flex h-3 w-3 items-center justify-center"
          >
            <span
              className={`block h-2 w-2 rounded-full transition ${
                active === item.id ? "scale-125 bg-gold" : "bg-charcoal/35 group-hover:bg-gold/70"
              }`}
            />
          </a>
        ))}
      </nav>
    </>
  );
}
