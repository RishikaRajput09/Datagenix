"use client";

import { useEffect, useRef, useState } from "react";

const ESG_CARDS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6c0 0-3 3-3 6s3 5 3 5" />
        <path d="M16 8c-1 3-4 5-4 5" />
        <circle cx="19" cy="5" r="2.5" />
      </svg>
    ),
    heading: "Smart Cities & Environment",
    desc: "Working with municipal corporations on smart waste collection and management systems.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    heading: "Education & Social Impact",
    desc: "Providing AI awareness and soft skill training to students from remand homes and underserved communities.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
    heading: "Sustainable Technology",
    desc: "Developing AI-driven products that reduce pollution and improve environmental monitoring.",
  },
];

const STATS = [
  { value: "3+", label: "ESG Pillars", desc: "Environment, Social & Governance focus areas driving our mission." },
  { value: "∞", label: "Community Reach", desc: "Expanding impact across underserved communities nationwide." },
];

export default function ESGSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#050505] relative overflow-hidden py-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .esg-reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .esg-reveal.on { opacity: 1; transform: translateY(0); }
        .esg-card-item { transition: border-color 0.3s ease, background 0.3s ease; }
        .esg-card-item:hover { border-color: rgba(33,198,207,0.28) !important; background: #0d0d0d !important; }
        .esg-stat-item { transition: border-color 0.3s ease; }
        .esg-stat-item:hover { border-color: rgba(33,198,207,0.28) !important; }
      `}</style>

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(33,198,207,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(33,198,207,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(33,198,207,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className={`esg-reveal ${visible ? "on" : ""} mb-10 sm:mb-14`} style={{ transitionDelay: "0ms" }}>
          <div className="flex justify-center mb-3">
            <div
              className="inline-flex items-center gap-2 text-[#21C6CF] text-[0.62rem] sm:text-[0.68rem] font-medium tracking-[0.18em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span className="w-[5px] h-[5px] rounded-full bg-[#21C6CF] shadow-[0_0_8px_#21C6CF] inline-block shrink-0" />
              ESG · Environmental · Social · Governance
            </div>
          </div>

          <h2
            className="text-[1.8rem] sm:text-[2.4rem] lg:text-[3rem] font-bold text-white leading-[1.1] tracking-[-0.02em] text-center mb-4 max-w-2xl mx-auto"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Innovation with <span className="text-[#21C6CF]">Responsibility</span>
          </h2>

          <p
            className="text-center text-[rgba(255,255,255,0.38)] text-[0.88rem] sm:text-[0.95rem] leading-[1.7] max-w-xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            DatagenixAi is committed to building technology that contributes to{" "}
            <span className="text-[rgba(255,255,255,0.7)]">Sustainable</span>,{" "}
            <span className="text-[rgba(255,255,255,0.7)]">Inclusive</span> and{" "}
            <span className="text-[rgba(255,255,255,0.7)]">Impactful</span> growth.
          </p>
        </div>

        {/* Main 2-col layout */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-5">

          {/* Left: ESG Cards */}
          <div className="lg:flex-1 flex flex-col gap-3">
            {ESG_CARDS.map((card, i) => (
              <div
                key={i}
                className={`esg-reveal esg-card-item ${visible ? "on" : ""} flex gap-4 p-4 sm:p-5 rounded-xl border border-[rgba(33,198,207,0.08)] bg-[#0a0a0a]`}
                style={{ transitionDelay: `${120 + i * 80}ms` }}
              >
                <div className="shrink-0 w-9 h-9 rounded-lg bg-[rgba(33,198,207,0.08)] border border-[rgba(33,198,207,0.15)] flex items-center justify-center text-[#21C6CF]">
                  {card.icon}
                </div>
                <div className="min-w-0">
                  <h3
                    className="text-[0.95rem] font-bold text-white mb-1.5 leading-snug"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {card.heading}
                  </h3>
                  <p
                    className="text-[0.8rem] leading-[1.6] text-[rgba(255,255,255,0.38)]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Stats + Impact Quote */}
          <div className="lg:w-[42%] flex flex-col gap-3">

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className={`esg-reveal esg-stat-item ${visible ? "on" : ""} p-4 sm:p-5 rounded-xl border border-[rgba(33,198,207,0.08)] bg-[#0a0a0a]`}
                  style={{ transitionDelay: `${360 + i * 80}ms` }}
                >
                  <div
                    className="text-[2rem] sm:text-[2.4rem] font-extrabold text-[#21C6CF] leading-none mb-1.5"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-[0.82rem] font-bold text-white mb-1 leading-snug"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {s.label}
                  </div>
                  <p
                    className="text-[0.75rem] leading-[1.55] text-[rgba(255,255,255,0.35)]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Impact Quote */}
            <div
              className={`esg-reveal ${visible ? "on" : ""} relative rounded-xl border border-[rgba(33,198,207,0.12)] bg-[#0a0a0a] p-5 sm:p-6 overflow-hidden flex-1 flex flex-col justify-between`}
              style={{ transitionDelay: "520ms" }}
            >
              {/* Left teal accent bar */}
              <div
                className="absolute left-0 top-0 h-full w-[3px] rounded-l-xl"
                style={{ background: "linear-gradient(180deg, #21C6CF, rgba(33,198,207,0.08))" }}
              />

              {/* Big decorative quote */}
              <div
                className="absolute top-2 right-4 text-[6rem] leading-none select-none pointer-events-none"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  color: "rgba(33,198,207,0.05)",
                }}
              >
                "
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-[5px] h-[5px] rounded-full bg-[#21C6CF] shadow-[0_0_8px_#21C6CF] inline-block shrink-0" />
                  <span
                    className="text-[#21C6CF] text-[0.62rem] tracking-[0.18em] uppercase font-medium"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Our Commitment
                  </span>
                </div>

                <p
                  className="text-[1.05rem] sm:text-[1.15rem] font-bold text-white leading-[1.55] mb-3"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Technology must not only create value;{" "}
                  <span className="text-[#21C6CF]">it must create a Better Future.</span>
                </p>

                <p
                  className="text-[0.78rem] leading-[1.65] text-[rgba(255,255,255,0.32)]"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                >
                  Every product we build is measured not just by its business impact, but by its contribution to communities, environments, and generations ahead.
                </p>
              </div>

              {/* Dots */}
              <div className="flex items-center gap-1.5 mt-5">
                {[1, 0.4, 0.15].map((op, i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[#21C6CF]"
                    style={{ opacity: op }}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}