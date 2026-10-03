"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import clsx from "clsx";
import { profile } from "@/data/profile";

type Project = (typeof profile.projects)[number];
type Group = "client" | "built" | "oss";

function groupOf(project: Project): Group {
  if ("group" in project && project.group) return project.group as Group;
  return "built";
}

function isLive(project: Project) {
  return project.url !== "#" && groupOf(project) !== "oss";
}

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  const live = isLive(project);
  const oss = groupOf(project) === "oss";
  const client = groupOf(project) === "client";
  const cta =
    "ctaLabel" in project && project.ctaLabel
      ? project.ctaLabel
      : "Visit live project";

  return (
    <motion.article
      itemScope
      itemType="https://schema.org/CreativeWork"
      className={clsx(
        "flex shrink-0 snap-start flex-col overflow-hidden bg-[#152820]",
        featured
          ? "w-full border-2 border-[#E8C97A]/70 shadow-[0_12px_48px_rgba(232,201,122,0.16)] md:max-w-[720px]"
          : "w-[min(88vw,440px)] border md:w-[460px]",
        live && !featured && "border-[#E8C97A]/55",
        oss && "border-cream/25",
        !live && !oss && !featured && "border-[#E8C97A]/25"
      )}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.5 }}
      whileHover={{ y: -6, borderColor: "rgba(232,201,122,0.7)" }}
    >
      <div className="relative flex aspect-[16/10] w-full items-center justify-center bg-[#0f1c14]">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.seoDescription}
            itemProp="image"
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-6 text-center">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#E8C97A]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="font-display text-2xl text-cream/85">{project.title}</p>
          </div>
        )}
        {live && (
          <span className="absolute right-3 top-3 rounded-full bg-[#E8C97A] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-charcoal">
            {client ? "Client · Live" : "Live"}
          </span>
        )}
        {oss && (
          <span className="absolute right-3 top-3 rounded-full border border-cream/40 bg-[#152820]/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E8C97A]">
            Open source
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-[#E8C97A]">
          {String(index + 1).padStart(2, "0")}
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
        {project.url !== "#" ? (
          <a
            href={project.url}
            itemProp="url"
            target="_blank"
            rel="noreferrer"
            className="icon-thin mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-[#E8C97A] hover:text-cream"
          >
            {cta}
            <ExternalLink size={14} />
          </a>
        ) : (
          <p className="mt-auto pt-4 text-sm tracking-wide text-[#E8C97A]/80">Live soon</p>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const projects = profile.projects;
  const clientWork = projects.filter((p) => groupOf(p) === "client");
  const selected = projects.filter((p) => groupOf(p) === "built");
  const oss = projects.filter((p) => groupOf(p) === "oss");

  function indexOf(project: Project) {
    return projects.findIndex((p) => p.title === project.title);
  }

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
            Client production first, then live products I shipped — plus a separate open-source
            contribution. Built with MERN, Next.js, PHP, and systems languages.
          </p>
        </motion.div>

        <div className="mt-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#E8C97A]">
            Client · live
          </p>
          <div className="flex flex-col gap-5">
            {clientWork.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={indexOf(project)}
                featured
              />
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#E8C97A]">
              Built & live
            </p>
            <p className="max-w-md text-[14px] text-cream/70">
              Shipped products — live links marked. Finance, ERP, social, AI, and design work.
            </p>
          </div>
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
        className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 scrollbar-none md:gap-6 md:px-[max(1rem,calc((100vw-1200px)/2+1rem))]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {selected.map((project) => (
          <ProjectCard key={project.title} project={project} index={indexOf(project)} />
        ))}
      </motion.div>

      <div className="container-editorial relative mt-16">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#E8C97A]">
          Open source
        </p>
        <p className="mb-6 max-w-md text-[14px] text-cream/70">
          Contributions to public repositories — kept apart from client and product work.
        </p>
        <div className="flex flex-wrap gap-5">
          {oss.map((project) => (
            <ProjectCard key={project.title} project={project} index={indexOf(project)} />
          ))}
        </div>
      </div>
    </section>
  );
}
