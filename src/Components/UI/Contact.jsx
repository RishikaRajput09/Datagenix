"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({
    intent: "",
    name: "",
    contactPref: "",
    phone: "",
    email: "",
    message: "",
  });
  const [focused, setFocused] = useState(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.intent) return alert("Select what you're looking for");
    if (!form.name) return alert("Name is required");
    if (!form.email) return alert("Email is required");
    if (!form.phone) return alert("Phone is required");
    if (!form.contactPref) return alert("Select contact preference");

    setSending(true);

    emailjs
      .send(
        "service_axxh0ra",
        "template_8ndb5nt",
        {
          name: form.name,
          email: form.email,
          intent: form.intent,
          contactPref: form.contactPref,
          message: form.message,
        },
        "_zjpymKLLxbKMaBVW",
      ) 

      .then(() => {
        setSending(false);
        setSent(true);
        setForm({
          intent: "",
          name: "",
          contactPref: "",
          phone: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error(err);
        setSending(false);
        alert("Something went wrong. Try again.");
      });
  };

  const inputStyle = (name) => ({
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: `1px solid ${focused === name ? "#21C6CF" : "rgba(33,198,207,0.12)"}`,
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
    color: "rgba(255,255,255,1)",
    fontSize: "0.67rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    marginBottom: "5px",
    display: "block",
  };

  // Card style matching Image 2 — dark translucent with teal border tint
  const cardStyle = {
    background: "rgba(13,20,30,0.72)",
    border: "1px solid rgba(33,198,207,0.18)",
    borderRadius: "16px",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    boxShadow:
      "0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(33,198,207,0.06)",
  };

  const INFO_ITEMS = [
    {
      label: "Email",
      value: "info@datagenix.in",
      icon: (
        <svg
          viewBox="0 0 20 20"
          style={{
            width: 15,
            height: 15,
            fill: "none",
            stroke: "#21C6CF",
            strokeWidth: 1.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        >
          <rect x="2" y="4" width="16" height="12" rx="1" />
          <path d="M2 4l8 7 8-7" />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "+91 91750 56569",
      icon: (
        <svg
          viewBox="0 0 20 20"
          style={{
            width: 15,
            height: 15,
            fill: "none",
            stroke: "#21C6CF",
            strokeWidth: 1.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        >
          <path d="M3 3h3.5l1.5 4-2 1.5c1 2 2.5 3.5 4.5 4.5L12 11l4 1.5V16a1 1 0 01-1 1C6.5 17 3 10.5 3 4a1 1 0 011-1z" />
        </svg>
      ),
    },
    {
      label: "Business Hours",
      value: "Mon – Sat, 9 AM – 7 PM IST",
      icon: (
        <svg
          viewBox="0 0 20 20"
          style={{
            width: 15,
            height: 15,
            fill: "none",
            stroke: "#21C6CF",
            strokeWidth: 1.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        >
          <circle cx="10" cy="10" r="8" />
          <path d="M10 6v4l3 3" />
        </svg>
      ),
    },
  ];

  const SOCIALS = [
    {
      label: "LinkedIn",
      d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z",
    },
    {
      label: "Twitter",
      d: "M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43 1s-2 .88-3.13 1.1A4.52 4.52 0 0016.5 1a4.48 4.48 0 00-4.48 4.48c0 .35.04.7.1 1.02A12.77 12.77 0 011.64 1.6a4.48 4.48 0 001.39 5.98A4.41 4.41 0 011 7.14v.06a4.48 4.48 0 003.59 4.39 4.52 4.52 0 01-2.02.08 4.48 4.48 0 004.19 3.12A9 9 0 011 20.29 12.77 12.77 0 007 22c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.02-.58A9.17 9.17 0 0023 3z",
    },
    {
      label: "Instagram",
      d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2z",
    },
  ];

  const WHY_ITEMS = [
    {
      title: "Fast Response",
      desc: "We reply within 24 hours, guaranteed.",
      icon: (
        <svg
          viewBox="0 0 20 20"
          style={{
            width: 16,
            height: 16,
            fill: "none",
            stroke: "#21C6CF",
            strokeWidth: 1.6,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        >
          <circle cx="10" cy="10" r="8" />
          <path d="M10 5v5l3 3" />
        </svg>
      ),
    },
    {
      title: "Free Consultation",
      desc: "First call is on us — no strings attached.",
      icon: (
        <svg
          viewBox="0 0 20 20"
          style={{
            width: 16,
            height: 16,
            fill: "none",
            stroke: "#21C6CF",
            strokeWidth: 1.6,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        >
          <path d="M17 10c0 4-3.13 7-7 7a7.16 7.16 0 01-3.5-.9L3 17l.9-3.5A7.16 7.16 0 013 10c0-3.87 3.13-7 7-7s7 3.13 7 7z" />
        </svg>
      ),
    },
    {
      title: "100% Confidential",
      desc: "Your data and ideas are fully protected.",
      icon: (
        <svg
          viewBox="0 0 20 20"
          style={{
            width: 16,
            height: 16,
            fill: "none",
            stroke: "#21C6CF",
            strokeWidth: 1.6,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        >
          <rect x="4" y="9" width="12" height="9" rx="2" />
          <path d="M7 9V6a3 3 0 016 0v3" />
        </svg>
      ),
    },
    {
      title: "No-Code Solutions",
      desc: "We build AI tools that work without technical skills.",
      icon: (
        <svg
          viewBox="0 0 20 20"
          style={{
            width: 16,
            height: 16,
            fill: "none",
            stroke: "#21C6CF",
            strokeWidth: 1.6,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        >
          <polyline points="5 8 2 10 5 12" />
          <polyline points="15 8 18 10 15 12" />
          <line x1="9" y1="14" x2="11" y2="6" />
        </svg>
      ),
    },
    {
      title: "End-to-End Support",
      desc: "From strategy to deployment, we've got you covered.",
      icon: (
        <svg
          viewBox="0 0 20 20"
          style={{
            width: 16,
            height: 16,
            fill: "none",
            stroke: "#21C6CF",
            strokeWidth: 1.6,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        >
          <path d="M10 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
        </svg>
      ),
    },
    // {
    //   title: "Real Business Impact",
    //   desc: "Every solution is built for measurable ROI.",
    //   icon: (
    //     <svg viewBox="0 0 20 20" style={{ width: 16, height: 16, fill: "none", stroke: "#21C6CF", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }}>
    //       <polyline points="3 14 7 9 11 12 17 5" />
    //       <polyline points="14 5 17 5 17 8" />
    //     </svg>
    //   ),
    // },
    // {
    //   title: "India-Focused Expertise",
    //   desc: "Built for MSMEs and Indian market dynamics.",
    //   icon: (
    //     <svg viewBox="0 0 20 20" style={{ width: 16, height: 16, fill: "none", stroke: "#21C6CF", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }}>
    //       <circle cx="10" cy="10" r="8" />
    //       <path d="M2 10h16M10 2a14 14 0 010 16M10 2a14 14 0 000 16" />
    //     </svg>
    //   ),
    // },
    // {
    //   title: "Ongoing Training",
    //   desc: "We upskill your team so they own the AI tools.",
    //   icon: (
    //     <svg viewBox="0 0 20 20" style={{ width: 16, height: 16, fill: "none", stroke: "#21C6CF", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }}>
    //       <path d="M2 5l8-3 8 3v5c0 4-4 7-8 8-4-1-8-4-8-8V5z" />
    //       <polyline points="7 10 9 12 13 8" />
    //     </svg>
    //   ),
    // },
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
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse,rgba(33,198,207,0.05) 0%,transparent 70%)",
        }}
      />

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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "16px",
            ...fadeIn(0),
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "999px",
              border: "1px solid rgba(33,198,207,0.35)",
              background: "rgba(33,198,207,0.08)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 0 12px rgba(33,198,207,0.15)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#28E7C5",
                boxShadow: "0 0 10px #21C6CF",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: "#28E7C5",
                fontSize: "0.67rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              Get In Touch
            </span>
          </div>
        </div>

        {/* Heading */}
        <div
          style={{ textAlign: "center", marginBottom: "10px", ...fadeIn(80) }}
        >
          <h2
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: "clamp(1.6rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Let&apos;s Build Something{" "}
            <span style={{ color: "#28E7C5" }}>Together</span>
          </h2>
        </div>

        {/* Sub */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(32px, 5vw, 52px)",
            ...fadeIn(140),
          }}
        >
          <p
            style={{
              fontWeight: 300,
              color: "rgba(255,255,255,0.38)",
              fontSize: "clamp(0.82rem, 2vw, 0.92rem)",
              lineHeight: 1.75,
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Have a project in mind? Reach out and our team will get back to you
            within 24 hours.
          </p>
        </div>

        {/* Two columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: "20px",
            alignItems: "stretch",
            ...fadeIn(220),
          }}
        >
          {/* ── LEFT: Form ── */}
          <div
            style={{
              ...cardStyle,
              padding: "clamp(18px, 3vw, 28px)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3
              style={{
                fontFamily: "'Syne',sans-serif",
                color: "white",
                fontWeight: 700,
                fontSize: "1.05rem",
                margin: "0 0 4px 0",
              }}
            >
              Start Your AI Journey in 10 Seconds
            </h3>
            <p
              style={{
                fontWeight: 300,
                color: "rgba(255,255,255,1)",
                fontSize: "0.77rem",
                margin: "0 0 22px 0",
              }}
            >
              Fill in the details and we'll respond shortly.
            </p>

            {sent ? (
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "rgba(33,198,207,0.1)",
                    border: "1px solid rgba(33,198,207,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    style={{
                      width: 26,
                      height: 26,
                      stroke: "#21C6CF",
                      fill: "none",
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      color: "white",
                      fontWeight: 700,
                      fontSize: "0.98rem",
                      margin: "0 0 4px",
                    }}
                  >
                    Message Sent!
                  </p>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.38)",
                      fontSize: "0.78rem",
                      margin: 0,
                    }}
                  >
                    We'll be in touch within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({
                      intent: "",
                      name: "",
                      contactPref: "",
                      phone: "",
                      email: "",
                      message: "",
                    });
                  }}
                  style={{
                    color: "#21C6CF",
                    fontSize: "0.75rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "13px",
                  flex: 1,
                }}
              >
                {/* INTENT */}
                <div>
                  <label style={labelStyle}>What are you looking for?</label>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                  >
                    {[
                      "Grow My Business with AI",
                      "Learn AI / Courses",
                      "Build AI Product",
                      "Just Exploring",
                    ].map((option) => (
                      <button
                        type="button"
                        key={option}
                        onClick={() => setForm({ ...form, intent: option })}
                        style={{
                          padding: "8px 12px",
                          borderRadius: "8px",
                          border:
                            form.intent === option
                              ? "1px solid #21C6CF"
                              : "1px solid rgba(33,198,207,0.1)",
                          background:
                            form.intent === option
                              ? "rgba(33,198,207,0.15)"
                              : "rgba(255,255,255,0.03)",
                          color:
                            form.intent === option
                              ? "#21C6CF"
                              : "rgba(255,255,255,1)",
                          fontSize: "0.75rem",
                          cursor: "pointer",
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* NAME */}
                <div>
                  <label style={labelStyle}>Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("name")}
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("email")}
                    required
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("phone")}
                    required
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label style={labelStyle}>
                    Your Message{" "}
                    <span
                      style={{
                        color: "rgba(255,255,255,0.2)",
                        textTransform: "none",
                        letterSpacing: 0,
                      }}
                    >
                      (optional)
                    </span>
                  </label>
                  <textarea
                    placeholder="Tell us about your project, goals, or any questions you have..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    rows={3}
                    style={{
                      ...inputStyle("message"),
                      resize: "vertical",
                      minHeight: "80px",
                      lineHeight: 1.6,
                    }}
                  />
                </div>

                {/* CONTACT PREFERENCE */}
                <div>
                  <label style={labelStyle}>Preferred Contact</label>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {["WhatsApp", "Phone Call", "Email"].map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setForm({ ...form, contactPref: opt })}
                        style={{
                          flex: 1,
                          padding: "10px",
                          borderRadius: "8px",
                          border:
                            form.contactPref === opt
                              ? "1px solid #21C6CF"
                              : "1px solid rgba(33,198,207,0.1)",
                          background:
                            form.contactPref === opt
                              ? "rgba(33,198,207,0.15)"
                              : "rgba(255,255,255,0.03)",
                          color:
                            form.contactPref === opt
                              ? "#21C6CF"
                              : "rgba(255,255,255,1)",
                          fontSize: "0.75rem",
                          cursor: "pointer",
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontWeight: 600,
                    fontSize: "0.87rem",
                    letterSpacing: "0.04em",
                    padding: "13px",
                    borderRadius: "12px",
                    border: "none",
                    cursor: sending ? "not-allowed" : "pointer",
                    background: sending
                      ? "rgba(33,198,207,0.1)"
                      : "linear-gradient(135deg,#28E7C5,#0ea5b5)",
                    color: sending ? "#21C6CF" : "#050505",
                    boxShadow: sending
                      ? "none"
                      : "0 0 22px rgba(33,198,207,0.22)",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  {sending ? (
                    <>
                      <svg
                        style={{
                          width: 15,
                          height: 15,
                          animation: "spin 1s linear infinite",
                        }}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                        <path d="M12 2a10 10 0 0110 10" strokeLinecap="round" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Get Started
                      <svg
                        viewBox="0 0 16 16"
                        style={{
                          width: 15,
                          height: 15,
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: 1.8,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }}
                      >
                        <path d="M2 8h12M9 3l5 5-5 5" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {/* Contact Info Card */}
            <div
              style={{
                ...cardStyle,
                padding: "clamp(16px, 3vw, 24px)",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div>
                <p
                  style={{
                    color: "rgba(255,255,255,1)",
                    fontSize: "0.63rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    margin: "0 0 10px",
                  }}
                >
                  Contact Info
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  {INFO_ITEMS.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                      }}
                    >
                      <div
                        style={{
                          width: 34,
                          height: 34,
                          borderRadius: "9px",
                          flexShrink: 0,
                          background: "rgba(33,198,207,0.07)",
                          border: "1px solid rgba(33,198,207,0.13)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p
                          style={{
                            color: "rgba(255,255,255,1)",
                            fontSize: "0.63rem",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            margin: "0 0 2px",
                          }}
                        >
                          {item.label}
                        </p>
                        <p
                          style={{
                            fontWeight: 300,
                            color: "rgba(255,255,255,0.75)",
                            fontSize: "0.83rem",
                            margin: 0,
                          }}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{ height: "1px", background: "rgba(33,198,207,0.08)" }}
              />

              {/* Socials */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    color: "rgba(255,255,255,1)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Follow us
                </span>
                {SOCIALS.map((s) => (
                  <button
                    key={s.label}
                    aria-label={s.label}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "8px",
                      cursor: "pointer",
                      background: "rgba(33,198,207,0.04)",
                      border: "1px solid rgba(33,198,207,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      style={{
                        width: 13,
                        height: 13,
                        fill: "none",
                        stroke: "rgba(255,255,255,0.42)",
                        strokeWidth: 1.8,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }}
                    >
                      <path d={s.d} />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Why Choose Us — 3 mini cards like Image 2 */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "12px",
              }}
            >
              {WHY_ITEMS.map((item, i) => (
                <div
                  key={i}
                  style={{
                    ...cardStyle,
                    padding: "14px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                  }}
                >
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: "9px",
                      flexShrink: 0,
                      background: "rgba(33,198,207,0.07)",
                      border: "1px solid rgba(33,198,207,0.14)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Syne',sans-serif",
                        color: "white",
                        fontWeight: 600,
                        fontSize: "0.83rem",
                        margin: "0 0 2px",
                      }}
                    >
                      {item.title}
                    </p>
                    <p
                      style={{
                        color: "rgba(255,255,255,1)",
                        fontSize: "0.73rem",
                        margin: 0,
                        lineHeight: 1.5,
                        fontWeight: 300,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
