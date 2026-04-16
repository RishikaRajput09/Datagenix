"use client";

import { useEffect, useRef } from "react";
import { HexBackgroundLight } from "./HexBackgroundLight";

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
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animatables = section.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    animatables.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        [data-animate] {
          opacity: 0;
          transition-property: opacity, transform, filter;
          transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }
        [data-animate="fade-up"] {
          transform: translateY(32px);
          transition-duration: 0.85s;
        }
        [data-animate="fade-left"] {
          transform: translateX(-28px);
          transition-duration: 0.9s;
        }
        [data-animate="fade-right"] {
          transform: translateX(28px) scale(0.98);
          filter: blur(3px);
          transition-duration: 0.9s;
        }
        [data-animate="card"] {
          transform: translateY(28px) scale(0.98);
          filter: blur(2px);
          transition-duration: 0.8s;
        }
        [data-animate].in-view {
          opacity: 1;
          transform: none;
          filter: none;
        }
        [data-delay="1"] { transition-delay: 0.08s; }
        [data-delay="2"] { transition-delay: 0.18s; }
        [data-delay="3"] { transition-delay: 0.3s; }
        [data-delay="4"] { transition-delay: 0.38s; }
        [data-delay="5"] { transition-delay: 0.46s; }
        [data-delay="6"] { transition-delay: 0.54s; }
        [data-delay="7"] { transition-delay: 0.44s; }
        [data-delay="8"] { transition-delay: 0.52s; }
        [data-delay="9"] { transition-delay: 0.62s; }

        .esg-card-item { transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease; }
        .esg-card-item:hover { border-color: rgba(13,155,163,0.35) !important; background: rgba(255,255,255,0.95) !important; box-shadow: 0 4px 20px rgba(13,155,163,0.08) !important; }
        .esg-stat-item { transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease; }
        .esg-stat-item:hover { border-color: rgba(13,155,163,0.35) !important; background: rgba(255,255,255,0.95) !important; box-shadow: 0 4px 20px rgba(13,155,163,0.08) !important; }
      `}</style>

      <section ref={sectionRef} id="esg-section" className="bg-[#f5f2ee] relative w-[97%] rounded-2xl mx-auto overflow-hidden py-8">

        {/* Hex background */}
        <HexBackgroundLight />

        {/* Top glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-70 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(13,155,163,0.07) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-300 mx-auto px-4 sm:px-6 lg:px-10">

          {/* ── Header ── */}
          <div className="mb-10 sm:mb-14">
            <div className="flex justify-center mb-3">
              <div
                data-animate="fade-up"
                data-delay="1"
                className="inline-flex items-center gap-2 text-[#0d9ba3] text-[0.62rem] sm:text-[0.68rem] font-medium tracking-[0.18em] uppercase font-['DM_Sans',sans-serif]"
              >
                <span className="w-1.25 h-1.25 rounded-full bg-[#0d9ba3] shadow-[0_0_8px_rgba(13,155,163,0.5)] inline-block shrink-0" />
                ESG · Environmental · Social · Governance
              </div>
            </div>

            <h2
              data-animate="fade-up"
              data-delay="2"
              className="font-['Syne',sans-serif] text-[1.8rem] sm:text-[2.4rem] lg:text-[3rem] font-bold text-[#111111] leading-[1.1] tracking-[-0.02em] text-center mb-4 max-w-2xl mx-auto"
            >
              Innovation with <span className="text-[#0d9ba3]">Responsibility</span>
            </h2>

            <p
              data-animate="fade-up"
              data-delay="3"
              className="font-['DM_Sans',sans-serif] text-center text-[rgba(0,0,0,0.45)] text-[0.88rem] sm:text-[0.95rem] leading-[1.7] max-w-xl mx-auto font-light"
            >
              DatagenixAi is committed to building technology that contributes to{" "}
              <span className="text-[rgba(0,0,0,0.75)]">Sustainable</span>,{" "}
              <span className="text-[rgba(0,0,0,0.75)]">Inclusive</span> and{" "}
              <span className="text-[rgba(0,0,0,0.75)]">Impactful</span> growth.
            </p>
          </div>

          {/* ── Main 2-col layout ── */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-5">

            {/* Left: ESG Cards */}
            <div className="lg:flex-1 flex flex-col gap-3">
              {ESG_CARDS.map((card, i) => (
                <div
                  key={i}
                  data-animate="fade-left"
                  data-delay={String(i + 4)}
                  className="esg-card-item flex gap-4 p-4 sm:p-5 rounded-xl border border-[rgba(13,155,163,0.12)] bg-white/70 backdrop-blur-sm shadow-sm"
                >
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-[rgba(13,155,163,0.08)] border border-[rgba(13,155,163,0.18)] flex items-center justify-center text-[#0d9ba3]">
                    {card.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-['Syne',sans-serif] text-[0.95rem] font-bold text-[#111111] mb-1.5 leading-snug">
                      {card.heading}
                    </h3>
                    <p className="font-['DM_Sans',sans-serif] text-[0.8rem] leading-[1.6] text-[rgba(0,0,0,0.45)]">
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
                    data-animate="card"
                    data-delay={String(i + 7)}
                    className="esg-stat-item p-4 sm:p-5 rounded-xl border border-[rgba(13,155,163,0.12)] bg-white/70 backdrop-blur-sm shadow-sm"
                  >
                    <div className="font-['Syne',sans-serif] text-[2rem] sm:text-[2.4rem] font-extrabold text-[#0d9ba3] leading-none mb-1.5">
                      {s.value}
                    </div>
                    <div className="font-['Syne',sans-serif] text-[0.82rem] font-bold text-[#111111] mb-1 leading-snug">
                      {s.label}
                    </div>
                    <p className="font-['DM_Sans',sans-serif] text-[0.75rem] leading-[1.55] text-[rgba(0,0,0,0.45)]">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Impact Quote */}
              <div
                data-animate="fade-right"
                data-delay="9"
                className="relative rounded-xl border border-[rgba(13,155,163,0.15)] bg-white/70 backdrop-blur-sm shadow-sm p-5 sm:p-6 overflow-hidden flex-1 flex flex-col justify-between"
              >
                {/* Left teal accent bar */}
                <div
                  className="absolute left-0 top-0 h-full w-0.75 rounded-l-xl"
                  style={{ background: "linear-gradient(180deg, #0d9ba3, rgba(13,155,163,0.08))" }}
                />

                {/* Big decorative quote */}
                <div
                  className="absolute top-2 right-4 text-[6rem] leading-none select-none pointer-events-none font-['Syne',sans-serif] font-extrabold"
                  style={{ color: "rgba(13,155,163,0.07)" }}
                >
                  "
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-1.25 h-1.25 rounded-full bg-[#0d9ba3] shadow-[0_0_8px_rgba(13,155,163,0.4)] inline-block shrink-0" />
                    <span className="font-['DM_Sans',sans-serif] text-[#0d9ba3] text-[0.62rem] tracking-[0.18em] uppercase font-medium">
                      Our Commitment
                    </span>
                  </div>

                  <p className="font-['Syne',sans-serif] text-[1.05rem] sm:text-[1.15rem] font-bold text-[#111111] leading-[1.55] mb-3">
                    Technology must not only create value;{" "}
                    <span className="text-[#0d9ba3]">it must create a Better Future.</span>
                  </p>

                  <p className="font-['DM_Sans',sans-serif] font-light text-[0.78rem] leading-[1.65] text-[rgba(0,0,0,0.42)]">
                    Every product we build is measured not just by its business impact, but by its contribution to communities, environments, and generations ahead.
                  </p>
                </div>

                <div className="flex items-center gap-1.5 mt-5">
                  {[1, 0.4, 0.15].map((op, i) => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#0d9ba3]" style={{ opacity: op }} />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}