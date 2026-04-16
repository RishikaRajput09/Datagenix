"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const SLIDES = [
  {
    badge: "AI in Agriculture",
    headingLines: ["Smart Farming,", "Higher Yield,", "Less Effort."],
    accentLine: 1,
    sub: "Leverage AI for crop monitoring, yield prediction, and precision farming to maximize productivity while reducing costs.",
    primaryCta: "Explore Agri AI",
    ghostCta: "See Use Cases",
    video: "/videos/hero-sec-1.mp4",
    poster: "/Images/hero-sec-1.jpg",
  },
  {
    badge: "AI Business Solutions",
    headingLines: ["Automate,", "Optimize,", "Scale Faster."],
    accentLine: 2,
    sub: "Transform your business with AI-driven automation, workflows, and decision intelligence tailored for real-world impact.",
    primaryCta: "Get AI for Business",
    ghostCta: "View Solutions",
    video: "/videos/hero-sec-2.mp4",
    poster: "/Images/hero-sec-2.jpg",
  },
  {
    badge: "AI in Real Estate",
    headingLines: ["Smarter Deals,", "Better Insights,", "Faster Sales."],
    accentLine: 1,
    sub: "Use AI for property valuation, demand prediction, and personalized recommendations to close deals with confidence.",
    primaryCta: "Explore Real Estate AI",
    ghostCta: "Watch Demo",
    video: "/videos/hero-sec-3.mp4",
    poster: "/Images/hero-sec-3.jpg",
  },
];

const ACCENT = "#7DD3FC"; // sky-300

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const videoRefs = useRef(SLIDES.map(() => null));
  const rafRef = useRef(null);

  const tick = useCallback(() => {
    const v = videoRefs.current[currentSlide];
    if (v && v.duration) setVideoProgress((v.currentTime / v.duration) * 100);
    rafRef.current = requestAnimationFrame(tick);
  }, [currentSlide]);

  const startProgress = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  const goToSlide = useCallback(
    (next) => {
      if (isTransitioning || next === currentSlide) return;
      setIsTransitioning(true);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setVideoProgress(0);
      videoRefs.current.forEach((v, i) => {
        if (!v) return;
        v.pause();
        if (i === currentSlide) v.currentTime = 0;
      });
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
            startProgress();
          }),
        );
      }, 420);
    },
    [currentSlide, isTransitioning, startProgress],
  );

  const goToNext = useCallback(
    () => goToSlide((currentSlide + 1) % SLIDES.length),
    [currentSlide, goToSlide],
  );
  const goToPrev = useCallback(
    () => goToSlide((currentSlide - 1 + SLIDES.length) % SLIDES.length),
    [currentSlide, goToSlide],
  );

  useEffect(() => {
    const v = videoRefs.current[0];
    if (v) {
      v.play().catch(() => {});
      startProgress();
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []); // eslint-disable-line

  const s = SLIDES[currentSlide];

  return (
    <section
      id="hero-section"
      className="relative w-full flex items-center overflow-hidden bg-none pt-15"
    >
      {/* Keyframe styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&family=DM+Sans:opsz,wght@9..40,300;400;500;600&display=swap');

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

      {/* Dot grid */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.016]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dot-grid"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.8" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </svg>

      {/* Layout */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-[clamp(1.5rem,4vw,3rem)] flex items-center gap-[clamp(2.5rem,5vw,5rem)] lg:flex-row flex-col py-16 lg:py-20">
        {/* ── LEFT: Content ── */}
        <div className="lg:w-[58%] w-full flex flex-col justify-center relative">
          {/* Heading */}
          <h1
            className="hero-anim-fadeup delay-1 m-0 leading-[1.05] tracking-[-0.01em]"
            style={{
              fontFamily: "'GoogleSans', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.01em",
              fontSize: "clamp(2rem, 4.1vw, 4.7rem)",
            }}
          >
            {s.headingLines.map((line, i) => (
              <span key={i} className="block">
                {i === s.accentLine ? (
                  <span
                    style={{
                      background:
                        "linear-gradient(110deg,#ffffff 0%,#bae6fd 40%,#7DD3FC 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {line}
                  </span>
                ) : i === 0 ? (
                  <span className="text-white">{line}</span>
                ) : (
                  <span
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {line}
                  </span>
                )}
              </span>
            ))}
          </h1>

          {/* Divider */}
          <div className="hero-anim-fadeup delay-2 flex items-center gap-[10px] my-[22px]">
            <div
              className="w-7 h-px opacity-45"
              style={{ background: ACCENT }}
            />
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
          </div>

          {/* Sub */}
          <p
            className="hero-anim-fadeup delay-3 mb-[34px] mt-0 max-w-[480px] leading-[1.8]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(0.875rem,1.1vw,1rem)",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            {s.sub}
          </p>

          {/* CTAs */}
          <div className="hero-anim-fadeup delay-4 flex flex-wrap gap-3">
            <button
              className="btn-primary transition-all duration-[0.22s] ease-in-out whitespace-nowrap cursor-pointer rounded-[3px] px-7 py-[13px] text-[0.8rem] font-semibold tracking-[0.06em]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#05070e",
                background: ACCENT,
                border: `1px solid ${ACCENT}`,
              }}
            >
              {s.primaryCta}
            </button>

            <button
              className="btn-ghost transition-all duration-[0.22s] ease-in-out whitespace-nowrap cursor-pointer rounded-[3px] px-[26px] py-[13px] text-[0.8rem] font-medium tracking-[0.06em] inline-flex items-center gap-1.5"
              style={{
                fontFamily: "'DM Sans', sans-serif",
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

          {/* Trust */}
          <div className="hero-anim-fadeup delay-5 flex items-center gap-3 mt-8">
            <div className="flex">
              {[ACCENT, "rgba(125,211,252,0.38)", "rgba(125,211,252,0.16)"].map(
                (bg, i) => (
                  <div
                    key={i}
                    className="w-[26px] h-[26px] rounded-full border-2 flex items-center justify-center text-[0.58rem] font-bold"
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      background: bg,
                      borderColor: "#05070e",
                      marginLeft: i > 0 ? -8 : 0,
                      color: i === 0 ? "#05070e" : ACCENT,
                      zIndex: 3 - i,
                    }}
                  >
                    {["A", "B", "C"][i]}
                  </div>
                ),
              )}
            </div>
            <div
              className="w-px h-[18px]"
              style={{ background: "rgba(255,255,255,0.07)" }}
            />
            <p
              className="text-[0.7rem] leading-[1.55] m-0"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "rgba(255,255,255,0.28)",
              }}
            >
              Responsible AI aligned with
              <br />
              <span style={{ color: "rgba(125,211,252,0.55)" }}>
                UN Sustainable Development Goals
              </span>
            </p>
          </div>

          {/* Slide Nav */}
          <div className="flex items-center gap-2 mt-10">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className="h-[3px] rounded-[3px] border-none p-0 cursor-pointer transition-all duration-[0.4s] ease-[cubic-bezier(0.22,1,0.36,1)]"
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
              className="text-[0.65rem] tracking-[0.1em] ml-1"
              style={{
                fontFamily: "'DM Sans', sans-serif",
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
                  className="arr-btn transition-all duration-[0.18s] ease-in-out w-[34px] h-[34px] flex items-center justify-center rounded-full cursor-pointer"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-[14px] h-[14px]"
                  >
                    <path d={path} />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Video ── */}
        <div className="lg:w-[42%] w-full max-w-[360px] lg:max-w-none mx-auto flex flex-col items-center gap-3 relative">
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
              className="relative z-[1] rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.018)",
                border: "1px solid rgba(125,211,252,0.1)",
                aspectRatio: "9/9",
                maxHeight: "80vh",
                boxShadow:
                  "0 0 0 1px rgba(0,0,0,0.5), 0 40px 90px rgba(0,0,0,0.7)",
              }}
            >
              {SLIDES.map((sl, i) => (
                <video
                  key={i}
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  src={sl.video}
                  poster={sl.poster}
                  playsInline
                  muted
                  preload="auto"
                  onEnded={i === currentSlide ? goToNext : undefined}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-[0.45s] ease-in-out"
                  style={{
                    opacity: i === currentSlide && !isTransitioning ? 1 : 0,
                  }}
                />
              ))}

              {/* Vignette */}
              <div
                className="absolute inset-0 z-[2] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top,rgba(5,7,14,0.6) 0%,transparent 35%,transparent 70%,rgba(5,7,14,0.22) 100%)",
                }}
              />

              {/* Live chip */}
              <div
                className="absolute top-[13px] left-[13px] z-[5] flex items-center gap-[6px] px-[11px] py-[5px] rounded-full"
                style={{
                  background: "rgba(5,7,14,0.78)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(125,211,252,0.2)",
                }}
              >
                <span
                  className="hero-blink w-[6px] h-[6px] rounded-full flex-shrink-0"
                  style={{ background: ACCENT }}
                />
                <span
                  className="text-[0.6rem] font-medium tracking-[0.14em] uppercase"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
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
                  className={`absolute w-4 h-4 z-[4] pointer-events-none ${className}`}
                  style={style}
                />
              ))}

              {/* Counter */}
              <div
                className="absolute bottom-[13px] right-[13px] z-[5] px-[10px] py-1 rounded-full text-[0.6rem] tracking-[0.12em]"
                style={{
                  background: "rgba(5,7,14,0.72)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  fontFamily: "'DM Sans', sans-serif",
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

          {/* Progress bar */}
          <div className="w-full flex items-center gap-[10px]">
            <div
              className="flex-1 h-[2px] rounded-[2px] overflow-hidden"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <div
                className="h-full rounded-[2px] transition-[width] duration-[0.08s] linear"
                style={{
                  background: ACCENT,
                  width: `${videoProgress}%`,
                  boxShadow: "0 0 6px rgba(125,211,252,0.45)",
                }}
              />
            </div>
            <span
              className="text-[0.6rem] tracking-[0.08em]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "rgba(125,211,252,0.38)",
              }}
            >
              {Math.round(videoProgress)}%
            </span>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 w-full">
            {SLIDES.map((sl, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className="thumb-btn flex-1 aspect-video rounded-md overflow-hidden cursor-pointer p-0 relative transition-all duration-[0.2s] ease-in-out"
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
