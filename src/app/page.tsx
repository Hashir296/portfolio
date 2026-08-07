"use client";

import { useCallback, useState } from "react";
import Providers from "@/components/Providers";
import CurtainIntro from "@/components/CurtainIntro";
import Navbar from "@/components/Navbar";
import ScrollChrome from "@/components/ScrollChrome";
import PortraitFlight from "@/components/PortraitFlight";
import MoodScroller from "@/components/MoodScroller";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";

export default function HomePage() {
  const [ready, setReady] = useState(false);
  const onDone = useCallback(() => setReady(true), []);

  return (
    <Providers>
      <CurtainIntro onDone={onDone} />
      <Navbar />
      <ScrollChrome ready={ready} />
      <PortraitFlight ready={ready} />
      <MoodScroller />
      <main>
        <Hero />
        <Summary />
        <MarqueeStrip />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Footer />
      </main>
      <AIAssistant />
    </Providers>
  );
}
