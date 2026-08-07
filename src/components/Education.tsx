"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function Education() {
  return (
    <section
      id="education"
      className="relative z-10 isolate overflow-hidden bg-[#F5F1E8] py-20 md:py-24"
      data-mood="forest"
    >
      <div className="pointer-events-none absolute -right-20 top-16 h-56 w-56 rounded-full bg-[#B08D57]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-48 w-48 rounded-full bg-[#1F3D2B]/8 blur-3xl" />

      <div className="container-editorial relative">
        <div className="grid items-end gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#B08D57]">
              Education
            </p>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.05] text-charcoal">
              Academic
              <span className="italic text-forest"> foundation.</span>
            </h2>
          </motion.div>

          <motion.p
            className="max-w-sm text-[15px] leading-relaxed text-charcoal/70 md:justify-self-end md:text-right"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.45 }}
          >
            Building a strong CS base while shipping real products in parallel.
          </motion.p>
        </div>

        <div className="relative mt-12">
          {/* Vertical accent line */}
          <div className="pointer-events-none absolute bottom-0 left-4 top-0 w-px bg-[#E4DCC8] md:left-6">
            <motion.div
              className="h-full origin-top bg-[#B08D57]"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="space-y-5">
            {profile.education.map((ed, i) => {
              const present = /present/i.test(ed.period);
              return (
                <motion.article
                  key={ed.degree}
                  className="relative ml-10 border border-[#E4DCC8] bg-[#FAF7F0] p-6 md:ml-14 md:p-8"
                  initial={{ opacity: 0, x: 36, y: 16 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, borderColor: "rgba(176,141,87,0.65)" }}
                >
                  {/* Timeline node */}
                  <motion.span
                    className="absolute -left-[34px] top-8 h-3.5 w-3.5 rounded-full border-2 border-[#B08D57] bg-[#F5F1E8] md:-left-[46px]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.12, type: "spring", stiffness: 320, damping: 18 }}
                  />

                  <span className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-[#B08D57]/45" />
                  <span className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-[#B08D57]/45" />
                  <span className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-[#B08D57]/45" />
                  <span className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-[#B08D57]/45" />

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
                      {ed.period}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl leading-tight text-charcoal md:text-3xl">
                    {ed.degree}
                  </h3>
                  <p className="mt-2 text-[16px] text-forest">{ed.school}</p>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Languages row */}
        <motion.div
          className="mt-10 border border-[#E4DCC8] bg-[#FAF7F0] p-5 md:p-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#B08D57]">
            Languages
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {profile.languages.map((lang, i) => (
              <motion.span
                key={lang.name}
                className="border border-[#B08D57]/45 bg-[#F5F1E8] px-4 py-2 text-[15px] text-charcoal"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.08, duration: 0.35 }}
                whileHover={{ y: -3, borderColor: "#B08D57" }}
              >
                {lang.name} · {lang.level}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
