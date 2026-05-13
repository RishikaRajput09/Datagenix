"use client";

import { HexBackground } from "@/Components/UI/HexBackground";
import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";

const PRODUCTS = [
  {
    id: 1,
    eyebrow: "Agriculture",
    title: "AI-Powered Autonomous Agriculture Robot",
    tagline: "Smart farming powered by AI and IoT",
    description:
      "An intelligent autonomous robot designed to monitor, analyze, and optimize crop health in real time. Increased crop yield and quality, reduced resource wastage (water, chemicals), and data-driven decision-making for farmers.",
    features: [
      {
        icon: "◈",
        label: "Crop scanning using sensors and vision systems",
        desc: "",
      },
      {
        icon: "⬡",
        label: "Disease detection and crop growth monitoring",
        desc: "",
      },
      {
        icon: "◉",
        label:
          "AI-based recommendations for irrigation, fertilizers, and pesticides",
        desc: "",
      },
      {
        icon: "◆",
        label: "Integration with weather stations for predictive insights",
        desc: "",
      },
      { icon: "▣", label: "Autonomous navigation across fields", desc: "" },
      {
        icon: "◈",
        label: "Targeted pesticide spraying when required",
        desc: "",
      },
    ],
    cta: "Explore",
    tag: "AI + IoT",
    images: [
      "/Images/HeroSec/Agri/1.jpg",
      "/Images/HeroSec/Agri/2.jpg",
      "/Images/HeroSec/Agri/3.jpg",
      "/Images/HeroSec/Agri/4.jpg",
    ],
    imageLeft: false,
  },

  {
    id: 2,
    eyebrow: "Industry",
    title: "Predictive Maintenance System for Industrial Assets",
    tagline: "Prevent failures before they happen",
    description:
      "A robust AI + IoT solution for monitoring and predicting failures in high-value industrial assets such as transformers and generators. Reduced downtime and unexpected failures, increased asset lifespan, and cost savings through planned maintenance.",
    features: [
      {
        icon: "◈",
        label:
          "Real-time sensor data acquisition (temperature, vibration, load, etc.)",
        desc: "",
      },
      {
        icon: "⬡",
        label: "Machine learning-based anomaly detection",
        desc: "",
      },
      {
        icon: "◉",
        label: "Failure prediction and early warning alerts",
        desc: "",
      },
      {
        icon: "◆",
        label: "Intelligent load shifting recommendations",
        desc: "",
      },
      { icon: "▣", label: "Maintenance scheduling optimization", desc: "" },
    ],
    cta: "Explore",
    tag: "Industrial AI",
    images: [
      "/Images/HeroSec/Business/1.jpg",
      "/Images/HeroSec/Business/2.jpg",
      "/Images/HeroSec/Business/3.jpg",
      "/Images/HeroSec/Business/4.jpg",
      "/Images/HeroSec/Business/5.jpg",
    ],
    imageLeft: true,
  },

  {
    id: 3,
    eyebrow: "Retail",
    title: "Smart Product Vending Machines",
    tagline: "24x7 automated retail with intelligence and convenience",
    description:
      "AI-powered vending machines designed for fully automated product dispensing, suitable for a wide range of locations and use cases. Reduced manpower requirements, continuous revenue generation, and smart inventory and sales optimization.",
    features: [
      { icon: "◈", label: "24/7 autonomous operation", desc: "" },
      {
        icon: "⬡",
        label: "Touchscreen-based product selection interface",
        desc: "",
      },
      {
        icon: "◉",
        label: "Secure digital payment integration (UPI, cards, wallets)",
        desc: "",
      },
      {
        icon: "◆",
        label: "Inventory monitoring and smart restocking alerts",
        desc: "",
      },
      {
        icon: "▣",
        label: "AI-based demand insights and sales analytics",
        desc: "",
      },
      { icon: "◈", label: "Remote monitoring and control", desc: "" },
    ],
    cta: "Explore",
    tag: "Automation",
    images: [
      "/Images/HeroSec/Product/1.jpg",
      "/Images/HeroSec/Product/2.jpg",
      "/Images/HeroSec/Product/2.jpg",
    ],
    imageLeft: false,
  },

  {
    id: 4,
    eyebrow: "Business",
    title: "AI-Powered Business Automation & E-Commerce Solutions",
    tagline: "Transform businesses with AI-driven intelligence",
    description:
      "We design and develop smart digital platforms and automation systems to help businesses scale efficiently. Improved operational efficiency, better customer experience, and increased revenue through data-driven decisions.",
    features: [
      { icon: "◈", label: "Custom e-commerce website development", desc: "" },
      {
        icon: "⬡",
        label: "AI-driven data analysis and business intelligence",
        desc: "",
      },
      { icon: "◉", label: "Workflow automation using AI agents", desc: "" },
      {
        icon: "◆",
        label: "Customer engagement and personalization systems",
        desc: "",
      },
      {
        icon: "▣",
        label: "Scalable digital tools for business growth",
        desc: "",
      },
    ],
    cta: "Explore",
    tag: "Business AI",
    images: [
      "/Images/HeroSec/Business/6.jpg",
      "/Images/HeroSec/Business/5.jpg",
      "/Images/HeroSec/Business/3.jpg",
    ],
    imageLeft: true,
  },

  {
    id: 5,
    eyebrow: "Automation",
    title: "AI Agents & Automation Systems",
    tagline: "Automate workflows. Multiply productivity.",
    description:
      "We build AI agents and automation systems that can handle repetitive and decision-based tasks for individuals and organizations. Reduced manual workload, faster operations, and enhanced productivity.",
    features: [
      { icon: "◈", label: "Intelligent task automation", desc: "" },
      { icon: "⬡", label: "Conversational AI agents", desc: "" },
      { icon: "◉", label: "Workflow optimization", desc: "" },
      { icon: "◆", label: "Integration with business systems", desc: "" },
      { icon: "▣", label: "Scalable and customizable solutions", desc: "" },
    ],
    cta: "Explore",
    tag: "AI Systems",
    images: [
      "/Images/HeroSec/Training/1.jpg",
      "/Images/HeroSec/Training/2.jpg",
    ],
    imageLeft: false,
  },

  {
    id: 6,
    eyebrow: "Automation",
    title: "Fully Automated Car & Bike Washing System",
    tagline: "Fast, efficient, and economical vehicle cleaning",
    description:
      "An automation-driven system designed to deliver high-speed vehicle washing with minimal human intervention. Consistent and high-quality cleaning, reduced manual effort, and cost-effective business solution.",
    features: [
      { icon: "◈", label: "Fully automated washing cycles", desc: "" },
      { icon: "⬡", label: "Optimized water and detergent usage", desc: "" },
      { icon: "◉", label: "Quick service turnaround", desc: "" },
      { icon: "◆", label: "Low operational and maintenance cost", desc: "" },
      { icon: "▣", label: "Scalable setup for different locations", desc: "" },
    ],
    cta: "Explore",
    tag: "Automation",
    images: [
      "/Images/HeroSec/Real/1.jpg",
      "/Images/HeroSec/Real/2.jpg",
      "/Images/HeroSec/Real/3.jpg",
      "/Images/HeroSec/Real/4.jpg",
    ],
    imageLeft: true,
  },
];

function useInView(threshold = 0.08) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function useInterval(cb, delay, active) {
  const saved = useRef(cb);
  useEffect(() => {
    saved.current = cb;
  }, [cb]);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => saved.current(), delay);
    return () => clearInterval(id);
  }, [delay, active]);
}

function ImageGallery({ images, imageLeft, showChart }) {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(null);
  const [dir, setDir] = useState(1); // 1 = forward, -1 = backward
  const [transitioning, setTransitioning] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [thumbHov, setThumbHov] = useState(null);

  const goTo = useCallback(
    (idx) => {
      if (idx === active || transitioning) return;
      setDir(idx > active ? 1 : -1);
      setPrev(active);
      setActive(idx);
      setTransitioning(true);
      setTimeout(() => {
        setPrev(null);
        setTransitioning(false);
      }, 600);
    },
    [active, transitioning],
  );

  const next = useCallback(
    () => goTo((active + 1) % images.length),
    [goTo, active, images.length],
  );
  const goBack = useCallback(
    () => goTo((active - 1 + images.length) % images.length),
    [goTo, active, images.length],
  );

  // Auto-advance when not hovered
  useInterval(next, 3800, !hovered);

  // Mini bar chart (product 1)
  const bars = [40, 55, 45, 70, 60, 85, 75];
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div
      style={{ position: "relative", width: "100%" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Main viewer ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "525px",
          aspectRatio: "16/11",
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(33,198,207,0.12)",
          background: "#0a0a0a",
          boxShadow: hovered
            ? "0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(33,198,207,0.15)"
            : "0 12px 48px rgba(0,0,0,0.5)",
          transition: "box-shadow 0.5s ease",
        }}
      >
        {/* Outgoing image */}
        {prev !== null && (
          <img
            src={images[prev]}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: transitioning ? 0 : 1,
              transform: transitioning
                ? `translateX(${dir * -8}%)`
                : "translateX(0)",
              transition: "opacity 0.55s ease, transform 0.55s ease",
            }}
          />
        )}

        {/* Active image */}
        <img
          key={active}
          src={images[active]}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: transitioning ? 1 : 1,
            transform: transitioning ? "translateX(0)" : "translateX(0)",
            animation: transitioning
              ? `slideIn${dir > 0 ? "R" : "L"} 0.55s ease forwards`
              : "none",
          }}
        />

        {/* Gradient overlays */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.2) 45%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(5,5,5,0.3) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />

        {/* Teal corner glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(33,198,207,0.18) 0%, transparent 70%)",
            opacity: hovered ? 1 : 0.4,
            transition: "opacity 0.5s ease",
            pointerEvents: "none",
          }}
        />

        {/* Image counter pill */}
        <div
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "rgba(5,5,5,0.7)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(33,198,207,0.18)",
            borderRadius: "999px",
            padding: "5px 12px",

            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#28e7c5",
          }}
        >
          <span
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "#28e7c5",
              boxShadow: "0 0 6px #28e7c5",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          {active + 1} / {images.length}
        </div>

        {/* Arrow controls */}
        <ArrowBtn side="left" onClick={goBack} visible={hovered} />
        <ArrowBtn side="right" onClick={next} visible={hovered} />

        {/* Bottom bar: dot indicators */}
        <div
          style={{
            position: "absolute",
            bottom: "14px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "6px",
            alignItems: "center",
          }}
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === active ? "20px" : "6px",
                height: "6px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                padding: 0,
                background: i === active ? "#28e7c5" : "rgba(255,255,255,0.3)",
                boxShadow:
                  i === active ? "0 0 8px rgba(33,198,207,0.8)" : "none",
                transition: "all 0.35s ease",
              }}
            />
          ))}
        </div>

        {/* Floating mini chart (product 1 only) */}
        {showChart && (
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              [imageLeft ? "right" : "left"]: "16px",
              width: "180px",
              background: "rgba(5,5,5,0.88)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(33,198,207,0.18)",
              borderRadius: "12px",
              padding: "12px",
              transform: hovered ? "translateY(-4px)" : "translateY(0)",
              transition: "transform 0.4s ease",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                AI Adoption
              </span>
              <span
                style={{
                  fontSize: "0.55rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#28e7c5",
                }}
              >
                Live
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "2px",
                height: "32px",
              }}
            >
              {bars.map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    borderRadius: "2px",
                    height: `${h}%`,
                    background: i === 5 ? "#28e7c5" : "rgba(33,198,207,0.22)",
                    transition: "height 0.4s ease",
                  }}
                />
              ))}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "5px",
              }}
            >
              {days.map((d, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "0.5rem",
                    color: "rgba(255,255,255,0.3)",
                  }}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Filmstrip thumbnails ── */}
      <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            onMouseEnter={() => setThumbHov(i)}
            onMouseLeave={() => setThumbHov(null)}
            style={{
              flex: 1,
              aspectRatio: "16/9",
              borderRadius: "8px",
              overflow: "hidden",
              padding: 0,
              cursor: "pointer",
              border:
                i === active
                  ? "1.5px solid #28e7c5"
                  : thumbHov === i
                    ? "1.5px solid rgba(33,198,207,0.4)"
                    : "1.5px solid rgba(33,198,207,0.08)",
              boxShadow:
                i === active ? "0 0 12px rgba(33,198,207,0.35)" : "none",
              transition: "border-color 0.25s, box-shadow 0.25s",
              position: "relative",
              background: "#0a0a0a",
            }}
          >
            <img
              src={src}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: i === active ? 1 : thumbHov === i ? 0.75 : 0.45,
                transform: thumbHov === i ? "scale(1.05)" : "scale(1)",
                transition: "opacity 0.25s, transform 0.3s",
              }}
            />
            {i === active && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(33,198,207,0.08)",
                }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

/* Arrow button */
function ArrowBtn({ side, onClick, visible }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "absolute",
        top: "50%",
        [side]: "14px",
        transform: `translateY(-50%) translateX(${visible ? "0" : side === "left" ? "-8px" : "8px"})`,
        opacity: visible ? 1 : 0,
        width: "38px",
        height: "38px",
        borderRadius: "50%",
        background: hov ? "rgba(33,198,207,0.25)" : "rgba(5,5,5,0.65)",
        backdropFilter: "blur(10px)",
        border: `1px solid ${hov ? "rgba(33,198,207,0.5)" : "rgba(33,198,207,0.2)"}`,
        color: "#28e7c5",
        fontSize: "1rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
        zIndex: 5,
      }}
    >
      {side === "left" ? "‹" : "›"}
    </button>
  );
}

/* ════════════════════════════════════════════════════════
   FEATURE ROW  — icon + label + desc inline
═══════════════════════════════════════════════════════════ */
function FeatureRow({ icon, label, desc, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <li
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        gap: "12px",
        alignItems: "flex-start",
        padding: "10px 14px",
        borderRadius: "10px",
        background: hov ? "rgba(33,198,207,0.04)" : "transparent",
        border: `1px solid ${hov ? "rgba(33,198,207,0.14)" : "transparent"}`,
        cursor: "default",
        transition: "all 0.25s ease",
        listStyle: "none",
      }}
    >
      {/* Icon box */}
      <div
        style={{
          flexShrink: 0,
          width: "30px",
          height: "30px",
          borderRadius: "7px",
          background: "rgba(33,198,207,0.08)",
          border: `1px solid ${hov ? "rgba(33,198,207,0.3)" : "rgba(33,198,207,0.12)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#28e7c5",
          fontSize: "0.8rem",
          transition: "border-color 0.25s",
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontSize: "0.82rem",
            fontWeight: 700,
            color: hov ? "#fff" : "rgba(255,255,255,0.85)",
            marginBottom: "2px",
            transition: "color 0.2s",
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: "0.75rem",
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.38)",
          }}
        >
          {desc}
        </div>
      </div>
    </li>
  );
}

/* ════════════════════════════════════════════════════════
   EYEBROW
═══════════════════════════════════════════════════════════ */
function Eyebrow({ label }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",

        fontSize: "0.82rem",
        fontWeight: 500,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "#28e7c5",
      }}
    >
      <span
        style={{
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: "#28e7c5",
          boxShadow: "0 0 8px #28e7c5",
          flexShrink: 0,
        }}
      />
      {label}
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   CTA BUTTON
═══════════════════════════════════════════════════════════ */
function CTAButton({ label }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      href="/#contact"
    >
      <button
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",

          fontSize: "0.78rem",
          fontWeight: 700,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "#050505",
          background: hov ? "#fff" : "#28E7C5",
          padding: "11px 22px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          boxShadow: hov
            ? "0 0 36px rgba(33,198,207,0.55)"
            : "0 0 20px rgba(33,198,207,0.28)",
          transition: "all 0.3s ease",
        }}
      >
        {label}
        <span
          style={{
            fontSize: "1rem",
            display: "inline-block",
            transform: hov ? "translateX(3px)" : "translateX(0)",
            transition: "transform 0.25s ease",
          }}
        >
          →
        </span>
      </button>
    </Link>
  );
}

/* ════════════════════════════════════════════════════════
   PRODUCT SECTION
═══════════════════════════════════════════════════════════ */
function ProductSection({ product, index }) {
  const [sectionRef, inView] = useInView(0.06);
  const { imageLeft } = product;

  const slideImg = {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(32px)",
    transition: "opacity 0.9s ease, transform 0.9s ease",
  };
  const slideContent = {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(24px)",
    transition: "opacity 0.9s ease 0.18s, transform 0.9s ease 0.18s",
  };

  return (
    <div ref={sectionRef}>
      {/* Separator */}
      {index > 0 && (
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 clamp(20px,4vw,60px)",
          }}
        >
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(33,198,207,0.15), transparent)",
            }}
          />
        </div>
      )}

      <section
        style={{
          padding: "clamp(50px,4vw,100px) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Large ambient glow per section */}
        <div
          style={{
            position: "absolute",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(33,198,207,0.04) 0%, transparent 65%)",
            top: "50%",
            [imageLeft ? "right" : "left"]: "-200px",
            transform: "translateY(-50%)",
            opacity: inView ? 1 : 0,
            transition: "opacity 1.2s ease",
            pointerEvents: "none",
          }}
        />

        {/* Section index watermark */}
        <div
          style={{
            position: "absolute",
            top: "clamp(20px,4vw,40px)",
            [imageLeft ? "right" : "left"]: "clamp(20px,4vw,60px)",

            fontSize: "clamp(5rem,12vw,9rem)",
            fontWeight: 800,
            color: "rgba(33,198,207,0.025)",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
            letterSpacing: "-0.05em",
          }}
        >
          0{index + 1}
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 clamp(20px,4vw,60px)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(28px,4vw,56px)",
              alignItems: "stretch",
            }}
            className={`prow ${imageLeft ? "" : "prow--rev"}`}
          >
            {/* ── IMAGE SIDE ── */}
            <div style={{ ...slideImg, minWidth: 0 }} className="pcol">
              <ImageGallery
                images={product.images}
                imageLeft={imageLeft}
                showChart={index === 0}
              />
            </div>

            {/* ── CONTENT SIDE ── */}
            <div
              style={{
                ...slideContent,
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0",
              }}
              className="pcol"
            >
              {/* Eyebrow + tag */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "14px",
                }}
              >
                <Eyebrow label={product.eyebrow} />
                <span
                  style={{
                    fontSize: "0.8rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    border: "1px solid rgba(33,198,207,0.2)",
                    color: "#28e7c5",
                    background: "rgba(33,198,207,0.05)",
                  }}
                >
                  {product.tag}
                </span>
              </div>

              {/* Title */}
              <h2
                style={{
                  fontSize: "clamp(2rem,4.5vw,2.5 rem)",
                  fontWeight: 800,
                  color: "white",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  margin: "0 0 8px",
                }}
              >
                {product.title}
              </h2>

              {/* Tagline */}
              <p
                style={{
                  fontSize: "clamp(0.9rem,1.5vw,1rem)",
                  fontWeight: 600,
                  color: "#28E7C5",
                  margin: "0 0 14px",
                }}
              >
                {product.tagline}
              </p>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.88rem",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,1)",
                  margin: "0 0 18px",
                  maxWidth: "460px",
                }}
              >
                {product.description}
              </p>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background:
                    "linear-gradient(90deg, rgba(33,198,207,0.2), transparent)",
                  marginBottom: "16px",
                }}
              />

              {/* Feature list */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                }}
              >
                {product.features.map((f, i) => (
                  <FeatureRow
                    key={i}
                    icon={f.icon}
                    label={f.label}
                    desc={f.desc}
                    delay={i * 60}
                  />
                ))}
              </ul>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background:
                    "linear-gradient(90deg, rgba(33,198,207,0.12), transparent)",
                  marginBottom: "16px",
                }}
              />

              {/* Stats row
              <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
                {product.stats.map((s, i) => (
                  <StatPill key={i} value={s.value} label={s.label} />
                ))}
              </div> */}

              {/* CTA */}
              <CTAButton label={product.cta} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   NAV PILL
═══════════════════════════════════════════════════════════ */
function NavPill({ href, label }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontSize: "0.72rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        padding: "6px 14px",
        borderRadius: "999px",
        textDecoration: "none",
        border: `1px solid ${hov ? "rgba(33,198,207,0.45)" : "rgba(33,198,207,0.15)"}`,
        color: hov ? "#28e7c5" : "rgba(255,255,255,1)",
        background: hov ? "rgba(33,198,207,0.06)" : "transparent",
        transition: "all 0.25s ease",
      }}
    >
      {label}
    </a>
  );
}
export default function ProductsPage() {
  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }
        *, *::before, *::after { box-sizing: border-box; }
        button { outline: none; }

        /* Slide-in keyframes for gallery */
        @keyframes slideInR {
          from { opacity: 0; transform: translateX(5%); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInL {
          from { opacity: 0; transform: translateX(-5%); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.6; transform:scale(0.85); }
        }
        @keyframes heroFadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* Responsive two-col */
        @media (min-width: 1024px) {
          .prow            { flex-direction: row !important; align-items: flex-start !important; }
          .prow--rev       { flex-direction: row-reverse !important; }
          .pcol            { width: 50% !important; }
        }
      `}</style>

      <main
        className="bg-linear-to-r from-[#140c30] via-[#153D4C] to-[#16A085]"
        style={{
          minHeight: "100vh",
          position: "relative",
          overflowX: "hidden",
        }}
      >
        <HexBackground />
        {/* ── Page header ── */}
        <header
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1200px",
            margin: "0 auto",
            padding:
              "clamp(80px,12vw,120px) clamp(20px,4vw,60px) clamp(4px,1.5vw,8px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              marginBottom: "16px",
              animation: "heroFadeUp 0.7s ease forwards",

              display: "inline-block",
              padding: "15px 25px",
              borderRadius: "999px",
              background: "rgba(33,198,207,0.08)",
              border: "1px solid rgba(33,198,207,0.25)",
              boxShadow: "0 0 20px rgba(33,198,207,0.15)",
            }}
          >
            <Eyebrow label="Our Products" />
          </div>

          {/* Hero title */}
          <h1
            className="text-[2.4rem] sm:text-[3.2rem] lg:text-[4.2rem] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-6"
            style={{
              animation: "heroFadeUp 0.8s ease 0.1s both",
            }}
          >
            Built for every layer of{" "}
            <span className="text-[#28E7C5]">AI transformation</span>
          </h1>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.75,
              color: "rgba(255,255,255,1)",
              maxWidth: "500px",
              margin: "0 0 28px",
              animation: "heroFadeUp 0.8s ease 0.2s both",
            }}
          >
            From infrastructure to insight, from machine to human — our product
            suite covers the full stack of enterprise AI adoption.
          </p>

          {/* Nav pills */}
<div
  className="hidden xl:flex"
  style={{
    flexWrap: "wrap",
    gap: "4px",
    animation: "heroFadeUp 0.8s ease 0.3s both",
  }}
>
  {PRODUCTS.map((p) => (
    <NavPill key={p.id} href={`#product-${p.id}`} label={p.title} />
  ))}
</div>
        </header>

        {/* ── Product sections ── */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {PRODUCTS.map((product, index) => (
            <div id={`product-${product.id}`} key={product.id}>
              <ProductSection product={product} index={index} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
