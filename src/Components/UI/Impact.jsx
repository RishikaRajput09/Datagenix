"use client";

import { useState, useEffect, useRef } from "react";

const TABS = [
  {
    id: "businesses",
    label: "Businesses",
    symbol: "◈",
    subheading: "Operational excellence through AI",
    points: [
      "Higher operational efficiency",
      "AI-driven decision making",
      "Competitive advantage through automation",
    ],
  },
  {
    id: "professionals",
    label: "Professionals",
    symbol: "⬡",
    subheading: "Skills that matter in the real world",
    points: [
      "Real-world AI skills",
      "Industry mentorship",
      "Career acceleration",
    ],
  },
  {
    id: "society",
    label: "Society",
    symbol: "◎",
    subheading: "Technology with purpose and responsibility",
    points: [
      "Responsible AI innovation",
      "Sustainable technology development",
      "Alignment with SDG-driven growth",
    ],
  },
];

export default function ImpactSection() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];
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
      { threshold: 0.12 }
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
          transform: translateX(-32px);
          transition-duration: 0.9s;
        }
        [data-animate="fade-right"] {
          transform: translateX(32px) scale(0.98);
          filter: blur(3px);
          transition-duration: 0.9s;
        }
        [data-animate].in-view {
          opacity: 1;
          transform: none;
          filter: none;
        }
        [data-delay="1"] { transition-delay: 0.1s; }
        [data-delay="2"] { transition-delay: 0.2s; }
        [data-delay="3"] { transition-delay: 0.35s; }
        [data-delay="4"] { transition-delay: 0.45s; }
        [data-delay="5"] { transition-delay: 0.55s; }
        [data-delay="6"] { transition-delay: 0.65s; }
      `}</style>

      <section ref={sectionRef} id="impact-section" className="bg-transparent relative overflow-hidden py-4 lg:py-7.5">

        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-[radial-gradient(ellipse_at_center,rgba(33,198,207,0.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-300 mx-auto px-4 sm:px-6 lg:px-10">

          {/* ── Header ── */}
          <div className="mb-10 sm:mb-12">
            <div className="text-center">

              <div
                data-animate="fade-up"
                data-delay="1"
                className="inline-flex items-center gap-2 font-['DM_Sans',sans-serif] text-[0.62rem] sm:text-[0.68rem] font-medium tracking-[0.18em] uppercase text-[#21C6CF] mb-3 mx-auto w-fit"
              >
                <span className="w-1.25 h-1.25 rounded-full bg-[#21C6CF] shadow-[0_0_8px_#21C6CF] inline-block shrink-0" />
                Sustainable Impact
              </div>

              <h2
                data-animate="fade-up"
                data-delay="2"
                className="font-['Syne',sans-serif] text-[1.8rem] sm:text-[2.4rem] lg:text-[3rem] font-bold text-white leading-[1.1] tracking-[-0.02em] max-w-2xl mx-auto"
              >
                Creating Real-World{" "}
                <span className="text-[#21C6CF]">Impact with AI</span>
              </h2>

            </div>
          </div>

          {/* ── Tab Panel ── */}
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">

            {/* Left: tab buttons */}
            <div
              data-animate="fade-left"
              data-delay="3"
              className="flex flex-row lg:flex-col gap-2 lg:gap-2 shrink-0 lg:w-55"
            >
              {TABS.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setActive(i)}
                  className={`group relative flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left w-full transition-all duration-200 cursor-pointer
                    ${active === i
                      ? "bg-[rgba(33,198,207,1)] border-[rgba(33,198,207,0.3)] shadow-[inset_0_0_20px_rgba(33,198,207,0.04)]"
                      : "bg-[#0a0a0a] border-[rgba(33,198,207,0.07)] hover:border-[rgba(33,198,207,0.18)] hover:bg-[rgba(33,198,207,0.7)]"
                    }`}
                >
                  <span
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-0.75 rounded-r-full transition-all duration-300
                      ${active === i ? "h-8 bg-[#21C6CF] shadow-[0_0_8px_rgba(33,198,207,0.6)]" : "h-0 bg-transparent"}`}
                  />
                  <span className={`text-lg leading-none transition-colors duration-200 ${active === i ? "text-[#ffffff]" : "text-[rgba(255,255,255,0.25)]"}`}>
                    {t.symbol}
                  </span>
                  <span className={`font-['Syne',sans-serif] text-[0.88rem] font-bold transition-colors duration-200 ${active === i ? "text-white" : "text-[rgba(255,255,255,0.4)]"}`}>
                    {t.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Right: content panel */}
            <div
              data-animate="fade-right"
              data-delay="4"
              className="flex-1 bg-[#0a0a0a] border border-[rgba(33,198,207,0.1)] rounded-2xl p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Top shimmer */}
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[rgba(33,198,207,0.4)] to-transparent" />

              {/* Corner glow */}
              <div className="absolute -top-16 -left-16 w-48 h-48 bg-[radial-gradient(circle,rgba(33,198,207,0.06)_0%,transparent_70%)] pointer-events-none" />

              {/* Symbol large */}
              <div className="text-4xl text-[#21C6CF] mb-4 leading-none drop-shadow-[0_0_16px_rgba(33,198,207,0.4)]">
                {tab.symbol}
              </div>

              <h3 className="font-['Syne',sans-serif] text-[1.4rem] sm:text-[1.8rem] font-extrabold text-white leading-[1.1] tracking-[-0.02em] mb-1.5">
                For {tab.label}
              </h3>

              <p className="font-['DM_Sans',sans-serif] text-[0.82rem] text-[rgba(33,198,207,0.6)] mb-6 tracking-wide">
                {tab.subheading}
              </p>

              <div className="w-10 h-px bg-[rgba(33,198,207,0.3)] mb-6" />

              <ul className="flex flex-col gap-4">
                {tab.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-4">
                    <span className="shrink-0 w-7 h-7 rounded-lg bg-[rgba(33,198,207,0.08)] border border-[rgba(33,198,207,0.15)] flex items-center justify-center font-['Syne',sans-serif] text-[0.65rem] font-bold text-[#21C6CF]">
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <span className="font-['DM_Sans',sans-serif] text-[0.9rem] leading-[1.6] text-[rgba(255,255,255,0.65)] pt-0.5">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}