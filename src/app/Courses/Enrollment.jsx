"use client";

import { useState, useRef, useCallback } from "react";

// ── QR CODE (pure SVG, no lib needed) ────────────────────────────────────────
// Replace the DATA_URL below with your actual UPI / payment QR PNG if you have one.
// This renders a placeholder SVG that looks like a real QR code visually.
function QRCodePlaceholder({ upiId }) {
  // A real app would generate this from a library like `qrcode.react`
  // Install: npm install qrcode.react
  // Then replace this entire component with:
  //   import QRCode from "qrcode.react";
  //   <QRCode value={`upi://pay?pa=${upiId}&pn=Datagenix`} size={148} bgColor="transparent" fgColor="#21C6CF" />
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-[148px] h-[148px] rounded-xl border border-[rgba(33,198,207,0.25)] bg-[rgba(33,198,207,0.04)] flex items-center justify-center overflow-hidden">
        {/* Decorative corner marks */}
        {["top-2 left-2", "top-2 right-2", "bottom-2 left-2", "bottom-2 right-2"].map((pos, i) => (
          <div key={i} className={`absolute ${pos} w-7 h-7`}>
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              {i === 0 && <><path d="M2 14V2h12" stroke="#21C6CF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="5" y="5" width="6" height="6" rx="1" fill="#21C6CF" opacity="0.6"/></>}
              {i === 1 && <><path d="M26 14V2H14" stroke="#21C6CF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="17" y="5" width="6" height="6" rx="1" fill="#21C6CF" opacity="0.6"/></>}
              {i === 2 && <><path d="M2 14v12h12" stroke="#21C6CF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="5" y="17" width="6" height="6" rx="1" fill="#21C6CF" opacity="0.6"/></>}
              {i === 3 && <><path d="M26 14v12H14" stroke="#21C6CF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="17" y="17" width="6" height="6" rx="1" fill="#21C6CF" opacity="0.6"/></>}
            </svg>
          </div>
        ))}
        {/* Centre grid dots (decorative QR look) */}
        <svg viewBox="0 0 80 80" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 6 }, (_, row) =>
            Array.from({ length: 6 }, (_, col) => {
              const skip = (row < 2 && col < 2) || (row < 2 && col > 3) || (row > 3 && col < 2);
              if (skip) return null;
              const on = Math.random() > 0.38;
              return on ? (
                <rect
                  key={`${row}-${col}`}
                  x={col * 13 + 1}
                  y={row * 13 + 1}
                  width="10"
                  height="10"
                  rx="2"
                  fill="#21C6CF"
                  opacity={0.5 + Math.random() * 0.5}
                />
              ) : null;
            })
          )}
        </svg>
        {/* UPI logo centre */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-8 h-8 rounded-full bg-[#050505] border border-[rgba(33,198,207,0.3)] flex items-center justify-center">
            <span style={{ fontSize: "9px", fontWeight: 800, color: "#21C6CF", letterSpacing: "-0.02em", fontFamily: "Inter, sans-serif" }}>UPI</span>
          </div>
        </div>
      </div>
      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.62rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em", textAlign: "center" }}>
        Scan to pay · <span style={{ color: "#21C6CF" }}>{upiId}</span>
      </p>
    </div>
  );
}

// ── COURSE DATA WITH PRICES ───────────────────────────────────────────────────
const COURSES = [
  { id: 1, name: "AI for Everyone",               tag: "Beginner · 4–6 Weeks",      price: 2999,  originalPrice: 4999 },
  { id: 2, name: "Data Analyst Program",           tag: "Job-Focused · 3 Months",    price: 12999, originalPrice: 18999 },
  { id: 3, name: "Data Science & ML",              tag: "Advanced · 4–5 Months",     price: 15999, originalPrice: 22999 },
  { id: 4, name: "Power BI & BI",                  tag: "Business · 6–8 Weeks",      price: 5999,  originalPrice: 8999 },
  { id: 5, name: "Python Programming",             tag: "Beginner–Inter · 6–8 Weeks",price: 3999,  originalPrice: 5999 },
  { id: 6, name: "SQL for Data Analysis",          tag: "Foundation · 4–6 Weeks",    price: 2999,  originalPrice: 4499 },
  { id: 7, name: "Prompt Engineering",             tag: "AI Skills · 3–4 Weeks",     price: 1999,  originalPrice: 3499 },
  { id: 8, name: "Probability & Statistics for AI",tag: "Foundation · 4–6 Weeks",   price: 2999,  originalPrice: 4499 },
];

const UPI_ID = "datagenix@upi"; // ← Replace with your actual UPI ID

// ── HELPERS ───────────────────────────────────────────────────────────────────
function formatINR(n) {
  return "₹" + n.toLocaleString("en-IN");
}

function discount(orig, curr) {
  return Math.round(((orig - curr) / orig) * 100);
}

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
  const disc = discount(course.originalPrice, course.price);

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
      {/* Discount badge */}
      <div style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        background: "rgba(40,231,197,0.12)",
        border: "1px solid rgba(40,231,197,0.25)",
        borderRadius: "999px",
        padding: "2px 8px",
        fontFamily: "Inter, sans-serif",
        fontSize: "0.58rem",
        fontWeight: 700,
        color: "#28E7C5",
        letterSpacing: "0.06em",
      }}>
        {disc}% OFF
      </div>

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

      {/* Price row */}
      <div style={{
        display: "flex",
        alignItems: "baseline",
        gap: "8px",
        paddingLeft: "27px",
        borderTop: "1px solid rgba(33,198,207,0.08)",
        paddingTop: "8px",
        marginTop: "2px",
      }}>
        <span style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "1rem",
          fontWeight: 800,
          color: selected ? "#28E7C5" : "rgba(255,255,255,0.85)",
          transition: "color 0.2s",
        }}>
          {formatINR(course.price)}
        </span>
        <span style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.72rem",
          color: "rgba(255,255,255,0.22)",
          textDecoration: "line-through",
        }}>
          {formatINR(course.originalPrice)}
        </span>
      </div>
    </div>
  );
}

// ── UPLOAD ZONE ───────────────────────────────────────────────────────────────
function UploadZone({ file, onFile, onRemove, hasError }) {
  const inputRef = useRef(null);
  const [drag, setDrag] = useState(false);
  const [hov, setHov] = useState(false);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setDrag(false);
    const f = e.dataTransfer.files[0];
    if (f) {
      if (f.size > 5 * 1024 * 1024) { alert("Max file size is 5 MB."); return; }
      onFile(f);
    }
  }, [onFile]);

  return (
    <>
      <div
        onClick={() => inputRef.current?.click()}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
        onDragLeave={() => setDrag(false)}
        onDrop={handleDrop}
        style={{
          border: `1.5px dashed ${hasError ? "rgba(255,90,90,0.4)" : file ? "rgba(40,231,197,0.45)" : drag || hov ? "rgba(33,198,207,0.45)" : "rgba(33,198,207,0.18)"}`,
          borderStyle: file ? "solid" : "dashed",
          borderRadius: "12px",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
          background: file ? "rgba(40,231,197,0.04)" : drag || hov ? "rgba(33,198,207,0.04)" : "rgba(255,255,255,0.01)",
          transition: "all 0.25s ease",
        }}
      >
        {/* Icon */}
        <div style={{
          width: "44px", height: "44px",
          borderRadius: "11px",
          background: file ? "rgba(40,231,197,0.1)" : "rgba(33,198,207,0.07)",
          border: `1px solid ${file ? "rgba(40,231,197,0.25)" : "rgba(33,198,207,0.14)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 10px",
          fontSize: "1.2rem",
        }}>
          {file ? "✅" : "🧾"}
        </div>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.82rem", fontWeight: 700, color: file ? "#28E7C5" : "rgba(255,255,255,0.65)", margin: "0 0 4px" }}>
          {file ? file.name : "Attach payment screenshot"}
        </p>
        {!file && (
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.25)", lineHeight: 1.5, margin: 0 }}>
            Drag & drop or click to browse · PNG, JPG, PDF · Max 5 MB
          </p>
        )}
      </div>

      {file && (
        <button
          type="button"
          onClick={onRemove}
          style={{
            marginTop: "8px",
            fontFamily: "Inter, sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.06em",
            color: "rgba(255,100,100,0.6)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "2px 0",
          }}
        >
          ✕ Remove file
        </button>
      )}
      <input ref={inputRef} type="file" accept="image/*,.pdf" style={{ display: "none" }} onChange={(e) => { if (e.target.files[0]) onFile(e.target.files[0]); }} />
    </>
  );
}

// ── PAYMENT PANEL ─────────────────────────────────────────────────────────────
function PaymentPanel({ selectedCourse }) {
  const course = COURSES.find((c) => c.id === selectedCourse);

  return (
    <div style={{
      background: "rgba(33,198,207,0.04)",
      border: "1px solid rgba(33,198,207,0.14)",
      borderRadius: "16px",
      padding: "24px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "16px",
      marginBottom: "20px",
    }}>
      {/* Header */}
      <div style={{ width: "100%", textAlign: "center" }}>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#21C6CF", marginBottom: "4px", margin: "0 0 4px" }}>
          Step 1 — Pay via UPI
        </p>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", margin: 0 }}>
          Scan the QR with any UPI app, then upload the screenshot below
        </p>
      </div>

      {/* QR */}
      <QRCodePlaceholder upiId={UPI_ID} />

      {/* UPI Apps row */}
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", justifyContent: "center" }}>
        {["GPay", "PhonePe", "Paytm", "BHIM", "Amazon Pay"].map((app) => (
          <span key={app} style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.6rem",
            fontWeight: 600,
            letterSpacing: "0.06em",
            padding: "3px 9px",
            borderRadius: "999px",
            border: "1px solid rgba(33,198,207,0.14)",
            color: "rgba(255,255,255,0.3)",
            background: "rgba(255,255,255,0.02)",
          }}>
            {app}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(33,198,207,0.15), transparent)" }} />

      {/* Amount due */}
      {course ? (
        <div style={{ width: "100%", background: "rgba(40,231,197,0.06)", border: "1px solid rgba(40,231,197,0.2)", borderRadius: "10px", padding: "14px 16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
            <div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 2px" }}>Course Selected</p>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.82rem", fontWeight: 700, color: "#fff", margin: 0 }}>{course.name}</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 2px" }}>Amount Due</p>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1.1rem", fontWeight: 800, color: "#28E7C5", letterSpacing: "-0.02em", margin: 0 }}>{formatINR(course.price)}</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "rgba(255,255,255,0.22)", textDecoration: "line-through" }}>{formatINR(course.originalPrice)}</span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.62rem", fontWeight: 700, color: "#28E7C5", background: "rgba(40,231,197,0.1)", border: "1px solid rgba(40,231,197,0.2)", borderRadius: "999px", padding: "1px 7px" }}>
              {discount(course.originalPrice, course.price)}% saved
            </span>
          </div>
        </div>
      ) : (
        <div style={{ width: "100%", background: "rgba(255,255,255,0.02)", border: "1px dashed rgba(33,198,207,0.12)", borderRadius: "10px", padding: "14px 16px", textAlign: "center" }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.25)", margin: 0 }}>
            ← Select a course to see the amount
          </p>
        </div>
      )}

      <p style={{
        fontFamily: "Inter, sans-serif",
        fontSize: "0.62rem",
        color: "rgba(255,255,255,0.2)",
        textAlign: "center",
        lineHeight: 1.6,
        margin: 0,
      }}>
        Step 2 — Upload your payment confirmation screenshot below ↓
      </p>
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
  const [file, setFile] = useState(null);
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
    if (!file) errs.file = true;
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

        {/* Payment QR + Amount */}
        <SectionDivider label="Payment" />
        <PaymentPanel selectedCourse={selectedCourse} />

        {/* Upload */}
        <div style={{ marginBottom: "4px" }}>
          <Label>Payment Screenshot *</Label>
          <UploadZone
            file={file}
            onFile={(f) => { setFile(f); setErrors((e) => ({ ...e, file: false })); }}
            onRemove={() => setFile(null)}
            hasError={errors.file}
          />
          <ErrorMsg show={errors.file}>Please attach your payment receipt</ErrorMsg>
        </div>

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