"use client";

import { motion } from "framer-motion";

export default function SectionLabel({ children }: { children: string }) {
  return (
    <motion.p
      className="mb-4 text-xs uppercase tracking-label text-gold"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.p>
  );
}

export function RevealHeading({ children }: { children: string }) {
  const words = children.split(" ");
  return (
    <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[1.05] tracking-tight text-charcoal">
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden align-bottom pb-1">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", filter: "blur(6px)", opacity: 0 }}
            whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ delay: i * 0.05, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </h2>
  );
}
