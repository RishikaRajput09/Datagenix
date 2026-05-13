"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const TESTIMONIALS = [
  {
    name: "Mr. Rajesh Kesare",
    role: "Founder, Director SNR Electronics",
    initials: "RK",
    tag: "Smart Manufacturing",
    quote:
      "DatagenixAI helped us bring real automation into our operations. Their approach is practical, not theoretical. We've seen improved efficiency, better decision-making, and a clear path toward smart manufacturing. This is the kind of AI implementation MSMEs truly need.",
  },
  {
    name: "Mrs. Urvi Kadam",
    role: "Owner, Magnum Impex",
    initials: "UK",
    tag: "Business Operations",
    quote:
      "DatagenixAI brings clarity where there was confusion. Their AI-driven insights helped us streamline operations and take faster, smarter business decisions. The impact is real and measurable.",
  },
  {
    name: "Mr. Prashant Ghodke",
    role: "Owner, Induscare Wellness",
    initials: "PG",
    tag: "Healthcare & Wellness",
    quote:
      "DatagenixAI helped us adopt modern digital tools that significantly improved our business operations and customer engagement. Their strategic insights and technology solutions enabled us to operate more efficiently while maintaining a strong and professional brand presence.",
  },
  {
    name: "Ms. Radhika Kumbhar",
    role: "B.TECH Student",
    initials: "RK",
    tag: "AI Training",
    quote:
      "Before joining DatagenixAI, AI felt overwhelming. Now I've built real projects, gained confidence, and even unlocked career opportunities. This training is practical, industry-focused, and truly transformational.",
  },
  {
    name: "Smita Patil",
    role: "Teacher Appasaheb Birnale Public School",
    initials: "SP",
    tag: "Education & FDP",
    quote:
      "The FDP and training sessions conducted by DatagenixAI were highly insightful and engaging. They simplified complex AI concepts and made them accessible for educators. It's a big step toward future-ready education.",
  },
  {
    name: "Mrs. Tejaswini Dhanwade",
    role: "Director IndoPolyFlex Pvt Ltd",
    initials: "TD",
    tag: "Manufacturing",
    quote:
      "What stood out is their ability to translate complex AI into simple, usable solutions. We experienced better process control, reduced inefficiencies, and a noticeable improvement in overall productivity.",
  },
  {
    name: "Mr. Prathamesh Kulkarni",
    role: "Owner & Director IRCED",
    initials: "PK",
    tag: "Financial Services",
    quote:
      "DatagenixAI brought a completely new level of efficiency to our operations. Their AI-powered automation streamlined our loan processing workflows, significantly reducing manual effort and turnaround time. What used to take hours now happens in minutes—with better accuracy and control. This is real transformation for financial services.",
  },
];

const CARD_GAP = 20;
const VISIBLE_CARDS = 3;

export default function TestimonialsSection() {
  const [focused, setFocused] = useState(0);
  const [visible, setVisible] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  // true when viewport width < 1024px (tablet + mobile)
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const dragStartX = useRef(null);
  const autoTimer = useRef(null);

  const total = TESTIMONIALS.length;

  // Detect breakpoint
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Recalculate so focused card is always centred (slot index 1 of 3)
  const recalc = useCallback(() => {
    if (!containerRef.current) return;
    if (isMobile) {
      // On mobile: full-width single card, no offset needed
      setTranslateX(0);
      return;
    }
    const containerW = containerRef.current.getBoundingClientRect().width;
    const cardW = (containerW - CARD_GAP * (VISIBLE_CARDS - 1)) / VISIBLE_CARDS;
    const tx = -((focused - 1) * (cardW + CARD_GAP));
    setTranslateX(tx);
  }, [focused, isMobile]);

  useEffect(() => {
    recalc();
  }, [recalc]);
  useEffect(() => {
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [recalc]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const goTo = useCallback(
    (idx) => {
      setFocused(((idx % total) + total) % total);
    },
    [total],
  );

  const prev = () => goTo(focused - 1);
  const next = () => goTo(focused + 1);

  useEffect(() => {
    clearInterval(autoTimer.current);
    autoTimer.current = setInterval(() => goTo(focused + 1), 4500);
    return () => clearInterval(autoTimer.current);
  }, [focused, goTo]);

  const onDragStart = (clientX) => {
    dragStartX.current = clientX;
    clearInterval(autoTimer.current);
  };
  const onDragEnd = (clientX) => {
    if (dragStartX.current === null) return;
    const diff = dragStartX.current - clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    dragStartX.current = null;
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [focused]);

  // ─── Mobile: single-card view ───────────────────────────────────────────────
  if (isMobile) {
    const t = TESTIMONIALS[focused];
    return (
      <section
        ref={sectionRef}
        id="testimonials-section"
        className="relative bg-transparent py-14"
      >
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
          style={{
            width: "340px",
            height: "200px",
            background:
              "radial-gradient(ellipse, rgba(33,198,207,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-lg px-4 sm:px-6">
          {/* Eyebrow */}
          <div
            className="mb-3 flex justify-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.65s ease, transform 0.65s ease",
            }}
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5"
              style={{
                border: "1px solid rgba(33,198,207,0.35)",
                background: "rgba(33,198,207,0.08)",
                boxShadow: "0 0 12px rgba(33,198,207,0.15)",
              }}
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#28E7C5]"
                style={{ boxShadow: "0 0 10px #21C6CF" }}
              />
              <span className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#28E7C5]">
                Client Testimonials
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            className="mb-3 text-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.65s ease, transform 0.65s ease",
              transitionDelay: "80ms",
            }}
          >
            <h2
              className="text-[1.5rem] font-bold leading-[1.15] text-white sm:text-[1.9rem]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Real Transformations.{" "}
              <span className="text-[#28E7C5]">Sustainable Impact. </span>
              Proven AI Excellence.
            </h2>
          </div>

          {/* Subheading */}
          <div
            className="mb-10 text-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.65s ease, transform 0.65s ease",
              transitionDelay: "140ms",
            }}
          >
            <p className="mx-auto max-w-sm text-[0.83rem] font-light leading-[1.75] text-white">
              From businesses to healthcare and education, DatagenixAI delivers
              practical, scalable, and impactful AI solutions.
            </p>
          </div>

          {/* Single Card */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition:
                "opacity 0.65s ease, transform 0.65s ease, all 0.45s cubic-bezier(0.4,0,0.2,1)",
              transitionDelay: "220ms",
            }}
            onMouseDown={(e) => onDragStart(e.clientX)}
            onMouseUp={(e) => onDragEnd(e.clientX)}
            onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
            onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                borderRadius: "16px",
                padding: "24px 20px",
                cursor: "grab",
                background:
                  "linear-gradient(145deg, #0d2030 0%, #0a1a26 60%, #071420 100%)",
                border: "1px solid rgba(33,198,207,0.45)",
                boxShadow:
                  "0 0 0 1px rgba(33,198,207,0.15), 0 8px 48px rgba(33,198,207,0.14), inset 0 0 60px rgba(33,198,207,0.04)",
              }}
            >
              {/* Inner glow */}
              <div
                style={{
                  pointerEvents: "none",
                  position: "absolute",
                  inset: 0,
                  borderRadius: "16px",
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(33,198,207,0.08) 0%, transparent 55%)",
                }}
              />

              {/* Tag */}
              <div
                style={{
                  marginBottom: "14px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    borderRadius: "999px",
                    padding: "4px 10px",
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    background: "rgba(33,198,207,0.15)",
                    border: "1px solid rgba(33,198,207,0.4)",
                    color: "#28E7C5",
                  }}
                >
                  <span
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "currentColor",
                      boxShadow: "0 0 6px #28E7C5",
                    }}
                  />
                  {t.tag}
                </span>
              </div>

              {/* Quote mark */}
              <div
                style={{
                  fontSize: "3.2rem",
                  fontWeight: 800,
                  lineHeight: 1,
                  color: "rgba(33,198,207,0.35)",
                  marginTop: "-6px",
                  marginBottom: "4px",
                }}
              >
                "
              </div>

              {/* Quote text */}
              <p
                style={{
                  flex: 1,
                  margin: "0 0 20px",
                  fontSize: "0.875rem",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                {t.quote}
              </p>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  marginBottom: "16px",
                  background:
                    "linear-gradient(90deg, rgba(33,198,207,0.35), transparent)",
                }}
              />

              {/* Author */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#28E7C5",
                    background:
                      "linear-gradient(135deg, rgba(33,198,207,0.22), rgba(33,198,207,0.06))",
                    border: "1px solid rgba(33,198,207,0.5)",
                    boxShadow: "0 0 14px rgba(33,198,207,0.22)",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "white",
                    }}
                  >
                    {t.name}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#28E7C5" }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div
            style={{
              marginTop: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            <button
              onClick={prev}
              aria-label="Previous"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(33,198,207,0.2)",
                background: "rgba(10,26,38,0.8)",
                color: "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#21C6CF";
                e.currentTarget.style.color = "#21C6CF";
                e.currentTarget.style.boxShadow =
                  "0 0 14px rgba(33,198,207,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(33,198,207,0.2)";
                e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <svg
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10.5 3L5.5 8l5 5" />
              </svg>
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  style={{
                    height: "6px",
                    width: focused === i ? "24px" : "6px",
                    borderRadius: "999px",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    background:
                      focused === i ? "#21C6CF" : "rgba(33,198,207,0.22)",
                    boxShadow:
                      focused === i ? "0 0 8px rgba(33,198,207,0.5)" : "none",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(33,198,207,0.2)",
                background: "rgba(10,26,38,0.8)",
                color: "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#21C6CF";
                e.currentTarget.style.color = "#21C6CF";
                e.currentTarget.style.boxShadow =
                  "0 0 14px rgba(33,198,207,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(33,198,207,0.2)";
                e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <svg
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5.5 3L10.5 8l-5 5" />
              </svg>
            </button>
          </div>

          {/* Counter */}
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.2)",
              }}
            >
              {String(focused + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </section>
    );
  }

  // ─── Desktop: original 3-card carousel (unchanged) ──────────────────────────
  return (
    <section
      ref={sectionRef}
      id="testimonials-section"
      className="relative bg-transparent py-20"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          width: "600px",
          height: "300px",
          background:
            "radial-gradient(ellipse, rgba(33,198,207,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div
          className="mb-4 flex justify-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.65s ease, transform 0.65s ease",
          }}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-7 py-4"
            style={{
              border: "1px solid rgba(33,198,207,0.35)",
              background: "rgba(33,198,207,0.08)",
              boxShadow: "0 0 12px rgba(33,198,207,0.15)",
            }}
          >
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#28E7C5]"
              style={{ boxShadow: "0 0 10px #21C6CF" }}
            />
            <span className="text-[0.82rem] font-medium uppercase tracking-[0.18em] text-[#28E7C5]">
              Client Testimonials
            </span>
          </div>
        </div>

        {/* Heading */}
        <div
          className="mb-3 text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.65s ease, transform 0.65s ease",
            transitionDelay: "80ms",
          }}
        >
          <h2
            className="text-[1.9rem] font-bold leading-[1.1] text-white sm:text-[2.5rem] lg:text-[3rem]"
            style={{ letterSpacing: "-0.02em" }}
          >
            Real Transformations.{" "}
            <span className="text-[#28E7C5]">Sustainable Impact. </span>
            Proven AI Excellence.
          </h2>
        </div>

        {/* Subheading */}
        <div
          className="mb-14 text-center sm:mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.65s ease, transform 0.65s ease",
            transitionDelay: "140ms",
          }}
        >
          <p className="mx-auto max-w-lg text-[0.88rem] font-light leading-[1.75] text-white sm:text-[0.95rem]">
            From businesses to healthcare and education, DatagenixAI delivers
            practical, scalable, and impactful AI solutions. Our work creates
            measurable transformation—driving efficiency, innovation, and
            long-term sustainable growth.
          </p>
        </div>

        {/* ── SLIDER ── */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.65s ease, transform 0.65s ease",
            transitionDelay: "220ms",
          }}
        >
          <div
            style={{
              overflow: "hidden",
              marginTop: "-28px",
              paddingTop: "28px",
              marginBottom: "-28px",
              paddingBottom: "28px",
            }}
          >
            <div
              ref={containerRef}
              style={{
                position: "relative",
                overflow: "visible",
                cursor: "grab",
                userSelect: "none",
              }}
              onMouseDown={(e) => onDragStart(e.clientX)}
              onMouseUp={(e) => onDragEnd(e.clientX)}
              onMouseLeave={() => {
                dragStartX.current = null;
              }}
              onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
              onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
            >
              <div
                style={{
                  display: "flex",
                  gap: `${CARD_GAP}px`,
                  transform: `translateX(${translateX}px)`,
                  transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
                  willChange: "transform",
                }}
              >
                {TESTIMONIALS.map((t, i) => {
                  const isFocused = i === focused;
                  const dist = Math.min(
                    Math.abs(i - focused),
                    Math.abs(i - focused + total),
                    Math.abs(i - focused - total),
                  );
                  const isAdjacent = dist === 1;

                  return (
                    <div
                      key={i}
                      data-card
                      onClick={() => goTo(i)}
                      style={{
                        flex: `0 0 calc((100% - ${CARD_GAP * (VISIBLE_CARDS - 1)}px) / ${VISIBLE_CARDS})`,
                        minWidth: 0,
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "16px",
                        padding: "28px",
                        cursor: "pointer",
                        background: isFocused
                          ? "linear-gradient(145deg, #0d2030 0%, #0a1a26 60%, #071420 100%)"
                          : "linear-gradient(145deg, #0b1c2a 0%, #091624 60%, #061220 100%)",
                        border: isFocused
                          ? "1px solid rgba(33,198,207,0.45)"
                          : "1px solid rgba(33,198,207,0.12)",
                        boxShadow: isFocused
                          ? "0 0 0 1px rgba(33,198,207,0.15), 0 8px 48px rgba(33,198,207,0.14), inset 0 0 60px rgba(33,198,207,0.04)"
                          : "0 2px 16px rgba(0,0,0,0.3)",
                        transform: isFocused
                          ? "translateY(-6px)"
                          : "translateY(0px)",
                        opacity: isFocused ? 1 : isAdjacent ? 0.6 : 0.3,
                        transition: "all 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <div
                        style={{
                          pointerEvents: "none",
                          position: "absolute",
                          inset: 0,
                          borderRadius: "16px",
                          background:
                            "radial-gradient(ellipse at 50% 0%, rgba(33,198,207,0.08) 0%, transparent 55%)",
                          opacity: isFocused ? 1 : 0,
                          transition: "opacity 0.45s ease",
                        }}
                      />

                      <div
                        style={{
                          marginBottom: "16px",
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            borderRadius: "999px",
                            padding: "4px 10px",
                            fontSize: "0.6rem",
                            fontWeight: 600,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            background: isFocused
                              ? "rgba(33,198,207,0.15)"
                              : "rgba(33,198,207,0.07)",
                            border: isFocused
                              ? "1px solid rgba(33,198,207,0.4)"
                              : "1px solid rgba(33,198,207,0.18)",
                            color: isFocused
                              ? "#28E7C5"
                              : "rgba(40,231,197,0.6)",
                            transition: "all 0.45s ease",
                          }}
                        >
                          <span
                            style={{
                              width: "4px",
                              height: "4px",
                              borderRadius: "50%",
                              background: "currentColor",
                              boxShadow: isFocused ? "0 0 6px #28E7C5" : "none",
                            }}
                          />
                          {t.tag}
                        </span>
                      </div>

                      <div
                        style={{
                          fontSize: "3.2rem",
                          fontWeight: 800,
                          lineHeight: 1,
                          color: isFocused
                            ? "rgba(33,198,207,0.35)"
                            : "rgba(33,198,207,0.15)",
                          marginTop: "-6px",
                          marginBottom: "4px",
                          transition: "color 0.45s ease",
                        }}
                      >
                        "
                      </div>

                      <p
                        style={{
                          flex: 1,
                          margin: "0 0 20px",
                          fontSize: "0.875rem",
                          lineHeight: 1.75,
                          color: isFocused
                            ? "rgba(255,255,255,0.92)"
                            : "rgba(255,255,255,0.5)",
                          transition: "color 0.45s ease",
                        }}
                      >
                        {t.quote}
                      </p>

                      <div
                        style={{
                          height: "1px",
                          marginBottom: "16px",
                          background: isFocused
                            ? "linear-gradient(90deg, rgba(33,198,207,0.35), transparent)"
                            : "rgba(33,198,207,0.08)",
                          transition: "background 0.45s ease",
                        }}
                      />

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <div
                          style={{
                            flexShrink: 0,
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            color: "#28E7C5",
                            background:
                              "linear-gradient(135deg, rgba(33,198,207,0.22), rgba(33,198,207,0.06))",
                            border: isFocused
                              ? "1px solid rgba(33,198,207,0.5)"
                              : "1px solid rgba(33,198,207,0.2)",
                            boxShadow: isFocused
                              ? "0 0 14px rgba(33,198,207,0.22)"
                              : "none",
                            transition: "all 0.45s ease",
                          }}
                        >
                          {t.initials}
                        </div>
                        <div>
                          <div
                            style={{
                              fontSize: "0.875rem",
                              fontWeight: 600,
                              color: "white",
                            }}
                          >
                            {t.name}
                          </div>
                          <div
                            style={{
                              fontSize: "0.75rem",
                              color: "#28E7C5",
                              opacity: isFocused ? 1 : 0.6,
                              transition: "opacity 0.45s ease",
                            }}
                          >
                            {t.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Nav */}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <button
              onClick={prev}
              aria-label="Previous"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(33,198,207,0.2)",
                background: "rgba(10,26,38,0.8)",
                color: "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#21C6CF";
                e.currentTarget.style.color = "#21C6CF";
                e.currentTarget.style.boxShadow =
                  "0 0 14px rgba(33,198,207,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(33,198,207,0.2)";
                e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <svg
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10.5 3L5.5 8l5 5" />
              </svg>
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  style={{
                    height: "6px",
                    width: focused === i ? "24px" : "6px",
                    borderRadius: "999px",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    background:
                      focused === i ? "#28e7c5" : "rgba(33,198,207,0.22)",
                    boxShadow:
                      focused === i ? "0 0 8px rgba(33,198,207,0.5)" : "none",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(33,198,207,0.2)",
                background: "rgba(10,26,38,0.8)",
                color: "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#21C6CF";
                e.currentTarget.style.color = "#21C6CF";
                e.currentTarget.style.boxShadow =
                  "0 0 14px rgba(33,198,207,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(33,198,207,0.2)";
                e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <svg
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5.5 3L10.5 8l-5 5" />
              </svg>
            </button>
          </div>

          {/* Counter */}
          <div
            style={{
              marginTop: "12px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.2)",
              }}
            >
              {String(focused + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
