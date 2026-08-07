"use client";

export default function MarqueeStrip() {
  const items = [
    "Junior MERN Stack Developer",
    "React · Next.js · Node.js",
    "MongoDB · Express · PHP",
    "AlphaNUIX Technologies",
    "Air University Islamabad",
    "Islamabad, Pakistan",
    "Open to opportunities",
  ];
  const line = items.join("     ·     ");

  return (
    <div
      className="overflow-hidden border-y border-[#E4DCC8] bg-[#1F3D2B] py-3.5"
      aria-hidden
    >
      <div className="marquee-track flex w-max whitespace-nowrap">
        {[0, 1].map((copy) => (
          <p
            key={copy}
            className="px-6 font-display text-lg tracking-[0.16em] text-[#E8C97A] md:text-xl"
          >
            {line}
            {"     ·     "}
          </p>
        ))}
      </div>
    </div>
  );
}
