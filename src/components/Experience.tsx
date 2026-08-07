"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "@/data/profile";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !root.current) return;

    const ctx = gsap.context(() => {
      const line = root.current!.querySelector(".exp-progress") as HTMLElement | null;
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root.current!.querySelector(".exp-track"),
              start: "top 70%",
              end: "bottom 45%",
              scrub: 0.6,
            },
          }
        );
      }

      gsap.utils.toArray<HTMLElement>(".exp-node").forEach((node) => {
        gsap.fromTo(
          node,
          { scale: 0.5, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: node,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={root}
      className="relative z-10 isolate overflow-hidden bg-[#F5F1E8] py-20 md:py-24"
      data-mood="burgundy"
    >
      <div className="container-editorial relative">
        <div className="grid items-end gap-6 md:grid-cols-[1.3fr_0.7fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#B08D57]">
              Experience
            </p>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.05] text-charcoal">
              Roles that
              <span className="block italic text-forest">shipped products.</span>
            </h2>
          </motion.div>

          <motion.p
            className="max-w-sm text-[15px] leading-relaxed text-charcoal/70 md:justify-self-end md:text-right"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            From internships to live international client delivery — building with MERN, Next.js & PHP.
          </motion.p>
        </div>

        <div className="exp-track relative mt-14">
          <div className="pointer-events-none absolute bottom-4 left-[18px] top-4 hidden w-[2px] bg-[#E4DCC8] md:left-1/2 md:block md:-translate-x-px">
            <div className="exp-progress h-full origin-top bg-gradient-to-b from-[#B08D57] via-[#6E2C2C] to-[#B08D57]" />
          </div>

          <div className="space-y-8 md:space-y-12">
            {profile.experience.map((job, i) => {
              const left = i % 2 === 0;
              const present = /present/i.test(job.period);

              return (
                <div
                  key={job.role + job.period}
                  className="relative grid md:grid-cols-2 md:gap-10"
                >
                  <div className="exp-node absolute left-[11px] top-8 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[#B08D57] bg-[#F5F1E8] md:left-1/2 md:block" />

                  {!left && <div className="hidden md:block" />}

                  <motion.article
                    className={`relative ml-10 border border-[#E4DCC8] bg-[#FAF7F0] p-6 md:ml-0 md:p-8 ${
                      left ? "md:mr-8" : "md:ml-8"
                    }`}
                    initial={{ opacity: 0, y: 36, x: left ? -20 : 20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -3, borderColor: "rgba(176,141,87,0.65)" }}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-display text-sm tracking-[0.22em] text-[#B08D57]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {present && (
                        <span className="rounded-full bg-forest px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E8C97A]">
                          Present
                        </span>
                      )}
                      <span className="text-[11px] uppercase tracking-[0.16em] text-charcoal/50">
                        {job.type}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-[1.75rem] leading-tight text-charcoal md:text-3xl">
                      {job.role}
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px]">
                      <span className="font-medium text-forest">{job.company}</span>
                      <span className="text-[#B08D57]">·</span>
                      <span className="text-charcoal/70">{job.period}</span>
                    </div>

                    <ul className="mt-5 space-y-2.5">
                      {job.points.map((point, pi) => (
                        <motion.li
                          key={point}
                          className="flex gap-3 text-[15px] leading-relaxed text-charcoal"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.12 + pi * 0.07, duration: 0.35 }}
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08D57]" />
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.article>

                  {left && <div className="hidden md:block" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
