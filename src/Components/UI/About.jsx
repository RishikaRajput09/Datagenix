"use client";

import { useState, useEffect, useRef } from "react";

const CARDS = [
  {
    symbol: "◈",
    tag: "Who We Are",
    heading: "Engineering AI & IoT Innovation",
    body: "We design intelligent products that combine embedded systems, IoT, data analytics, and AI to solve practical industrial problems and leave an imprint.",
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
    footer: "Helping businesses grow smarter and faster.",
  },
  {
    symbol: "◎",
    tag: "Our Vision",
    heading: "AI & Data Skill Development",
    body: "We believe AI should not only transform businesses but also contribute to sustainable innovation, responsible technology, and future-ready talent development.",
    impacts: [
      "Data Science, AI training, mentorship and career guidance.",
      "Supporting innovation aligned with National and UN Sustainable Development Goals.",
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
    bg-[#050505] text-white rounded-3xl p-6  sm:p-7 lg:p-9 lg:pb-7 flex flex-col relative overflow-hidden cursor-default
    transition-all duration-900 ease-out


    ${hovered
          ? "border border-[rgba(33,198,207,1)] -translate-y-1.5 shadow-[0_0_15px_rgba(33,198,207,0.5),0_0_40px_rgba(33,198,207,0.3)]"
          : "border border-[rgba(33,198,207,0.9)] translate-y-0"
        }
        
  `}
    >
      {/* Top shimmer line */}
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[rgba(33,198,207,0.5)] to-transparent transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
      />

      {/* Corner glow */}
      <div
        className={`absolute -top-15 -left-15 w-45 h-45 rounded-full bg-[radial-gradient(circle,rgba(33,198,207,0.07)_0%,transparent_70%)] pointer-events-none transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
      />

      {/* Symbol */}
      <div className="text-xl sm:text-2xl text-[rgba(0,242,255,0.95)] mb-4 sm:mb-5 leading-none drop-shadow-[0_0_8px_rgba(33,198,207,0.55)]">
        {card.symbol}
      </div>

      {/* Tag */}
      <div className="font-['DM_Sans',sans-serif] text-[0.58rem] sm:text-[0.63rem] font-medium tracking-[0.16em] uppercase text-[rgba(0,242,255,0.95)] mb-2">
        {card.tag}
      </div>

      {/* Heading */}
      <h3 className="font-['Syne',sans-serif] text-[0.95rem] sm:text-[1.05rem] lg:text-[1.12rem] font-bold leading-[1.3] tracking-[-0.01em] m-0 mb-3 sm:mb-4">
        {card.heading}
      </h3>

      {/* Divider */}
      <div className="w-8 h-px bg-[rgba(33,198,207,0.3)] mb-3 sm:mb-4" />

      {/* Body */}
      <p className="font-['DM_Sans',sans-serif] text-[0.8rem] sm:text-sm leading-6 sm:leading-7 text-[rgba(199,226,228,0.95)] m-0 mb-5 sm:mb-6">
        {card.body}
      </p>

      {/* Impact label */}
      <div className="font-['DM_Sans',sans-serif] text-[0.58rem] sm:text-[0.6rem] font-medium tracking-[0.16em] uppercase text-[rgba(33,198,207,0.9)] mb-2">
        Impact
      </div>

      {/* Impact bullets */}
      <ul className="list-none p-0 m-0 mb-5 sm:mb-6 flex flex-col gap-2 sm:gap-2.5 flex-1">
        {card.impacts.map((pt, j) => (
          <li
            key={j}
            className="flex items-start gap-2 sm:gap-2.5 font-['DM_Sans',sans-serif] text-[0.75rem] sm:text-[0.8rem] leading-[1.6] text-[rgba(251,249,249,0.9)]"
          >
            <span className="w-1 h-1 rounded-full bg-[#21C6CF] shrink-0 mt-1.5 sm:mt-1.75 shadow-[0_0_5px_rgba(33,198,207,0.6)] inline-block" />
            {pt}
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="border-t border-[rgba(255,255,255,0.05)] pt-4 sm:pt-4.5 font-['DM_Sans',sans-serif] text-[0.72rem] sm:text-[0.78rem] italic text-[rgba(33,198,207,0.6)] leading-normal">
        {card.footer}
      </div>
    </div>
  );
}

export default function AboutSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-none relative top-1 overflow-hidden py-10 sm:py-14 lg:py-7.5 lg:pb-16"
    >


      {/* Top glow */}
      <div className="absolute top-30 left-1/2 -translate-x-1/2 w-75 sm:w-125 lg:w-175 h-75 sm:h-87.5 lg:h-100 bg-[radial-gradient(ellipse_at_center,rgba(33,198,207,0.07)_0%,transparent_70%)] pointer-events-none" />

      {/* Inner */}
      <div className="relative z-2 max-w-300 mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div
          className="text-center mb-8 sm:mb-10 lg:mb-6
    transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        >

          {/* Eyebrow */}
          <div className="text-center">

            <div className="inline-flex items-center gap-2 font-['DM_Sans',sans-serif] text-[0.62rem] sm:text-[0.68rem] font-medium tracking-[0.18em] uppercase text-[#21C6CF] mb-4 sm:mb-5 mx-auto w-fit">
              <span className="w-1.25 h-1.25 rounded-full bg-[#28E7C5] shadow-[0_0_8px_#21C6CF] inline-block shrink-0" />
              About DatagenixAi
            </div>

            <h2 className="font-['Syne',sans-serif] text-[1.7rem] sm:text-[2.2rem] lg:text-[clamp(2rem,3.2vw,3.2rem)] font-bold text-white leading-[1.2] tracking-[-0.02em] max-w-[90%] sm:max-w-150 lg:max-w-180 mx-auto">
              Building the Future with{" "}
              <span className="text-[#28E7C5]">Intelligent Data</span> & AI
            </h2>

          </div>
        </div>

        {/* Cards — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className={`
      transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
    `}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Card card={card} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}