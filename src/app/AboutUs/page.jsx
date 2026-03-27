"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useReveal(delay = 0) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setOn(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, style: { opacity: on ? 1 : 0, transform: on ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms` } };
}

const GRID_BG = {
  backgroundImage: "linear-gradient(rgba(33,198,207,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(33,198,207,0.03) 1px,transparent 1px)",
  backgroundSize: "60px 60px",
};

function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 text-[#21C6CF] text-[0.62rem] sm:text-[0.68rem] font-medium tracking-[0.18em] uppercase mb-4" style={{ fontFamily: "'DM Sans',sans-serif" }}>
      <span className="w-[5px] h-[5px] rounded-full bg-[#21C6CF] inline-block shrink-0" style={{ boxShadow: "0 0 8px #21C6CF" }} />
      {children}
    </div>
  );
}

function SectionHeading({ children }) {
  return (
    <h2 className="text-[1.9rem] sm:text-[2.4rem] lg:text-[3rem] font-bold text-white leading-[1.1] tracking-[-0.02em]" style={{ fontFamily: "'Syne',sans-serif" }}>
      {children}
    </h2>
  );
}

function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

  return (
    <section className="bg-[#050505] relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(ellipse,rgba(33,198,207,0.07) 0%,transparent 70%)" }} />
      {/* Top shimmer */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(33,198,207,0.3)] to-transparent" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 w-full">
        <div className="max-w-[780px]">

          <div style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.65s ease 100ms, transform 0.65s ease 100ms" }}>
            <Eyebrow>About DatagenixAi</Eyebrow>
          </div>

          <div style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.65s ease 200ms, transform 0.65s ease 200ms" }}>
            <h1 className="text-[2.4rem] sm:text-[3.2rem] lg:text-[4.2rem] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-6" style={{ fontFamily: "'Syne',sans-serif" }}>
              Where Engineering Meets{" "}
              <span className="text-[#21C6CF]">Intelligence</span>
            </h1>
          </div>

          <div style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.65s ease 320ms, transform 0.65s ease 320ms" }}>
            <p className="text-[rgba(255,255,255,0.45)] text-[0.95rem] sm:text-[1.05rem] leading-[1.8] max-w-[580px] mb-10" style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>
              Founded on a simple but powerful belief — Artificial Intelligence should not remain limited to large technology companies. It should empower businesses, industries, and individuals everywhere.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3" style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.65s ease 420ms, transform 0.65s ease 420ms" }}>
            <Link href="/portfolio" className="group relative overflow-hidden inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#21C6CF] text-[#050505] text-[0.82rem] font-semibold tracking-[0.06em] uppercase transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(33,198,207,0.35)]" style={{ fontFamily: "'DM Sans',sans-serif" }}>
              <span className="absolute inset-0 bg-[#0a2f33] scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-[380ms]" />
              <span className="relative z-[1]">Our Work</span>
              <svg className="relative z-[1] w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link href="/contact" className="group relative overflow-hidden inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent border border-[rgba(33,198,207,0.3)] text-[#21C6CF] text-[0.82rem] font-semibold tracking-[0.06em] uppercase hover:border-[#21C6CF] transition-all duration-300" style={{ fontFamily: "'DM Sans',sans-serif" }}>
              <span className="absolute inset-0 bg-[rgba(33,198,207,0.08)] scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-[380ms]" />
              <span className="relative z-[1]">Contact Us</span>
              <svg className="relative z-[1] w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom shimmer */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(33,198,207,0.15)] to-transparent" />
    </section>
  );
}

const TIMELINE = [
  { year: "Roots", label: "Electronics & Embedded Systems", desc: "Deep expertise built across industrial R&D, hardware engineering, and embedded technology." },
  { year: "Shift", label: "Data Without Intelligence", desc: "Witnessed how industries generated massive data but couldn't convert it into actionable intelligence." },
  { year: "Gap", label: "AI Talent Shortage", desc: "Identified a growing disconnect between AI innovation and the skilled professionals needed to implement it." },
  { year: "Birth", label: "DatagenixAi Founded", desc: "Created to bridge engineering depth with AI intelligence — for businesses and professionals alike." },
];

function OriginStory() {
  const h = useReveal(0);
  const t = useReveal(120);

  return (
    <section className="bg-[#050505] relative overflow-hidden py-4">
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(33,198,207,0.1)] to-transparent" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">

          {/* Left: Story text */}
          <div ref={h.ref} style={h.style} className="lg:w-[48%] flex flex-col gap-0">
            <Eyebrow>How We Started</Eyebrow>
            <SectionHeading>
              A Story Born from <span className="text-[#21C6CF]">Industry Reality</span>
            </SectionHeading>

            <div className="mt-8 flex flex-col gap-5">
              {[
                "Our journey began with deep roots in electronics, embedded systems, and industrial engineering. Over 12+ years, we worked closely with industries, understanding their operations from the inside out.",
                "We witnessed a recurring pattern — machines were generating data, businesses were generating data, but very few were able to convert it into intelligence.",
                "At the same time, a second challenge was emerging: a growing gap between AI innovation and the skilled talent needed to implement it in the real world.",
                "That is where DatagenixAi was born — not just to build AI products, but to build the entire ecosystem around AI.",
              ].map((para, i) => (
                <p key={i} className="text-[rgba(255,255,255,0.42)] text-[0.88rem] sm:text-[0.93rem] leading-[1.8]" style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Pull quote */}
            <div className="mt-8 pl-5 border-l-2 border-[#21C6CF]">
              <p className="text-[1rem] sm:text-[1.1rem] font-bold text-white leading-[1.6] italic" style={{ fontFamily: "'Syne',sans-serif" }}>
                "Machines were generating data. Businesses were generating data. But very few were able to convert it into{" "}
                <span className="text-[#21C6CF] not-italic">intelligence.</span>"
              </p>
            </div>
          </div>

          {/* Right: Timeline */}
          <div ref={t.ref} style={t.style} className="lg:w-[52%] flex flex-col gap-0 relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-[#21C6CF] via-[rgba(33,198,207,0.3)] to-transparent" />

            {TIMELINE.map((item, i) => (
              <div key={i} className="flex gap-5 pb-8 last:pb-0">
                {/* Dot */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-[rgba(33,198,207,0.25)] flex items-center justify-center z-[1]" style={{ boxShadow: "0 0 16px rgba(33,198,207,0.1)" }}>
                    <span className="text-[#21C6CF] text-[0.6rem] font-bold tracking-wider" style={{ fontFamily: "'DM Sans',sans-serif" }}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1 pt-1.5 pb-2">
                  <div className="text-[#21C6CF] text-[0.6rem] tracking-[0.18em] uppercase font-medium mb-1" style={{ fontFamily: "'DM Sans',sans-serif" }}>{item.year}</div>
                  <h4 className="text-white font-bold text-[0.95rem] mb-1.5 leading-snug" style={{ fontFamily: "'Syne',sans-serif" }}>{item.label}</h4>
                  <p className="text-[rgba(255,255,255,0.38)] text-[0.8rem] leading-[1.65]" style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>{item.desc}</p>
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
    <section className="bg-[#050505] relative overflow-hidden py-8">
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse,rgba(33,198,207,0.05) 0%,transparent 70%)" }} />

      <div ref={r.ref} style={r.style} className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <Eyebrow>The Problem We Solved</Eyebrow>
          <SectionHeading>
            The Gap We Set Out to <span className="text-[#21C6CF]">Fill</span>
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              num: "01",
              title: "Industries Couldn't Convert Data into Intelligence",
              body: "Machines and businesses were generating enormous amounts of data across every operation. Yet the tools, expertise, and systems to turn that data into actionable decisions simply didn't exist at the ground level.",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              ),
            },
            {
              num: "02",
              title: "Growing Gap Between AI Innovation & Skilled Talent",
              body: "AI was advancing rapidly in research labs and large tech companies, but the professionals and organizations who needed it most lacked practical skills, mentorship, and real-world exposure to implement it effectively.",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              ),
            },
          ].map((card, i) => (
            <div key={i} className="group relative rounded-xl border border-[rgba(33,198,207,0.08)] bg-[#0a0a0a] p-7 sm:p-8 overflow-hidden hover:border-[rgba(33,198,207,0.25)] transition-all duration-300">
              {/* Top shimmer on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(33,198,207,0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[rgba(33,198,207,0.08)] border border-[rgba(33,198,207,0.15)] flex items-center justify-center text-[#21C6CF] shrink-0">
                  {card.icon}
                </div>
                <span className="text-[rgba(33,198,207,0.4)] text-[0.65rem] tracking-[0.2em] uppercase font-semibold mt-2.5" style={{ fontFamily: "'DM Sans',sans-serif" }}>{card.num}</span>
              </div>

              <h3 className="text-white font-bold text-[1.05rem] sm:text-[1.15rem] leading-[1.4] mb-3" style={{ fontFamily: "'Syne',sans-serif" }}>{card.title}</h3>
              <p className="text-[rgba(255,255,255,0.38)] text-[0.82rem] leading-[1.7]" style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>{card.body}</p>
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
    desc: "Building intelligent hardware-software systems that bring AI into the physical world — from smart sensors to autonomous monitoring platforms.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" rx="1" />
        <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="15" x2="23" y2="15" />
        <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="15" x2="4" y2="15" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Custom AI Solutions for Businesses",
    desc: "Designing and deploying tailored AI and automation solutions that solve real operational challenges — improving efficiency, reducing costs, and enabling smarter decisions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "AI Talent Development",
    desc: "Equipping professionals and students with practical AI skills through industry-oriented training, mentorship, and real-world project exposure.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
];

function ThreePillars() {
  const r = useReveal(0);

  return (
    <section className="bg-[#050505] relative overflow-hidden py-4">
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />

      <div ref={r.ref} style={r.style} className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <Eyebrow>What We Do</Eyebrow>
          <SectionHeading>
            Three Powerful <span className="text-[#21C6CF]">Pillars</span>
          </SectionHeading>
          <p className="text-[rgba(255,255,255,0.38)] text-[0.88rem] sm:text-[0.93rem] leading-[1.75] max-w-lg mx-auto mt-4" style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>
            Today DatagenixAi works across three powerful pillars — each reinforcing the other to create a complete AI ecosystem.
          </p>
        </div>

        {/* Circles row — same ESG style */}
        <div className="flex items-center px-4 sm:px-10 lg:px-20 mb-10">
          {PILLARS.map((p, i) => (
            <div key={i} className="contents">
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] rounded-full flex items-center justify-center font-bold text-[1.1rem] z-[2]"
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    background: i === 1 ? "#21C6CF" : "#111418",
                    color: i === 1 ? "#050505" : "rgba(255,255,255,0.35)",
                    border: i === 1 ? "none" : "1.5px solid rgba(33,198,207,0.15)",
                    boxShadow: i === 1 ? "0 0 0 10px rgba(33,198,207,0.1), 0 0 40px rgba(33,198,207,0.2)" : "none",
                  }}
                >
                  {p.num}
                </div>
              </div>
              {i < PILLARS.length - 1 && (
                <div className="flex-1 h-px" style={{ background: "rgba(33,198,207,0.15)" }} />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PILLARS.map((p, i) => (
            <div key={i} className="group rounded-xl border border-[rgba(33,198,207,0.08)] bg-[#0a0a0a] p-6 hover:border-[rgba(33,198,207,0.25)] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(33,198,207,0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-10 h-10 rounded-lg bg-[rgba(33,198,207,0.08)] border border-[rgba(33,198,207,0.15)] flex items-center justify-center text-[#21C6CF] mb-4">
                {p.icon}
              </div>
              <h3 className="text-white font-bold text-[0.95rem] sm:text-[1rem] leading-[1.4] mb-3" style={{ fontFamily: "'Syne',sans-serif" }}>{p.title}</h3>
              <div className="w-8 h-0.5 bg-[#21C6CF] rounded-full mb-3" style={{ boxShadow: "0 0 6px rgba(33,198,207,0.5)" }} />
              <p className="text-[rgba(255,255,255,0.38)] text-[0.8rem] leading-[1.7]" style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>{p.desc}</p>
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
    <section className="bg-[#050505] relative overflow-hidden py-8">
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(33,198,207,0.1)] to-transparent" />

      <div ref={r.ref} style={r.style} className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <Eyebrow>Purpose & Direction</Eyebrow>
          <SectionHeading>
            Mission &{" "}<span className="text-[#21C6CF]">Vision</span>
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              label: "Mission",
              icon: "◎",
              title: "Democratise AI Across Industries",
              body: "To make Artificial Intelligence accessible, practical, and impactful for every business, industry, and individual — not just large technology corporations. We build, deploy, and teach AI so it creates real-world value at every level of society.",
            },
            {
              label: "Vision",
              icon: "◈",
              title: "An AI-Empowered Nation",
              body: "A future where every business operates with intelligence, every professional is AI-capable, and technology actively contributes to sustainable growth, social equity, and national progress. We envision India leading the next wave of AI-driven industrial transformation.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative rounded-xl p-7 sm:p-9 overflow-hidden"
              style={{
                background: i === 0 ? "linear-gradient(135deg,rgba(33,198,207,0.06) 0%,rgba(14,165,181,0.03) 100%)" : "#0a0a0a",
                border: i === 0 ? "1px solid rgba(33,198,207,0.2)" : "1px solid rgba(33,198,207,0.08)",
              }}
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-xl" style={{ background: "linear-gradient(180deg,#21C6CF,rgba(33,198,207,0.08))" }} />

              <div className="inline-flex items-center gap-2 mb-5">
                <span className="w-[5px] h-[5px] rounded-full bg-[#21C6CF] inline-block shrink-0" style={{ boxShadow: "0 0 8px #21C6CF" }} />
                <span className="text-[#21C6CF] text-[0.62rem] tracking-[0.18em] uppercase font-medium" style={{ fontFamily: "'DM Sans',sans-serif" }}>{item.label}</span>
              </div>

              <h3 className="text-white font-bold text-[1.15rem] sm:text-[1.3rem] leading-[1.35] mb-4" style={{ fontFamily: "'Syne',sans-serif" }}>{item.title}</h3>
              <p className="text-[rgba(255,255,255,0.42)] text-[0.83rem] leading-[1.8]" style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const VALUES = [
  { symbol: "◈", title: "Innovation First", desc: "We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking." },
  { symbol: "⬡", title: "Responsible AI", desc: "Aligned with IndiaAI, Skill India, and UN SDGs — we build technology that serves society, not just shareholders." },
  { symbol: "◎", title: "Industry Depth", desc: "12+ years of hands-on industrial experience informs every product and solution we build." },
  { symbol: "◆", title: "Social Impact", desc: "From smart cities to AI education for underserved communities — our mission is societal, not just technological." },
  { symbol: "⬢", title: "Practical Problem Solving", desc: "Every solution is designed to deliver measurable business impact — not theoretical results." },
  { symbol: "◉", title: "Talent Empowerment", desc: "We invest in people as much as products — building the next generation of AI-capable professionals." },
];

function CoreValues() {
  const r = useReveal(0);

  return (
    <section className="bg-[#050505] relative overflow-hidden py-4">
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />

      <div ref={r.ref} style={r.style} className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <Eyebrow>What We Stand For</Eyebrow>
          <SectionHeading>
            Core <span className="text-[#21C6CF]">Values</span>
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {VALUES.map((v, i) => (
            <div key={i} className="group flex gap-4 p-5 rounded-xl border border-[rgba(33,198,207,0.08)] bg-[#0a0a0a] hover:border-[rgba(33,198,207,0.25)] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(33,198,207,0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-9 h-9 rounded-lg bg-[rgba(33,198,207,0.08)] border border-[rgba(33,198,207,0.15)] flex items-center justify-center text-[#21C6CF] text-sm shrink-0">
                {v.symbol}
              </div>
              <div>
                <h4 className="text-white font-bold text-[0.9rem] mb-1.5 leading-snug" style={{ fontFamily: "'Syne',sans-serif" }}>{v.title}</h4>
                <p className="text-[rgba(255,255,255,0.35)] text-[0.78rem] leading-[1.65]" style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>{v.desc}</p>
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
    <section className="bg-[#050505] relative overflow-hidden py-2">
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(33,198,207,0.1)] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse,rgba(33,198,207,0.04) 0%,transparent 70%)" }} />

      <div ref={r.ref} style={r.style} className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <Eyebrow>Leadership</Eyebrow>
          <SectionHeading>
            The People Behind <span className="text-[#21C6CF]">DatagenixAi</span>
          </SectionHeading>
        </div>

        {/* Founder card */}
        <div className="max-w-[780px] mx-auto rounded-xl border border-[rgba(33,198,207,0.15)] bg-[#0a0a0a] overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-[3px]" style={{ background: "linear-gradient(180deg,#21C6CF,rgba(33,198,207,0.06))" }} />

          <div className="flex flex-col sm:flex-row gap-0">
            {/* Photo placeholder */}
            <div className="sm:w-[220px] shrink-0 bg-[#0d0d0d] flex items-center justify-center min-h-[200px] sm:min-h-0 relative overflow-hidden border-b sm:border-b-0 sm:border-r border-[rgba(33,198,207,0.08)]">
              <div className="flex flex-col items-center gap-3">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-[#050505] text-[1.4rem] font-extrabold"
                  style={{ fontFamily: "'Syne',sans-serif", background: "linear-gradient(135deg,#21C6CF,#0ea5b5)", boxShadow: "0 0 30px rgba(33,198,207,0.3)" }}
                >
                  F
                </div>
                <span className="text-[rgba(33,198,207,0.4)] text-[0.58rem] tracking-[0.16em] uppercase" style={{ fontFamily: "'DM Sans',sans-serif" }}>Founder & Director</span>
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1 p-7 sm:p-8">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-[5px] h-[5px] rounded-full bg-[#21C6CF] inline-block" style={{ boxShadow: "0 0 6px #21C6CF" }} />
                <span className="text-[#21C6CF] text-[0.62rem] tracking-[0.18em] uppercase" style={{ fontFamily: "'DM Sans',sans-serif" }}>Founder & Director</span>
              </div>
              <h3 className="text-white font-bold text-[1.3rem] sm:text-[1.5rem] mb-1 tracking-[-0.01em]" style={{ fontFamily: "'Syne',sans-serif" }}>Mr. Vinay Khilare</h3>
              <p className="text-[rgba(33,198,207,0.6)] text-[0.78rem] mb-5" style={{ fontFamily: "'DM Sans',sans-serif" }}>DatagenixAi · Sangli, Maharashtra</p>
              <p className="text-[rgba(255,255,255,0.42)] text-[0.83rem] leading-[1.8] mb-6" style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>
                With 12+ years of hands-on industrial R&D experience spanning Electronics, Embedded Systems, IoT, and AI — a deep commitment to making intelligent technology practical, accessible, and impactful across industries and communities.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Electronics & IoT", "AI Strategy", "Industry R&D", "Community Leadership"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-[0.68rem] text-[rgba(33,198,207,0.7)] border border-[rgba(33,198,207,0.15)] bg-[rgba(33,198,207,0.05)]" style={{ fontFamily: "'DM Sans',sans-serif" }}>
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
  { value: "12+", label: "Years Experience", desc: "Deep industrial R&D background" },
  { value: "500+", label: "Businesses Impacted", desc: "Across diverse industries" },
  { value: "3", label: "Core Pillars", desc: "Products · Solutions · Training" },
  { value: "∞", label: "Community Reach", desc: "Growing impact nationwide" },
];

function ImpactNumbers() {
  const r = useReveal(0);

  return (
    <section className="bg-[#050505] relative overflow-hidden py-6">
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(33,198,207,0.15)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(33,198,207,0.1)] to-transparent" />

      <div ref={r.ref} style={r.style} className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <Eyebrow>By The Numbers</Eyebrow>
          <SectionHeading>
            Our <span className="text-[#21C6CF]">Impact</span> in Numbers
          </SectionHeading>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {STATS.map((s, i) => (
            <div key={i} className="group rounded-xl border border-[rgba(33,198,207,0.08)] bg-[#0a0a0a] p-6 sm:p-7 text-center hover:border-[rgba(33,198,207,0.25)] transition-all duration-300">
              <div className="text-[2.6rem] sm:text-[3.2rem] font-extrabold text-[#21C6CF] leading-none mb-2" style={{ fontFamily: "'Syne',sans-serif", textShadow: "0 0 30px rgba(33,198,207,0.3)" }}>
                {s.value}
              </div>
              <div className="text-white font-bold text-[0.85rem] mb-1.5 leading-snug" style={{ fontFamily: "'Syne',sans-serif" }}>{s.label}</div>
              <p className="text-[rgba(255,255,255,0.3)] text-[0.72rem] leading-[1.55]" style={{ fontFamily: "'DM Sans',sans-serif" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-[#050505]">
      <Hero />
      <OriginStory />
      <TheGap />
      <ThreePillars />
      <MissionVision />
      <CoreValues />
      <ImpactNumbers />
      <FounderSpotlight />
    </main>
  );
}