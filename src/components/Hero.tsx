"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import Button from "./ui/Button";

export default function Hero() {
  const displayName = profile.name.split(" ").slice(-2).join(" ");

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-forest text-cream"
      data-mood="forest"
    >
      <div className="absolute inset-0 z-0 bg-[linear-gradient(160deg,#1a3324_0%,#1F3D2B_45%,#142018_100%)]" />

      <div className="container-editorial relative z-10 grid min-h-screen items-center gap-10 pb-16 pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          <motion.p
            className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#E8C97A]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {profile.location}
          </motion.p>
          <motion.h1
            className="font-display text-[clamp(3.4rem,10vw,7.2rem)] font-medium leading-[0.9] tracking-tight text-cream"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {displayName.toUpperCase()}
            <span className="text-[#E8C97A]">.</span>
          </motion.h1>
          <p className="mt-4 font-display text-2xl text-[#E8C97A] md:text-3xl">
            {profile.title}
          </p>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-cream/90">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects" variant="light">
              View Projects
            </Button>
            <Button
              href={profile.cv}
              download={profile.cvFileName}
              variant="gold"
              className="bg-[#E2C58A] text-charcoal"
            >
              Download CV
            </Button>
            <Button href="#contact" variant="ghostLight">
              Contact Me
            </Button>
            <Button
              variant="ghostLight"
              onClick={() => window.dispatchEvent(new CustomEvent("open-ai-assistant"))}
            >
              Ask My AI
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div id="portrait-origin" className="aspect-[4/5] w-full" aria-hidden />
        </div>
      </div>
    </section>
  );
}
