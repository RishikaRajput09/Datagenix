"use client";

import { useEffect, useRef, useState } from "react";

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

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const ref = useRef(null);
  const total = TESTIMONIALS.length;

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % total), 4500);
    return () => clearInterval(t);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + total) % total);
  const next = () => setCurrent((p) => (p + 1) % total);

  const handleDragStart = (clientX) => { setDragging(true); setDragStart(clientX); };
  const handleDragEnd = (clientX) => {
    if (!dragging) return;
    setDragging(false);
    const diff = dragStart - clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
  };

  // Show 3 cards: prev, active, next
  const getCard = (offset) => TESTIMONIALS[(current + offset + total) % total];

  return (
    <section
      ref={ref}
      className="bg-[#050505] relative overflow-hidden py-12"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(33,198,207,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(33,198,207,0.03) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse,rgba(33,198,207,0.05) 0%,transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Eyebrow */}
        <div
          className="flex justify-center mb-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.65s ease, transform 0.65s ease",
            transitionDelay: "0ms",
          }}
        >
          <div
            className="inline-flex items-center gap-2 text-[#21C6CF] text-[0.62rem] sm:text-[0.68rem] font-medium tracking-[0.18em] uppercase"
            style={{ fontFamily: "'DM Sans',sans-serif" }}
          >
            <span className="w-[5px] h-[5px] rounded-full bg-[#21C6CF] inline-block shrink-0" style={{ boxShadow: "0 0 8px #21C6CF" }} />
            Client Testimonials
          </div>
        </div>

        {/* Heading */}
        <div
          className="text-center mb-3"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.65s ease, transform 0.65s ease",
            transitionDelay: "80ms",
          }}
        >
          <h2
            className="text-[1.9rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-white leading-[1.1] tracking-[-0.02em]"
            style={{ fontFamily: "'Syne',sans-serif" }}
          >
            Trusted by Businesses &{" "}
            <span className="text-[#21C6CF]">Professionals</span>
          </h2>
        </div>

        {/* Subheading */}
        <div
          className="text-center mb-14 sm:mb-18"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.65s ease, transform 0.65s ease",
            transitionDelay: "140ms",
          }}
        >
          <p
            className="text-[rgba(255,255,255,0.38)] text-[0.88rem] sm:text-[0.95rem] leading-[1.75] max-w-lg mx-auto"
            style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}
          >
            Organizations and professionals trust DatagenixAi for innovation, expertise, and impactful technology solutions.
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
          {/* Cards row */}
          <div
            className="relative flex items-stretch justify-center gap-4 sm:gap-5 overflow-hidden select-none"
            onMouseDown={(e) => handleDragStart(e.clientX)}
            onMouseUp={(e) => handleDragEnd(e.clientX)}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
            onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
          >
            {/* Side card left — hidden on mobile */}
            <div
              className="hidden lg:flex flex-col flex-1 max-w-[300px] rounded-xl border border-[rgba(33,198,207,0.06)] bg-[#0a0a0a] p-5 cursor-pointer"
              style={{
                opacity: 0.4,
                transform: "scale(0.95)",
                transition: "all 0.45s ease",
              }}
              onClick={prev}
            >
              <SideCardContent t={getCard(-1)} />
            </div>

            {/* Active card */}
            <div
              className="flex flex-col flex-shrink-0 w-full max-w-[520px] rounded-xl bg-[#0d0d0d] p-6 sm:p-8 cursor-grab active:cursor-grabbing"
              style={{
                border: "1px solid rgba(33,198,207,0.22)",
                boxShadow: "0 0 40px rgba(33,198,207,0.07), 0 8px 40px rgba(0,0,0,0.4)",
                transition: "all 0.45s ease",
              }}
            >
              {/* Quote icon */}
              <div
                className="text-[3.5rem] leading-none mb-2 font-bold"
                style={{
                  fontFamily: "'Syne',sans-serif",
                  color: "rgba(33,198,207,0.15)",
                  lineHeight: 1,
                }}
              >
                "
              </div>

              {/* Quote text */}
              <p
                className="text-[rgba(255,255,255,0.72)] leading-[1.8] mb-6 flex-1"
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(0.82rem, 1.5vw, 0.92rem)",
                }}
              >
                {TESTIMONIALS[current].quote}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-[rgba(33,198,207,0.1)] mb-5" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-[#050505] text-[0.78rem] font-bold shrink-0"
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    background: "linear-gradient(135deg,#21C6CF,#0ea5b5)",
                  }}
                >
                  {TESTIMONIALS[current].initials}
                </div>
                <div>
                  <div
                    className="text-white font-bold text-[0.9rem] leading-snug"
                    style={{ fontFamily: "'Syne',sans-serif" }}
                  >
                    {TESTIMONIALS[current].name}
                  </div>
                  <div
                    className="text-[#21C6CF] text-[0.72rem] tracking-wide mt-0.5"
                    style={{ fontFamily: "'DM Sans',sans-serif" }}
                  >
                    {TESTIMONIALS[current].role}
                  </div>
                </div>

                {/* Stars */}
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 12 12" className="w-3 h-3 fill-[#21C6CF]">
                      <path d="M6 0l1.35 4.15H12L8.33 6.72l1.35 4.15L6 8.4l-3.68 2.47L3.67 6.72 0 4.15h4.65z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Side card right — hidden on mobile */}
            <div
              className="hidden lg:flex flex-col flex-1 max-w-[300px] rounded-xl border border-[rgba(33,198,207,0.06)] bg-[#0a0a0a] p-5 cursor-pointer"
              style={{
                opacity: 0.4,
                transform: "scale(0.95)",
                transition: "all 0.45s ease",
              }}
              onClick={next}
            >
              <SideCardContent t={getCard(1)} />
            </div>
          </div>

          {/* Nav row */}
          <div className="flex items-center justify-center gap-5 mt-10">
            {/* Prev */}
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[rgba(33,198,207,0.2)] bg-[#0a0a0a] flex items-center justify-center text-[rgba(255,255,255,0.5)] hover:border-[#21C6CF] hover:text-[#21C6CF] transition-all duration-300"
            >
              <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current">
                <path d="M10.5 3L5.5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: current === i ? "24px" : "6px",
                    height: "6px",
                    background: current === i ? "#21C6CF" : "rgba(33,198,207,0.22)",
                    boxShadow: current === i ? "0 0 8px rgba(33,198,207,0.5)" : "none",
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[rgba(33,198,207,0.2)] bg-[#0a0a0a] flex items-center justify-center text-[rgba(255,255,255,0.5)] hover:border-[#21C6CF] hover:text-[#21C6CF] transition-all duration-300"
            >
              <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current">
                <path d="M5.5 3L10.5 8l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </button>
          </div>

          {/* Counter */}
          <div className="flex justify-center mt-4">
            <span
              className="text-[rgba(255,255,255,0.2)] text-[0.72rem] tracking-widest"
              style={{ fontFamily: "'DM Sans',sans-serif" }}
            >
              {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

function SideCardContent({ t }) {
  return (
    <>
      <div
        className="text-[2.5rem] leading-none mb-1 font-bold"
        style={{ fontFamily: "'Syne',sans-serif", color: "rgba(33,198,207,0.08)", lineHeight: 1 }}
      >
        "
      </div>
      <p
        className="text-[rgba(255,255,255,0.35)] leading-[1.75] mb-4 flex-1 line-clamp-4"
        style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300, fontSize: "0.78rem" }}
      >
        {t.quote}
      </p>
      <div className="w-full h-px bg-[rgba(33,198,207,0.07)] mb-4" />
      <div className="flex items-center gap-2.5">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-[#050505] text-[0.65rem] font-bold shrink-0"
          style={{ fontFamily: "'Syne',sans-serif", background: "linear-gradient(135deg,rgba(33,198,207,0.5),rgba(14,165,181,0.5))" }}
        >
          {t.initials}
        </div>
        <div>
          <div className="text-[rgba(255,255,255,0.5)] font-bold text-[0.78rem]" style={{ fontFamily: "'Syne',sans-serif" }}>{t.name}</div>
          <div className="text-[rgba(33,198,207,0.5)] text-[0.65rem]" style={{ fontFamily: "'DM Sans',sans-serif" }}>{t.role}</div>
        </div>
      </div>
    </>
  );
}