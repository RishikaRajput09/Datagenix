"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const CARDS = [
  {
    href: "/solutions/ai-iot-smart-products",
    image: "/Images/solution.png",
    heading: "AI & IoT Smart Products",
    body: "Industrial automation, edge AI systems, predictive maintenance, and intelligent monitoring solutions.",
  },
  {
    href: "/solutions/ai-business-solutions",
    image: "/Images/business.png",
    heading: "AI-Powered Business Solutions",
    body: "Custom AI systems, ERP/CRM platforms, AI agents, workflow automation, and data intelligence.",
  },
  {
    href: "/solutions/ai-talent-development",
    image: "/Images/training.png",
    heading: "AI Talent Development",
    body: "Practical AI, Data Science, and automation training designed to create industry-ready professionals.",
  },
];

export default function SolutionsSection() {
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
      { threshold: 0.12 },
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
          transform: translateY(36px);
          transition-duration: 0.85s;
        }
        [data-animate="card"] {
          transform: translateY(48px) scale(0.97);
          filter: blur(4px);
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
        [data-delay="4"] { transition-delay: 0.5s; }
        [data-delay="5"] { transition-delay: 0.65s; }
        [data-delay="6"] { transition-delay: 0.8s; }
        [data-delay="7"] { transition-delay: 0.95s; }

        .card-img {
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .group:hover .card-img {
          transform: scale(1.06);
        }
      `}</style>

      <section
        ref={sectionRef}
        id="solutions-section"
        className="bg-transparent relative overflow-hidden py-4"
      >
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-75 bg-[radial-gradient(ellipse_at_center,rgba(33,198,207,0.05)_0%,transparent_70%)]" />

        <div className="relative z-2 max-w-300 mx-auto px-4 sm:px-6 lg:px-10">
          {/* ── Header ── */}
          <div className="mb-10 sm:mb-12">
            <div className="text-center">
              <div
                data-animate="fade-up"
                data-delay="1"
                className="flex justify-center mb-3"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(33,198,207,0.35)] bg-[rgba(33,198,207,0.08)] backdrop-blur-md shadow-[0_0_12px_rgba(33,198,207,0.15)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(33,198,207,0.35)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#21C6CF] shadow-[0_0_8px_#21C6CF]" />
                  <span className="text-[0.62rem] sm:text-[0.68rem] font-medium tracking-[0.18em] uppercase text-[#28E7C5]">
                    What We Do
                  </span>
                </div>
              </div>

              <h2
                data-animate="fade-up"
                data-delay="2"
                className="text-[1.8rem] sm:text-[2.4rem] lg:text-[3rem] font-bold text-white leading-[1.1] tracking-[-0.02em] max-w-2xl mx-auto mb-4"
              >
                We Bridge the Gap Between{" "}
                <span className="text-[#28E7C5]">AI Innovation</span> and
                Real-World Impact
              </h2>
            </div>
          </div>

          {/* ── Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
            {CARDS.map((card, i) => (
              <div
                key={i}
                data-animate="card"
                data-delay={String(i + 3)}
                className="group flex flex-col rounded-2xl overflow-hidden transition-[translate] duration-300 hover:-translate-y-1"
                style={{
                  position: "relative",
                  background: "rgba(10, 16, 35, 0.55)",
                  boxShadow: `
                    0 10px 40px -10px rgba(33,198,207,0.25),
                    0 20px 80px -20px rgba(33,198,207,0.18),
                    inset 0 0 0 1px rgba(33,198,207,0.25),
                    inset 0 1px 0 rgba(33,198,207,0.2)
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
                      "linear-gradient(90deg, transparent, rgba(100,160,255,0.4), transparent)",
                    zIndex: 2,
                    pointerEvents: "none",
                  }}
                />

                {/* Bottom teal flood */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "50px",
                    background:
                      "linear-gradient(to top, rgba(33,198,207,0.75) 0%, rgba(33,198,207,0.45) 30%, rgba(33,198,207,0.18) 60%, transparent 100%)",
                    zIndex: 2,
                    pointerEvents: "none",
                  }}
                />

                <div className="relative h-60 sm:h-70 lg:h-75 overflow-hidden p-4">
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.heading}
                      className="card-img w-full h-full object-cover opacity-90"
                    />
                  </div>
                </div>

                {/* ── Card body ── */}
                <div
                  className="flex flex-col flex-1 p-6 sm:p-7 lg:p-8"
                  style={{ position: "relative", zIndex: 3 }}
                >
                  <div className="w-8 h-px bg-[rgba(33,198,207,0.3)] mb-4" />

                  <h3 className="font-['Syne',sans-serif] text-[1rem] sm:text-[1.05rem] font-bold text-white leading-snug mb-3">
                    {card.heading}
                  </h3>

                  <p className="font-['DM_Sans',sans-serif] text-[0.82rem] leading-[1.7] text-[rgba(255,255,255,0.55)] flex-1 mb-6">
                    {card.body}
                  </p>

                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 font-['DM_Sans',sans-serif] text-[0.8rem] font-semibold text-[#28E7C5] hover:text-[#28E7C5] transition-colors duration-200 group/link"
                  >
                    Read More
                    <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* ── Bottom CTA ── */}
          <div
            data-animate="fade-up"
            data-delay="7"
            className="flex justify-center"
          >
            <Link href="/Services">
              <button
                className="transition-all duration-[0.22s] ease-in-out whitespace-nowrap cursor-pointer rounded-[3px] px-7 py-3.25 text-[0.8rem] font-semibold tracking-[0.06em]"
                style={{
                  fontFamily: "'Google Sans', sans-serif",
                  color: "#05070e",
                  background: "#28E7C5",
                  border: "1px solid #28E7C5",
                }}
              >
                Enquire for Solutions →
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
