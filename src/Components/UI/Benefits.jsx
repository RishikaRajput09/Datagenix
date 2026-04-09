"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5">
        <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h1V6a4 4 0 0 1 4-4z" />
        <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
        <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
        <path d="M9 14s1 1.5 3 1.5 3-1.5 3-1.5" />
        <path d="M12 2v2M8 3.5l1 1.7M16 3.5l-1 1.7" />
      </svg>
    ),
    number: "01",
    title: "Multidisciplinary Tech Expertise",
    body: "A rare combination of Electrical, Electronics, Embedded Systems, IoT, Data Science, and AI expertise under one roof.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
        <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="15" x2="23" y2="15" />
        <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="15" x2="4" y2="15" />
      </svg>
    ),
    number: "02",
    title: "Industry Experience",
    body: "Built by professionals with 12+ years of hands-on industrial R&D and technology development experience.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5">
        <circle cx="12" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" />
        <line x1="12" y1="7" x2="12" y2="13" />
        <line x1="12" y1="13" x2="5" y2="17" />
        <line x1="12" y1="13" x2="19" y2="17" />
      </svg>
    ),
    number: "03",
    title: "End-to-End AI Ecosystem",
    body: "From AI product development and business transformation to AI capability building and training.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    number: "04",
    title: "Innovation-First Approach",
    body: "Focused on developing AI-native and IoT-driven intelligent products that solve real problems.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
        <line x1="2" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="22" y2="12" />
      </svg>
    ),
    number: "05",
    title: "Practical Problem Solving",
    body: "Every solution is designed to deliver measurable business impact, not just theoretical results.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    number: "06",
    title: "Responsible AI Vision",
    body: "Committed to sustainable innovation and workforce empowerment, aligned with IndiaAI, Skill India, and SDGs.",
  },
];

function useReveal(threshold = 0.08) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FeatureCard({ feature, side, visible, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        bg-[#0a0a0a] rounded-2xl p-5 flex items-start gap-3.5
        border transition-colors duration-300 ease-in-out cursor-default relative overflow-hidden
        ${side === "right" ? "flex-row-reverse" : "flex-row"}
        ${hovered ? "border-[rgba(33,198,207,0.28)]" : "border-[rgba(33,198,207,0.08)]"}
      `}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateX(0) translateY(0)"
          : side === "left"
            ? "translateX(-32px) translateY(10px)"
            : "translateX(32px) translateY(10px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {/* Shimmer top */}
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[rgba(33,198,207,0.5)] to-transparent transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
      />

      {/* Icon box */}
      <div
        className={`
          w-10.5 h-10.5 rounded-[10px] shrink-0
          border border-[rgba(33,198,207,0.2)]
          flex items-center justify-center text-[#21C6CF]
          transition-all duration-300
          ${hovered ? "bg-[rgba(33,198,207,0.15)] drop-shadow-[0_0_6px_rgba(33,198,207,0.4)]" : "bg-[rgba(33,198,207,0.07)]"}
        `}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.7)",
          transition: `opacity 0.4s ease ${delay + 150}ms, transform 0.4s cubic-bezier(0.34,1.56,0.64,1) ${delay + 150}ms`,
        }}
      >
        {feature.icon}
      </div>

      {/* Text */}
      <div className={`flex-1 ${side === "right" ? "text-right" : "text-left"}`}>
        <div className="font-['DM_Sans',sans-serif] text-[0.58rem] font-semibold tracking-[0.15em] uppercase text-[rgba(33,198,207,0.55)] mb-1">
          {feature.number}
        </div>
        <h4 className="font-['Syne',sans-serif] m-0 mb-1.5 text-[0.9rem] font-bold text-white leading-[1.3] tracking-[-0.01em]">
          {feature.title}
        </h4>
        <p className="font-['DM_Sans',sans-serif] m-0 text-[0.75rem] leading-[1.65] text-[rgba(255,255,255,0.4)]">
          {feature.body}
        </p>
      </div>
    </div>
  );
}

export default function WhatSetsUsApart() {
  const [sectionRef, visible] = useReveal(0.06);
  const left = FEATURES.slice(0, 3);
  const right = FEATURES.slice(3, 6);

  return (
    <section
      id="what-sets-us-apart"
      ref={sectionRef}
      className="bg-transparent relative overflow-hidden py-2"
    >
      {/* Top radial glow */}
      <div className="absolute -top-30 left-1/2 -translate-x-1/2 w-175 h-100 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(33,198,207,0.07)_0%,transparent_70%)]" />
      {/* Center bottom glow */}
      <div className="absolute -bottom-15 left-1/2 -translate-x-1/2 w-125 h-125 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(33,198,207,0.12)_0%,transparent_65%)]" />

      <div className="relative z-2 max-w-300 mx-auto px-6">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(14px)",
              transition: "opacity 0.55s ease 0ms, transform 0.55s ease 0ms",
            }}
          >
            <div className="inline-flex items-center gap-2 font-['DM_Sans',sans-serif] text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-[#21C6CF] mb-4">
              <span className="w-1.25 h-1.25 rounded-full bg-[#21C6CF] shadow-[0_0_8px_#21C6CF] inline-block shrink-0" />
              What Sets Us Apart
            </div>
          </div>

          <h2
            className="font-['Syne',sans-serif] text-[clamp(1.9rem,3.2vw,3rem)] font-bold text-white leading-[1.2] tracking-[-0.02em] max-w-160 mx-auto m-0"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.65s ease 80ms, transform 0.65s ease 80ms",
            }}
          >
            The <span className="text-[#21C6CF]">DatagenixAi</span> Advantage
          </h2>
        </div>

        {/* ── 3-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">

          {/* Left cards — stagger from left */}
          <div className="flex flex-col gap-4">
            {left.map((f, i) => (
              <FeatureCard key={i} feature={f} side="left" visible={visible} delay={160 + i * 110} />
            ))}
          </div>

          {/* Center phone — scales up from slightly below */}
          <div
            className="hidden lg:flex flex-col items-center justify-center relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.92)",
              transition: "opacity 0.8s ease 200ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) 200ms",
            }}
          >
            {/* Outer glow ring — fades in after phone */}
            <div
              className="absolute w-[320px] h-80 rounded-full bg-[radial-gradient(circle,rgba(33,198,207,0.13)_0%,transparent_70%)] border border-[rgba(33,198,207,0.12)] z-0"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 1s ease 600ms",
              }}
            />
            {/* Spinning dashed ring */}
            <div
              className="absolute w-65 h-65 rounded-full border border-dashed border-[rgba(33,198,207,0.15)] z-0 animate-spin"
              style={{ animationDuration: "30s" }}
            />
            <div className="relative z-1">
              <Image
                src="/Images/phone.png"
                alt="DatagenixAi Platform"
                width={220}
                height={420}
                className="object-contain drop-shadow-[0_0_40px_rgba(33,198,207,0.2)]"
              />
            </div>
          </div>

          {/* Right cards — stagger from right */}
          <div className="flex flex-col gap-4">
            {right.map((f, i) => (
              <FeatureCard key={i} feature={f} side="right" visible={visible} delay={160 + i * 110} />
            ))}
          </div>
        </div>

        {/* ── Impact Line — fades up last ── */}
        <div
          className="mt-8 text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 0.6s ease 620ms, transform 0.6s ease 620ms",
          }}
        >
          <p className="font-['Syne',sans-serif] text-[clamp(1rem,1.8vw,1.3rem)] font-bold text-white leading-normal mx-auto max-w-175 tracking-[-0.01em] m-0">
            Our work aims to create technology that{" "}
            <span className="text-[#21C6CF] drop-shadow-[0_0_20px_rgba(33,198,207,0.4)]">
              benefits businesses, society, and the nation.
            </span>
          </p>

          <div className="flex items-center justify-center gap-5 mt-4">
            <div className="flex-1 max-w-40 h-px bg-linear-to-r from-transparent to-[rgba(33,198,207,0.3)]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#21C6CF] shadow-[0_0_12px_#21C6CF] inline-block" />
            <div className="flex-1 max-w-40 h-px bg-linear-to-l from-transparent to-[rgba(33,198,207,0.3)]" />
          </div>
        </div>

      </div>
    </section>
  );
}