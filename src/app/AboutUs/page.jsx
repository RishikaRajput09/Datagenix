"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { HexBackground } from "@/Components/UI/HexBackground";

function useReveal(delay = 0) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setOn(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return {
    ref,
    style: {
      opacity: on ? 1 : 0,
      transform: on ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    },
  };
}

const GRID_BG = {
  backgroundImage:
    "linear-gradient(rgba(33,198,207,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(33,198,207,0.03) 1px,transparent 1px)",
  backgroundSize: "60px 60px",
};

function Eyebrow({ children }) {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
      style={{
        background: "rgba(33,198,207,0.08)",
        border: "1px solid rgba(33,198,207,0.25)",
        boxShadow: "0 0 20px rgba(33,198,207,0.12)",
        fontFamily: "'DM Sans',sans-serif",
        fontSize: "0.65rem",
        fontWeight: 600,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "#21C6CF",
        width: "fit-content",
      }}
    >
      {/* dot */}
      <span
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "#21C6CF",
          boxShadow: "0 0 6px #21C6CF",
        }}
      />

      {children}
    </div>
  );
}

function SectionHeading({ children }) {
  return (
    <h2
      className="text-[1.9rem] sm:text-[2.4rem] lg:text-[3rem] font-bold text-black leading-[1.1] tracking-[-0.02em]"
      style={{ fontFamily: "'Syne',sans-serif" }}
    >
      {children}
    </h2>
  );
}

function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  return (
    <section className="bg-[none] relative overflow-hidden min-h-[90vh] flex items-center py-12">
      {/* Top shimmer */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[rgba(33,198,207,0.3)] to-transparent" />

      <div className="relative z-10 max-w-300 mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 w-full">
        <div className="max-w-195">
          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.65s ease 100ms, transform 0.65s ease 100ms",
            }}
          >
            <Eyebrow>About DatagenixAi</Eyebrow>
          </div>

          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transition:
                "opacity 0.65s ease 200ms, transform 0.65s ease 200ms",
            }}
          >
            <h1
              className="text-[2.4rem] sm:text-[3.2rem] lg:text-[4.2rem] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-6"
              style={{ fontFamily: "'Syne',sans-serif" }}
            >
              Where Engineering Meets{" "}
              <span className="text-[#28E7C5]">Intelligence</span>
            </h1>
          </div>

          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transition:
                "opacity 0.65s ease 320ms, transform 0.65s ease 320ms",
            }}
          >
            <p
              className="text-[rgba(255,255,255,0.45)] text-[0.95rem] sm:text-[1.05rem] leading-[1.8] max-w-145 mb-10"
              style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}
            >
              Founded on a simple but powerful belief — Artificial Intelligence
              should not remain limited to large technology companies. It should
              empower businesses, industries, and individuals everywhere.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-3"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transition:
                "opacity 0.65s ease 420ms, transform 0.65s ease 420ms",
            }}
          >
            <Link
              href="/portfolio"
              className="group relative overflow-hidden inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#28E7C5] text-[#050505] text-[0.82rem] font-semibold tracking-[0.06em] uppercase transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(33,198,207,0.35)]"
              style={{ fontFamily: "'DM Sans',sans-serif" }}
            >
              <span className="absolute inset-0 bg-[#0a2f33] scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-[380ms]" />
              <span className="relative z-[1]">Our Work</span>
              <svg
                className="relative z-[1] w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M2 7H12M8 3L12 7L8 11"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="group relative overflow-hidden inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent border border-[rgba(33,198,207,0.3)] text-[#28E7C5] text-[0.82rem] font-semibold tracking-[0.06em] uppercase hover:border-[#21C6CF] transition-all duration-300"
              style={{ fontFamily: "'DM Sans',sans-serif" }}
            >
              <span className="absolute inset-0 bg-[rgba(33,198,207,0.08)] scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-[380ms]" />
              <span className="relative z-[1]">Contact Us</span>
              <svg
                className="relative z-[1] w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M2 7H12M8 3L12 7L8 11"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom shimmer */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[rgba(33,198,207,0.15)] to-transparent" />
    </section>
  );
}

const TIMELINE = [
  {
    year: "Roots",
    label: "Electronics & Embedded Systems",
    desc: "Deep expertise built across industrial R&D, hardware engineering, and embedded technology.",
  },
  {
    year: "Shift",
    label: "Data Without Intelligence",
    desc: "Witnessed how industries generated massive data but couldn't convert it into actionable intelligence.",
  },
  {
    year: "Gap",
    label: "AI Talent Shortage",
    desc: "Identified a growing disconnect between AI innovation and the skilled professionals needed to implement it.",
  },
  {
    year: "Birth",
    label: "DatagenixAi Founded",
    desc: "Created to bridge engineering depth with AI intelligence — for businesses and professionals alike.",
  },
  {
    year: "Birth",
    label: "DatagenixAi Founded",
    desc: "Created to bridge engineering depth with AI intelligence — for businesses and professionals alike.",
  },
];

function OriginStory() {
  const h = useReveal(0);
  const t = useReveal(120);

  return (
    <section className="bg-none relative overflow-hidden py-4 mb-12">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[rgba(33,198,207,0.1)] to-transparent" />

      <div className="relative z-10 max-w-300 mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">
          {/* Left: Story text */}
          <div
            ref={h.ref}
            style={h.style}
            className="lg:w-[48%] flex flex-col gap-0"
          >
            <Eyebrow>How We Started</Eyebrow>
            <SectionHeading>
              A Story Born from{" "}
              <span className="text-[#28E7C5]">Industry Reality</span>
            </SectionHeading>

            <div className="mt-8 flex flex-col gap-5">
              {[
                "Our journey began with deep roots in electronics, embedded systems, and industrial engineering. Over 12+ years, we worked closely with industries, understanding their operations from the inside out.",
                "We witnessed a recurring pattern — machines were generating data, businesses were generating data, but very few were able to convert it into intelligence.",
                "At the same time, a second challenge was emerging: a growing gap between AI innovation and the skilled talent needed to implement it in the real world.",
                "That is where DatagenixAi was born — not just to build AI products, but to build the entire ecosystem around AI.",
              ].map((para, i) => (
                <p
                  key={i}
                  className="text-[rgba(255,255,255,0.42)] text-[0.88rem] sm:text-[0.93rem] leading-[1.8]"
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Pull quote */}
            <div className="mt-8 pl-5 border-l-2 border-[#21C6CF]">
              <p
                className="text-[1rem] sm:text-[1.1rem] font-bold text-white leading-[1.6] italic "
                style={{ fontFamily: "'Syne',sans-serif" }}
              >
                "Machines were generating data. Businesses were generating data.
                But very few were able to convert it into{" "}
                <span className="text-[#28E7C5] not-italic">intelligence.</span>
                "
              </p>
            </div>
          </div>

          {/* Right: Timeline */}
          <div
            ref={t.ref}
            style={t.style}
            className="lg:w-[52%] flex flex-col gap-0 relative"
          >
            {/* Vertical line */}
            <div className="absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-[#21C6CF] via-[rgba(33,198,207,0.3)] to-transparent" />

            {TIMELINE.map((item, i) => (
              <div key={i} className="flex gap-5 pb-8 last:pb-0">
                {/* Dot */}
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-[rgba(33,198,207,0.25)] flex items-center justify-center z-[1]"
                    style={{ boxShadow: "0 0 16px rgba(33,198,207,0.1)" }}
                  >
                    <span
                      className="text-[#21C6CF] text-[0.6rem] font-bold tracking-wider"
                      style={{ fontFamily: "'DM Sans',sans-serif" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1 pt-1.5 pb-2">
                  <div
                    className="text-[#21C6CF] text-[0.6rem] tracking-[0.18em] uppercase font-medium mb-1"
                    style={{ fontFamily: "'DM Sans',sans-serif" }}
                  >
                    {item.year}
                  </div>
                  <h4
                    className="text-white font-bold text-[0.95rem] mb-1.5 leading-snug"
                    style={{ fontFamily: "'Syne',sans-serif" }}
                  >
                    {item.label}
                  </h4>
                  <p
                    className="text-[rgba(255,255,255,0.38)] text-[0.8rem] leading-[1.65]"
                    style={{
                      fontFamily: "'DM Sans',sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TheGap() {
  const r = useReveal(0);

  return (
    <section className="bg-none w-[97%] mx-auto rounded-2xl relative overflow-hidden py-8">
      <div
        ref={r.ref}
        style={r.style}
        className="relative z-10 max-w-325 mx-auto px-4 sm:px-6 lg:px-10"
      >
        <div className="text-center mb-12">
          <Eyebrow>The Problem We Solved</Eyebrow>
          <SectionHeading>
            The Gap We Set Out to <span className="text-[#28E7C5]">Fill</span>
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              num: "01",
              title: "Industries Couldn't Convert Data into Intelligence",
              body: "Machines and businesses were generating enormous amounts of data across every operation. Yet the tools, expertise, and systems to turn that data into actionable decisions simply didn't exist at the ground level.",
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              ),
            },
            {
              num: "02",
              title: "Growing Gap Between AI Innovation & Skilled Talent",
              body: "AI was advancing rapidly in research labs and large tech companies, but the professionals and organizations who needed it most lacked practical skills, mentorship, and real-world exposure to implement it effectively.",
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              ),
            },
            {
              num: "03",
              title: "Lack of Scalable Real-World Implementation",
              body: "Even when solutions existed, they were not scalable or adaptable for diverse industries, creating a disconnect between innovation and execution.",
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              ),
            },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                borderRadius: "18px",
                padding: "36px 28px 60px",
                minHeight: "320px",
                background: "rgba(10, 16, 35, 0.55)",
                overflow: "hidden",
                boxShadow: `
                0 10px 40px -10px rgba(33,198,207,0.25),
                0 20px 80px -20px rgba(33,198,207,0.18),
                inset 0 0 0 1px rgba(33,198,207,0.25),
                inset 0 1px 0 rgba(33,198,207,0.2),
              `,
              }}
            >
              {/* Subtle top shimmer */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "20%",
                  right: "20%",
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, rgba(100,160,255,0.4), transparent)",
                }}
              />

              {/* BOTTOM BLUE FLOOD — tight, bright, white-blue tint */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "50px",
                  background:
                    "linear-gradient(to top, rgba(33,198,207,0.75) 0%, rgba(33,198,207,0.45) 30%, rgba(33,198,207,0.18) 60%, transparent 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Content stays above glow */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-[#21C6CF] shrink-0"
                    style={{
                      background: "rgba(33,130,255,0.1)",
                      border: "1px solid rgba(33,130,255,0.2)",
                    }}
                  >
                    {card.icon}
                  </div>
                  <span
                    className="text-[0.65rem] tracking-[0.2em] uppercase font-semibold mt-2.5"
                    style={{
                      color: "rgba(120,170,255,0.4)",
                      fontFamily: "'DM Sans',sans-serif",
                    }}
                  >
                    {card.num}
                  </span>
                </div>
                <h3
                  className="text-white font-bold text-[1.05rem] sm:text-[1.15rem] leading-[1.4] mb-3"
                  style={{ fontFamily: "'Syne',sans-serif" }}
                >
                  {card.title}
                </h3>
                <div
                  className="w-7 h-0.5 rounded-full mb-3"
                  style={{ background: "#21C6CF" }}
                />
                <p
                  className="text-[rgba(255,255,255,0.35)] text-[0.82rem] leading-[1.75]"
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    num: "01",
    title: "AI & IoT Product Innovation",
    desc: "Building intelligent hardware-software systems that bring AI into the physical world — from smart sensors to autonomous monitoring platforms. Building intelligent hardware-software systems that bring AI into the physical world — from smart sensors to autonomous monitoring platforms. Building intelligent hardware-software systems that bring AI into the physical world — from smart sensors to autonomous monitoring platforms. ",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="15" x2="23" y2="15" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="15" x2="4" y2="15" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Custom AI Solutions for Businesses",
    desc: "Designing and deploying tailored AI and automation solutions that solve real operational challenges — improving efficiency, reducing costs, and enabling smarter decisions. Building intelligent hardware-software systems that bring AI into the physical world — from smart sensors to autonomous monitoring platforms. Building intelligent hardware-software systems that bring AI into the physical world — from smart sensors to autonomous monitoring platforms.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "AI Talent Development",
    desc: "Equipping professionals and students with practical AI skills through industry-oriented training, mentorship, and real-world project exposure. Building intelligent hardware-software systems that bring AI into the physical world — from smart sensors to autonomous monitoring platforms. Building intelligent hardware-software systems that bring AI into the physical world — from smart sensors to autonomous monitoring platforms.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
];

function ThreePillars() {
  const r = useReveal(0);

  return (
    <section className="bg-none relative overflow-hidden py-4 mb-12">
      <div
        ref={r.ref}
        style={r.style}
        className="relative z-10 max-w-300 mx-auto px-4 sm:px-6 lg:px-10"
      >
        <div className="text-center mb-12">
          <Eyebrow>What We Do</Eyebrow>
          <SectionHeading>
            Three Powerful <span className="text-[#28E7C5]">Pillars</span>
          </SectionHeading>
          <p
            className="text-[rgba(255,255,255,0.38)] text-[0.88rem] sm:text-[0.93rem] leading-[1.75] max-w-lg mx-auto mt-4"
            style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}
          >
            Today DatagenixAi works across three powerful pillars — each
            reinforcing the other to create a complete AI ecosystem.
          </p>
        </div>

        {/* Circles row — same ESG style */}
        <div className="flex items-center px-4 sm:px-10 lg:px-20 mb-10">
          {PILLARS.map((p, i) => (
            <div key={i} className="contents">
              <div className="flex flex-col items-center shrink-0">
                <div
                  className="w-18 h-18 sm:w-21 sm:h-21 rounded-full flex items-center justify-center font-bold text-[1.1rem] z-2"
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    background: i === 1 ? "#21C6CF" : "#111418",
                    color: i === 1 ? "#050505" : "rgba(255,255,255,0.35)",
                    border:
                      i === 1 ? "none" : "1.5px solid rgba(33,198,207,0.15)",
                    boxShadow:
                      i === 1
                        ? "0 0 0 10px rgba(33,198,207,0.1), 0 0 40px rgba(33,198,207,0.2)"
                        : "none",
                  }}
                >
                  {p.num}
                </div>
              </div>
              {i < PILLARS.length - 1 && (
                <div
                  className="flex-1 h-px"
                  style={{ background: "rgba(33,198,207,0.15)" }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PILLARS.map((p, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                borderRadius: "18px",
                padding: "24px 24px 60px",
                minHeight: "280px",
                background: "rgba(10, 16, 35, 0.55)",
                overflow: "hidden",
                boxShadow: `
          0 10px 40px -10px rgba(33,198,207,0.25),
          0 20px 80px -20px rgba(33,198,207,0.18),
          inset 0 0 0 1px rgba(33,198,207,0.25),
          inset 0 1px 0 rgba(33,198,207,0.2)
        `,
              }}
            >
              {/* Subtle top shimmer */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "20%",
                  right: "20%",
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, rgba(100,160,255,0.4), transparent)",
                }}
              />

              {/* Bottom teal flood glow */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "50px",
                  background:
                    "linear-gradient(to top, rgba(33,198,207,0.75) 0%, rgba(33,198,207,0.45) 30%, rgba(33,198,207,0.18) 60%, transparent 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Content */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-[#21C6CF] mb-4"
                  style={{
                    background: "rgba(33,130,255,0.1)",
                    border: "1px solid rgba(33,130,255,0.2)",
                  }}
                >
                  {p.icon}
                </div>
                <h3
                  className="text-white font-bold text-[0.95rem] sm:text-[1rem] leading-[1.4] mb-3"
                  style={{ fontFamily: "'Syne',sans-serif" }}
                >
                  {p.title}
                </h3>
                <div
                  className="w-7 h-0.5 rounded-full mb-3"
                  style={{ background: "#21C6CF" }}
                />
                <p
                  className="text-[rgba(255,255,255,0.35)] text-[0.82rem] leading-[1.75]"
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  const r = useReveal(0);

  return (
    <section className="bg-[#EAEAEA] w-[97%] rounded-3xl mx-auto relative overflow-hidden py-12">
      <div
        ref={r.ref}
        style={r.style}
        className="relative z-10 max-w-300 mx-auto px-4 sm:px-6 lg:px-10"
      >
        {/* Heading */}
        <div className="text-center mb-14">
          <Eyebrow>Purpose & Direction</Eyebrow>
          <SectionHeading>
            Vision & <span className="text-[#28E7C5]">Mission</span>
          </SectionHeading>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* MISSION */}
          <div
            className="relative rounded-2xl p-8 sm:p-10 bg-white 
          shadow-[-25px_30px_80px_rgba(0,0,0,0.18),-8px_12px_30px_rgba(0,0,0,0.12)]
          hover:shadow-[0_24px_56px_rgba(0,0,0,0.16),0_8px_20px_rgba(0,0,0,0.1)]
          transition-all duration-300 min-h-75 flex flex-col justify-between"
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0d9ba3]" />
              <span className="text-[#28E7C5] text-[0.65rem] tracking-[0.18em] uppercase font-medium">
                Vision
              </span>
            </div>

            {/* Title */}
            <h3 className="font-bold text-[1.3rem] text-[#111] mb-4 leading-[1.3]">
              Democratise AI Across Industries
            </h3>

            {/* Content */}
            <p className="text-[0.9rem] text-[rgba(0,0,0,0.6)] leading-[1.8]">
              Our mission is to make Artificial Intelligence accessible,
              practical, and impactful for every business, industry, and
              individual—not just large technology corporations. We focus on
              building scalable AI systems, delivering real-world solutions, and
              enabling organizations to move from data to intelligent
              decision-making.
              <br />
              <br />
              Beyond solutions, we aim to educate and empower people by bridging
              the gap between theoretical knowledge and real-world application,
              ensuring AI creates meaningful value at every level of society.
              Beyond solutions, we aim to educate and empower people by bridging
              the gap between theoretical knowledge and real-world application,
              ensuring AI creates meaningful value at every level of society.
              Beyond solutions, we aim to educate and empower people by bridging
              the gap between theoretical knowledge and real-world application,
              ensuring AI creates meaningful value at every level of society.
            </p>
          </div>

          {/* VISION */}
          <div
            className="relative rounded-2xl p-8 sm:p-10 bg-white 
          shadow-[-25px_30px_80px_rgba(0,0,0,0.18),-8px_12px_30px_rgba(0,0,0,0.12)]
          hover:shadow-[0_24px_56px_rgba(0,0,0,0.16),0_8px_20px_rgba(0,0,0,0.1)]
          transition-all duration-300 min-h-75 flex flex-col justify-between"
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0d9ba3]" />
              <span className="text-[#28E7C5] text-[0.65rem] tracking-[0.18em] uppercase font-medium">
                Mission
              </span>
            </div>

            {/* Title */}
            <h3 className="font-bold text-[1.3rem] text-[#111] mb-4 leading-[1.3]">
              Building an AI-Empowered Nation
            </h3>

            {/* Content */}
            <p className="text-[0.9rem] text-[rgba(0,0,0,0.6)] leading-[1.8]">
              We envision a future where every business operates with
              intelligence, every professional is equipped with AI capabilities,
              and technology actively contributes to sustainable growth and
              innovation.
              <br />
              <br />
              Our goal is to create an ecosystem where AI is not limited to
              research labs or large enterprises, but becomes a core driver of
              productivity, efficiency, and progress across industries. We
              aspire to position India at the forefront of the next wave of
              AI-driven industrial transformation. Beyond solutions, we aim to
              educate and empower people by bridging the gap between theoretical
              knowledge and real-world application, ensuring AI creates
              meaningful value at every level of society. Beyond solutions, we
              aim to educate and empower people by bridging the gap between
              theoretical knowledge and real-world application, ensuring AI
              creates meaningful value at every level of society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
const VALUES = [
  {
    symbol: "◈",
    title: "Innovation First",
    desc: "We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking.",
  },
  {
    symbol: "⬡",
    title: "Responsible AI",
    desc: "Aligned with IndiaAI, Skill India, and UN SDGs — we build technology that serves society, not just shareholders. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking.",
  },
  {
    symbol: "◎",
    title: "Industry Depth",
    desc: "12+ years of hands-on industrial experience informs every product and solution we build. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking.",
  },
  {
    symbol: "◆",
    title: "Social Impact",
    desc: "From smart cities to AI education for underserved communities — our mission is societal, not just technological. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking.",
  },
  {
    symbol: "⬢",
    title: "Practical Problem Solving",
    desc: "Every solution is designed to deliver measurable business impact — not theoretical results. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking.",
  },
  {
    symbol: "◉",
    title: "Talent Empowerment",
    desc: "We invest in people as much as products — building the next generation of AI-capable professionals. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking.",
  },
];

function CoreValues() {
  const r = useReveal(0);

  return (
    <section className="bg-[#EAEAEA] h-[100vh] w-[97%] rounded-3xl mx-auto relative overflow-hidden py-4 mb-12">
      <div
        ref={r.ref}
        style={r.style}
        className="relative z-10 max-w-300 mx-auto px-4 sm:px-6 lg:px-10"
      >
        <div className="text-center mb-12">
          <Eyebrow>What We Stand For</Eyebrow>
          <SectionHeading>
            Core <span className="text-[#28E7C5]">Values</span>
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {VALUES.map((v, i) => (
            <div
              key={i}
              className="group flex gap-4 p-5 rounded-xl relative overflow-hidden bg-white
    shadow-[-25px_30px_80px_rgba(0,0,0,0.18),-8px_12px_30px_rgba(0,0,0,0.12)]
    hover:shadow-[0_24px_56px_rgba(0,0,0,0.16),0_8px_20px_rgba(0,0,0,0.1)]
    transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-[rgba(33,198,207,0.08)] border border-[rgba(33,198,207,0.15)] flex items-center justify-center text-[#21C6CF] text-sm shrink-0">
                {v.symbol}
              </div>
              <div>
                <h4
                  className="text-[#111] font-bold text-[0.9rem] mb-1.5 leading-snug"
                  style={{ fontFamily: "'Syne',sans-serif" }}
                >
                  {v.title}
                </h4>
                <p
                  className="text-[rgba(0,0,0,0.6)] text-[0.78rem] leading-[1.65]"
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderSpotlight() {
  const r = useReveal(0);

  return (
    <section className="bg-none relative overflow-hidden py-2 lg:pb-12">
      {/* subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[rgba(40,231,197,0.12)] to-transparent" />

      {/* radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-100 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(40,231,197,0.05) 0%, transparent 70%)",
        }}
      />

      <div
        ref={r.ref}
        style={r.style}
        className="relative z-10 max-w-300 mx-auto px-4 sm:px-6 lg:px-10"
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <Eyebrow>Leadership</Eyebrow>
          <SectionHeading>
            The People Behind{" "}
            <span className="text-[#28E7C5]">DatagenixAi</span>
          </SectionHeading>
        </div>

        {/* 🔥 CARD */}
        <div
          className="max-w-195 mx-auto rounded-xl overflow-hidden relative"
          style={{
            background: "rgba(10,16,35,0.7)",
            backdropFilter: "blur(10px)",
            boxShadow: `
              0 10px 40px -10px rgba(40,231,197,0.25),
              0 20px 80px -20px rgba(40,231,197,0.15),
              inset 0 0 0 1px rgba(40,231,197,0.2),
              inset 0 1px 0 rgba(40,231,197,0.15)
            `,
          }}
        >
          {/* Top shimmer */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "20%",
              right: "20%",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(40,231,197,0.4), transparent)",
              pointerEvents: "none",
            }}
          />

          <div className="flex flex-col sm:flex-row">
            {/* LEFT SIDE */}
            <div className="sm:w-55 shrink-0 flex items-center justify-center min-h-50 relative border-b sm:border-b-0 sm:border-r border-[rgba(40,231,197,0.12)]">
              <div className="flex flex-col items-center gap-3">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-[#06201c] text-[1.4rem] font-extrabold"
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    background: "#28E7C5",
                    boxShadow: "0 0 25px rgba(40,231,197,0.35)",
                  }}
                >
                  F
                </div>

                <span
                  className="text-[#28E7C5] text-[0.58rem] tracking-[0.16em] uppercase"
                  style={{ fontFamily: "'DM Sans',sans-serif" }}
                >
                  Founder & Director
                </span>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex-1 p-7 sm:p-8">
              {/* mini eyebrow */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span
                  className="w-1.25 h-1.25 rounded-full bg-[#28E7C5]"
                  style={{ boxShadow: "0 0 6px #28E7C5" }}
                />
                <span
                  className="text-[#28E7C5] text-[0.62rem] tracking-[0.18em] uppercase"
                  style={{ fontFamily: "'DM Sans',sans-serif" }}
                >
                  Founder & Director
                </span>
              </div>

              <h3
                className="text-white font-bold text-[1.3rem] sm:text-[1.5rem] mb-1 tracking-[-0.01em]"
                style={{ fontFamily: "'Syne',sans-serif" }}
              >
                Mr. Vinay Khilare
              </h3>

              <p
                className="text-[#28E7C5] text-[0.78rem] mb-5"
                style={{ fontFamily: "'DM Sans',sans-serif" }}
              >
                DatagenixAi · Sangli, Maharashtra
              </p>

              <p
                className="text-[rgba(255,255,255,0.85)] text-[0.95rem] leading-[1.8] mb-6"
                style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}
              >
                With 12+ years of hands-on industrial R&D experience spanning
                Electronics, Embedded Systems, IoT, and AI — a deep commitment
                to making intelligent technology practical, accessible, and
                impactful across industries and communities.
              </p>

              {/* tags */}
              <div className="flex flex-wrap gap-2">
                {[
                  "Electronics & IoT",
                  "AI Strategy",
                  "Industry R&D",
                  "Community Leadership",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[0.68rem] text-[#28E7C5] border border-[rgba(40,231,197,0.2)] bg-[rgba(40,231,197,0.06)]"
                    style={{ fontFamily: "'DM Sans',sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const STATS = [
  {
    value: "12+",
    label: "Years Experience",
    desc: "Deep industrial R&D background",
  },
  {
    value: "500+",
    label: "Businesses Impacted",
    desc: "Across diverse industries",
  },
  {
    value: "3",
    label: "Core Pillars",
    desc: "Products · Solutions · Training",
  },
  { value: "∞", label: "Community Reach", desc: "Growing impact nationwide" },
];

function ImpactNumbers() {
  const r = useReveal(0);

  return (
    <section className="bg-none relative overflow-hidden py-6 lg:mb-12">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[rgba(33,198,207,0.15)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[rgba(33,198,207,0.1)] to-transparent" />

      <div
        ref={r.ref}
        style={r.style}
        className="relative z-10 max-w-300 mx-auto px-4 sm:px-6 lg:px-10"
      >
        <div className="text-center mb-12">
          <Eyebrow>By The Numbers</Eyebrow>
          <SectionHeading>
            Our <span className="text-[#28E7C5]">Impact</span> in Numbers
          </SectionHeading>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="group rounded-xl p-6 sm:p-7 text-center transition-all duration-300"
              style={{
                position: "relative",
                background: "rgba(10, 16, 35, 0.55)",
              }}
            >
              {/* Top shimmer */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "20%",
                  right: "20%",
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, rgba(100,160,255,0.4), transparent)",
                  pointerEvents: "none",
                }}
              />              

              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  className="text-[2.6rem] sm:text-[3.2rem] font-extrabold text-[#28E7C5] leading-none mb-2"
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    textShadow: "0 0 30px rgba(33,198,207,0.3)",
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="text-white font-bold text-[0.85rem] mb-1.5 leading-snug"
                  style={{ fontFamily: "'Syne',sans-serif" }}
                >
                  {s.label}
                </div>
                <p
                  className="text-[rgba(255,255,255,0.3)] text-[0.72rem] leading-[1.55]"
                  style={{ fontFamily: "'DM Sans',sans-serif" }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
