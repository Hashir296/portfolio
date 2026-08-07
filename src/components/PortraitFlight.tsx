"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "@/data/profile";

gsap.registerPlugin(ScrollTrigger);

/** Portrait flies Hero → About (no duplicate image, no overlay text). */
export default function PortraitFlight({ ready }: { ready: boolean }) {
  const flyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ready) return;

    const fly = flyRef.current;
    const origin = document.getElementById("portrait-origin");
    const target = document.getElementById("portrait-target");
    if (!fly || !origin || !target) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const placeOn = (el: HTMLElement, radius = 0) => {
      const r = el.getBoundingClientRect();
      gsap.set(fly, {
        position: "fixed",
        left: r.left,
        top: r.top,
        width: r.width,
        height: r.height,
        borderRadius: radius,
        zIndex: 45,
        opacity: 1,
      });
    };

    if (reduced) {
      placeOn(origin);
      return;
    }

    const syncFlight = (progress: number) => {
      const o = origin.getBoundingClientRect();
      const t = target.getBoundingClientRect();
      const p = gsap.utils.clamp(0, 1, progress);
      gsap.set(fly, {
        position: "fixed",
        left: o.left + (t.left - o.left) * p,
        top: o.top + (t.top - o.top) * p,
        width: o.width + (t.width - o.width) * p,
        height: o.height + (t.height - o.height) * p,
        borderRadius: 10 * p,
        zIndex: 45,
        opacity: 1,
      });
    };

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "#home",
        start: "top top",
        endTrigger: "#summary",
        end: "top 30%",
        scrub: 0.65,
        invalidateOnRefresh: true,
        onUpdate: (self) => syncFlight(self.progress),
        onRefresh: (self) => {
          if (self.progress < 1) syncFlight(self.progress);
          else placeOn(target, 10);
        },
      });

      ScrollTrigger.create({
        trigger: "#summary",
        start: "top 30%",
        endTrigger: "#skills",
        end: "top 80%",
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: () => placeOn(target, 10),
        onEnter: () => placeOn(target, 10),
        onEnterBack: () => {
          gsap.set(fly, { opacity: 1 });
          placeOn(target, 10);
        },
      });

      ScrollTrigger.create({
        trigger: "#skills",
        start: "top 80%",
        onEnter: () => {
          gsap.to(fly, { opacity: 0, duration: 0.2 });
          const settled = document.getElementById("portrait-settled");
          if (settled) gsap.to(settled, { opacity: 1, duration: 0.2 });
        },
        onLeaveBack: () => {
          gsap.to(fly, { opacity: 1, duration: 0.2 });
          const settled = document.getElementById("portrait-settled");
          if (settled) gsap.to(settled, { opacity: 0, duration: 0.15 });
        },
      });
    });

    requestAnimationFrame(() => {
      syncFlight(0);
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, [ready]);

  return (
    <div
      ref={flyRef}
      className="portrait-fly overflow-hidden border border-[#E2C58A]/50 bg-charcoal shadow-[0_24px_60px_rgba(0,0,0,0.4)] will-change-[left,top,width,height]"
      style={{ position: "fixed", left: -9999, top: 0, width: 1, height: 1, zIndex: 45 }}
      aria-hidden
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={profile.portrait}
        alt=""
        className="h-full w-full object-cover"
        draggable={false}
      />
    </div>
  );
}
