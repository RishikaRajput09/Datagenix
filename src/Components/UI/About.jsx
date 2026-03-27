"use client";

import { useState } from "react";

const CARDS = [
  {
    symbol: "◈",
    tag: "Who We Are",
    heading: "Engineering AI & IoT Innovation",
    body: "We design intelligent products that combine embedded systems, IoT, data analytics, and AI to solve real-world industrial problems.",
    impacts: [
      "Edge AI, predictive maintenance and smarter industrial systems.",
      "Efficient monitoring & automation products for various industries.",
    ],
    footer: "Transforming industries with smart technology.",
  },
  {
    symbol: "⬡",
    tag: "What We Do",
    heading: "AI Solutions for Business Growth",
    body: "We help organizations adopt AI through custom software, automation, and data intelligence to increase efficiency, reduce costs, and gain competitive advantage.",
    impacts: [
      "AI agents, workflow automation, AI-powered ERP & CRM systems.",
      "Data analytics, business intelligence and data-driven decision making.",
    ],
    footer: "Helping businesses grow smarter, faster to stay ahead of competition.",
  },
  {
    symbol: "◎",
    tag: "Our Vision",
    heading: "AI & Data Skill Development",
    body: "We believe AI should not only transform businesses but also contribute to sustainable innovation, responsible technology, and future-ready talent development.",
    impacts: [
      "Data Science, AI training, mentorship and career guidance.",
      "Supporting innovation aligned with National and UN Sustainable Development Goals (SDGs).",
    ],
    footer: "Creating future-ready AI leaders.",
  },
];

function Card({ card }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        bg-[#0a0a0a] rounded-2xl p-6 sm:p-7 lg:p-9 lg:pb-7 flex flex-col relative overflow-hidden cursor-default
        transition-all duration-300 ease-in-out
        ${hovered
          ? "border border-[rgba(33,198,207,0.28)] -translate-y-1.5"
          : "border border-[rgba(33,198,207,0.1)] translate-y-0"
        }
      `}
    >
      {/* Top shimmer line */}
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(33,198,207,0.5)] to-transparent transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
      />

      {/* Corner glow */}
      <div
        className={`absolute -top-[60px] -left-[60px] w-[180px] h-[180px] rounded-full bg-[radial-gradient(circle,rgba(33,198,207,0.07)_0%,transparent_70%)] pointer-events-none transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
      />

      {/* Symbol */}
      <div className="text-xl sm:text-2xl text-[#21C6CF] mb-4 sm:mb-5 leading-none drop-shadow-[0_0_8px_rgba(33,198,207,0.55)]">
        {card.symbol}
      </div>

      {/* Tag */}
      <div className="font-['DM_Sans',sans-serif] text-[0.58rem] sm:text-[0.63rem] font-medium tracking-[0.16em] uppercase text-[rgba(33,198,207,0.65)] mb-2">
        {card.tag}
      </div>

      {/* Heading */}
      <h3 className="font-['Syne',sans-serif] text-[0.95rem] sm:text-[1.05rem] lg:text-[1.12rem] font-bold text-white leading-[1.3] tracking-[-0.01em] m-0 mb-3 sm:mb-4">
        {card.heading}
      </h3>

      {/* Divider */}
      <div className="w-8 h-px bg-[rgba(33,198,207,0.3)] mb-3 sm:mb-4" />

      {/* Body */}
      <p className="font-['DM_Sans',sans-serif] text-[0.8rem] sm:text-sm leading-6 sm:leading-7 text-[rgba(255,255,255,0.45)] m-0 mb-5 sm:mb-6">
        {card.body}
      </p>

      {/* Impact label */}
      <div className="font-['DM_Sans',sans-serif] text-[0.58rem] sm:text-[0.6rem] font-medium tracking-[0.16em] uppercase text-[rgba(33,198,207,0.5)] mb-2">
        Impact
      </div>

      {/* Impact bullets */}
      <ul className="list-none p-0 m-0 mb-5 sm:mb-6 flex flex-col gap-2 sm:gap-2.5 flex-1">
        {card.impacts.map((pt, j) => (
          <li
            key={j}
            className="flex items-start gap-2 sm:gap-2.5 font-['DM_Sans',sans-serif] text-[0.75rem] sm:text-[0.8rem] leading-[1.6] text-[rgba(255,255,255,0.38)]"
          >
            <span className="w-1 h-1 rounded-full bg-[#21C6CF] shrink-0 mt-[6px] sm:mt-[7px] shadow-[0_0_5px_rgba(33,198,207,0.6)] inline-block" />
            {pt}
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="border-t border-[rgba(255,255,255,0.05)] pt-4 sm:pt-[18px] font-['DM_Sans',sans-serif] text-[0.72rem] sm:text-[0.78rem] italic text-[rgba(33,198,207,0.6)] leading-[1.5]">
        {card.footer}
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#050505] relative overflow-hidden py-10 sm:py-14 lg:py-[30px]"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(33,198,207,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(33,198,207,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top glow */}
      <div className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[350px] lg:h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(33,198,207,0.07)_0%,transparent_70%)] pointer-events-none" />

      {/* Inner */}
      <div className="relative z-[2] max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-6">

          {/* Eyebrow */}
          <div className="text-center">

            <div className="inline-flex items-center gap-2 font-['DM_Sans',sans-serif] text-[0.62rem] sm:text-[0.68rem] font-medium tracking-[0.18em] uppercase text-[#21C6CF] mb-4 sm:mb-5 mx-auto w-fit">
              <span className="w-[5px] h-[5px] rounded-full bg-[#21C6CF] shadow-[0_0_8px_#21C6CF] inline-block shrink-0" />
              About DatagenixAi
            </div>

            <h2 className="font-['Syne',sans-serif] text-[1.7rem] sm:text-[2.2rem] lg:text-[clamp(2rem,3.2vw,3.2rem)] font-bold text-white leading-[1.2] tracking-[-0.02em] max-w-[90%] sm:max-w-[600px] lg:max-w-[720px] mx-auto">
              Building the Future with{" "}
              <span className="text-[#21C6CF]">Intelligent Data</span> & AI
            </h2>

          </div>
        </div>

        {/* Cards — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {CARDS.map((card, i) => (
            <Card key={i} card={card} />
          ))}
        </div>

      </div>
    </section>
  );
}