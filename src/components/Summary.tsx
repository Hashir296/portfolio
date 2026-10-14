"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function Summary() {
  const [lead, ...rest] = profile.about;

  return (
    <section
      id="summary"
      className="relative bg-[#F5F1E8] py-16 md:py-20"
      data-mood="gold"
      aria-labelledby="about-heading"
      itemScope
      itemType="https://schema.org/Person"
    >
      <meta itemProp="name" content={profile.name} />
      <meta itemProp="jobTitle" content={profile.title} />
      <meta itemProp="email" content={profile.email} />
      <meta itemProp="telephone" content={profile.phoneHref} />
      <meta itemProp="url" content={profile.portfolio} />
      <meta itemProp="description" content={profile.summary} />
      <meta itemProp="knowsAbout" content="MERN Stack, React, Next.js, Node.js, Express, MongoDB, JWT, AI features" />

      <div className="container-editorial grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div className="mx-auto w-full max-w-sm lg:mx-0">
          <div
            id="portrait-target"
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[10px] bg-ivory/60"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              id="portrait-settled"
              src={profile.portrait}
              alt={`${profile.name} — ${profile.title} in ${profile.location}. 1.5+ years building full-stack MERN and Next.js apps for international clients.`}
              itemProp="image"
              className="h-full w-full object-cover opacity-0 transition-opacity duration-200"
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#B08D57]">
            About
          </p>
          <h2
            id="about-heading"
            className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight text-charcoal"
          >
            {profile.name}
          </h2>
          <p className="mt-2 text-lg text-forest" itemProp="jobTitle">
            {profile.title}
          </p>
          <p className="mt-1 text-[15px] text-charcoal/65" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="addressLocality">Islamabad</span>,{" "}
            <span itemProp="addressCountry">Pakistan</span>
          </p>

          <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-charcoal">
            <p itemProp="description" className="text-charcoal/90">
              {lead}
            </p>
            {rest.map((para) => (
              <p key={para.slice(0, 28)}>{para}</p>
            ))}
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {profile.highlights.map((h, i) => (
              <motion.div
                key={h.label}
                className="border border-[#E4DCC8] bg-[#FAF7F0] px-3 py-3"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#B08D57]">
                  {h.label}
                </p>
                <p className="mt-1 font-display text-lg text-charcoal">{h.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {profile.languages.map((l) => (
              <span
                key={l.name}
                className="rounded-full border border-gold/60 bg-[#FAF7F0] px-3.5 py-1 text-sm text-charcoal"
                itemProp="knowsLanguage"
              >
                {l.name} · {l.level}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
