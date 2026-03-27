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
export default function RootLayout({children}) {
  return (
    <main className="bg-[#050505] text-white">
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
      {children}
    </main>
  );
}