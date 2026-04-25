"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactSection() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [focused, setFocused] = useState(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1800);
  };

  const inputStyle = (name) => ({
    fontFamily: "'DM Sans',sans-serif",
    width: "100%",
    background: "#0a0a0a",
    border: `1px solid ${focused === name ? "#21C6CF" : "rgba(33,198,207,0.1)"}`,
    boxShadow: focused === name ? "0 0 0 1px rgba(33,198,207,0.15)" : "none",
    borderRadius: "12px",
    padding: "11px 14px",
    color: "white",
    fontSize: "0.87rem",
    outline: "none",
    transition: "all 0.3s ease",
    boxSizing: "border-box",
  });

  const labelStyle = {
    fontFamily: "'DM Sans',sans-serif",
    color: "rgba(255,255,255,0.35)",
    fontSize: "0.67rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    marginBottom: "5px",
    display: "block",
  };

  const INFO_ITEMS = [
    {
      label: "Location",
      value: "Nirmiti Elite 14, 502, Sangli, S. T. Colony, Vishrambag, Maharashtra 416415",
      icon: (
        <svg viewBox="0 0 20 20" style={{ width: 15, height: 15, fill: "none", stroke: "#21C6CF", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }}>
          <path d="M10 11a3 3 0 100-6 3 3 0 000 6z" />
          <path d="M10 1C6.13 1 3 4.13 3 8c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7z" />
        </svg>
      ),
    },
    {
      label: "Email",
      value: "info@datagenixai.in",
      icon: (
        <svg viewBox="0 0 20 20" style={{ width: 15, height: 15, fill: "none", stroke: "#21C6CF", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }}>
          <rect x="2" y="4" width="16" height="12" rx="1" />
          <path d="M2 4l8 7 8-7" />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "+91 91750 56569",
      icon: (
        <svg viewBox="0 0 20 20" style={{ width: 15, height: 15, fill: "none", stroke: "#21C6CF", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }}>
          <path d="M3 3h3.5l1.5 4-2 1.5c1 2 2.5 3.5 4.5 4.5L12 11l4 1.5V16a1 1 0 01-1 1C6.5 17 3 10.5 3 4a1 1 0 011-1z" />
        </svg>
      ),
    },
    {
      label: "Business Hours",
      value: "Mon – Sat, 9 AM – 7 PM IST",
      icon: (
        <svg viewBox="0 0 20 20" style={{ width: 15, height: 15, fill: "none", stroke: "#21C6CF", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }}>
          <circle cx="10" cy="10" r="8" />
          <path d="M10 6v4l3 3" />
        </svg>
      ),
    },
  ];

  const SOCIALS = [
    { label: "LinkedIn", d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" },
    { label: "Twitter", d: "M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43 1s-2 .88-3.13 1.1A4.52 4.52 0 0016.5 1a4.48 4.48 0 00-4.48 4.48c0 .35.04.7.1 1.02A12.77 12.77 0 011.64 1.6a4.48 4.48 0 001.39 5.98A4.41 4.41 0 011 7.14v.06a4.48 4.48 0 003.59 4.39 4.52 4.52 0 01-2.02.08 4.48 4.48 0 004.19 3.12A9 9 0 011 20.29 12.77 12.77 0 007 22c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.02-.58A9.17 9.17 0 0023 3z" },
    { label: "Instagram", d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2z" },
  ];

  const fadeIn = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.65s ease, transform 0.65s ease",
    transitionDelay: `${delay}ms`,
  });

  return (
    <section
      id="contact"
      style={{
        background: "none",
        position: "relative",
        overflow: "hidden",
        padding: "clamp(48px, 8vw, 80px) 0",
      }}
    >
      {/* Top glow */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "600px", height: "300px", pointerEvents: "none",
        background: "radial-gradient(ellipse,rgba(33,198,207,0.05) 0%,transparent 70%)",
      }} />

      <div
        ref={ref}
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 24px)",
        }}
      >
        {/* Eyebrow */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px", ...fadeIn(0) }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "6px 14px", borderRadius: "999px",
            border: "1px solid rgba(33,198,207,0.35)",
            background: "rgba(33,198,207,0.08)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 12px rgba(33,198,207,0.15)",
            transition: "all 0.3s ease", cursor: "pointer",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#28E7C5", boxShadow: "0 0 10px #21C6CF", flexShrink: 0 }} />
            <span style={{ color: "#28E7C5", fontSize: "0.67rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>
              Get In Touch
            </span>
          </div>
        </div>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "10px", ...fadeIn(80) }}>
          <h2 style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "clamp(1.6rem, 4vw, 3rem)",
            fontWeight: 700, color: "white",
            lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0,
          }}>
            Let&apos;s Build Something{" "}
            <span style={{ color: "#28E7C5" }}>Together</span>
          </h2>
        </div>

        {/* Sub */}
        <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 52px)", ...fadeIn(140) }}>
          <p style={{
            fontFamily: "'DM Sans',sans-serif", fontWeight: 300,
            color: "rgba(255,255,255,0.38)", fontSize: "clamp(0.82rem, 2vw, 0.92rem)",
            lineHeight: 1.75, maxWidth: "480px", margin: "0 auto",
          }}>
            Have a project in mind? Reach out and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* ── Two columns (stacks on mobile) ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: "20px",
            alignItems: "stretch",
            ...fadeIn(220),
          }}
        >
          {/* ── LEFT: Form ── */}
          <div style={{
            background: "#0d0d0d",
            border: "1px solid rgba(33,198,207,0.14)",
            borderRadius: "16px",
            padding: "clamp(18px, 3vw, 28px)",
            boxShadow: "0 0 40px rgba(33,198,207,0.05), 0 8px 40px rgba(0,0,0,0.4)",
            display: "flex", flexDirection: "column",
          }}>
            <h3 style={{ fontFamily: "'Syne',sans-serif", color: "white", fontWeight: 700, fontSize: "1.05rem", margin: "0 0 4px 0" }}>
              Send a Message
            </h3>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300, color: "rgba(255,255,255,0.3)", fontSize: "0.77rem", margin: "0 0 22px 0" }}>
              Fill in the details and we'll respond shortly.
            </p>

            {sent ? (
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "14px" }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(33,198,207,0.1)", border: "1px solid rgba(33,198,207,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" style={{ width: 26, height: 26, stroke: "#21C6CF", fill: "none", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontFamily: "'Syne',sans-serif", color: "white", fontWeight: 700, fontSize: "0.98rem", margin: "0 0 4px" }}>Message Sent!</p>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", color: "rgba(255,255,255,0.38)", fontSize: "0.78rem", margin: 0 }}>We'll be in touch within 24 hours.</p>
                </div>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                  style={{ fontFamily: "'DM Sans',sans-serif", color: "#21C6CF", fontSize: "0.75rem", background: "none", border: "none", cursor: "pointer" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "13px", flex: 1 }}>

                {/* Name + Email — side by side on ≥480px, stacked below */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))", gap: "13px" }}>
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input required type="text" placeholder="John Doe" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                      style={inputStyle("name")} />
                  </div>
                  <br/>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input required type="email" placeholder="you@company.com" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                      style={inputStyle("email")} />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input type="tel" placeholder="+91 98765 43210" value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)}
                    style={inputStyle("phone")} />
                </div>

                {/* Message */}
                <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                  <label style={labelStyle}>Message</label>
                  <textarea required placeholder="Tell us about your project or inquiry..." value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                    style={{ ...inputStyle("message"), resize: "none", flex: 1, minHeight: "110px" }} />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "0.87rem",
                    letterSpacing: "0.04em", padding: "13px", borderRadius: "12px", border: "none",
                    cursor: sending ? "not-allowed" : "pointer",
                    background: sending ? "rgba(33,198,207,0.1)" : "linear-gradient(135deg,#28E7C5,#0ea5b5)",
                    color: sending ? "#21C6CF" : "#050505",
                    boxShadow: sending ? "none" : "0 0 22px rgba(33,198,207,0.22)",
                    transition: "all 0.3s ease",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  }}
                >
                  {sending ? (
                    <>
                      <svg style={{ width: 15, height: 15, animation: "spin 1s linear infinite" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                        <path d="M12 2a10 10 0 0110 10" strokeLinecap="round" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg viewBox="0 0 16 16" style={{ width: 15, height: 15, fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <path d="M2 8h12M9 3l5 5-5 5" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            {/* MAP */}
            <div style={{
              flex: "2 0 0",
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(33,198,207,0.14)",
              minHeight: "180px",
            }}>
              <iframe
                title="DatagenixAI Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7637.179884348659!2d74.58693539258066!3d16.84668683580468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc123cf6b652473%3A0x436f1c067155fce5!2sDatagenixAi%20LLP!5e0!3m2!1sen!2sin!4v1777036748615!5m2!1sen!2sin"
                style={{
                  position: "absolute", inset: 0, width: "100%", height: "100%", border: "none",
                  filter: "invert(92%) hue-rotate(180deg) brightness(0.82) saturate(0.55)",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div style={{ position: "absolute", inset: 0, background: "rgba(5,5,5,0.15)", pointerEvents: "none" }} />
              <div style={{
                position: "absolute", top: "10px", left: "10px",
                display: "flex", alignItems: "center", gap: "6px",
                padding: "5px 10px", borderRadius: "8px",
                background: "rgba(13,13,13,0.88)", border: "1px solid rgba(33,198,207,0.22)",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#21C6CF", boxShadow: "0 0 6px #21C6CF", flexShrink: 0 }} />
                <span style={{ fontFamily: "'DM Sans',sans-serif", color: "#21C6CF", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  Sangli, India
                </span>
              </div>
            </div>

            {/* INFO */}
            <div style={{
              flex: "3 0 0",
              background: "#0d0d0d",
              border: "1px solid rgba(33,198,207,0.14)",
              borderRadius: "16px",
              padding: "clamp(16px, 3vw, 24px)",
              boxShadow: "0 0 40px rgba(33,198,207,0.04), 0 8px 40px rgba(0,0,0,0.4)",
              display: "flex", flexDirection: "column", gap: "18px",
            }}>
              {INFO_ITEMS.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: "9px", flexShrink: 0,
                    background: "rgba(33,198,207,0.07)", border: "1px solid rgba(33,198,207,0.13)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", color: "rgba(255,255,255,0.3)", fontSize: "0.63rem", letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 2px" }}>
                      {item.label}
                    </p>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300, color: "rgba(255,255,255,0.75)", fontSize: "0.83rem", margin: 0 }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}

              <div style={{ height: "1px", background: "rgba(33,198,207,0.08)" }} />

              {/* Socials */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <span style={{ fontFamily: "'DM Sans',sans-serif", color: "rgba(255,255,255,0.28)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  Follow us
                </span>
                {SOCIALS.map((s) => (
                  <button key={s.label} aria-label={s.label} style={{
                    width: 30, height: 30, borderRadius: "8px", cursor: "pointer",
                    background: "rgba(33,198,207,0.04)", border: "1px solid rgba(33,198,207,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}>
                    <svg viewBox="0 0 24 24" style={{ width: 13, height: 13, fill: "none", stroke: "rgba(255,255,255,0.42)", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d={s.d} />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}