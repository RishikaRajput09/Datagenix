"use client";

import { HexBackground } from "@/Components/UI/HexBackground";
import Hero from "./Hero";
import OriginStory from "./OriginStory";
import MissionVision from "./VM";
import TheGap from "./TheGap";
import ThreePillars from "./Pillars";
import CoreValues from "./Values";
import ImpactNumbers from "./ImpactNumbers";
import FounderSpotlight from "./Founder";




export default function AboutPage() {
  return (
    <main className="bg-linear-to-r from-[#140c30] via-[#153D4C] to-[#16A085]">
      <HexBackground />

      <Hero />
      <OriginStory />
      <MissionVision />
      <TheGap />
      <ThreePillars />
      <CoreValues />
      <ImpactNumbers />
      <FounderSpotlight />
    </main>
  );
}
