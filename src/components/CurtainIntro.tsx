"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { profile } from "@/data/profile";

/** Ciao Energy–style percent loader → curtain reveal */
export default function CurtainIntro({ onDone }: { onDone: () => void }) {
  const [show, setShow] = useState(true);
  const percentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setShow(false);
      onDone();
      return;
    }

    const counter = { value: 0 };
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        onComplete: () => {
          setShow(false);
          onDone();
        },
      });

      tl.to(counter, {
        value: 100,
        duration: 1.35,
        ease: "power1.inOut",
        onUpdate: () => {
          if (percentRef.current) {
            percentRef.current.textContent = `${Math.round(counter.value)}%`;
          }
        },
      })
        .to(".loader-percent", { opacity: 0, y: -16, duration: 0.35 }, "+=0.08")
        .fromTo(
          ".curtain-mono",
          { opacity: 0, scale: 0.9, filter: "blur(10px)" },
          { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.5 },
          "-=0.15"
        )
        .to(".curtain-panel", { scaleY: 0, duration: 0.9, stagger: 0.06, ease: "power3.inOut" }, "+=0.2")
        .to(".curtain-mono", { opacity: 0, y: -20, duration: 0.4 }, "-=0.55")
        .to(".curtain-root", { opacity: 0, duration: 0.3 }, "-=0.2");
    });

    const skip = () => {
      ctx.revert();
      setShow(false);
      onDone();
    };
    window.addEventListener("keydown", skip, { once: true });
    window.addEventListener("pointerdown", skip, { once: true });

    return () => {
      ctx.revert();
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
    };
  }, [onDone]);

  if (!show) return null;

  return (
    <div className="curtain-root fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-forest">
      <div className="curtain-panel absolute inset-x-0 top-0 h-1/2 origin-top bg-forest" />
      <div className="curtain-panel absolute inset-x-0 bottom-0 h-1/2 origin-bottom bg-charcoal" />

      <div className="relative z-10 text-center">
        <p className="loader-percent font-display text-[clamp(4rem,14vw,9rem)] leading-none tracking-[0.08em] text-gold">
          <span ref={percentRef}>0%</span>
        </p>
        <div className="curtain-mono absolute inset-0 flex flex-col items-center justify-center opacity-0">
          <p className="font-display text-5xl tracking-[0.35em] text-gold md:text-7xl">
            {profile.monogram}
          </p>
          <p className="mt-4 text-xs uppercase tracking-label text-cream/60">
            Enter · click or key to skip
          </p>
        </div>
      </div>
    </div>
  );
}
