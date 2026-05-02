"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const SLIDES = [
  // ===== AI TRAINING =====
  {
    badge: "AI Training",
    headingLines: ["From Beginner to", "AI Professional"],
    sub: "Hands-on training with real projects, portfolios, and job-ready skills. Built for careers, not just certificates.",
    para: "Most courses teach theory. We build careers. At DatagenixAI, you’ll work on real industry projects, build portfolios, and gain skills companies actually hire for. Whether you're a student or working professional, this is your fast track into AI.",
    primaryCta: "Explore Courses",
    ghostCta: "Enroll Now",
    images: [
      "/Images/HeroSec/Training/1.jpg",
      "/Images/HeroSec/Training/2.jpg",
      "/Images/HeroSec/Training/3.jpg",
    ],
    poster: "/Images/HeroSec/Training/1.jpg",
  },

  // ===== AI BUSINESS =====
  {
    badge: "AI for Business",
    headingLines: ["AI Is Not Optional.", "It’s Advantage."],
    sub: "Drive growth, efficiency, and scalability with intelligent AI systems built for real business impact.",
    primaryCta: "Automate Now",
    ghostCta: "See Use Cases",
    images: [
      "/Images/HeroSec/Business/1.jpg",
      "/Images/HeroSec/Business/2.jpg",
      "/Images/HeroSec/Business/3.jpg",
    ],
    poster: "/Images/HeroSec/Business/1.jpg",
  },

  // ===== AI PRODUCT DEVELOPMENT =====
  {
    badge: "AI Product Development",
    headingLines: ["Build Smart Products", "Before the Market"],
    sub: "Create AI-powered, connected systems with IoT and automation that lead the next wave of innovation.",
    primaryCta: "Start Building",
    ghostCta: "Discuss Idea",
    images: [
      "/Images/HeroSec/Product/1.jpg",
      "/Images/HeroSec/Product/2.jpg",
    ],
    poster: "/Images/HeroSec/Product/1.jpg",
  },

  // ===== AI AGRICULTURE =====
  {
    badge: "AI in Agriculture",
    headingLines: ["Farm Smarter.", "Grow Better."],
    sub: "Use AI to monitor crops, predict outcomes, and maximize yield while reducing risks and costs.",
    primaryCta: "Explore Farming AI",
    ghostCta: "Book Consultation",
    images: [
      "/Images/HeroSec/Agri/1.jpg",
      "/Images/HeroSec/Agri/2.jpg",
      "/Images/HeroSec/Agri/3.jpg",
      "/Images/HeroSec/Agri/4.jpg",
    ],
    poster: "/Images/HeroSec/Agri/1.jpg",
  },

  // ===== AI HEALTHCARE =====
  {
    badge: "AI in Healthcare",
    headingLines: ["Faster Decisions.", "Better Care."],
    sub: "Enable smarter diagnostics, predictive monitoring, and efficient healthcare systems with AI.",
    primaryCta: "Explore Healthcare AI",
    ghostCta: "Schedule Demo",
    images: [
      "/Images/HeroSec/Health/1.jpg",
      "/Images/HeroSec/Health/2.jpg",
      "/Images/HeroSec/Health/3.jpg",
    ],
    poster: "/Images/HeroSec/Health/1.jpg",
  },

  // ===== AI REAL ESTATE =====
  {
    badge: "AI in Real Estate",
    headingLines: ["Sell Before", "You Build"],
    sub: "Immersive AI visualizations that help buyers experience properties before construction begins.",
    primaryCta: "Get 3D Walkthrough",
    ghostCta: "Free Consultation",
    images: [
      "/Images/HeroSec/Real/1.jpg",
      "/Images/HeroSec/Real/2.jpg",
      "/Images/HeroSec/Real/3.jpg",
      "/Images/HeroSec/Real/4.jpg",
    ],
    poster: "/Images/HeroSec/Real/1.jpg",
  },
];

const ACCENT = "#28E7C5"; // sky-300

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef(SLIDES.map(() => null));
  const rafRef = useRef(null);

  const goToSlide = useCallback(
    (next) => {
      if (isTransitioning || next === currentSlide) return;
      setIsTransitioning(true);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    
      setTimeout(() => {
        setCurrentSlide(next);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            const v = videoRefs.current[next];
            if (v) {
              v.currentTime = 0;
              v.play().catch(() => {});
            }
            setIsTransitioning(false);
          }),
        );
      }, 420);
    },
    [currentSlide, isTransitioning],
  );

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [currentSlide]);

  const goToNext = useCallback(
    () => goToSlide((currentSlide + 1) % SLIDES.length),
    [currentSlide, goToSlide],
  );
  const goToPrev = useCallback(
    () => goToSlide((currentSlide - 1 + SLIDES.length) % SLIDES.length),
    [currentSlide, goToSlide],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const total = SLIDES[currentSlide].images.length;
        return (prev + 1) % total;
      });
    }, 2500); // speed of inner slideshow

    return () => clearInterval(interval);
  }, [currentSlide]);
  const s = SLIDES[currentSlide];

  return (
    <section
      id="hero-section"
      className="relative w-full flex items-center overflow-hidden bg-none pt-15"
    >
      {/* Keyframe styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(26px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes vidIn {
          from { opacity:0; transform:scale(0.95) translateY(14px); }
          to   { opacity:1; transform:scale(1) translateY(0); }
        }
        @keyframes blink {
          0%,100% { opacity:1; } 50% { opacity:0.3; }
        }
        @keyframes glowPulse {
          0%,100% { opacity:0.3; } 50% { opacity:0.7; }
        }

        .hero-anim-fadeup { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .hero-anim-vdin   { animation: vidIn 0.65s cubic-bezier(0.22,1,0.36,1) both; }
        .hero-blink       { animation: blink 1.6s ease-in-out infinite; }
        .hero-glow        { animation: glowPulse 4s ease-in-out infinite; }

        .delay-1 { animation-delay: 0.06s; }
        .delay-2 { animation-delay: 0.10s; }
        .delay-3 { animation-delay: 0.14s; }
        .delay-4 { animation-delay: 0.18s; }
        .delay-5 { animation-delay: 0.22s; }

        .btn-primary:hover {
          box-shadow: 0 0 0 1px #7DD3FC, 0 6px 24px rgba(125,211,252,0.25);
          background: #6dc8f8;
        }
        .btn-ghost:hover {
          color: #7DD3FC;
          border-color: rgba(125,211,252,0.4);
          background: rgba(125,211,252,0.04);
        }
        .arr-btn:hover {
          background: rgba(125,211,252,0.1);
          border-color: rgba(125,211,252,0.45);
          color: #7DD3FC;
        }
        .thumb-btn:hover {
          border-color: rgba(125,211,252,0.4);
        }
      `}</style>

      {/* Background bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 65% at -8% 52%, rgba(125,211,252,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-[clamp(1.5rem,4vw,3rem)] flex items-center gap-[clamp(2.5rem,5vw,5rem)] lg:flex-row flex-col py-16 lg:py-20">
        {/* ── LEFT: Content ── */}
        <div className="lg:w-[58%] w-full flex flex-col justify-center relative">
          {/* Eyebrow */}
          <div className="hero-anim-fadeup delay-1 mb-4">
            <div
              className="
      inline-flex items-center gap-2
      px-6 py-3
      rounded-full
      border border-[rgba(125,211,252,0.35)]
      bg-[rgba(125,211,252,0.08)]
      backdrop-blur-md
      shadow-[0_0_14px_rgba(125,211,252,0.15)]
    "
            >
              <span className="w-2 h-2 rounded-full bg-[#28E7C5] shadow-[0_0_8px_#7DD3FC]" />

              <span
                className="text-[1rem] sm:text-[0.8rem] tracking-[0.18em] uppercase"
                style={{
                  fontFamily: "'Google Sans', sans-serif",
                  color: "#28E7C5",
                }}
              >
                {s.badge}
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1
            className="hero-anim-fadeup delay-1 m-0 leading-[1.05] tracking-[-0.01em] text-white"
            style={{
              fontFamily: "'GoogleSans', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.01em",
              fontSize: "clamp(2rem, 4.1vw, 4.7rem)",
            }}
          >
            {s.headingLines.map((line, i) => (
              <span key={i} className="block text-white">
                {line}
              </span>
            ))}
          </h1>

          {/* Divider */}
          <div className="hero-anim-fadeup delay-2 flex items-center gap-2.5 my-5.5">
            <div
              className="w-full h-px opacity-45"
              style={{ background: ACCENT }}
            />
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
          </div>

          {/* Sub */}
          <p
            className="hero-anim-fadeup delay-3 mb-8.5 mt-0 max-w-140 leading-[1.8] font-bold"
            style={{
              fontFamily: "'Google Sans', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1rem,1.25vw,1.15rem)",
              color: "#ffffff",
            }}
          >
            {s.sub}
          </p>

        <p
            className="hero-anim-fadeup delay-3 mb-8.5 mt-0 max-w-140 leading-[1.8]"
            style={{
              fontFamily: "'Google Sans', sans-serif",
              fontWeight: 100,
              fontSize: "15px",
              color: "white/20",
            }}
          >
            {s.para}
          </p>

          {/* CTAs */}
          <div className="hero-anim-fadeup delay-4 flex flex-wrap gap-3">
            <button
              className="bg-[#28E7C5] transition-all duration-[0.22s] ease-in-out whitespace-nowrap cursor-pointer rounded-[13px] px-7 py-3.25 text-[0.8rem] font-semibold tracking-[0.06em]"
              style={{
                fontFamily: "'Google Sans', sans-serif",
                color: "#05070e",
                background: ACCENT,
                border: `1px solid ${ACCENT}`,
              }}
            >
              {s.primaryCta}
            </button>

            <button
              className="btn-ghost transition-all duration-[0.22s] ease-in-out whitespace-nowrap cursor-pointer rounded-[13px] px-6.5 py-3.25 text-[0.8rem] font-medium tracking-[0.06em] inline-flex items-center gap-1.5"
              style={{
                fontFamily: "'Google Sans', sans-serif",
                color: "rgba(255,255,255,0.5)",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.13)",
              }}
            >
              {s.ghostCta}
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3 h-3"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </button>
          </div>

          {/* Slide Nav */}
          <div className="flex items-center gap-2 mt-10">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className="h-0.75 rounded-[3px] border-none p-0 cursor-pointer transition-all duration-[0.4s] ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  width: i === currentSlide ? 32 : 10,
                  background:
                    i === currentSlide ? ACCENT : "rgba(255,255,255,0.14)",
                  boxShadow:
                    i === currentSlide
                      ? "0 0 8px rgba(125,211,252,0.5)"
                      : "none",
                }}
              />
            ))}
            <span
              className="text-[0.95rem] tracking-widest ml-1"
              style={{
                fontFamily: "'Google Sans', sans-serif",
                color: "rgba(255,255,255,0.18)",
              }}
            >
              {String(currentSlide + 1).padStart(2, "0")} /{" "}
              {String(SLIDES.length).padStart(2, "0")}
            </span>
            <div className="ml-auto flex gap-2">
              {[
                ["M15 19l-7-7 7-7", goToPrev],
                ["M9 5l7 7-7 7", goToNext],
              ].map(([path, fn], i) => (
                <button
                  key={i}
                  onClick={fn}
                  className="arr-btn transition-all duration-[0.18s] ease-in-out w-10.5 h-10.5 flex items-center justify-center rounded-full cursor-pointer hover:bg-[rgba(255,255,255,1)]"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.9)",
                    color: "rgba(255,255,255,1)",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3.5 h-3.5"
                  >
                    <path d={path} />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Video ── */}
        <div className="lg:w-[42%] w-full max-w-90 lg:max-w-none mx-auto flex flex-col items-center gap-3 relative">
          <div
            key={`v${currentSlide}`}
            className="hero-anim-vdin relative w-full"
          >
            {/* Glow ring */}
            <div
              className="hero-glow absolute -inset-px rounded-[18px] z-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(140deg,rgba(125,211,252,0.4) 0%,rgba(125,211,252,0.03) 55%,rgba(125,211,252,0.18) 100%)",
              }}
            />

            {/* Video card */}
            <div
              className="relative z-1 rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.018)",
                border: "1px solid rgba(125,211,252,0.1)",
                aspectRatio: "9/9",
                maxHeight: "80vh",
                boxShadow:
                  "0 0 0 1px rgba(0,0,0,0.5), 0 40px 90px rgba(0,0,0,0.7)",
              }}
            >
              <div className="relative w-full h-full">
                {SLIDES[currentSlide].images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[0.8s] ease-in-out"
                    style={{
                      opacity: i === currentImageIndex ? 1 : 0,
                    }}
                  />
                ))}
              </div>

              {/* Vignette */}
              <div
                className="absolute inset-0 z-2 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top,rgba(40,231,197,0.6) 0%,transparent 35%,transparent 70%,rgba(5,7,14,0.22) 100%)",
                }}
              />

              {/* Live chip */}
              <div
                className="absolute top-3.25 left-3.25 z-5 flex items-center gap-1.5 px-2.75 py-1.25 rounded-full"
                style={{
                  background: "rgba(40,231,197,0.1)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(125,211,252,0.2)",
                }}
              >
                <span
                  className="hero-blink w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: ACCENT }}
                />
                <span
                  className="text-[0.6rem] font-medium tracking-[0.14em] uppercase"
                  style={{
                    fontFamily: "'Google Sans', sans-serif",
                    color: ACCENT,
                  }}
                >
                  Live
                </span>
              </div>

              {/* Corner accents */}
              {[
                {
                  className: "top-[10px] left-[10px]",
                  style: {
                    borderTop: "1.5px solid rgba(125,211,252,0.4)",
                    borderLeft: "1.5px solid rgba(125,211,252,0.4)",
                  },
                },
                {
                  className: "top-[10px] right-[10px]",
                  style: {
                    borderTop: "1.5px solid rgba(125,211,252,0.4)",
                    borderRight: "1.5px solid rgba(125,211,252,0.4)",
                  },
                },
                {
                  className: "bottom-[10px] left-[10px]",
                  style: {
                    borderBottom: "1.5px solid rgba(125,211,252,0.4)",
                    borderLeft: "1.5px solid rgba(125,211,252,0.4)",
                  },
                },
                {
                  className: "bottom-[10px] right-[10px]",
                  style: {
                    borderBottom: "1.5px solid rgba(125,211,252,0.4)",
                    borderRight: "1.5px solid rgba(125,211,252,0.4)",
                  },
                },
              ].map(({ className, style }, i) => (
                <div
                  key={i}
                  className={`absolute w-4 h-4 z-4 pointer-events-none ${className}`}
                  style={style}
                />
              ))}

              {/* Counter */}
              <div
                className="absolute bottom-3.25 right-3.25 z-5 px-2.5 py-1 rounded-full text-[0.6rem] tracking-[0.12em]"
                style={{
                  background: "rgba(5,7,14,0.72)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  fontFamily: "'Google Sans', sans-serif",
                  color: "rgba(255,255,255,0.3)",
                }}
              >
                {String(currentSlide + 1).padStart(2, "0")} /{" "}
                {String(SLIDES.length).padStart(2, "0")}
              </div>
            </div>

            {/* Reflection */}
            <div
              className="absolute -bottom-4 left-[15%] right-[15%] h-8 rounded-[50%] pointer-events-none"
              style={{
                background: "rgba(125,211,252,0.07)",
                filter: "blur(16px)",
              }}
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 w-full">
            {SLIDES.map((sl, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className="thumb-btn flex-1 aspect-video rounded-md overflow-hidden cursor-pointer p-0 relative transition-all duration-200 ease-in-out"
                style={{
                  border:
                    i === currentSlide
                      ? `1.5px solid ${ACCENT}`
                      : "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.02)",
                  boxShadow:
                    i === currentSlide
                      ? "0 0 10px rgba(125,211,252,0.2)"
                      : "none",
                }}
              >
                {sl.poster && (
                  <img
                    src={sl.poster}
                    alt=""
                    className="w-full h-full object-cover block"
                  />
                )}
                {i === currentSlide && (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: "rgba(125,211,252,0.1)" }}
                  >
                    <svg viewBox="0 0 24 24" fill={ACCENT} className="w-3 h-3">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
