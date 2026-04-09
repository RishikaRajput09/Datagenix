"use client";
import { useEffect } from "react";

import HeroSection from "@/Components/UI/HeroSec";
import AboutSection from "@/Components/UI/About";
import WhyChooseUs from "@/Components/UI/ChooseUs";
import SolutionsSection from "@/Components/UI/KeyFeatures";
import ImpactSection from "@/Components/UI/Impact";
import ESGSection from "@/Components/UI/ESG";
import WhatSetsUsApart from "@/Components/UI/Benefits";
import AwardsSection from "@/Components/UI/Awards";
import CTASection from "@/Components/UI/CTAsection";
import TestimonialsSection from "@/Components/UI/Testimonials";
import ContactSection from "@/Components/UI/Contact";
import { HexBackground } from "@/Components/UI/HexBackground";

export default function RootLayout({children}) {

  useEffect(() => {
    if (window.location.hash === "#contact") {
      const el = document.getElementById("contact");
      if (el) {
        setTimeout(() => {
          window.scrollTo({
            top: el.offsetTop - 80, // navbar offset
            behavior: "smooth"
          });
        }, 100);
      }
    }
  }, []);

  return (
    <main className="bg-[#050505] text-white">
      <HexBackground />
      <HeroSection />
      <AboutSection/>
      <WhyChooseUs/>
      <SolutionsSection/>
      <ImpactSection/>
      <ESGSection/>
      <WhatSetsUsApart/>
      <AwardsSection/>
      <CTASection/>
      <TestimonialsSection/>
      <ContactSection/>
      {children}
    </main>
  );
}