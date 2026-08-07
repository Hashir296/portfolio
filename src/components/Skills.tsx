"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { profile } from "@/data/profile";

const CORE = ["React.js", "Next.js", "Node.js", "MongoDB", "TypeScript", "Express.js"];

function SkillChip({ label, delay = 0 }: { label: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 20 });
  const sy = useSpring(y, { stiffness: 260, damping: 20 });
  const transform = useMotionTemplate`translate(${sx}px, ${sy}px)`;

  function onMove(e: React.PointerEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.22);
    y.set((e.clientY - r.top - r.height / 2) * 0.22);
  }

  return (
    <motion.span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ transform }}
      className="inline-flex cursor-default items-center border border-[#C9A86A]/55 bg-[#FAF7F0] px-4 py-2.5 text-[14px] text-charcoal transition-colors hover:border-[#B08D57] hover:bg-[#F5F1E8] hover:text-forest"
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.04 }}
    >
      {label}
    </motion.span>
  );
}

export default function Skills() {
  const groups = Object.entries(profile.skills);

  return (
    <section id="skills" className="relative overflow-hidden bg-[#F5F1E8] py-20 md:py-24" data-mood="forest">
      <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-[#B08D57]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-20 h-52 w-52 rounded-full bg-[#1F3D2B]/10 blur-3xl" />

      <div className="container-editorial relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#B08D57]">
            Skills
          </p>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.05] text-charcoal">
            Built to ship
            <span className="text-[#B08D57]">.</span>
          </h2>
          <p className="mt-3 max-w-md text-[16px] leading-relaxed text-charcoal/75">
            A focused MERN toolkit — from interface polish to APIs, databases, and deploy.
          </p>
        </motion.div>

        {/* Core stack spotlight */}
        <motion.div
          className="mt-12 border border-[#E4DCC8] bg-[#1F3D2B] p-6 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E8C97A]">
              Core stack
            </p>
            <p className="text-sm text-cream/65">Daily drivers</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {CORE.map((item, i) => (
              <motion.span
                key={item}
                className="border border-[#E8C97A]/45 bg-transparent px-4 py-2.5 font-display text-lg text-cream"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.45 }}
                whileHover={{ backgroundColor: "rgba(232,201,122,0.12)", y: -2 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Category bands */}
        <div className="mt-6 space-y-3">
          {groups.map(([group, items], gi) => (
            <motion.div
              key={group}
              className="group/row relative overflow-hidden border border-[#E4DCC8] bg-[#FAF7F0] transition hover:border-[#B08D57]/55"
              initial={{ opacity: 0, x: gi % 2 === 0 ? -28 : 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: gi * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-[#B08D57] transition duration-500 group-hover/row:scale-y-100" />

              <div className="grid gap-5 p-5 md:grid-cols-[200px_1fr] md:items-center md:gap-8 md:p-6">
                <div>
                  <p className="font-display text-sm tracking-[0.2em] text-[#B08D57]">
                    {String(gi + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 font-display text-2xl text-charcoal md:text-[1.7rem]">
                    {group}
                  </h3>
                  <p className="mt-1 text-xs text-charcoal/50">{items.length} skills</p>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {items.map((item, i) => (
                    <SkillChip key={item} label={item} delay={0.04 + i * 0.03} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
