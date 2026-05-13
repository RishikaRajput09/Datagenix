"use client";
import { useState, useRef, useCallback } from "react";
import emailjs from "@emailjs/browser";

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

// ── GLOBAL PLACEHOLDER STYLE ──────────────────────────────────────────────────
const placeholderStyle = `
  input::placeholder { color: rgba(255,255,255,0.28) !important; }
`;

// ── FIELD COMPONENTS ──────────────────────────────────────────────────────────
function Label({ children }) {
  return (
    <p
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: "0.62rem",
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "#fff",
        marginBottom: "6px",
      }}
    >
      {children}
    </p>
  );
}

function Input({
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  hasError,
  autocomplete,
}) {
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
        background: focused
          ? "rgba(33,198,207,0.05)"
          : "rgba(255,255,255,0.03)",
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
    <p
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: "0.65rem",
        color: "rgba(255,90,90,0.85)",
        marginTop: "4px",
      }}
    >
      {children}
    </p>
  );
}

function SectionDivider({ label }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        margin: "24px 0 14px",
      }}
    >
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.62rem",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#fff",
          flexShrink: 0,
          margin: 0,
        }}
      >
        {label}
      </p>
      <div
        style={{
          flex: 1,
          height: "1px",
          background:
            "linear-gradient(90deg, rgba(33,198,207,0.15), transparent)",
        }}
      />
    </div>
  );
}

// ── SUCCESS STATE ─────────────────────────────────────────────────────────────
function SuccessState({ courseName }) {
  return (
    <div style={{ textAlign: "center", padding: "56px 40px" }}>
      {/* Green SVG checkmark */}
      <div
        style={{
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          background: "rgba(40,231,197,0.1)",
          border: "1px solid rgba(40,231,197,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 24px",
          boxShadow: "0 0 40px rgba(40,231,197,0.15)",
        }}
      >
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 17.5L13.5 24.5L27 10"
            stroke="#28E7C5"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h2
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "1.5rem",
          fontWeight: 800,
          color: "#fff",
          letterSpacing: "-0.03em",
          margin: "0 0 10px",
        }}
      >
        Enrollment Application Submitted!
      </h2>
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.85rem",
          color: "#fff",
          lineHeight: 1.7,
          margin: "0 0 8px",
        }}
      >
        We've received your enrollment for{" "}
        <strong style={{ color: "#28E7C5" }}>{courseName}</strong>.<br />
        Our team will verify your payment and confirm your seat within{" "}
        <strong style={{ color: "#28E7C5" }}>24 hours</strong>.
      </p>
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.68rem",
          color: "#fff",
          letterSpacing: "0.06em",
          marginTop: "20px",
        }}
      >
        info@datagenix.in · 73852 56569
      </p>
    </div>
  );
}

// ── MAIN ENROLLMENT FORM ──────────────────────────────────────────────────────
export default function EnrollmentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    userType: "",
    qualification: "",
    goals: [],
    interestedCourses: [],
    experience: "",
    preferredContact: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((err) => ({ ...err, [key]: false }));
  };

  const toggleMulti = (field, value) => {
    setForm((prev) => {
      const exists = prev[field].includes(value);
      return {
        ...prev,
        [field]: exists
          ? prev[field].filter((v) => v !== value)
          : [...prev[field], value],
      };
    });
  };

  const handleSubmit = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = true;
    if (form.phone.replace(/[\s\-\+\(\)]/g, "").length < 7) errs.phone = true;
    if (!agreed) errs.terms = true;

    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    emailjs
      .send(
        "service_axxh0ra",
        "template_82cerum",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          city: form.city,
          userType: form.userType,
          qualification: form.qualification,
          goals: form.goals.join(", "),
          interestedCourses: form.interestedCourses.join(", "),
          experience: form.experience,
          preferredContact: form.preferredContact,
        },
        "_zjpymKLLxbKMaBVW",
      )
      .then(() => {
        setSubmitted(true);
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong");
      });
  };

  const selectedCourseName =
    form.interestedCourses.length > 0
      ? form.interestedCourses.join(", ")
      : "Selected Course";

  if (submitted) {
    return (
      <div
        style={{
          background: "#050505",
          border: "1px solid rgba(33,198,207,0.18)",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        <SuccessState courseName={selectedCourseName} />
      </div>
    );
  }

  return (
    <>
      <style>{placeholderStyle}</style>
      <div
        style={{
          background: "rgba(13,20,30,0.72)",
          border: "1px solid rgba(33,198,207,0.18)",
          borderRadius: "20px",
          overflow: "hidden",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow:
            "0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(33,198,207,0.06)",
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        {/* ── HEADER ── */}
        <div
          style={{
            padding: "36px 40px 28px",
            borderBottom: "1px solid rgba(33,198,207,0.1)",
            background:
              "linear-gradient(135deg, rgba(33,198,207,0.07) 0%, transparent 60%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow orb */}
          <div
            style={{
              position: "absolute",
              top: "-40px",
              right: "-40px",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(33,198,207,0.14) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "#21C6CF",
                boxShadow: "0 0 8px #21C6CF",
              }}
            />
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#21C6CF",
                margin: 0,
              }}
            >
              Course Enrollment
            </p>
          </div>
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.75rem",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              margin: "0 0 6px",
            }}
          >
            Enroll in a <span style={{ color: "#28E7C5" }}>Course</span>
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.8rem",
              color: "#fff",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Fill in your details, select a course and confirm your seat.
          </p>
        </div>

        {/* ── BODY ── */}
        <div style={{ padding: "32px 40px 40px" }}>
          {/* USER TYPE */}
          <div style={{ marginBottom: "20px" }}>
            <Label>You are a *</Label>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {["Student", "Working Professional", "Business Owner"].map(
                (item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, userType: item }))}
                    style={{
                      padding: "10px 14px",
                      borderRadius: "10px",
                      border:
                        form.userType === item
                          ? "1px solid #21C6CF"
                          : "1px solid rgba(33,198,207,0.14)",
                      background:
                        form.userType === item
                          ? "rgba(33,198,207,0.12)"
                          : "rgba(255,255,255,0.03)",
                      color: "#fff",
                      cursor: "pointer",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.8rem",
                    }}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* QUALIFICATION */}
          <div style={{ marginBottom: "20px" }}>
            <Label>Highest Qualification *</Label>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {[
                "10th, 12th",
                "Graduation Student",
                "Graduate",
                "PG, Doctorate",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    setForm((f) => ({ ...f, qualification: item }))
                  }
                  style={{
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border:
                      form.qualification === item
                        ? "1px solid #21C6CF"
                        : "1px solid rgba(33,198,207,0.14)",
                    background:
                      form.qualification === item
                        ? "rgba(33,198,207,0.12)"
                        : "rgba(255,255,255,0.03)",
                    color: "#fff",
                    cursor: "pointer",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.8rem",
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <div>
              <Label>Full Name *</Label>
              <Input
                id="ef-name"
                placeholder="e.g. Priya Sharma"
                value={form.name}
                onChange={set("name")}
                hasError={errors.name}
                autocomplete="name"
              />
              <ErrorMsg show={errors.name}>
                Please enter your full name
              </ErrorMsg>
            </div>
            <div>
              <Label>Email Address *</Label>
              <Input
                id="ef-email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={set("email")}
                hasError={errors.email}
                autocomplete="email"
              />
              <ErrorMsg show={errors.email}>
                Please enter a valid email
              </ErrorMsg>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginBottom: "4px",
            }}
          >
            <div>
              <Label>Phone Number *</Label>
              <Input
                id="ef-phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={set("phone")}
                hasError={errors.phone}
                autocomplete="tel"
              />
              <ErrorMsg show={errors.phone}>
                Please enter a valid phone number
              </ErrorMsg>
            </div>
            <div>
              <Label>City</Label>
              <Input
                id="ef-city"
                placeholder="e.g. Pune"
                value={form.city}
                onChange={set("city")}
              />
            </div>
          </div>

          {/* GOAL */}
          <div style={{ marginTop: "20px" }}>
            <Label>Your Goal *</Label>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {[
                "Get Job in AI",
                "Switch Career",
                "Want Work from home job",
                "Learn for Knowledge",
                "Build Projects",
              ].map((goal) => {
                const selected = form.goals.includes(goal);
                return (
                  <button
                    key={goal}
                    type="button"
                    onClick={() => toggleMulti("goals", goal)}
                    style={{
                      padding: "10px 14px",
                      borderRadius: "10px",
                      border: selected
                        ? "1px solid #21C6CF"
                        : "1px solid rgba(33,198,207,0.14)",
                      background: selected
                        ? "rgba(33,198,207,0.12)"
                        : "rgba(255,255,255,0.03)",
                      color: "#fff",
                      cursor: "pointer",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.8rem",
                    }}
                  >
                    {goal}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Course Selection */}
          <SectionDivider label="Interested In" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            {COURSES.map((course) => {
              const selected = form.interestedCourses.includes(course.name);
              return (
                <div
                  key={course.id}
                  onClick={() =>
                    toggleMulti("interestedCourses", course.name)
                  }
                  style={{
                    padding: "14px",
                    borderRadius: "12px",
                    border: selected
                      ? "1px solid #21C6CF"
                      : "1px solid rgba(33,198,207,0.12)",
                    background: selected
                      ? "rgba(33,198,207,0.08)"
                      : "rgba(255,255,255,0.02)",
                    cursor: "pointer",
                  }}
                >
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      margin: 0,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {course.name}
                  </p>
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "0.62rem",
                      marginTop: "4px",
                      fontFamily: "Inter, sans-serif",
                      opacity: 0.65,
                    }}
                  >
                    {course.tag}
                  </p>
                </div>
              );
            })}
          </div>
          <ErrorMsg show={errors.course}>
            Please select a course to continue
          </ErrorMsg>

          {/* EXPERIENCE */}
          <div style={{ marginBottom: "20px" }}>
            <Label>Work Experience *</Label>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {[
                "Learning",
                "Fresher",
                "5 to 15 Year",
                "More than 15 years",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, experience: item }))}
                  style={{
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border:
                      form.experience === item
                        ? "1px solid #21C6CF"
                        : "1px solid rgba(33,198,207,0.14)",
                    background:
                      form.experience === item
                        ? "rgba(33,198,207,0.12)"
                        : "rgba(255,255,255,0.03)",
                    color: "#fff",
                    cursor: "pointer",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.8rem",
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* PREFERRED CONTACT */}
          <div style={{ marginBottom: "20px" }}>
            <Label>Preferred Contact *</Label>
            <div style={{ display: "flex", gap: "8px" }}>
              {["Phone", "WhatsApp"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    setForm((f) => ({ ...f, preferredContact: item }))
                  }
                  style={{
                    flex: 1,
                    padding: "12px",
                    borderRadius: "10px",
                    border:
                      form.preferredContact === item
                        ? "1px solid #21C6CF"
                        : "1px solid rgba(33,198,207,0.14)",
                    background:
                      form.preferredContact === item
                        ? "rgba(33,198,207,0.12)"
                        : "rgba(255,255,255,0.03)",
                    color: "#fff",
                    cursor: "pointer",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.8rem",
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Terms */}
          <div
            style={{
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
            }}
          >
            <input
              type="checkbox"
              id="ef-terms"
              checked={agreed}
              onChange={(e) => {
                setAgreed(e.target.checked);
                setErrors((err) => ({ ...err, terms: false }));
              }}
              style={{
                width: "17px",
                height: "17px",
                flexShrink: 0,
                accentColor: "#21C6CF",
                marginTop: "1px",
                cursor: "pointer",
              }}
            />
            <label
              htmlFor="ef-terms"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.73rem",
                color: "#fff",
                lineHeight: 1.65,
                cursor: "pointer",
              }}
            >
              By submitting this form, I confirm that all details are accurate
              and I agree to Datagenix's{" "}
              <a
                href="#"
                style={{
                  color: "#21C6CF",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a
                href="#"
                style={{
                  color: "#21C6CF",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Privacy Policy
              </a>
              . Enrollment is subject to seat availability and payment
              verification. For queries:{" "}
              <a
                href="mailto:info@datagenix.in"
                style={{ color: "#21C6CF", fontWeight: 600 }}
              >
                info@datagenix.in
              </a>{" "}
              ·{" "}
              <a
                href="tel:+917385256569"
                style={{ color: "#21C6CF", fontWeight: 600 }}
              >
                73852 56569
              </a>
            </label>
          </div>
          <ErrorMsg show={errors.terms}>
            Please accept the terms and conditions to proceed
          </ErrorMsg>

          {/* Submit */}
          <SubmitButton onClick={handleSubmit} />
        </div>
      </div>
    </>
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
        boxShadow: hov
          ? "0 0 48px rgba(33,198,207,0.6)"
          : "0 0 24px rgba(33,198,207,0.32)",
        transform: hov ? "translateY(-1px)" : "translateY(0)",
        transition: "all 0.3s ease",
        marginTop: "4px",
      }}
    >
      Submit Enrollment →
    </button>
  );
}