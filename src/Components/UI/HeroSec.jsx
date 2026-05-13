"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

const SLIDES = [
  // ===== AI TRAINING =====
  {
    badge: "AI Training",
    headingLines: ["From Beginner to", "AI Professional"],
    sub: "Hands-on training with real projects, portfolios, and job-ready skills. Built for careers, not just certificates.",
    para: "Most courses teach theory. We build careers. At DatagenixAI, you'll work on real industry projects, build portfolios, and gain skills companies actually hire for. Whether you're a student or working professional, this is your fast track into AI.",
    primaryCta: "Explore Courses",
    ghostCta: "Enroll Now",
    images: [
      "/Images/HeroSec/Training/1.jpg",
      "/Images/HeroSec/Training/2.jpg",
    ],
    poster: "/Images/HeroSec/Training/1.jpg",
    primaryLink: "/Courses",
    ghostLink: "/Courses#connect",
  },

  // ===== AI BUSINESS =====
  {
    badge: "AI for Business",
    headingLines: ["AI Is Not Optional.", "It's Advantage."],
    sub: "Drive growth, efficiency, and scalability with intelligent AI systems built for real business impact.",
    para: "AI is reshaping every industry—from manufacturing to finance. Companies are actively looking for skilled professionals, but there's a massive talent gap. This is your opportunity to step ahead of the crowd.",
    primaryCta: "Automate Now",
    ghostCta: "See Use Cases",
    images: [
      "/Images/HeroSec/Business/1.jpg",
      "/Images/HeroSec/Business/2.jpg",
    ],
    poster: "/Images/HeroSec/Business/1.jpg",
    primaryLink: "/Services",
    ghostLink: "/#contact",
  },

  // ===== AI PRODUCT DEVELOPMENT =====
  {
    badge: "AI Product Development",
    headingLines: ["Build Smart Products", "Before the Market"],
    sub: "Create AI-powered, connected systems with IoT and automation that lead the next wave of innovation.",
    para: "AI is projected to unlock massive value for MSMEs—but adoption is still fragmented. Businesses that act today will dominate tomorrow. At DatagenixAI, we don't just implement AI—we design intelligent ecosystems that drive revenue, efficiency, and long-term scalability.",
    primaryCta: "Start Building",
    ghostCta: "Discuss Idea",
    images: ["/Images/HeroSec/Product/1.jpg", "/Images/HeroSec/Product/2.jpg"],
    poster: "/Images/HeroSec/Product/1.jpg",
    primaryLink: "/Products",
    ghostLink: "/#contact",
  },
  // ===== AI AGRICULTURE =====
  {
    badge: "AI in Agriculture",
    headingLines: ["Farm Smarter.", "Grow Better."],
    sub: "Use AI to monitor crops, predict outcomes, and maximize yield while reducing risks and costs.",
    para: "Modern agriculture needs precision, speed, and smarter decision-making. With AI-powered monitoring, predictive analytics, and automation, farmers can improve crop health, reduce waste, and increase productivity while minimizing operational risks.",
    primaryCta: "Explore Farming AI",
    ghostCta: "Book Consultation",
    images: [
      "/Images/HeroSec/Agri/1.jpg",
      "/Images/HeroSec/Agri/Agri/2.jpg",
    ],
    poster: "/Images/HeroSec/Agri/1.jpg",
    primaryLink: "/Products",
    ghostLink: "/#contact",
  },

  // ===== AI HEALTHCARE =====
  {
    badge: "AI in Healthcare",
    headingLines: ["Faster Decisions.", "Better Care."],
    sub: "Enable smarter diagnostics, predictive monitoring, and efficient healthcare systems with AI.",
    para: "AI is transforming healthcare through intelligent diagnostics, patient monitoring, and data-driven decision-making. From reducing response time to improving treatment accuracy, AI helps healthcare providers deliver faster, safer, and more efficient care.",
    primaryCta: "Explore Healthcare AI",
    ghostCta: "Schedule Demo",
    images: [
      "/Images/HeroSec/Health/1.jpg",
      "/Images/HeroSec/Health/2.jpg",
    ],
    poster: "/Images/HeroSec/Health/1.jpg",
    primaryLink: "/Products",
    ghostLink: "/#contact",
  },

  // ===== AI REAL ESTATE =====
  {
    badge: "AI in Real Estate",
    headingLines: ["Sell Before", "You Build"],
    sub: "Immersive AI visualizations that help buyers experience properties before construction begins.",
    para: "AI-powered visualization and virtual walkthroughs are changing how properties are marketed and sold. Give clients realistic previews, interactive experiences, and faster decision-making tools that increase engagement and boost conversions before construction is even completed.",
    primaryCta: "Get 3D Walkthrough",
    ghostCta: "Free Consultation",
    images: [
      "/Images/HeroSec/Real/3.jpg",
      "/Images/HeroSec/Real/4.jpg",
    ],
    poster: "/Images/HeroSec/Real/1.jpg",
    primaryLink: "/Products",
    ghostLink: "/#contact",
  },
];

const ACCENT = "#28E7C5";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef(SLIDES.map(() => null));
  const rafRef = useRef(null);

  // ── Keep a ref that always holds the latest slide index ──
  // This prevents stale-closure bugs in the autoslide interval.
  const currentSlideRef = useRef(currentSlide);
  const currentImageIndexRef = useRef(currentImageIndex);
  const isTransitioningRef = useRef(isTransitioning);

  useEffect(() => { currentSlideRef.current = currentSlide; }, [currentSlide]);
  useEffect(() => { currentImageIndexRef.current = currentImageIndex; }, [currentImageIndex]);
  useEffect(() => { isTransitioningRef.current = isTransitioning; }, [isTransitioning]);

  // ── goToSlide always reads from refs so it's safe to call from intervals ──
  const goToSlide = useCallback((next) => {
    if (isTransitioningRef.current || next === currentSlideRef.current) return;
    isTransitioningRef.current = true;
    setIsTransitioning(true);

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    setTimeout(() => {
      setCurrentSlide(next);
      setCurrentImageIndex(0);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          const v = videoRefs.current[next];
          if (v) {
            v.currentTime = 0;
            v.play().catch(() => {});
          }
          isTransitioningRef.current = false;
          setIsTransitioning(false);
        }),
      );
    }, 420);
  }, []); // no deps needed — reads from refs

  const goToNext = useCallback(() => {
    goToSlide((currentSlideRef.current + 1) % SLIDES.length);
  }, [goToSlide]);

  const goToPrev = useCallback(() => {
    goToSlide((currentSlideRef.current - 1 + SLIDES.length) % SLIDES.length);
  }, [goToSlide]);

  // ── Autoslide: advance image, then advance slide when images are exhausted ──
  useEffect(() => {
    const interval = setInterval(() => {
      if (isTransitioningRef.current) return; // skip tick while transitioning

      const slide = currentSlideRef.current;
      const imgIdx = currentImageIndexRef.current;
      const total = SLIDES[slide].images.length;

      if (imgIdx < total - 1) {
        // Still more images on this slide — just advance the image
        setCurrentImageIndex(imgIdx + 1);
      } else {
        // Last image shown — move to next slide
        goToSlide((slide + 1) % SLIDES.length);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [goToSlide]); // goToSlide is stable (no deps), so this runs once

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
        @keyframes ctaShimmer {
          0% { left: -120%; }
          100% { left: 120%; }
        }
        @keyframes ctaPrimaryPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(40,231,197,0.55), 0 6px 24px rgba(40,231,197,0.35); }
          50%     { box-shadow: 0 0 0 6px rgba(40,231,197,0), 0 6px 24px rgba(40,231,197,0.35); }
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

        /* Primary CTA — brighter, pulsing glow */
        .btn-primary {
          position: relative;
          overflow: hidden;
          animation: ctaPrimaryPulse 2.4s ease-in-out infinite;
          transition: all 0.22s ease-in-out;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -120%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
          transform: skewX(-20deg);
          transition: none;
        }
        .btn-primary:hover::before {
          animation: ctaShimmer 0.65s ease forwards;
        }
        .btn-primary:hover {
          background: #4ff8e0 !important;
          box-shadow: 0 0 0 2px #28E7C5, 0 0 28px rgba(40,231,197,0.65), 0 8px 32px rgba(40,231,197,0.45) !important;
          transform: translateY(-2px) scale(1.03);
          animation: none;
        }
        .btn-primary:active {
          transform: translateY(1px) scale(0.98);
        }

        /* Ghost CTA — brighter border + glow on hover */
        .btn-ghost {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease-out;
        }
        .btn-ghost:hover {
          color: #28E7C5 !important;
          border-color: #28E7C5 !important;
          background: rgba(40,231,197,0.1) !important;
          box-shadow: 0 0 0 1px rgba(40,231,197,0.6), 0 0 22px rgba(40,231,197,0.3), inset 0 0 16px rgba(40,231,197,0.06) !important;
          transform: translateY(-2px);
        }
        .btn-ghost:active {
          transform: translateY(1px);
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
            <Link href={s.primaryLink}>
              <button
                className="btn-primary whitespace-nowrap cursor-pointer rounded-[13px] px-7 py-3.25 text-[0.8rem] font-semibold tracking-[0.06em]"
                style={{
                  fontFamily: "'Google Sans', sans-serif",
                  color: "#05070e",
                  background: ACCENT,
                  border: `1px solid ${ACCENT}`,
                }}
              >
                {s.primaryCta}
              </button>
            </Link>

            <Link href={s.ghostLink}>
              <button
                className="btn-ghost group whitespace-nowrap cursor-pointer rounded-[13px] px-6.5 py-3.25 text-[0.8rem] font-medium tracking-[0.06em] inline-flex items-center gap-1.5"
                style={{
                  fontFamily: "'Google Sans', sans-serif",
                  color: "#28e7c5",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(40,231,197,0.9)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Shine Effect */}
                <span
                  className="
        absolute top-0 left-[-120%] h-full w-[120%]
        rotate-12 bg-white/10
        transition-all duration-700
        group-hover:left-[120%]
      "
                />

                {/* Text */}
                <span className="relative z-10">{s.ghostCta}</span>

                {/* Arrow */}
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="
        relative z-10 w-3 h-3
        transition-transform duration-300
        group-hover:translate-x-1
      "
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </button>
            </Link>
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

        {/* ── RIGHT: Image Panel ── */}
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

            {/* Main image card — shows whichever thumbnail is selected */}
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
                {String(currentImageIndex + 1).padStart(2, "0")} /{" "}
                {String(SLIDES[currentSlide].images.length).padStart(2, "0")}
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

          {/* Thumbnails — exactly 2 images per slide, clicking sets the main image */}
          <div className="flex gap-2 w-full">
            {SLIDES[currentSlide].images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrentImageIndex(i)}
                className="thumb-btn flex-1 aspect-video rounded-md overflow-hidden cursor-pointer p-0 relative transition-all duration-200 ease-in-out"
                style={{
                  border:
                    i === currentImageIndex
                      ? `1.5px solid ${ACCENT}`
                      : "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.02)",
                  boxShadow:
                    i === currentImageIndex
                      ? "0 0 10px rgba(125,211,252,0.2)"
                      : "none",
                }}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover block"
                />
                {i === currentImageIndex && (
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