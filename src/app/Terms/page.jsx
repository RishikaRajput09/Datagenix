"use client";

import { useState, useRef, useEffect } from "react";

const SECTIONS = [
  {
    id: 1,
    title: "Acceptance of Terms",
    tag: "Legal Basis",
    content:
      'By accessing or using the website and services of DatagenixAI LLP ("Company", "we", "our"), you confirm that you have read, understood, and agree to be bound by these Terms and all related policies, including our Privacy and Cookies Policies. Your continued use constitutes acceptance, even if you have not read every provision. If you do not agree, you must discontinue use immediately. Where required by applicable law (including the EU/UK GDPR), we will request your explicit consent for specific processing activities.',
  },
  {
    id: 2,
    title: "Scope and Nature of Services",
    tag: "Services",
    content:
      "DatagenixAI LLP provides AI-powered business solutions, consulting, training programs, and R&D services in AI, Data Science, IoT, and Embedded Systems. All services are delivered on a best-effort, advisory, and implementation-support basis. Outcomes depend on multiple external factors, including client implementation quality, data availability, operational constraints, and market conditions. Accordingly, uniform results cannot be assured across users.",
  },
  {
    id: 3,
    title: "No Guarantee of Results",
    tag: "Disclaimer",
    content:
      "You acknowledge that DatagenixAI LLP does not guarantee specific outcomes such as increased revenue, cost savings, job placement, career advancement, or ROI. Examples, case studies, and testimonials are illustrative only. Any reliance on our outputs, recommendations, or models is at your discretion and risk.",
  },
  {
    id: 4,
    title: "Intellectual Property",
    tag: "IP Rights",
    content:
      "All content, training materials, software, models, designs, frameworks, and documentation are the exclusive property of DatagenixAI LLP unless otherwise agreed in writing. Unauthorized copying, distribution, modification, reverse engineering, or commercial use is prohibited and may lead to termination of access and legal action.",
  },
  {
    id: 5,
    title: "Acceptable Use",
    tag: "Policy",
    content:
      "You agree not to misuse our services, attempt unauthorized access, introduce malware, reverse engineer systems, or violate applicable laws. You are responsible for the accuracy of the information you provide and for your use of outputs generated through our services.",
  },
  {
    id: 6,
    title: "Third-Party Services",
    tag: "Integrations",
    content:
      "We may integrate third-party providers (e.g., cloud services, APIs, and payment gateways such as Razorpay). We do not control their systems or policies and are not responsible for their performance, availability, or data handling practices. Your use of such services is subject to their respective terms.",
  },
  {
    id: 7,
    title: "Limitation of Liability",
    tag: "Legal",
    content:
      "To the maximum extent permitted by law, DatagenixAI LLP shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits, business interruption, data loss, or missed opportunities arising from use of our services. Any liability, if established, shall be limited to the amount actually paid by you for the specific service giving rise to the claim.",
  },
  {
    id: 8,
    title: "Suspension and Termination",
    tag: "Access",
    content:
      "We may suspend or terminate access without prior notice if we reasonably believe you have violated these Terms or engaged in conduct that may harm our systems, users, or reputation. Such termination will not entitle you to any refund unless explicitly stated otherwise.",
  },
  {
    id: 9,
    title: "Governing Law and Jurisdiction",
    tag: "Jurisdiction",
    content:
      "These Terms are governed by the laws of India. Subject to applicable consumer and data protection laws, disputes shall fall under the jurisdiction of courts in Sangli, Maharashtra, India.",
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
      {/* watermark number */}
      <div style={{
        position: "absolute", top: "16px", right: "24px",
        fontSize: "4rem", fontWeight: 800, lineHeight: 1,
        color: "rgba(33,198,207,0.04)", userSelect: "none", pointerEvents: "none",
        letterSpacing: "-0.05em",
      }}>
        0{section.id}
      </div>

      {/* header row */}
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
        color: "white", letterSpacing: "-0.02em", margin: "0 0 12px",
        lineHeight: 1.2,
      }}>
        {section.id}. {section.title}
      </h2>

      <div style={{ height: "1px", background: "linear-gradient(90deg, rgba(33,198,207,0.2), transparent)", marginBottom: "14px" }} />

      <p style={{
        fontSize: "0.88rem", lineHeight: 1.8,
        color: "rgba(255,255,255,0.75)", margin: 0,
      }}>
        {section.content}
      </p>
    </div>
  );
}

export default function TermsPage() {
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
        {/* Ambient glow top */}
        <div style={{
          position: "fixed", top: "-200px", left: "50%", transform: "translateX(-50%)",
          width: "800px", height: "600px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(33,198,207,0.06) 0%, transparent 65%)",
          pointerEvents: "none", zIndex: 0,
        }} />

        {/* ── Header ── */}
        <header style={{
          position: "relative", zIndex: 1,
          maxWidth: "900px", margin: "0 auto",
          padding: "clamp(80px,12vw,120px) clamp(20px,4vw,60px) clamp(24px,3vw,48px)",
          display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
        }}>
          <div style={{
            marginBottom: "20px",
            animation: "heroFadeUp 0.7s ease forwards",
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
            Terms &amp; <span className="text-[#28E7C5]">Conditions</span>
          </h1>

          <p style={{
            fontSize: "0.88rem", lineHeight: 1.75,
            color: "rgba(255,255,255,0.6)", margin: "0 0 28px",
            animation: "heroFadeUp 0.8s ease 0.2s both",
          }}>
            Effective Date:{" "}
            <span style={{ color: "#28e7c5", fontWeight: 600 }}>21 January 2026</span>
          </p>

          {/* Divider */}
          <div style={{
            width: "100%", height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(33,198,207,0.2), transparent)",
            animation: "heroFadeUp 0.8s ease 0.3s both",
          }} />
        </header>

        {/* ── Content ── */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", margin: "0 auto", padding: "0 clamp(20px,4vw,60px) clamp(60px,8vw,100px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {SECTIONS.map((s) => (
              <SectionCard key={s.id} section={s} />
            ))}
          </div>

          {/* Footer note */}
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
              These Terms were last updated on <span style={{ color: "#28e7c5" }}>21 January 2026</span>. DatagenixAI LLP reserves the right to modify these Terms at any time. Continued use of our services after changes constitutes your acceptance of the revised Terms. For queries, contact us at{" "}
              <a href="mailto:info@datagenixai.in" style={{ color: "#28e7c5", textDecoration: "none" }}>info@datagenix.in</a>.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}