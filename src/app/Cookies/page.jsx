"use client";

import { useState, useRef, useEffect } from "react";

const COOKIE_SECTIONS = [
  {
    id: 1,
    title: "What Are Cookies",
    tag: "Overview",
    content:
      "DatagenixAI LLP uses cookies and similar technologies to improve functionality, analyze performance, and personalize user experience. Cookies are small text files placed on your device when you visit our website.",
  },
  {
    id: 2,
    title: "What We Collect via Cookies",
    tag: "Data Collection",
    content:
      "Cookies may collect information such as device identifiers, browsing behavior, and preferences. We use this information solely to enhance our services and do not sell or share it for advertising by third parties.",
  },
  {
    id: 3,
    title: "GDPR Consent & Cookie Banner",
    tag: "GDPR",
    content:
      "Where required by the General Data Protection Regulation, we will present a consent banner allowing you to accept or reject non-essential cookies. Essential cookies necessary for core functionality may be used without consent.",
  },
  {
    id: 4,
    title: "Managing Cookies",
    tag: "User Control",
    content:
      "You can manage or disable cookies through your browser settings at any time. Please note that disabling cookies may affect certain features of the website and your overall experience.",
  },
  {
    id: 5,
    title: "Security & Liability",
    tag: "Security",
    content:
      "While we take reasonable measures to protect data collected via cookies, external threats such as cyberattacks may occur. To the extent permitted by law, DatagenixAI LLP shall not be liable for such events beyond its reasonable control.",
  },
];

const REFUND_SECTIONS = [
  {
    id: 1,
    title: "Non-Refundable Payments",
    tag: "Refunds",
    content:
      "All payments made to DatagenixAI LLP, including advance payments, consulting fees, and course fees, are strictly non-refundable. By completing a transaction, you expressly agree to this policy without exception, except where a refund is mandated by applicable law.",
  },
  {
    id: 2,
    title: "Payment Processing",
    tag: "Gateway",
    content:
      "Payments are processed via secure third-party gateways such as Razorpay. You agree to their terms and acknowledge that DatagenixAI LLP is not responsible for gateway errors, delays, or outages. We do not store your full payment credentials.",
  },
  {
    id: 3,
    title: "Cancellations & Rescheduling",
    tag: "Cancellation",
    content:
      "Once a service or course is booked or commenced, it cannot be cancelled for a refund. At our sole discretion, we may allow rescheduling or substitution where feasible, but this does not create an entitlement. Delivery timelines are estimates and may vary due to project complexity or external dependencies.",
  },
  {
    id: 4,
    title: "Chargebacks & Disputes",
    tag: "Disputes",
    content:
      "You agree not to initiate chargebacks without first contacting us for resolution. Fraudulent or bad-faith chargebacks may lead to suspension of services and legal action. To the maximum extent permitted by law, our total liability, if any, shall be limited to the amount paid for the specific service.",
  },
];

const DISCLAIMER_SECTIONS = [
  {
    id: 1,
    title: "Scope of Services",
    tag: "Best-Effort",
    content:
      "DatagenixAI LLP provides AI solutions, consulting, and training on a best-effort basis and does not guarantee specific outcomes. Results may vary based on project complexity, client inputs, and market conditions.",
  },
  {
    id: 2,
    title: "Limitation of Liability",
    tag: "Liability",
    content:
      "To the extent permitted by applicable law, DatagenixAI LLP shall not be held liable for business results, career outcomes, or data incidents caused by factors beyond its reasonable control, including but not limited to market changes, cyberattacks, or third-party failures.",
  },
  {
    id: 3,
    title: "Dispute Resolution",
    tag: "Resolution",
    content:
      "You agree to attempt good-faith, amicable resolution of any concerns prior to initiating formal legal proceedings. We are committed to resolving disputes promptly and fairly through direct communication.",
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
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function Eyebrow({ label }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "0.62rem",
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

function SectionCard({ section }) {
  const [ref, inView] = useInView(0.1);
  const [hov, setHov] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        padding: "28px 32px",
        borderRadius: "16px",
        background: hov
          ? "rgba(33,198,207,0.04)"
          : "rgba(255,255,255,0.02)",
        border: `1px solid ${
          hov ? "rgba(33,198,207,0.2)" : "rgba(33,198,207,0.08)"
        }`,
        transition: "all 0.3s ease",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        cursor: "default",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "16px",
          right: "24px",
          fontSize: "4rem",
          fontWeight: 800,
          lineHeight: 1,
          color: "rgba(33,198,207,0.04)",
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.05em",
        }}
      >
        {section.id < 10 ? `0${section.id}` : section.id}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "10px",
          marginBottom: "14px",
        }}
      >
        <span
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "4px 10px",
            borderRadius: "999px",
            border: "1px solid rgba(33,198,207,0.2)",
            color: "rgba(33,198,207,1)",
            background: "rgba(33,198,207,0.05)",
          }}
        >
          {section.tag}
        </span>
      </div>

      <h2
        style={{
          fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
          fontWeight: 800,
          color: "white",
          letterSpacing: "-0.02em",
          margin: "0 0 12px",
          lineHeight: 1.2,
        }}
      >
        {section.id}. {section.title}
      </h2>

      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, rgba(33,198,207,0.2), transparent)",
          marginBottom: "14px",
        }}
      />

      <p
        style={{
          fontSize: "0.88rem",
          lineHeight: 1.8,
          color: "rgba(255,255,255,0.75)",
          margin: 0,
        }}
      >
        {section.content}
      </p>
    </div>
  );
}

function PolicyBlock({ eyebrow, title, highlight, effectiveDate, sections }) {
  const [ref, inView] = useInView(0.05);
  return (
    <section style={{ marginBottom: "clamp(60px,10vw,100px)" }}>
      <header
        ref={ref}
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,60px) clamp(24px,3vw,40px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div
          style={{
            marginBottom: "16px",
            display: "inline-block",
            padding: "6px 14px",
            borderRadius: "999px",
            background: "rgba(33,198,207,0.08)",
            border: "1px solid rgba(33,198,207,0.25)",
            boxShadow: "0 0 20px rgba(33,198,207,0.15)",
          }}
        >
          <Eyebrow label={eyebrow} />
        </div>

        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.4rem)",
            fontWeight: 800,
            color: "white",
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
            margin: "0 0 16px",
          }}
        >
          {title}{" "}
          <span style={{ color: "#28E7C5" }}>{highlight}</span>
        </h1>

        <p
          style={{
            fontSize: "0.88rem",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.6)",
            margin: "0 0 24px",
          }}
        >
          Effective Date:{" "}
          <span style={{ color: "#28e7c5", fontWeight: 600 }}>
            {effectiveDate}
          </span>
        </p>

        <div
          style={{
            width: "100%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(33,198,207,0.2), transparent)",
          }}
        />
      </header>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,60px)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {sections.map((s) => (
            <SectionCard key={s.id} section={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PoliciesPage() {
  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }
        *, *::before, *::after { box-sizing: border-box; }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.6; transform:scale(0.85); }
        }
        @keyframes dividerSlide {
          from { opacity: 0; scaleX: 0; }
          to   { opacity: 1; scaleX: 1; }
        }
      `}</style>

      <main
        className="bg-linear-to-r from-[#140c30] via-[#153D4C] to-[#16A085]"
        style={{ minHeight: "100vh", position: "relative", overflowX: "hidden" }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: "fixed",
            top: "-200px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(33,198,207,0.06) 0%, transparent 65%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div style={{ position: "relative", zIndex: 1, paddingTop: "clamp(60px,10vw,100px)" }}>

          {/* ── COOKIES POLICY ─────────────────────────────── */}
          <PolicyBlock
            eyebrow="Legal"
            title="Cookies"
            highlight="Policy"
            effectiveDate="21 January 2026"
            sections={COOKIE_SECTIONS}
          />

          {/* Divider */}
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto clamp(60px,10vw,100px)",
              padding: "0 clamp(20px,4vw,60px)",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(33,198,207,0.15))" }} />
            <span
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(33,198,207,0.4)",
                whiteSpace: "nowrap",
              }}
            >
              ◆ ◆ ◆
            </span>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(33,198,207,0.15), transparent)" }} />
          </div>

          {/* ── REFUND & PAYMENT POLICY ────────────────────── */}
          <PolicyBlock
            eyebrow="Legal"
            title="Refund &amp; Payment"
            highlight="Policy"
            effectiveDate="21 January 2026"
            sections={REFUND_SECTIONS}
          />

          {/* Divider */}
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto clamp(60px,10vw,100px)",
              padding: "0 clamp(20px,4vw,60px)",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(33,198,207,0.15))" }} />
            <span
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(33,198,207,0.4)",
                whiteSpace: "nowrap",
              }}
            >
              ◆ ◆ ◆
            </span>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(33,198,207,0.15), transparent)" }} />
          </div>

          {/* ── FINAL DISCLAIMER ───────────────────────────── */}
          <PolicyBlock
            eyebrow="Legal"
            title="Final Disclaimer &amp;"
            highlight="Consent"
            effectiveDate="21 January 2026"
            sections={DISCLAIMER_SECTIONS}
          />

          {/* ── FOOTER NOTE ────────────────────────────────── */}
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              padding: "0 clamp(20px,4vw,60px) clamp(60px,8vw,100px)",
            }}
          >
            <div
              style={{
                padding: "28px 32px",
                borderRadius: "16px",
                background: "rgba(33,198,207,0.04)",
                border: "1px solid rgba(33,198,207,0.15)",
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#28e7c5",
                  boxShadow: "0 0 8px #28e7c5",
                  marginTop: "6px",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              <p
                style={{
                  margin: 0,
                  fontSize: "0.88rem",
                  lineHeight: 1.85,
                  color: "rgba(255,255,255,0.65)",
                  fontStyle: "italic",
                }}
              >
                <span style={{ color: "#28e7c5", fontStyle: "normal", fontWeight: 600 }}>
                  &ldquo;By continuing to use our services, you confirm that you have read, understood, and agreed to all policies of DatagenixAI LLP.&rdquo;
                </span>
                <br />
                <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", fontStyle: "normal" }}>
                  For policy-related queries, contact us at{" "}
                  <a
                    href="mailto:info@datagenixai.in"
                    style={{ color: "#28e7c5", textDecoration: "none" }}
                  >
                    info@datagenixai.in
                  </a>
                  . DatagenixAI LLP reserves the right to update any policy at any time. Continued use of our services after changes constitutes acceptance.
                </span>
              </p>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}