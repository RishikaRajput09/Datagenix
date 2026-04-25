"use client";

import { HexBackground } from "@/Components/UI/HexBackground";
import { useState, useRef, useEffect, useCallback } from "react";

const PRODUCTS = [
  {
    id: 1,
    eyebrow: "Infrastructure Layer",
    title: "NeuralMesh",
    tagline: "The connective tissue of your enterprise AI.",
    description:
      "NeuralMesh bridges your existing hardware, IoT sensors, and cloud infrastructure into a unified intelligence layer. Stop wrestling with fragmented systems — let your data flow where it matters.",
    features: [
      {
        icon: "◈",
        label: "Universal Connectivity",
        desc: "Plug-and-play connectors for 200+ device types",
      },
      {
        icon: "⬡",
        label: "Real-Time Telemetry",
        desc: "Sub-10ms latency across every node in your mesh",
      },
      {
        icon: "◉",
        label: "Zero-Code Integration",
        desc: "Works with legacy ERP and SCADA out of the box",
      },
      {
        icon: "◆",
        label: "Self-Healing Topology",
        desc: "Automatic failover — the mesh never sleeps",
      },
      {
        icon: "▣",
        label: "Flex Deployment",
        desc: "On-premise, cloud, or hybrid — your call",
      },
    ],
    stats: [
      { value: "200+", label: "Device Types" },
      { value: "10ms", label: "Latency SLA" },
      { value: "99.9%", label: "Uptime" },
      { value: "500+", label: "Live Deployments" },
    ],
    cta: "Explore NeuralMesh",
    tag: "Hardware + IoT",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=85",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=85",
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=85",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=85",
    ],
    imageLeft: false,
  },
  {
    id: 2,
    eyebrow: "Intelligence Engine",
    title: "CognOS",
    tagline: "Your operations, now thinking for themselves.",
    description:
      "CognOS is an AI decision engine that continuously surfaces recommendations, anomalies, and automations from your operational data — no data science team required.",
    features: [
      {
        icon: "◈",
        label: "Autonomous Orchestration",
        desc: "Workflows run themselves across every department",
      },
      {
        icon: "⬡",
        label: "Predictive Maintenance",
        desc: "Models trained on your sensor data, not generic sets",
      },
      {
        icon: "◉",
        label: "NL Querying",
        desc: "Ask your dashboards questions in plain language",
      },
      {
        icon: "◆",
        label: "Explainable AI",
        desc: "Audit-ready logs for every automated decision",
      },
      {
        icon: "▣",
        label: "Adaptive Learning",
        desc: "Gets smarter from every human override",
      },
    ],
    stats: [
      { value: "10x", label: "Faster Decisions" },
      { value: "87%", label: "Anomaly Accuracy" },
      { value: "3 hrs", label: "Avg. Setup" },
      { value: "∞", label: "Data Sources" },
    ],
    cta: "See CognOS in Action",
    tag: "AI / ML",
    images: [
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=85",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=85",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=85",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=85",
    ],
    imageLeft: true,
  },
  {
    id: 3,
    eyebrow: "People Layer",
    title: "Synapse Academy",
    tagline: "AI fluency, built for the real world.",
    description:
      "Theory is cheap. Synapse Academy gives your team live, project-based AI training inside your actual systems — so adoption sticks and ROI compounds from week one.",
    features: [
      {
        icon: "◈",
        label: "Role-Specific Tracks",
        desc: "Ops, finance, engineering, and leadership paths",
      },
      {
        icon: "⬡",
        label: "Live-Data Labs",
        desc: "Hands-on sessions inside your own environment",
      },
      {
        icon: "◉",
        label: "Expert Mentorship",
        desc: "Practitioners, not just instructors",
      },
      {
        icon: "◆",
        label: "Cohort Accountability",
        desc: "Peer learning pods with shared milestones",
      },
      {
        icon: "▣",
        label: "Industry Certs",
        desc: "Certification paths aligned to market standards",
      },
    ],
    stats: [
      { value: "500+", label: "Trained" },
      { value: "3 wks", label: "Time-to-Fluent" },
      { value: "94%", label: "Retention Rate" },
      { value: "12+", label: "Industries" },
    ],
    cta: "Start a Cohort",
    tag: "Training",
    images: [
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=85",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=85",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=85",
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&q=85",
    ],
    imageLeft: false,
  },
  {
    id: 4,
    eyebrow: "Insight Layer",
    title: "Lumina Analytics",
    tagline: "Stop reading dashboards. Start reading the future.",
    description:
      "Lumina replaces static BI tools with a living analytics surface that forecasts, narrates, and alerts — delivering a single source of truth in plain language.",
    features: [
      {
        icon: "◈",
        label: "AI Narratives",
        desc: "Executive summaries auto-written from raw metrics",
      },
      {
        icon: "⬡",
        label: "Scenario Modeling",
        desc: "Forecast with confidence intervals, not guesswork",
      },
      {
        icon: "◉",
        label: "Anomaly Detection",
        desc: "Root-cause attribution at a single click",
      },
      {
        icon: "◆",
        label: "Multi-Source Blend",
        desc: "ERP, CRM, IoT, APIs — all in one surface",
      },
      {
        icon: "▣",
        label: "White-Label Reports",
        desc: "Client-ready output, branded to your standards",
      },
    ],
    stats: [
      { value: "1 pane", label: "Of Glass" },
      { value: "60s", label: "Report Gen" },
      { value: "40+", label: "Connectors" },
      { value: "5★", label: "Avg. Rating" },
    ],
    cta: "Request a Demo",
    tag: "Analytics",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=85",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200&q=85",
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
            fontFamily: "Inter, sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#21C6CF",
          }}
        >
          <span
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "#21C6CF",
              boxShadow: "0 0 6px #21C6CF",
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
                background: i === active ? "#21C6CF" : "rgba(255,255,255,0.3)",
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
                  fontFamily: "'Syne',sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                AI Adoption
              </span>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.55rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#21C6CF",
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
                    background: i === 5 ? "#21C6CF" : "rgba(33,198,207,0.22)",
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
                    fontFamily: "Inter, sans-serif",
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
                  ? "1.5px solid #21C6CF"
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
        color: "#21C6CF",
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
          color: "#21C6CF",
          fontSize: "0.8rem",
          transition: "border-color 0.25s",
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontFamily: "'Syne',sans-serif",
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
            fontFamily: "Inter, sans-serif",
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
   STAT PILL  — compact horizontal
═══════════════════════════════════════════════════════════ */
function StatPill({ value, label }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "14px 10px",
        borderRadius: "12px",
        flex: 1,
        background: hov ? "rgba(33,198,207,0.06)" : "#0a0a0a",
        border: `1px solid ${hov ? "rgba(33,198,207,0.25)" : "rgba(33,198,207,0.08)"}`,
        transition: "all 0.3s ease",
        cursor: "default",
      }}
    >
      <span
        style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: "1.5rem",
          fontWeight: 800,
          color: "#21C6CF",
          lineHeight: 1,
          marginBottom: "4px",
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.65rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)",
          textAlign: "center",
        }}
      >
        {label}
      </span>
    </div>
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
        fontFamily: "Inter, sans-serif",
        fontSize: "0.62rem",
        fontWeight: 500,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "#21C6CF",
      }}
    >
      <span
        style={{
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: "#21C6CF",
          boxShadow: "0 0 8px #21C6CF",
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
    <button
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        fontFamily: "'Syne',sans-serif",
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
            fontFamily: "'Syne',sans-serif",
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
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    border: "1px solid rgba(33,198,207,0.2)",
                    color: "rgba(33,198,207,0.7)",
                    background: "rgba(33,198,207,0.05)",
                  }}
                >
                  {product.tag}
                </span>
              </div>

              {/* Title */}
              <h2
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: "clamp(2rem,4.5vw,2.5 rem)",
                  fontWeight: 800,
                  color: "#fff",
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
                  fontFamily: "'Syne',sans-serif",
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
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.88rem",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.38)",
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
        fontFamily: "Inter, sans-serif",
        fontSize: "0.72rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        padding: "6px 14px",
        borderRadius: "999px",
        textDecoration: "none",
        border: `1px solid ${hov ? "rgba(33,198,207,0.45)" : "rgba(33,198,207,0.15)"}`,
        color: hov ? "#21C6CF" : "rgba(255,255,255,0.4)",
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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
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
              padding: "6px 14px",
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
              fontFamily: "'Syne',sans-serif",
              animation: "heroFadeUp 0.8s ease 0.1s both",
            }}
          >
            Built for every layer of{" "}
            <span className="text-[#28E7C5]">AI transformation</span>
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.95rem",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.38)",
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
            style={{
              display: "flex",
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
