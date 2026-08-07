"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";

export default function Projects() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollBy(dir: number) {
    scrollerRef.current?.scrollBy({ left: dir * 420, behavior: "smooth" });
  }

  return (
    <section
      id="projects"
      className="relative z-20 isolate overflow-hidden bg-[#1F3D2B] py-20 text-cream md:py-24"
      data-mood="forest"
    >
      <div className="container-editorial relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#E8C97A]">
              Projects
            </p>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.05] text-cream">
              Selected
              <span className="italic text-[#E8C97A]"> work.</span>
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-cream/75">
              Detailed case work across telehealth, enterprise ERP, social products, luxury travel,
              and desktop finance — built with MERN, Next.js, PHP, and systems languages.
            </p>
          </motion.div>

          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous projects"
              onClick={() => scrollBy(-1)}
              className="h-11 w-11 border border-[#E8C97A]/40 text-[#E8C97A] transition hover:bg-[#E8C97A]/10"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next projects"
              onClick={() => scrollBy(1)}
              className="h-11 w-11 border border-[#E8C97A]/40 text-[#E8C97A] transition hover:bg-[#E8C97A]/10"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <motion.div
        ref={scrollerRef}
        className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 scrollbar-none md:gap-6 md:px-[max(1rem,calc((100vw-1200px)/2+1rem))]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {profile.projects.map((project, i) => (
          <motion.article
            key={project.title}
            itemScope
            itemType="https://schema.org/CreativeWork"
            className="flex w-[min(88vw,440px)] shrink-0 snap-start flex-col overflow-hidden border border-[#E8C97A]/25 bg-[#152820] md:w-[460px]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            whileHover={{ y: -6, borderColor: "rgba(232,201,122,0.55)" }}
          >
            <div className="flex aspect-[16/10] w-full items-center justify-center bg-[#0f1c14]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.seoDescription}
                itemProp="image"
                className="max-h-full max-w-full object-contain"
              />
            </div>            <div className="flex flex-1 flex-col p-5 md:p-6">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#E8C97A]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 itemProp="name" className="mt-1 font-display text-2xl text-cream">
                {project.title}
              </h3>
              <p itemProp="description" className="mt-2 text-[14px] leading-relaxed text-cream/82">
                {project.description}
              </p>
              <ul className="mt-3 space-y-1.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-[13px] leading-snug text-cream/70">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#E8C97A]" />
                    {h}
                  </li>
                ))}
              </ul>
              <meta itemProp="keywords" content={project.stack.join(", ")} />
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="border border-[#E8C97A]/35 px-2.5 py-1 text-[10px] uppercase tracking-wide text-[#E8C97A]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.url !== "#" && (
                <a
                  href={project.url}
                  itemProp="url"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-thin mt-auto inline-flex items-center gap-1.5 pt-4 text-sm text-[#E8C97A] hover:text-cream"
                >
                  Visit live project <ExternalLink size={14} />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
