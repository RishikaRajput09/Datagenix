"use client";

import Link from "next/link";
import { HoverBorderGradient } from "./noiseEffectButton";

const CARDS = [
  {
    href: "/solutions/ai-iot-smart-products",
    image: "/Images/solution.png",
    heading: "AI & IoT Smart Products",
    body: "Industrial automation, edge AI systems, predictive maintenance, and intelligent monitoring solutions.",
  },
  {
    href: "/solutions/ai-business-solutions",
    image: "/Images/business.png",
    heading: "AI-Powered Business Solutions",
    body: "Custom AI systems, ERP/CRM platforms, AI agents, workflow automation, and data intelligence.",
  },
  {
    href: "/solutions/ai-talent-development",
    image: "/Images/training.png",
    heading: "AI Talent Development",
    body: "Practical AI, Data Science, and automation training designed to create industry-ready professionals.",
  },
];

export default function SolutionsSection() {
  return (
    <section className="bg-[#050505] relative overflow-hidden py-4">

      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(33,198,207,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(33,198,207,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(33,198,207,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="mb-10 sm:mb-12">

          {/* Eyebrow */}
          <div className="text-center">

            <div className="inline-flex items-center gap-2 font-['DM_Sans'] text-[0.62rem] sm:text-[0.68rem] font-medium tracking-[0.18em] uppercase text-[#21C6CF] mb-3 mx-auto w-fit">
              <span className="w-[5px] h-[5px] rounded-full bg-[#21C6CF] shadow-[0_0_8px_#21C6CF]" />
              What We Do
            </div>

            <h2 className="font-['Syne'] text-[1.8rem] sm:text-[2.4rem] lg:text-[3rem] font-bold text-white leading-[1.1] tracking-[-0.02em] max-w-2xl mx-auto mb-4">
              We Bridge the Gap Between{" "}
              <span className="text-[#21C6CF]">AI Innovation</span> and Real-World Impact
            </h2>

          </div>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="group flex flex-col bg-[#0d0d0d] border border-[rgba(33,198,207,0.08)] rounded-2xl overflow-hidden hover:border-[rgba(33,198,207,0.22)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image area */}
              <div className="relative h-[240px] sm:h-[280px] lg:h-[300px] overflow-hidden bg-[#0a1a1c]">
                <img
                  src={card.image}
                  alt={card.heading}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient fade into card body */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/20 to-transparent" />

                {/* Top shimmer on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(33,198,207,0.5)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6 sm:p-7 lg:p-8">

                {/* Divider */}
                <div className="w-8 h-px bg-[rgba(33,198,207,0.3)] mb-4" />

                <h3 className="font-['Syne',sans-serif] text-[1rem] sm:text-[1.05rem] font-bold text-white leading-snug mb-3">
                  {card.heading}
                </h3>

                <p className="font-['DM_Sans',sans-serif] text-[0.82rem] leading-[1.7] text-[rgba(255,255,255,0.4)] flex-1 mb-6">
                  {card.body}
                </p>

                {/* Read More link */}
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 font-['DM_Sans',sans-serif] text-[0.8rem] font-semibold text-[rgba(33,198,207,0.7)] hover:text-[#21C6CF] transition-colors duration-200 group/link"
                >
                  Read More
                  <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="flex justify-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
            <Link
              href="/enquiry"
              className="group relative overflow-hidden inline-block px-7 py-3.5 font-['DM_Sans',sans-serif] text-[0.82rem] font-semibold tracking-[0.06em] text-white bg-black rounded-2xl transition-shadow duration-300 "
            >

              <span className="relative z-10 whitespace-nowrap">Enquire for Solutions →</span>
            </Link>
          </HoverBorderGradient>
        </div>

      </div>
    </section>
  );
}