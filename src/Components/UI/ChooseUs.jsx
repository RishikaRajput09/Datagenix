"use client";

import { useEffect, useRef, useState } from "react";
import { HexBackgroundLight } from "./HexBackgroundLight";

const FEATURES = [
  {
    symbol: "◈",
    heading: "Businesses & Industries",
    points: [
      "Limited integration between hardware, IoT, software, and AI",
      "Lack of practical AI implementation expertise",
      "Fragmented technology solutions",
      "Inefficient operations and manual workflows",
    ],
  },
  {
    symbol: "⬡",
    heading: "Professionals",
    points: [
      "Learning AI theoretically without real applications",
      "Lack of mentorship and industry exposure",
    ],
  },
];

const STATS = [
  {
    value: "500+",
    label: "Businesses Impacted",
    desc: "Organizations across industries adopting AI with our guidance.",
  },
  {
    value: "10x",
    label: "Faster AI Adoption",
    desc: "Our structured approach cuts implementation time drastically.",
  },
];

// Fires once when element enters viewport
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

// Animates number from 0 → target once visible
function useCountUp(target, visible, duration = 1400) {
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!visible) return;
    const isNum = /^[\d.]+/.test(target);
    if (!isNum) { setDisplay(target); return; }
    const num = parseFloat(target);
    const suffix = target.replace(/[\d.]/g, "");
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(`${Math.round(eased * num)}${suffix}`);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [visible, target, duration]);
  return display;
}

function StatCard({ stat, visible, delay }) {
  const count = useCountUp(stat.value, visible);
  return (
    <div
      className="p-4 sm:p-5 rounded-xl border border-[rgba(13,155,163,0.5)] bg-white/70 backdrop-blur-sm hover:border-[rgba(13,155,163,1)] hover:bg-white/90 transition-all duration-300 shadow-sm"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      <div className="font-['Syne',sans-serif] text-[2rem] sm:text-[2.4rem] font-extrabold text-[#0d9ba3] leading-none mb-1.5">
        {count}
      </div>
      <div className="font-['Syne',sans-serif] text-[0.82rem] font-bold text-[#111111] mb-1 leading-snug">
        {stat.label}
      </div>
      <p className="font-['DM_Sans',sans-serif] text-[0.75rem] leading-[1.55] text-[rgba(0,0,0,0.45)]">
        {stat.desc}
      </p>
    </div>
  );
}

export default function WhyChooseUs() {
  const [sectionRef, visible] = useReveal(0.08);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f5f2ee] relative overflow-hidden py-2 sm:py-2 lg:py-7.5"
    >
      <HexBackgroundLight />

      {/* Soft top vignette */}
      <div
        className="absolute inset-x-0 top-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(245,242,238,0.6), transparent)",
          opacity: visible ? 1 : 0,
          transition: "opacity 1s ease 200ms",
        }}
      />

      <div className="relative z-10 max-w-300 mx-auto px-4 sm:px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="mb-2 sm:mb-12">
          <div
            className="flex justify-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease 0ms, transform 0.6s ease 0ms",
            }}
          >
            <div className="inline-flex items-center gap-2 font-['DM_Sans',sans-serif] text-[0.62rem] sm:text-[0.68rem] font-medium tracking-[0.18em] uppercase text-[#0d9ba3] mb-3">
              <span className="w-1.25 h-1.25 rounded-full bg-[#0d9ba3] shadow-[0_0_8px_rgba(13,155,163,0.5)] inline-block shrink-0" />
              Why Choose Us
            </div>
          </div>

          <h2
            className="font-['Syne',sans-serif] text-[1.8rem] sm:text-[2.4rem] lg:text-[3rem] font-bold text-[#111111] leading-[1.1] tracking-[-0.02em] mb-4 max-w-2xl mx-auto text-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(22px)",
              transition: "opacity 0.7s ease 80ms, transform 0.7s ease 80ms",
            }}
          >
            The World Is Adopting AI.{" "}
            <span className="text-[#0d9ba3]">Are You Ready?</span>
          </h2>
        </div>

        {/* ── Main layout ── */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-5">

          {/* Left: image — slides in from left */}
          <div
            className="relative lg:w-[45%] rounded-2xl overflow-hidden min-h-75 sm:min-h-95 lg:min-h-0 border border-[rgba(13,155,163,0.5)]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.8s ease 150ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) 150ms",
            }}
          >
            <img
              src="/images/whychoose.png"
              alt="AI collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-[#f5f2ee]/60 via-transparent to-transparent" />

            {/* Floating chart card — rises up after image settles */}
            <div
              className="absolute bottom-4 left-4 w-50 sm:w-55 bg-white/90 backdrop-blur-md border border-[rgba(13,155,163,0.2)] rounded-xl p-3.5 shadow-sm"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease 650ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) 650ms",
              }}
            >
              <div className="flex items-center justify-between mb-2.5">
                <span className="font-['Syne',sans-serif] text-[0.78rem] font-bold text-[#111]">AI Adoption</span>
                <span className="font-['DM_Sans',sans-serif] text-[0.58rem] tracking-widest uppercase text-[#0d9ba3]">Live</span>
              </div>
              {/* Bars grow up one by one */}
              <div className="flex items-end gap-1 h-9">
                {[40, 55, 45, 70, 60, 85, 75].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: visible ? `${h}%` : "0%",
                      background: i === 5 ? "#0d9ba3" : "rgba(13,155,163,0.18)",
                      transition: `height 0.55s cubic-bezier(0.22,1,0.36,1) ${780 + i * 55}ms`,
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1.5">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <span key={i} className="font-['DM_Sans',sans-serif] text-[0.52rem] text-[rgba(0,0,0,0.3)]">{d}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: features + stats — slide in from right, staggered */}
          <div className="lg:flex-1 flex flex-col gap-3">

            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 sm:p-5 rounded-2xl border border-[rgba(13,155,163,0.5)] bg-white/70 backdrop-blur-sm hover:border-[rgba(13,155,163,1)] hover:bg-white/90 transition-colors duration-300 shadow-sm"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(40px)",
                  transition: `opacity 0.7s ease ${180 + i * 130}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${180 + i * 130}ms`,
                }}
              >
                <div className="shrink-0 w-9 h-9 rounded-lg bg-[rgba(13,155,163,0.08)] border border-[rgba(13,155,163,0.5)] flex items-center justify-center text-[#0d9ba3] text-base">
                  {f.symbol}
                </div>
                <div className="min-w-0">
                  <h3 className="font-['Syne',sans-serif] text-[0.95rem] font-bold text-[#111111] mb-2 leading-snug">
                    {f.heading}
                  </h3>
                  <ul className="flex flex-col gap-1.5">
                    {f.points.map((pt, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 font-['DM_Sans',sans-serif] text-[0.8rem] leading-[1.55] text-[rgba(0,0,0,0.5)]"
                        style={{
                          opacity: visible ? 1 : 0,
                          transition: `opacity 0.5s ease ${380 + i * 130 + j * 65}ms`,
                        }}
                      >
                        <span className="w-1 h-1 rounded-full bg-[#0d9ba3] shrink-0 mt-1.5 shadow-[0_0_4px_rgba(13,155,163,0.4)]" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Stats with count-up */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((s, i) => (
                <StatCard key={i} stat={s} visible={visible} delay={460 + i * 110} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}