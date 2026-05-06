"use client";

import { useState, useRef, useEffect } from "react";

const SECTIONS = [
  {
    id: 1,
    title: "Overview and Commitment",
    tag: "Policy Basis",
    content:
      "DatagenixAI LLP is committed to protecting your personal data and respecting your privacy. We process personal data in accordance with applicable laws, including the principles of the General Data Protection Regulation where relevant.",
  },
  {
    id: 2,
    title: "Data We Collect",
    tag: "Data Collection",
    content:
      "We may collect personal data such as your name, email, phone number, organization details, course preferences, and transaction-related information. We may also collect technical data such as IP address, device type, and usage patterns for analytics and security.",
  },
  {
    id: 3,
    title: "Lawful Basis for Processing",
    tag: "GDPR",
    content:
      "Where GDPR applies, we rely on one or more of the following legal bases: your consent (e.g., form submissions, cookies), performance of a contract (service delivery), legitimate interests (service improvement, security), and compliance with legal obligations.",
  },
  {
    id: 4,
    title: "How We Use Your Data",
    tag: "Data Usage",
    content:
      "We use your data to provide and improve services, respond to inquiries, personalize experiences, deliver training, process payments, and enhance our AI systems. We do not sell or rent your personal data. We do not share personal data for third-party marketing.",
  },
  {
    id: 5,
    title: "Data Sharing and Processors",
    tag: "Third Parties",
    content:
      "We may share data with trusted service providers (e.g., hosting, analytics, payment processing via Razorpay) strictly for service delivery. Such providers are bound by their own privacy policies and, where applicable, data processing agreements. We do not control their independent practices.",
  },
  {
    id: 6,
    title: "Data Retention",
    tag: "Retention",
    content:
      "We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. When data is no longer required, we take reasonable steps to delete or anonymize it.",
  },
  {
    id: 7,
    title: "Data Security",
    tag: "Security",
    content:
      "We implement reasonable administrative, technical, and organizational measures to protect personal data. However, no system is completely secure. In the event of a breach caused by external factors such as hacking, malware, or unauthorized access beyond our control, DatagenixAI LLP shall not be held liable to the extent permitted by law. Where legally required, we will notify affected users and authorities.",
  },
  {
    id: 8,
    title: "International Transfers",
    tag: "Global",
    content:
      "If you access our services from outside India, your data may be processed in India or other jurisdictions where our providers operate. By using our services, you consent to such transfers, subject to appropriate safeguards where applicable.",
  },
  {
    id: 9,
    title: "Your Rights",
    tag: "User Rights",
    content:
      "Where GDPR applies, you have rights to access, rectify, erase, restrict processing, object to processing, and request data portability. You may withdraw consent at any time without affecting the lawfulness of prior processing. To exercise your rights, contact us at info@datagenixai.in. We may verify your identity before fulfilling requests.",
  },
  {
    id: 10,
    title: "Children's Data",
    tag: "Minor Protection",
    content:
      "Our services are not directed to children under 16 (or the applicable age in your jurisdiction). We do not knowingly collect personal data from children. If we become aware of such collection, we will take steps to delete it.",
  },
  {
    id: 11,
    title: "Consent",
    tag: "Agreement",
    content:
      "By using our website and services, you consent to the collection and use of your data as described. Where required, we will obtain explicit consent (e.g., for cookies or marketing communications).",
  },
];

function useInView(threshold = 0.08) {
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

function Eyebrow({ label }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: "8px",
      fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.18em",
      textTransform: "uppercase", color: "#28e7c5",
    }}>
      <span style={{
        width: "5px", height: "5px", borderRadius: "50%",
        background: "#28e7c5", boxShadow: "0 0 8px #28e7c5", flexShrink: 0,
      }} />
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
        background: hov ? "rgba(33,198,207,0.04)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${hov ? "rgba(33,198,207,0.2)" : "rgba(33,198,207,0.08)"}`,
        transition: "all 0.3s ease",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        cursor: "default",
      }}
    >
      <div style={{
        position: "absolute", top: "16px", right: "24px",
        fontSize: "4rem", fontWeight: 800, lineHeight: 1,
        color: "rgba(33,198,207,0.04)", userSelect: "none", pointerEvents: "none",
        letterSpacing: "-0.05em",
      }}>
        {section.id < 10 ? `0${section.id}` : section.id}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
        <span style={{
          fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase",
          padding: "4px 10px", borderRadius: "999px",
          border: "1px solid rgba(33,198,207,0.2)",
          color: "rgba(33,198,207,1)", background: "rgba(33,198,207,0.05)",
        }}>
          {section.tag}
        </span>
      </div>

      <h2 style={{
        fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)", fontWeight: 800,
        color: "white", letterSpacing: "-0.02em", margin: "0 0 12px", lineHeight: 1.2,
      }}>
        {section.id}. {section.title}
      </h2>

      <div style={{ height: "1px", background: "linear-gradient(90deg, rgba(33,198,207,0.2), transparent)", marginBottom: "14px" }} />

      <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "rgba(255,255,255,0.75)", margin: 0 }}>
        {section.content}
      </p>
    </div>
  );
}

export default function PrivacyPage() {
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
      `}</style>

      <main
        className="bg-linear-to-r from-[#140c30] via-[#153D4C] to-[#16A085]"
        style={{ minHeight: "100vh", position: "relative", overflowX: "hidden" }}
      >
        <div style={{
          position: "fixed", top: "-200px", left: "50%", transform: "translateX(-50%)",
          width: "800px", height: "600px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(33,198,207,0.06) 0%, transparent 65%)",
          pointerEvents: "none", zIndex: 0,
        }} />

        <header style={{
          position: "relative", zIndex: 1,
          maxWidth: "900px", margin: "0 auto",
          padding: "clamp(80px,12vw,120px) clamp(20px,4vw,60px) clamp(24px,3vw,48px)",
          display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
        }}>
          <div style={{
            marginBottom: "20px", animation: "heroFadeUp 0.7s ease forwards",
            display: "inline-block", padding: "6px 14px", borderRadius: "999px",
            background: "rgba(33,198,207,0.08)", border: "1px solid rgba(33,198,207,0.25)",
            boxShadow: "0 0 20px rgba(33,198,207,0.15)",
          }}>
            <Eyebrow label="Legal" />
          </div>

          <h1
            className="text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-4"
            style={{ animation: "heroFadeUp 0.8s ease 0.1s both" }}
          >
            Privacy <span className="text-[#28E7C5]">Policy</span>
          </h1>

          <p style={{
            fontSize: "0.88rem", lineHeight: 1.75,
            color: "rgba(255,255,255,0.6)", margin: "0 0 28px",
            animation: "heroFadeUp 0.8s ease 0.2s both",
          }}>
            Effective Date:{" "}
            <span style={{ color: "#28e7c5", fontWeight: 600 }}>21 January 2026</span>
          </p>

          <div style={{
            width: "100%", height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(33,198,207,0.2), transparent)",
            animation: "heroFadeUp 0.8s ease 0.3s both",
          }} />
        </header>

        <div style={{
          position: "relative", zIndex: 1, maxWidth: "900px", margin: "0 auto",
          padding: "0 clamp(20px,4vw,60px) clamp(60px,8vw,100px)",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {SECTIONS.map((s) => (
              <SectionCard key={s.id} section={s} />
            ))}
          </div>

          <div style={{
            marginTop: "48px", padding: "24px 28px", borderRadius: "12px",
            background: "rgba(33,198,207,0.04)", border: "1px solid rgba(33,198,207,0.12)",
            display: "flex", gap: "14px", alignItems: "flex-start",
          }}>
            <div style={{
              flexShrink: 0, width: "8px", height: "8px", borderRadius: "50%",
              background: "#28e7c5", boxShadow: "0 0 8px #28e7c5", marginTop: "6px",
              animation: "pulse 2s ease-in-out infinite",
            }} />
            <p style={{ margin: 0, fontSize: "0.82rem", lineHeight: 1.75, color: "rgba(255,255,255,0.5)" }}>
              This Privacy Policy was last updated on <span style={{ color: "#28e7c5" }}>21 January 2026</span>. DatagenixAI LLP reserves the right to update this policy at any time. Continued use of our services after changes constitutes acceptance. For privacy-related queries, contact us at{" "}
              <a href="mailto:info@datagenixai.in" style={{ color: "#28e7c5", textDecoration: "none" }}>info@datagenixai.in</a>.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}