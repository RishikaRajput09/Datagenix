"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const TESTIMONIALS = [
  {
    name: "Mr. Rajesh Kesare",
    role: "Partner, SNR Electronics",
    initials: "RK",
    quote:
      "DatagenixAI brings a rare combination of deep technical expertise and practical industry understanding. Their innovative approach to automation and intelligent solutions helped us optimize processes, improve efficiency, and streamline operations. The team delivered high-quality work within timelines and demonstrated strong commitment to solving real engineering challenges.",
  },
  {
    name: "Mrs. Urvi Kadam",
    role: "Owner, Magnum Impex",
    initials: "UK",
    quote:
      "Working with DatagenixAI has been a great experience. Their digital and technology solutions helped us strengthen our brand identity and improve our operational efficiency. The team is highly professional, innovative, and always focused on delivering results that create real business value.",
  },
  {
    name: "Mr. Prashant Ghodke",
    role: "Owner, Induscare Wellness",
    initials: "PG",
    quote:
      "DatagenixAI helped us adopt modern digital tools that significantly improved our business operations and customer engagement. Their strategic insights and technology solutions enabled us to operate more efficiently while maintaining a strong and professional brand presence.",
  },
  {
    name: "Dr. Savita Patil-Kolekar",
    role: "Founder, Vision Diagnostics",
    initials: "SP",
    quote:
      "The DatagenixAI team understands both technology and business needs extremely well. Their solutions helped us improve operational workflows and build a stronger digital presence. Their professionalism, timely execution, and commitment to quality make them a highly reliable technology partner.",
  },
  {
    name: "Mr. Swanand Naravekar",
    role: "Owner, Aaple Naravekar Jewellery",
    initials: "SN",
    quote:
      "DatagenixAI helped us enhance our digital presence and streamline several operational processes. Their innovative ideas and attention to detail helped create a stronger brand identity for our business while improving overall efficiency.",
  },
  {
    name: "Mrs. Tejaswini Dhanwade",
    role: "Partner, IndoPloyflex Pvt. Ltd.",
    initials: "TD",
    quote:
      "The training programs conducted by DatagenixAI are extremely practical and industry-oriented. Their ability to simplify complex AI and data concepts makes learning highly effective. The sessions provided valuable insights that can be directly applied in real-world professional environments.",
  },
];

const CARD_GAP = 20; // px — must match the gap in the track

export default function TestimonialsSection() {
  const [focused, setFocused] = useState(0);
  const [visible, setVisible] = useState(false);
  const [offset, setOffset] = useState(0);

  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const dragStartX = useRef(null);
  const autoTimer = useRef(null);

  const total = TESTIMONIALS.length;

  // ── Intersection observer for fade-in ──
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // ── Recalculate track offset whenever focused or viewport resizes ──
  const recalcOffset = useCallback(() => {
    if (!viewportRef.current || !trackRef.current) return;
    const cards = trackRef.current.querySelectorAll("[data-card]");
    if (!cards.length) return;
    const vw = viewportRef.current.getBoundingClientRect().width;
    const cardW = cards[0].getBoundingClientRect().width;
    const newOffset = vw / 2 - focused * (cardW + CARD_GAP) - cardW / 2;
    setOffset(newOffset);
  }, [focused]);

  useEffect(() => {
    recalcOffset();
  }, [recalcOffset]);

  useEffect(() => {
    window.addEventListener("resize", recalcOffset);
    return () => window.removeEventListener("resize", recalcOffset);
  }, [recalcOffset]);

  // ── Navigation ──
  const goTo = useCallback((idx) => {
    setFocused(((idx % total) + total) % total);
  }, [total]);

  const prev = () => goTo(focused - 1);
  const next = () => goTo(focused + 1);

  // ── Auto-play ──
  const startAuto = useCallback(() => {
    clearInterval(autoTimer.current);
    autoTimer.current = setInterval(() => goTo(focused + 1), 4500);
  }, [focused, goTo]);

  useEffect(() => {
    startAuto();
    return () => clearInterval(autoTimer.current);
  }, [focused]);

  // ── Drag / swipe ──
  const onDragStart = (clientX) => { dragStartX.current = clientX; };
  const onDragEnd = (clientX) => {
    if (dragStartX.current === null) return;
    const diff = dragStartX.current - clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    dragStartX.current = null;
  };

  // ── Keyboard ──
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [focused]);

  return (
    <section
      ref={sectionRef}
      id="testimonials-section"
      className="relative overflow-hidden bg-transparent py-20"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-150 -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(33,198,207,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto w-7xl sm:px-6">

        {/* ── Eyebrow ── */}
        <div
          className="mb-4 flex justify-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.65s ease, transform 0.65s ease",
            transitionDelay: "0ms",
          }}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 backdrop-blur-md"
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
            <span
              className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#28E7C5]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Client Testimonials
            </span>
          </div>
        </div>

        {/* ── Heading ── */}
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
            className="text-[1.9rem] font-bold leading-[1.1] tracking-tight text-white sm:text-[2.5rem] lg:text-[3rem]"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}
          >
            Trusted by Businesses &{" "}
            <span className="text-[#28E7C5]">Professionals</span>
          </h2>
        </div>

        {/* ── Subheading ── */}
        <div
          className="mb-14 text-center sm:mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.65s ease, transform 0.65s ease",
            transitionDelay: "140ms",
          }}
        >
          <p
            className="mx-auto max-w-lg text-[0.88rem] font-light leading-[1.75] text-white/40 sm:text-[0.95rem]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Organizations and professionals trust DatagenixAI for innovation,
            expertise, and impactful technology solutions.
          </p>
        </div>

        {/* ── Slider ── */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.65s ease, transform 0.65s ease",
            transitionDelay: "220ms",
          }}
        >
          {/* Viewport — clips cards */}
          <div
            ref={viewportRef}
            className="relative overflow-hidden"
            style={{ cursor: "grab" }}
            onMouseDown={(e) => {
              e.currentTarget.style.cursor = "grabbing";
              onDragStart(e.clientX);
              clearInterval(autoTimer.current);
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.cursor = "grab";
              onDragEnd(e.clientX);
            }}
            onMouseLeave={(e) => {
              if (dragStartX.current !== null) {
                e.currentTarget.style.cursor = "grab";
                dragStartX.current = null;
              }
              startAuto();
            }}
            onMouseEnter={() => clearInterval(autoTimer.current)}
            onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
            onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
          >
            {/* Track */}
            <div
              ref={trackRef}
              className="flex"
              style={{
                gap: `${CARD_GAP}px`,
                transform: `translateX(${offset}px)`,
                transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
                willChange: "transform",
              }}
            >
              {TESTIMONIALS.map((t, i) => {
                const isFocused = i === focused;
                return (
                  <div
                    key={i}
                    data-card
                    onClick={() => goTo(i)}
                    className="relative flex shrink-0 cursor-pointer flex-col rounded-2xl p-6 sm:p-7"
                    style={{
                      width: "calc(33.333% - 14px)",
                      minWidth: 260,
                      background: "#0d0d0d",
                      border: isFocused
                        ? "1px solid rgba(33,198,207,0.45)"
                        : "1px solid rgba(33,198,207,0.12)",
                      boxShadow: isFocused
                        ? "0 0 0 1px rgba(33,198,207,0.18), 0 0 40px rgba(33,198,207,0.12), inset 0 0 60px rgba(33,198,207,0.03)"
                        : "none",
                      transform: isFocused
                        ? "scale(1.00) translateY(-4px)"
                        : "scale(0.97)",
                      opacity: isFocused ? 1 : 0.5,
                      transition:
                        "border-color 0.45s ease, box-shadow 0.45s ease, transform 0.45s ease, opacity 0.45s ease",
                    }}
                  >
                    {/* Inner glow overlay for focused card */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl"
                      style={{
                        background:
                          "radial-gradient(ellipse at 50% 0%, rgba(33,198,207,0.06) 0%, transparent 60%)",
                        opacity: isFocused ? 1 : 0,
                        transition: "opacity 0.45s ease",
                      }}
                    />

                    {/* Quote mark */}
                    <div
                      className="mb-1 text-[3.5rem] font-bold leading-none"
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        color: isFocused
                          ? "rgba(33,198,207,0.3)"
                          : "rgba(33,198,207,0.15)",
                        transition: "color 0.45s ease",
                      }}
                    >
                      "
                    </div>

                    {/* Quote text */}
                    <p
                      className="mb-5 flex-1 text-sm leading-[1.75]"
                      style={{
                        color: isFocused
                          ? "rgba(255,255,255,0.82)"
                          : "rgba(255,255,255,0.55)",
                        transition: "color 0.45s ease",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {t.quote}
                    </p>

                    {/* Divider */}
                    <div
                      className="mb-4 h-px"
                      style={{
                        background: isFocused
                          ? "rgba(33,198,207,0.22)"
                          : "rgba(33,198,207,0.1)",
                        transition: "background 0.45s ease",
                      }}
                    />

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-[#28E7C5]"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(33,198,207,0.22), rgba(33,198,207,0.06))",
                          border: isFocused
                            ? "1px solid rgba(33,198,207,0.5)"
                            : "1px solid rgba(33,198,207,0.22)",
                          boxShadow: isFocused
                            ? "0 0 14px rgba(33,198,207,0.2)"
                            : "none",
                          transition:
                            "border-color 0.45s ease, box-shadow 0.45s ease",
                        }}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <div
                          className="text-sm font-semibold text-white"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {t.name}
                        </div>
                        <div
                          className="text-xs text-[#28E7C5]"
                          style={{
                            opacity: isFocused ? 1 : 0.7,
                            transition: "opacity 0.45s ease",
                            fontFamily: "'DM Sans', sans-serif",
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

          {/* ── Nav Row ── */}
          <div className="mt-10 flex items-center justify-center gap-5">
            {/* Prev */}
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300"
              style={{
                border: "1px solid rgba(33,198,207,0.2)",
                background: "#0a0a0a",
                color: "rgba(255,255,255,0.5)",
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
              aria-label="Previous"
            >
              <svg
                viewBox="0 0 16 16"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10.5 3L5.5 8l5 5" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    height: "6px",
                    width: focused === i ? "24px" : "6px",
                    background:
                      focused === i ? "#21C6CF" : "rgba(33,198,207,0.22)",
                    boxShadow:
                      focused === i ? "0 0 8px rgba(33,198,207,0.5)" : "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300"
              style={{
                border: "1px solid rgba(33,198,207,0.2)",
                background: "#0a0a0a",
                color: "rgba(255,255,255,0.5)",
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
              aria-label="Next"
            >
              <svg
                viewBox="0 0 16 16"
                className="h-4 w-4"
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
          <div className="mt-4 flex justify-center">
            <span
              className="text-[0.72rem] tracking-widest text-white/20"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
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