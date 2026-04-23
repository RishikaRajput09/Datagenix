"use client";

import { useEffect, useRef } from "react";

const CARDS = [
  {
    id: "businesses",
    label: "Businesses",
    symbol: "◈",
    subheading: "Operational excellence through AI",
    points: [
      "Higher operational efficiency",
      "AI-driven decision making",
      "Advantage through automation",
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
  const cardRefs = useRef([]);
  const headerRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const elements = [
      badgeRef.current,
      headerRef.current,
      ...cardRefs.current,
    ].filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(
              "opacity-0",
              "translate-y-8",
              "blur-sm",
              "scale-95",
            );
            entry.target.classList.add(
              "opacity-100",
              "translate-y-0",
              "blur-none",
              "scale-100",
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-transparent py-16 lg:py-24">
      {/* Ambient glow top-center */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-175 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(33,198,207,0.07)_0%,transparent_70%)]" />

      {/* Ambient glow bottom-right */}
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-96 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(33,198,207,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        {/* ── Badge ── */}
        <div className="mb-4 flex justify-center">
          <div
            ref={badgeRef}
            className="flex justify-center opacity-0 translate-y-8 transition-all duration-700 ease-out delay-50"
          >
            <div
              className="
      inline-flex items-center gap-2
      px-3 py-1.5
      rounded-full
      border border-[rgba(33,198,207,0.35)]
      bg-[rgba(33,198,207,0.08)]
      backdrop-blur-md
      shadow-[0_0_12px_rgba(33,198,207,0.15)]
      transition-all duration-300
      hover:shadow-[0_0_20px_rgba(33,198,207,0.35)]
    "
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#21C6CF] shadow-[0_0_8px_#21C6CF]" />

              <span className="font-['DM_Sans',sans-serif] text-[0.62rem] font-medium tracking-[0.18em] uppercase text-[#21C6CF]">
                Sustainable Impact
              </span>
            </div>
          </div>
        </div>

        {/* ── Heading ── */}
        <div className="mb-14 text-center">
          <h2
            ref={headerRef}
            className="mx-auto max-w-2xl font-['Syne',sans-serif] text-[1.8rem] sm:text-[2.4rem] lg:text-[3rem] font-bold leading-[1.1] tracking-[-0.02em] text-white opacity-0 translate-y-8 transition-all duration-700 ease-out delay-150"
          >
            Creating Real-World{" "}
            <span className="text-[#21C6CF]">Impact with AI</span>
          </h2>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          {CARDS.map((card, i) => (
            <div
              key={card.id}
              ref={(el) => (cardRefs.current[i] = el)}
              style={{ transitionDelay: `${260 + i * 130}ms` }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[rgba(33,198,207,0.9)] bg-[#050505] p-6 sm:p-7 opacity-0 translate-y-8 scale-95 blur-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[rgba(33,198,207,1)] hover:shadow-[0_0_15px_rgba(33,198,207,0.5),0_0_40px_rgba(33,198,207,0.3)]"
            >
              {/* Top shimmer line */}
              <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-[rgba(33,198,207,0.4)] to-transparent" />

              {/* Hover inner radial glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_30%_0%,rgba(33,198,207,0.07)_0%,transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Corner glow */}
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(33,198,207,0.05)_0%,transparent_70%)]" />

              {/* Symbol */}
              <div className="relative mb-5 w-fit text-4xl leading-none text-[#21C6CF] drop-shadow-[0_0_12px_rgba(33,198,207,0.35)] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_22px_rgba(33,198,207,0.65)]">
                {card.symbol}
              </div>

              {/* Title */}
              <h3 className="relative mb-1.5 font-['Syne',sans-serif] text-[1.3rem] sm:text-[1.5rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-white">
                For {card.label}
              </h3>

              {/* Subheading */}
              <p className="relative mb-5 font-['DM_Sans',sans-serif] text-[0.78rem] tracking-wide text-[rgba(33,198,207,0.55)]">
                {card.subheading}
              </p>

              {/* Divider */}
              <div className="relative mb-5 h-px w-10 bg-[rgba(33,198,207,0.25)]" />

              {/* Points */}
              <ul className="relative mt-auto flex flex-col gap-3.5">
                {card.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-3.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[rgba(33,198,207,0.13)] bg-[rgba(33,198,207,0.07)] font-['Syne',sans-serif] text-[0.6rem] font-bold text-[#21C6CF] transition-colors duration-300 group-hover:border-[rgba(33,198,207,0.25)] group-hover:bg-[rgba(33,198,207,0.12)]">
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <span className="pt-0.5 font-['DM_Sans',sans-serif] text-[0.875rem] leading-[1.65] text-[rgba(255,255,255,0.6)]">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
