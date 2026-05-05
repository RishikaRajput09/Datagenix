"use client";

import { useState, useRef, useCallback } from "react";

// ── COURSE DATA WITH PRICES ───────────────────────────────────────────────────
const COURSES = [
  {
    id: 1,
    name: "AI for Everyone",
    tag: "Beginner · 4–6 Weeks",
  },
  {
    id: 2,
    name: "Data Analysis with Generative AI",
    tag: "Job-Ready · 3–4 Months",
  },
  {
    id: 3,
    name: "Data Science with Generative AI",
    tag: "Advanced · 4–6 Months",
  },
  {
    id: 4,
    name: "Python Programming (Beginner to Advanced)",
    tag: "Programming · 6–8 Weeks",
  },
  {
    id: 5,
    name: "Excel & SQL for Data Analysis",
    tag: "Core Skills · 4–6 Weeks",
  },
  {
    id: 6,
    name: "Power BI & Advanced Dashboarding",
    tag: "Visualization · 6–8 Weeks",
  },
  {
    id: 7,
    name: "AI & Robotics for Students (5th–9th)",
    tag: "School Program",
  },
  {
    id: 8,
    name: "Employability Skill Development Programs",
    tag: "Career Growth",
  },
];


// ── FIELD COMPONENTS ──────────────────────────────────────────────────────────
function Label({ children }) {
  return (
    <p style={{
      fontFamily: "Inter, sans-serif",
      fontSize: "0.62rem",
      fontWeight: 700,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.42)",
      marginBottom: "6px",
    }}>
      {children}
    </p>
  );
}

function Input({ id, type = "text", placeholder, value, onChange, hasError, autocomplete }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete={autocomplete}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        width: "100%",
        background: focused ? "rgba(33,198,207,0.05)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${hasError ? "rgba(255,90,90,0.45)" : focused ? "rgba(33,198,207,0.5)" : "rgba(33,198,207,0.14)"}`,
        borderRadius: "10px",
        padding: "11px 14px",
        fontFamily: "Inter, sans-serif",
        fontSize: "0.84rem",
        color: "#fff",
        outline: "none",
        boxShadow: focused ? "0 0 0 3px rgba(33,198,207,0.08)" : "none",
        transition: "all 0.22s ease",
        boxSizing: "border-box",
      }}
    />
  );
}

function ErrorMsg({ show, children }) {
  if (!show) return null;
  return (
    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "rgba(255,90,90,0.85)", marginTop: "4px" }}>
      {children}
    </p>
  );
}

function SectionDivider({ label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "24px 0 14px" }}>
      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.38)", flexShrink: 0, margin: 0 }}>
        {label}
      </p>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(33,198,207,0.15), transparent)" }} />
    </div>
  );
}

// ── COURSE CARD ───────────────────────────────────────────────────────────────
function CourseCard({ course, selected, onSelect }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onClick={() => onSelect(course.id)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        padding: "12px 14px",
        borderRadius: "12px",
        border: `1px solid ${selected ? "#21C6CF" : hov ? "rgba(33,198,207,0.3)" : "rgba(33,198,207,0.1)"}`,
        background: selected ? "rgba(33,198,207,0.09)" : hov ? "rgba(33,198,207,0.04)" : "rgba(255,255,255,0.02)",
        cursor: "pointer",
        transition: "all 0.22s ease",
        boxShadow: selected ? "0 0 0 1px rgba(33,198,207,0.18), 0 4px 20px rgba(33,198,207,0.12)" : "none",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      
      {/* Radio + name */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
        <div style={{
          width: "17px", height: "17px",
          borderRadius: "50%",
          border: `1.5px solid ${selected ? "#21C6CF" : "rgba(33,198,207,0.28)"}`,
          background: selected ? "#21C6CF" : "transparent",
          flexShrink: 0,
          marginTop: "2px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: selected ? "0 0 10px rgba(33,198,207,0.5)" : "none",
          transition: "all 0.2s",
        }}>
          {selected && <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#050505" }} />}
        </div>
        <div style={{ flex: 1, minWidth: 0, paddingRight: "36px" }}>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.8rem",
            fontWeight: 700,
            color: selected ? "#fff" : "rgba(255,255,255,0.78)",
            lineHeight: 1.3,
            margin: 0,
            transition: "color 0.2s",
          }}>
            {course.name}
          </p>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.6rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: selected ? "rgba(33,198,207,0.8)" : "rgba(33,198,207,0.42)",
            margin: "3px 0 0",
            transition: "color 0.2s",
          }}>
            {course.tag}
          </p>
        </div>
      </div>
    </div>
  );
}



// ── SUCCESS STATE ─────────────────────────────────────────────────────────────
function SuccessState({ courseName }) {
  return (
    <div style={{ textAlign: "center", padding: "56px 40px" }}>
      <div style={{
        width: "72px", height: "72px",
        borderRadius: "50%",
        background: "rgba(40,231,197,0.1)",
        border: "1px solid rgba(40,231,197,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 24px",
        fontSize: "1.8rem",
        boxShadow: "0 0 40px rgba(40,231,197,0.15)",
      }}>
        ✓
      </div>
      <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.5rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", margin: "0 0 10px" }}>
        Enrollment Submitted!
      </h2>
      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.7, margin: "0 0 8px" }}>
        We've received your enrollment for <strong style={{ color: "#28E7C5" }}>{courseName}</strong>.<br />
        Our team will verify your payment and confirm your seat within <strong style={{ color: "#28E7C5" }}>24 hours</strong>.
      </p>
      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.68rem", color: "rgba(255,255,255,0.18)", letterSpacing: "0.06em", marginTop: "20px" }}>
        info@datagenix.in · 73852 56569
      </p>
    </div>
  );
}

// ── MAIN ENROLLMENT FORM ──────────────────────────────────────────────────────
export default function EnrollmentForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "" });
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((err) => ({ ...err, [key]: false }));
  };

  const handleSubmit = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = true;
    if (form.phone.replace(/[\s\-\+\(\)]/g, "").length < 7) errs.phone = true;
    if (!selectedCourse) errs.course = true;
    if (!agreed) errs.terms = true;

    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    // ── Plug in your submit logic here (API call, email, etc.) ──
    console.log("Enrollment submitted:", { ...form, courseId: selectedCourse, file: file?.name });
    setSubmitted(true);
  };

  const selectedCourseName = COURSES.find((c) => c.id === selectedCourse)?.name;

  if (submitted) {
    return (
      <div style={{
        background: "#050505",
        border: "1px solid rgba(33,198,207,0.18)",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
        maxWidth: "760px",
        margin: "0 auto",
      }}>
        <SuccessState courseName={selectedCourseName} />
      </div>
    );
  }

  return (
    <div style={{
      background: "#050505",
      border: "1px solid rgba(33,198,207,0.18)",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
      maxWidth: "760px",
      margin: "0 auto",
    }}>
      {/* ── HEADER ── */}
      <div style={{
        padding: "36px 40px 28px",
        borderBottom: "1px solid rgba(33,198,207,0.1)",
        background: "linear-gradient(135deg, rgba(33,198,207,0.07) 0%, transparent 60%)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Glow orb */}
        <div style={{
          position: "absolute", top: "-40px", right: "-40px",
          width: "200px", height: "200px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(33,198,207,0.14) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ display: "inline-flex", alignItems: "center", gap: "7px", marginBottom: "12px" }}>
          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#21C6CF", boxShadow: "0 0 8px #21C6CF" }} />
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#21C6CF", margin: 0 }}>
            Course Enrollment
          </p>
        </div>
        <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.75rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 6px" }}>
          Enroll in a <span style={{ color: "#28E7C5" }}>Course</span>
        </h2>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.5, margin: 0 }}>
          Fill in your details, select a course, pay via UPI, and upload the payment screenshot to confirm your seat.
        </p>
      </div>

      {/* ── BODY ── */}
      <div style={{ padding: "32px 40px 40px" }}>

        {/* Personal Info */}
        <SectionDivider label="Your Details" />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
          <div>
            <Label>Full Name *</Label>
            <Input id="ef-name" placeholder="e.g. Priya Sharma" value={form.name} onChange={set("name")} hasError={errors.name} autocomplete="name" />
            <ErrorMsg show={errors.name}>Please enter your full name</ErrorMsg>
          </div>
          <div>
            <Label>Email Address *</Label>
            <Input id="ef-email" type="email" placeholder="you@example.com" value={form.email} onChange={set("email")} hasError={errors.email} autocomplete="email" />
            <ErrorMsg show={errors.email}>Please enter a valid email</ErrorMsg>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "4px" }}>
          <div>
            <Label>Phone Number *</Label>
            <Input id="ef-phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={set("phone")} hasError={errors.phone} autocomplete="tel" />
            <ErrorMsg show={errors.phone}>Please enter a valid phone number</ErrorMsg>
          </div>
          <div>
            <Label>City</Label>
            <Input id="ef-city" placeholder="e.g. Pune" value={form.city} onChange={set("city")} />
          </div>
        </div>

        {/* Course Selection */}
        <SectionDivider label="Select a Course" />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "4px" }}>
          {COURSES.map((c) => (
            <CourseCard
              key={c.id}
              course={c}
              selected={selectedCourse === c.id}
              onSelect={(id) => { setSelectedCourse(id); setErrors((e) => ({ ...e, course: false })); }}
            />
          ))}
        </div>
        <ErrorMsg show={errors.course}>Please select a course to continue</ErrorMsg>

        {/* Terms */}
        <div style={{
          marginTop: "22px",
          border: `1px solid ${errors.terms ? "rgba(255,90,90,0.3)" : "rgba(33,198,207,0.1)"}`,
          borderRadius: "10px",
          padding: "14px 16px",
          background: "rgba(255,255,255,0.015)",
          display: "flex",
          gap: "12px",
          alignItems: "flex-start",
          marginBottom: "24px",
          transition: "border-color 0.25s",
        }}>
          <input
            type="checkbox"
            id="ef-terms"
            checked={agreed}
            onChange={(e) => { setAgreed(e.target.checked); setErrors((err) => ({ ...err, terms: false })); }}
            style={{
              width: "17px", height: "17px",
              flexShrink: 0,
              accentColor: "#21C6CF",
              marginTop: "1px",
              cursor: "pointer",
            }}
          />
          <label htmlFor="ef-terms" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.73rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.65, cursor: "pointer" }}>
            By submitting this form, I confirm that all details are accurate and I agree to Datagenix's{" "}
            <a href="#" style={{ color: "#21C6CF", textDecoration: "none", fontWeight: 600 }}>Terms & Conditions</a>{" "}
            and{" "}
            <a href="#" style={{ color: "#21C6CF", textDecoration: "none", fontWeight: 600 }}>Privacy Policy</a>.
            Enrollment is subject to seat availability and payment verification.
            For queries: <a href="mailto:info@datagenix.in" style={{ color: "#21C6CF", fontWeight: 600 }}>info@datagenix.in</a> · <a href="tel:+917385256569" style={{ color: "#21C6CF", fontWeight: 600 }}>73852 56569</a>
          </label>
        </div>
        <ErrorMsg show={errors.terms}>Please accept the terms and conditions to proceed</ErrorMsg>

        {/* Submit */}
        <SubmitButton onClick={handleSubmit} />
      </div>
    </div>
  );
}

// ── SUBMIT BUTTON ─────────────────────────────────────────────────────────────
function SubmitButton({ onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: "100%",
        padding: "14px",
        borderRadius: "10px",
        border: "none",
        fontFamily: "Inter, sans-serif",
        fontSize: "0.82rem",
        fontWeight: 800,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "#050505",
        background: hov ? "#fff" : "#28E7C5",
        cursor: "pointer",
        boxShadow: hov ? "0 0 48px rgba(33,198,207,0.6)" : "0 0 24px rgba(33,198,207,0.32)",
        transform: hov ? "translateY(-1px)" : "translateY(0)",
        transition: "all 0.3s ease",
        marginTop: "4px",
      }}
    >
      Submit Enrollment →
    </button>
  );
}