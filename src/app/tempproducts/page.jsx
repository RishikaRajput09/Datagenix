"use client";

import { useState, useRef, useEffect } from "react";

const PRODUCTS = [
  {
    id: 1,
    eyebrow: "Infrastructure Layer",
    title: "NeuralMesh",
    tagline: "The connective tissue of your enterprise AI.",
    description:
      "NeuralMesh bridges your existing hardware, IoT sensors, and cloud infrastructure into a unified intelligence layer. Stop wrestling with fragmented systems — let your data flow where it matters.",
    features: [
      "Plug-and-play IoT & hardware connectors for 200+ device types",
      "Real-time telemetry with sub-10ms latency pipelines",
      "Zero-code integration with legacy ERP and SCADA systems",
      "Self-healing mesh topology with automatic failover",
      "On-premise, cloud, and hybrid deployment options",
    ],
    cta: { label: "Explore NeuralMesh", href: "#" },
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
    ],
    imageLeft: true,
    tag: "Hardware + IoT",
    stats: [{ value: "200+", label: "Device Types", desc: "Native connectors across every major hardware vendor." }, { value: "10ms", label: "Latency SLA", desc: "Real-time telemetry that actually runs in real time." }],
  },
  {
    id: 2,
    eyebrow: "Intelligence Engine",
    title: "CognOS",
    tagline: "Your operations, now thinking for themselves.",
    description:
      "CognOS is an AI decision engine that sits atop your operational data and continuously surfaces recommendations, anomalies, and automations — without needing a data science team to run it.",
    features: [
      "Autonomous workflow orchestration across departments",
      "Predictive maintenance models trained on your own sensor data",
      "Natural language querying over live operational dashboards",
      "Explainable AI outputs with audit-ready decision logs",
      "Adaptive learning — improves with every human override",
    ],
    cta: { label: "See CognOS in Action", href: "#" },
    images: [
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80",
    ],
    imageLeft: false,
    tag: "AI / ML",
    stats: [{ value: "10x", label: "Faster Decisions", desc: "Automated recommendations cut human review loops drastically." }, { value: "99.9%", label: "Uptime SLA", desc: "Enterprise-grade reliability with 24/7 monitoring." }],
  },
  {
    id: 3,
    eyebrow: "People Layer",
    title: "Synapse Academy",
    tagline: "AI fluency, built for the real world.",
    description:
      "Theory is cheap. Synapse Academy gives your team live, project-based AI training inside your actual systems — from line managers to C-suite — so adoption sticks and ROI compounds.",
    features: [
      "Role-specific learning tracks (ops, finance, engineering, leadership)",
      "Hands-on labs inside your live data environment",
      "Mentorship from practitioners, not just instructors",
      "Cohort-based accountability with peer learning pods",
      "Certification paths aligned to industry standards",
    ],
    cta: { label: "Start a Cohort", href: "#" },
    images: [
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80",
    ],
    imageLeft: true,
    tag: "Training",
    stats: [{ value: "500+", label: "Professionals Trained", desc: "Teams across industries building real AI fluency." }, { value: "3 wks", label: "Avg. Time-to-Fluent", desc: "Most cohorts hit productive autonomy within three weeks." }],
  },
  {
    id: 4,
    eyebrow: "Insight Layer",
    title: "Lumina Analytics",
    tagline: "Stop reading dashboards. Start reading the future.",
    description:
      "Lumina replaces static BI tools with a living analytics surface that forecasts, narrates, and alerts. Your leadership team gets a single source of truth — delivered in plain language.",
    features: [
      "AI-generated executive narratives from raw metrics",
      "Scenario modeling with confidence intervals",
      "Anomaly detection and root-cause attribution at the click",
      "Multi-source data blending (ERP, CRM, IoT, third-party APIs)",
      "White-label reporting for client-facing delivery",
    ],
    cta: { label: "Request a Demo", href: "#" },
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    ],
    imageLeft: false,
    tag: "Analytics",
    stats: [{ value: "∞", label: "Data Sources", desc: "Connect any ERP, CRM, API, or IoT stream — no limits." }, { value: "1 pane", label: "Of Glass", desc: "All your metrics unified in one intelligent surface." }],
  },
];

/* ─── useInView ─── */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ─── Mini bar chart — exact copy from WhyChooseUs floating card ─── */
function MiniChart() {
  const bars = [40, 55, 45, 70, 60, 85, 75];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <div style={{
      width: "200px",
      background: "rgba(5,5,5,0.88)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      border: "1px solid rgba(33,198,207,0.15)",
      borderRadius: "12px",
      padding: "14px",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
        <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "0.78rem", fontWeight: 700, color: "#fff" }}>AI Adoption</span>
        <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#21C6CF" }}>Live</span>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", height: "36px" }}>
        {bars.map((h, i) => (
          <div key={i} style={{ flex: 1, borderRadius: "2px", height: `${h}%`, background: i === 5 ? "#21C6CF" : "rgba(33,198,207,0.22)" }} />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
        {days.map((d, i) => (
          <span key={i} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.52rem", color: "rgba(255,255,255,0.3)" }}>{d}</span>
        ))}
      </div>
    </div>
  );
}

/* ─── Image block ─── */
function ImageBlock({ images, imageLeft, showChart }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      style={{ position: "relative", width: "100%", paddingBottom: "28px" }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Primary */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(33,198,207,0.1)" }}>
        <img
          src={images[0]} alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s ease", transform: hov ? "scale(1.04)" : "scale(1)" }}
        />
        {/* Gradient overlay — same as WhyChooseUs */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,5,5,0.8) 0%, transparent 60%)" }} />
        {/* Teal corner glow */}
        <div style={{ position: "absolute", top: 0, right: 0, width: "140px", height: "140px", borderRadius: "50%", background: "radial-gradient(circle, rgba(33,198,207,0.2) 0%, transparent 70%)", opacity: hov ? 1 : 0, transition: "opacity 0.5s ease", pointerEvents: "none" }} />
      </div>

      {/* Floating element */}
      <div style={{ position: "absolute", bottom: 0, [imageLeft ? "right" : "left"]: "-12px", transform: hov ? "translateY(-6px)" : "translateY(0)", transition: "transform 0.45s ease", zIndex: 10 }}>
        {showChart ? (
          <MiniChart />
        ) : (
          <div style={{ width: "130px", aspectRatio: "1", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(33,198,207,0.2)", boxShadow: "0 12px 40px rgba(0,0,0,0.7)" }}>
            <img src={images[1]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        )}
      </div>

      {/* Outer glow ring on hover */}
      <div style={{ position: "absolute", inset: "-8px", borderRadius: "22px", border: "1px solid rgba(33,198,207,0.08)", opacity: hov ? 1 : 0, transition: "opacity 0.5s ease", pointerEvents: "none" }} />
    </div>
  );
}

/* ─── Feature card — exact WhyChooseUs card ─── */
function FeatureCard({ symbol, heading, points }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ display: "flex", gap: "16px", padding: "20px", borderRadius: "12px", border: `1px solid ${hov ? "rgba(33,198,207,0.22)" : "rgba(33,198,207,0.08)"}`, background: "#0a0a0a", transition: "border-color 0.3s" }}
    >
      {/* Icon — WhyChooseUs symbol box */}
      <div style={{ flexShrink: 0, width: "36px", height: "36px", borderRadius: "8px", background: "rgba(33,198,207,0.08)", border: "1px solid rgba(33,198,207,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#21C6CF", fontSize: "1rem" }}>
        {symbol}
      </div>
      <div style={{ minWidth: 0 }}>
        {/* Heading — WhyChooseUs h3 */}
        <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#fff", marginBottom: "8px", lineHeight: 1.3 }}>{heading}</h3>
        {/* Bullet list — WhyChooseUs li */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
          {points.map((pt, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontFamily: "'DM Sans',sans-serif", fontSize: "0.8rem", lineHeight: 1.55, color: "rgba(255,255,255,0.38)" }}>
              {/* Teal dot — WhyChooseUs bullet */}
              <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#21C6CF", flexShrink: 0, marginTop: "7px", boxShadow: "0 0 4px rgba(33,198,207,0.5)" }} />
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── Stat card — exact WhyChooseUs stat card ─── */
function StatCard({ value, label, desc }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ padding: "20px", borderRadius: "12px", border: `1px solid ${hov ? "rgba(33,198,207,0.22)" : "rgba(33,198,207,0.08)"}`, background: "#0a0a0a", transition: "border-color 0.3s" }}
    >
      {/* Value — WhyChooseUs big teal number */}
      <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "2.2rem", fontWeight: 800, color: "#21C6CF", lineHeight: 1, marginBottom: "6px" }}>{value}</div>
      {/* Label */}
      <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "0.82rem", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>{label}</div>
      {/* Desc */}
      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem", lineHeight: 1.55, color: "rgba(255,255,255,0.35)", margin: 0 }}>{desc}</p>
    </div>
  );
}

/* ─── Eyebrow — exact WhyChooseUs eyebrow ─── */
function Eyebrow({ label }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "'DM Sans',sans-serif", fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#21C6CF" }}>
      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#21C6CF", boxShadow: "0 0 8px #21C6CF", flexShrink: 0, display: "inline-block" }} />
      {label}
    </div>
  );
}

/* ─── CTA button ─── */
function CTAButton({ label, href }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
      <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#050505", background: hov ? "#fff" : "#21C6CF", padding: "10px 20px", borderRadius: "8px", boxShadow: hov ? "0 0 32px rgba(33,198,207,0.5)" : "0 0 18px rgba(33,198,207,0.25)", transition: "box-shadow 0.3s, background 0.2s" }}>
        {label}
      </span>
      <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.85rem", color: hov ? "#21C6CF" : "rgba(33,198,207,0.5)", transform: hov ? "translateX(4px)" : "translateX(0)", transition: "color 0.25s, transform 0.25s", display: "inline-block" }}>→</span>
    </a>
  );
}

/* ─── Product section ─── */
function ProductSection({ product, index }) {
  const [ref, inView] = useInView(0.08);
  const { imageLeft } = product;
  const mid = Math.ceil(product.features.length / 2);

  const fadeFrom = (dir) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : `translateX(${dir}px)`,
    transition: "opacity 0.9s ease, transform 0.9s ease",
  });

  return (
    <div ref={ref}>
      {/* Section separator — WhyChooseUs style gradient line */}
      {index > 0 && (
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(33,198,207,0.15), transparent)" }} />
        </div>
      )}

      <section style={{ padding: "80px 0", position: "relative", overflow: "hidden" }}>
        {/* Ambient glow */}
        <div style={{ position: "absolute", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(33,198,207,0.05) 0%, transparent 70%)", top: "50%", [imageLeft ? "right" : "left"]: "-100px", transform: "translateY(-50%)", opacity: inView ? 1 : 0, transition: "opacity 1s ease", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>

          {/* ── Two-column layout ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px", alignItems: "flex-start" }} className={`products-row ${imageLeft ? "" : "products-row--reverse"}`}>

            {/* Image column */}
            <div style={{ ...fadeFrom(imageLeft ? -36 : 36), width: "100%" }} className="products-col">
              <ImageBlock images={product.images} imageLeft={imageLeft} showChart={index === 0} />
            </div>

            {/* Content column */}
            <div style={{ ...fadeFrom(imageLeft ? 36 : -36), transitionDelay: "0.12s", width: "100%" }} className="products-col">

              {/* Eyebrow + tag */}
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <Eyebrow label={product.eyebrow} />
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "4px 10px", borderRadius: "999px", border: "1px solid rgba(33,198,207,0.2)", color: "rgba(33,198,207,0.7)", background: "rgba(33,198,207,0.05)" }}>
                  {product.tag}
                </span>
              </div>

              {/* Title — WhyChooseUs h2 style */}
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "8px" }}>
                {product.title}
              </h2>

              {/* Tagline — teal accent */}
              <p style={{ fontFamily: "'Syne',sans-serif", fontSize: "1rem", fontWeight: 600, color: "#21C6CF", marginBottom: "16px", marginTop: 0 }}>
                {product.tagline}
              </p>

              {/* Description — WhyChooseUs body style */}
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.88rem", lineHeight: 1.75, color: "rgba(255,255,255,0.38)", maxWidth: "480px", marginBottom: "20px", marginTop: 0 }}>
                {product.description}
              </p>

              {/* Divider */}
              <div style={{ height: "1px", background: "linear-gradient(90deg, rgba(33,198,207,0.15), transparent)", width: "75%", marginBottom: "16px" }} />

              {/* Feature cards — WhyChooseUs card style, stacked */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "12px" }}>
                <FeatureCard symbol="◈" heading="Core Capabilities" points={product.features.slice(0, mid)} />
                {product.features.slice(mid).length > 0 && (
                  <FeatureCard symbol="⬡" heading="Advanced Features" points={product.features.slice(mid)} />
                )}
              </div>

              {/* Stat cards — WhyChooseUs grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "24px" }}>
                {product.stats.map((s, i) => (
                  <StatCard key={i} value={s.value} label={s.label} desc={s.desc} />
                ))}
              </div>

              {product.cta && <CTAButton label={product.cta.label} href={product.cta.href} />}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── Page root ─── */
export default function ProductsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
        html { scroll-behavior: smooth; }
        *, *::before, *::after { box-sizing: border-box; }

        /* Two-column product rows */
        @media (min-width: 1024px) {
          .products-row          { flex-direction: row !important; align-items: center !important; }
          .products-row--reverse { flex-direction: row-reverse !important; }
          .products-col          { width: 48% !important; }
        }
      `}</style>

      <main style={{ background: "#050505", minHeight: "100vh", position: "relative", overflow: "hidden" }}>

        {/* ── Global grid — exact WhyChooseUs ── */}
        <div style={{
          position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
          backgroundImage: "linear-gradient(rgba(33,198,207,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(33,198,207,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* ── Header ── */}
        <header style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "80px 40px 48px" }}>
          <div style={{ marginBottom: "16px" }}>
            <Eyebrow label="Our Products" />
          </div>

          {/* Title — WhyChooseUs h2 scale */}
          <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem, 6vw, 3.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.08, letterSpacing: "-0.02em", maxWidth: "700px", marginBottom: "16px", marginTop: 0 }}>
            Built for every layer of{" "}
            <span style={{ color: "#21C6CF" }}>your AI transformation.</span>
          </h1>

          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.93rem", lineHeight: 1.75, color: "rgba(255,255,255,0.38)", maxWidth: "480px", marginBottom: "28px", marginTop: 0 }}>
            From infrastructure to insight, from machine to human — our product suite covers the full stack of enterprise AI adoption.
          </p>

          {/* Nav pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {PRODUCTS.map((p) => (
              <NavPill key={p.id} href={`#product-${p.id}`} label={p.title} />
            ))}
          </div>
        </header>

        {/* ── Products ── */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {PRODUCTS.map((product, index) => (
            <div id={`product-${product.id}`} key={product.id}>
              <ProductSection product={product} index={index} />
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <section style={{ position: "relative", zIndex: 1, padding: "80px 40px", textAlign: "center", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(33,198,207,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "relative", maxWidth: "600px", margin: "0 auto" }}>
            <div style={{ marginBottom: "16px" }}><Eyebrow label="Get Started" /></div>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 800, color: "#fff", lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: "16px", marginTop: 0 }}>
              Ready to wire your business for the{" "}
              <span style={{ color: "#21C6CF" }}>AI era?</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", lineHeight: 1.75, color: "rgba(255,255,255,0.38)", marginBottom: "28px", marginTop: 0 }}>
              Book a 30-minute strategy call. We'll map your current stack and show you exactly where our products plug in.
            </p>
            <CTAButton label="Book a Strategy Call" href="#" />
          </div>
        </section>

      </main>
    </>
  );
}

/* ─── Nav pill with hover ─── */
function NavPill({ href, label }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: "'DM Sans',sans-serif", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase",
        padding: "6px 14px", borderRadius: "999px", textDecoration: "none",
        border: `1px solid ${hov ? "rgba(33,198,207,0.4)" : "rgba(33,198,207,0.15)"}`,
        color: hov ? "#21C6CF" : "rgba(255,255,255,0.4)",
        background: hov ? "rgba(33,198,207,0.05)" : "transparent",
        transition: "border-color 0.25s, color 0.25s, background 0.25s",
      }}
    >
      {label}
    </a>
  );
}