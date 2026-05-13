"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import EnrollmentForm from "./Enrollment";

// ── COURSE DATA ──────────────────────────────────────────────────────────────
const COURSES = [
  {
    id: 1,
    eyebrow: "Most Popular · No Coding Needed",
    title: "AI for Everyone",
    tagline:
      "Understand AI. Use AI. Grow with AI — no technical background required.",
    description:
      "This program is designed for anyone who wants to learn Artificial Intelligence, use AI tools effectively, boost productivity, and grow in their career or business. No coding required — just curiosity and willingness to learn.",

    features: [
      { icon: "◈", label: "Introduction to Artificial Intelligence", desc: "" },
      { icon: "⬡", label: "Generative AI Fundamentals", desc: "" },
      { icon: "◉", label: "Prompt Engineering (Core Skill)", desc: "" },
      { icon: "◆", label: "AI Tools & Applications", desc: "" },
      { icon: "▣", label: "Introduction to AI Agents & Agentic AI", desc: "" },
      { icon: "◈", label: "Introduction AI Automation for Business", desc: "" },
      { icon: "⬡", label: "Domain-wise Applications of AI", desc: "" },
      { icon: "◉", label: "Ethical & Responsible AI Usage", desc: "" },
    ],

    whoCanJoin: [
      "Students",
      "Working professionals",
      "Business owners & entrepreneurs",
      "Freelancers",
      "Anyone curious about AI",
    ],

    outcomes: [
      "Confidently use AI tools in daily life",
      "Save time & increase productivity",
      "Apply AI in your domain or business",
      "Understand AI agents & automation opportunities",
      "Stay ahead in the AI-driven world",
    ],

    curriculum: [
      {
        module: "Module 1",
        title: "Introduction to Artificial Intelligence",
        topics: ["Introduction to Artificial Intelligence"],
      },
      {
        module: "Module 2",
        title: "Generative AI",
        topics: ["Generative AI Fundamentals"],
      },
      {
        module: "Module 3",
        title: "Prompt Engineering",
        topics: ["Prompt Engineering (Core Skill)"],
      },
      {
        module: "Module 4",
        title: "AI Applications",
        topics: [
          "AI Tools & Applications",
          "Domain-wise Applications of AI",
          "AI Automation for Business",
        ],
      },
      {
        module: "Module 5",
        title: "AI Systems",
        topics: [
          "Introduction to AI Agents & Agentic AI",
          "Ethical & Responsible AI Usage",
        ],
      },
    ],

    cta: "Explore Course",
    tag: "Beginner Friendly",
    duration: "4–6 Weeks",
    mode: "Online / Offline",

    images: [
      "/Images/HeroSec/Training/1.jpg",
      "/Images/HeroSec/Training/2.jpg",
    ],

    imageLeft: true,
  },

  {
    id: 2,
    eyebrow: "Most Popular · Job-Focused",
    title: "Data Analysis with Generative AI",
    tagline: "Your gateway to a high-demand data career — even from zero",

    description:
      "Master Excel, SQL, Python, Data Visualization, Statistics & Probability, Power BI, and Generative AI tools with real-world projects and case studies.",

    features: [
      { icon: "◈", label: "Excel (Basic to Advanced)", desc: "" },
      { icon: "⬡", label: "SQL (Basic to Advanced)", desc: "" },
      { icon: "◉", label: "Python for Data Analysis", desc: "" },
      {
        icon: "◆",
        label: "Data Visualization (Matplotlib, Seaborn)",
        desc: "",
      },
      { icon: "▣", label: "Statistics & Probability", desc: "" },
      { icon: "◈", label: "Power BI", desc: "" },
      { icon: "⬡", label: "Generative AI", desc: "" },
      { icon: "◉", label: "Projects & Case Studies", desc: "" },
    ],

    whoCanJoin: [
      "10th–12th students",
      "Graduates & job seekers",
      "Career transitioners",
      "Work-from-home aspirants (especially women restarting careers)",
    ],

    outcomes: [
      "Job-ready Data Analyst skills",
      "Portfolio with real-world projects",
      "Strong foundation to enter data domain",
    ],

    curriculum: [
      {
        module: "Module 1",
        title: "Excel",
        topics: ["Excel (Basic to Advanced)"],
      },
      {
        module: "Module 2",
        title: "SQL",
        topics: ["SQL (Basic to Advanced)"],
      },
      {
        module: "Module 3",
        title: "Python",
        topics: ["Python for Data Analysis"],
      },
      {
        module: "Module 4",
        title: "Visualization & Stats",
        topics: ["Data Visualization", "Statistics & Probability"],
      },
      {
        module: "Module 5",
        title: "Power BI & AI",
        topics: ["Power BI", "Generative AI"],
      },
    ],

    cta: "Enroll Now",
    tag: "Placement Ready",
    duration: "",
    mode: "",

    images: [
      "/Images/HeroSec/Business/4.jpg",
      "/Images/HeroSec/Business/2.jpg",
      "/Images/HeroSec/Business/3.jpg",
    ],

    imageLeft: false,
  },

  {
    id: 3,
    eyebrow: "Advanced · Industry-Grade",
    title: "Data Science with Generative AI",
    tagline: "Go beyond analysis — build intelligent AI systems",

    description:
      "Learn Machine Learning, Advanced ML Algorithms, Computer Vision, Natural Language Processing (NLP), and Generative AI with real-world projects.",

    features: [
      { icon: "◈", label: "Complete Data Analysis Stack", desc: "" },
      { icon: "⬡", label: "Mathematics for Machine Learning", desc: "" },
      { icon: "◉", label: "Machine Learning Fundamentals", desc: "" },
      { icon: "◆", label: "Advanced ML Algorithms", desc: "" },
      { icon: "▣", label: "Computer Vision", desc: "" },
      { icon: "◈", label: "Natural Language Processing (NLP)", desc: "" },
      { icon: "⬡", label: "Generative AI in Data Science", desc: "" },
      { icon: "◉", label: "Projects & Capstone", desc: "" },
    ],

    whoCanJoin: [
      "Aspiring Data Scientists",
      "AI Engineers",
      "Advanced learners aiming for high-paying roles",
    ],

    outcomes: [
      "Industry-ready Data Scientist skillset",
      "Strong ML + AI project portfolio",
    ],

    curriculum: [
      {
        module: "Module 1",
        title: "Foundations",
        topics: [
          "Mathematics for Machine Learning",
          "Machine Learning Fundamentals",
        ],
      },
      {
        module: "Module 2",
        title: "Advanced ML",
        topics: ["Advanced ML Algorithms"],
      },
      {
        module: "Module 3",
        title: "AI Domains",
        topics: ["Computer Vision", "Natural Language Processing (NLP)"],
      },
      {
        module: "Module 4",
        title: "Generative AI",
        topics: ["Generative AI in Data Science"],
      },
    ],

    cta: "Explore Course",
    tag: "Advanced",
    duration: "",
    mode: "",

    images: [
      "/Images/HeroSec/Product/1.jpg",
      "/Images/HeroSec/Product/2.jpg",
      "/Images/HeroSec/Health/1.jpg",
      "/Images/HeroSec/Health/2.jpg",
    ],

    imageLeft: true,
  },

  {
    id: 4,
    eyebrow: "Programming",
    title: "Python Programming (Beginner to Advanced)",
    tagline: "Build a strong coding foundation for AI & Data",

    description:
      "Learn Python basics, data types, loops, programming practices, NumPy, Pandas, visualization, and mini projects.",

    features: [
      { icon: "◈", label: "Python basics & syntax", desc: "" },
      { icon: "⬡", label: "Data types", desc: "" },
      { icon: "◉", label: "Lists, Tuples, Dictionaries", desc: "" },
      { icon: "◆", label: "Control statements & loops", desc: "" },
      { icon: "▣", label: "NumPy & Pandas", desc: "" },
      { icon: "◈", label: "Matplotlib & Seaborn", desc: "" },
      { icon: "⬡", label: "Mini projects", desc: "" },
    ],

    whoCanJoin: ["Beginners", "students", "aspiring developers"],

    outcomes: [
      "Strong programming logic",
      "Ready for Data Science / AI learning",
    ],

    curriculum: [
      {
        module: "Module 1",
        title: "Basics",
        topics: ["Python basics & syntax", "Data types"],
      },
      {
        module: "Module 2",
        title: "Structures",
        topics: ["Lists, Tuples, Dictionaries"],
      },
      {
        module: "Module 3",
        title: "Logic",
        topics: ["Control statements & loops"],
      },
      {
        module: "Module 4",
        title: "Libraries",
        topics: ["NumPy & Pandas", "Matplotlib & Seaborn"],
      },
    ],

    cta: "Start Learning",
    tag: "Beginner",
    duration: "",
    mode: "",

    images: [
      "/Images/HeroSec/Business/1.jpg",
      "/Images/HeroSec/Business/5.jpg",
      "/Images/HeroSec/Business/6.jpg",
      "/Images/HeroSec/Product/2.jpg",
    ],

    imageLeft: false,
  },

  {
    id: 5,
    eyebrow: "Core Skills",
    title: "Excel & SQL for Data Analysis",
    tagline: "Core tools every data professional must master",

    description:
      "Learn Excel and SQL fundamentals, dashboards, queries, filtering, aggregations, and real-world use cases.",

    features: [
      { icon: "◈", label: "Excel basics to advanced", desc: "" },
      { icon: "⬡", label: "Conditional Formatting", desc: "" },
      { icon: "◉", label: "Pivot Tables", desc: "" },
      { icon: "◆", label: "SQL queries", desc: "" },
      { icon: "▣", label: "Data filtering & aggregation", desc: "" },
      { icon: "◈", label: "Advanced queries", desc: "" },
    ],

    whoCanJoin: ["Students", "analysts", "job seekers"],

    outcomes: [
      "Strong data handling skills",
      "Industry-ready analytical capabilities",
    ],

    curriculum: [
      {
        module: "Module 1",
        title: "Excel",
        topics: ["Excel basics", "Pivot Tables", "Dashboarding"],
      },
      {
        module: "Module 2",
        title: "SQL",
        topics: ["SELECT", "JOIN", "GROUP BY", "Advanced queries"],
      },
    ],

    cta: "Explore Course",
    tag: "Essential",
    duration: "",
    mode: "",

    images: [
      "/Images/HeroSec/Training/1.jpg",
      "/Images/HeroSec/Training/2.jpg",
      "/Images/HeroSec/Business/2.jpg",
      "/Images/HeroSec/Business/3.jpg",
    ],

    imageLeft: true,
  },

  {
    id: 6,
    eyebrow: "Visualization",
    title: "Power BI & Advanced Dashboarding",
    tagline: "Transform raw data into business insights",

    description:
      "Learn Power BI, data modeling, DAX functions, dashboard design, and visualization techniques.",

    features: [
      { icon: "◈", label: "Power BI basics", desc: "" },
      { icon: "⬡", label: "Data modeling", desc: "" },
      { icon: "◉", label: "DAX functions", desc: "" },
      { icon: "◆", label: "Dashboard design", desc: "" },
      { icon: "▣", label: "Visualization techniques", desc: "" },
    ],

    whoCanJoin: ["Analysts", "professionals", "students"],

    outcomes: [
      "Build professional dashboards",
      "Deliver impactful business insights",
    ],

    curriculum: [
      {
        module: "Module 1",
        title: "Power BI",
        topics: ["Introduction to Power BI"],
      },
      {
        module: "Module 2",
        title: "Modeling",
        topics: ["Data modeling", "Data transformation"],
      },
      {
        module: "Module 3",
        title: "DAX",
        topics: ["DAX functions"],
      },
      {
        module: "Module 4",
        title: "Dashboards",
        topics: ["Dashboard design", "Projects"],
      },
    ],

    cta: "Explore Course",
    tag: "Business Intelligence",
    duration: "",
    mode: "",

    images: [
      "/Images/HeroSec/Business/4.jpg",
      "/Images/HeroSec/Business/5.jpg",
      "/Images/HeroSec/Health/3.jpg",
      "/Images/HeroSec/Health/4.jpg",
    ],

    imageLeft: false,
  },

  {
    id: 7,
    eyebrow: "School Program",
    title: "AI & Robotics for Students (5th–9th)",
    tagline: "Build future-ready skills from an early age",

    description:
      "Introduce students to Artificial Intelligence, logic building, robotics, sensors, hardware, and creative AI applications.",

    features: [
      { icon: "◈", label: "Introduction to Artificial Intelligence", desc: "" },
      { icon: "⬡", label: "Logic building", desc: "" },
      { icon: "◉", label: "Block-based coding", desc: "" },
      { icon: "◆", label: "Robotics & sensors", desc: "" },
      { icon: "▣", label: "DIY projects", desc: "" },
    ],

    whoCanJoin: ["School students (5th–9th)"],

    outcomes: ["Strong logical thinking", "Early exposure to AI & robotics"],

    curriculum: [
      {
        module: "Module 1",
        title: "Basics",
        topics: ["Introduction to Artificial Intelligence"],
      },
      {
        module: "Module 2",
        title: "Logic",
        topics: ["Logic building & computational thinking"],
      },
      {
        module: "Module 3",
        title: "Robotics",
        topics: ["Robotics & sensors"],
      },
      {
        module: "Module 4",
        title: "Projects",
        topics: ["DIY projects", "Creative AI applications"],
      },
    ],

    cta: "Explore Course",
    tag: "Students",
    duration: "",
    mode: "",

    images: [
      "/Images/HeroSec/Agri/1.jpg",
      "/Images/HeroSec/Agri/2.jpg",
      "/Images/HeroSec/Agri/3.jpg",
      "/Images/HeroSec/Product/1.jpg",
    ],

    imageLeft: true,
  },

  {
    id: 8,
    eyebrow: "Career",
    title: "Employability Skill Development Programs",
    tagline: "Don’t just learn — get hired",

    description:
      "Programs focused on resume building, LinkedIn optimization, interviews, personal branding, and mentorship.",

    features: [
      { icon: "◈", label: "Resume Building", desc: "" },
      { icon: "⬡", label: "LinkedIn Profile Optimization", desc: "" },
      { icon: "◉", label: "Interview Preparation", desc: "" },
      { icon: "◆", label: "Personal Branding", desc: "" },
      { icon: "▣", label: "Mock Interviews", desc: "" },
    ],

    whoCanJoin: ["Students", "job seekers", "professionals"],

    outcomes: [
      "Higher chances of selection",
      "Strong professional presence",
      "Confidence to crack interviews",
    ],

    curriculum: [
      {
        module: "Module 1",
        title: "Profiles",
        topics: ["Resume Building", "LinkedIn Optimization"],
      },
      {
        module: "Module 2",
        title: "Interviews",
        topics: ["Interview Preparation", "Mock Interviews"],
      },
      {
        module: "Module 3",
        title: "Branding",
        topics: ["Personal Branding", "Portfolio Building"],
      },
    ],

    cta: "Explore Course",
    tag: "Placement Oriented",
    duration: "",
    mode: "",

    images: [
      "/Images/HeroSec/Training/1.jpg",
      "/Images/HeroSec/Training/2.jpg",
      "/Images/HeroSec/Business/1.jpg",
    ],

    imageLeft: false,
  },
];
// ── HOOKS ────────────────────────────────────────────────────────────────────
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

// ── IMAGE GALLERY ────────────────────────────────────────────────────────────
function ImageGallery({ images, imageLeft }) {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(null);
  const [dir, setDir] = useState(1);
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

  useInterval(next, 3800, !hovered);

  return (
    <div
      style={{ position: "relative", width: "100%" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "480px",
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(40, 231, 197,0.12)",
          background: "#0a0a0a",
          boxShadow: hovered
            ? "0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(40, 231, 197,0.15)"
            : "0 12px 48px rgba(0,0,0,0.5)",
          transition: "box-shadow 0.5s ease",
        }}
      >
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
            animation: transitioning
              ? `slideIn${dir > 0 ? "R" : "L"} 0.55s ease forwards`
              : "none",
          }}
        />
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
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(40, 231, 197,0.18) 0%, transparent 70%)",
            opacity: hovered ? 1 : 0.4,
            transition: "opacity 0.5s ease",
            pointerEvents: "none",
          }}
        />
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
            border: "1px solid rgba(40, 231, 197,0.18)",
            borderRadius: "999px",
            padding: "5px 12px",

            fontSize: "0.65rem",
            letterSpacing: "0.12em",
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
              boxShadow: "0 0 6px #28e7c5",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          {active + 1} / {images.length}
        </div>
        <ArrowBtn side="left" onClick={goBack} visible={hovered} />
        <ArrowBtn side="right" onClick={next} visible={hovered} />
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
                background: i === active ? "#28e7c5" : "rgba(255,255,255,0.3)",
                boxShadow:
                  i === active ? "0 0 8px rgba(40, 231, 197,0.8)" : "none",
                transition: "all 0.35s ease",
              }}
            />
          ))}
        </div>
      </div>
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
                  ? "1.5px solid #28e7c5"
                  : thumbHov === i
                    ? "1.5px solid rgba(40, 231, 197,0.4)"
                    : "1.5px solid rgba(40, 231, 197,0.08)",
              boxShadow:
                i === active ? "0 0 12px rgba(40, 231, 197,0.35)" : "none",
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
                  background: "rgba(40, 231, 197,0.08)",
                }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

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
        background: hov ? "rgba(40, 231, 197,0.25)" : "rgba(5,5,5,0.65)",
        backdropFilter: "blur(10px)",
        border: `1px solid ${hov ? "rgba(40, 231, 197,0.5)" : "rgba(40, 231, 197,0.2)"}`,
        color: "#28e7c5",
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

// ── FEATURE ROW ──────────────────────────────────────────────────────────────
function FeatureRow({ icon, label, desc }) {
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
        background: hov ? "rgba(40, 231, 197,0.04)" : "transparent",
        border: `1px solid ${hov ? "rgba(40, 231, 197,0.14)" : "transparent"}`,
        cursor: "default",
        transition: "all 0.25s ease",
        listStyle: "none",
      }}
    >
      <div
        style={{
          flexShrink: 0,
          width: "30px",
          height: "30px",
          borderRadius: "7px",
          background: "rgba(40, 231, 197,0.08)",
          border: `1px solid ${hov ? "rgba(40, 231, 197,0.3)" : "rgba(40, 231, 197,0.12)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#28e7c5",
          fontSize: "0.8rem",
          transition: "border-color 0.25s",
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
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

// ── EYEBROW ──────────────────────────────────────────────────────────────────
function Eyebrow({ label }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",

        fontSize: "0.72rem",
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

// ── CTA BUTTON ───────────────────────────────────────────────────────────────
function CTAButton({ label, secondary }) {
  const [hov, setHov] = useState(false);

  const handleClick = () => {
    const formSection = document.getElementById("enrollment-form");

    if (formSection) {
      formSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",

        fontSize: "0.78rem",
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: secondary
          ? hov
            ? "#28e7c5"
            : "rgba(255,255,255,0.6)"
          : "#050505",
        background: secondary ? "transparent" : hov ? "#fff" : "#28E7C5",
        padding: "11px 22px",
        borderRadius: "8px",
        cursor: "pointer",
        border: secondary
          ? `1px solid ${hov ? "rgba(40, 231, 197,0.5)" : "rgba(40, 231, 197,0.2)"}`
          : "none",
        boxShadow: secondary
          ? "none"
          : hov
            ? "0 0 36px rgba(40, 231, 197,0.55)"
            : "0 0 20px rgba(40, 231, 197,0.28)",
        transition: "all 0.3s ease",
      }}
    >
      {label}

      {!secondary && (
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
      )}
    </button>
  );
}

// ── EXPANDABLE SECTION (Level 2) ─────────────────────────────────────────────
function ExpandableContent({ course, visible }) {
  return (
    <div
      style={{
        overflow: "hidden",
        maxHeight: visible ? "600px" : "0",
        opacity: visible ? 1 : 0,
        transition: "max-height 0.6s ease, opacity 0.5s ease",
      }}
    >
      <div style={{ paddingTop: "16px" }}>
        {/* Meta pills */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "18px",
          }}
        >
          {[
            { label: "⏱ " + course.duration },
            { label: "📍 " + course.mode },
          ].map((p, i) => (
            <span
              key={i}
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.08em",
                padding: "5px 12px",
                borderRadius: "999px",
                border: "1px solid rgba(40, 231, 197,0.2)",
                color: "rgba(40, 231, 197,0.75)",
                background: "rgba(40, 231, 197,0.05)",
              }}
            >
              {p.label}
            </span>
          ))}
        </div>

        {/* Outcomes */}
        <div style={{ marginBottom: "16px" }}>
          <div
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              color: "rgba(255,255,255,1)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Learning Outcomes
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {course.outcomes.map((o, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: "#28e7c5",
                    fontSize: "0.75rem",
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <span
                  style={{
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,1)",
                    lineHeight: 1.5,
                  }}
                >
                  {o}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, rgba(40, 231, 197,0.12), transparent)",
            marginBottom: "16px",
          }}
        />

        {/* Who can join */}
        <div>
          <div
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              color: "rgba(255,255,255,1)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Curriculum
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {course.whoCanJoin.map((w, i) => (
              <span
                key={i}
                style={{
                  fontSize: "0.68rem",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  background: "rgba(40, 231, 197,0.06)",
                  border: "1px solid rgba(40, 231, 197,0.12)",
                  color: "rgba(255,255,255,1)",
                }}
              >
                {w}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── CURRICULUM ACCORDION (Level 3) ───────────────────────────────────────────
function CurriculumAccordion({ curriculum, visible }) {
  const [openModule, setOpenModule] = useState(null);

  return (
    <div
      style={{
        overflow: "hidden",
        maxHeight: visible ? "800px" : "0",
        opacity: visible ? 1 : 0,
        transition: "max-height 0.7s ease, opacity 0.5s ease",
      }}
    >
      <div style={{ paddingTop: "16px" }}>
        <div
          style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Full Curriculum
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {curriculum.map((mod, i) => {
            const isOpen = openModule === i;
            return (
              <div
                key={i}
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  border: `1px solid ${isOpen ? "rgba(40, 231, 197,0.25)" : "rgba(40, 231, 197,0.1)"}`,
                  background: isOpen
                    ? "rgba(40, 231, 197,0.04)"
                    : "transparent",
                  transition: "border-color 0.25s, background 0.25s",
                }}
              >
                <button
                  onClick={() => setOpenModule(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 14px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.6rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#28e7c5",
                        flexShrink: 0,
                      }}
                    >
                      {mod.module}
                    </span>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color: "rgba(255,255,255,0.8)",
                      }}
                    >
                      {mod.title}
                    </span>
                  </div>
                  <span
                    style={{
                      color: "#28e7c5",
                      fontSize: "0.8rem",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                      transition: "transform 0.25s ease",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? "200px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.4s ease",
                  }}
                >
                  <div
                    style={{
                      padding: "0 14px 12px",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                    }}
                  >
                    {mod.topics.map((t, j) => (
                      <span
                        key={j}
                        style={{
                          fontSize: "0.68rem",
                          padding: "3px 9px",
                          borderRadius: "5px",
                          background: "rgba(40, 231, 197,0.06)",
                          border: "1px solid rgba(40, 231, 197,0.12)",
                          color: "rgba(255,255,255,0.5)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── COURSE SECTION ────────────────────────────────────────────────────────────
function CourseSection({ course, index }) {
  const [sectionRef, inView] = useInView(0.06);
  const [expanded, setExpanded] = useState(false);
  const [showCurriculum, setShowCurriculum] = useState(false);
  const { imageLeft } = course;

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
    <div ref={sectionRef} id={`course-${course.id}`}>
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
                "linear-gradient(90deg, transparent, rgba(40, 231, 197,0.15), transparent)",
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
        <div
          style={{
            position: "absolute",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(40, 231, 197,0.04) 0%, transparent 65%)",
            top: "50%",
            [imageLeft ? "right" : "left"]: "-200px",
            transform: "translateY(-50%)",
            opacity: inView ? 1 : 0,
            transition: "opacity 1.2s ease",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "clamp(20px,4vw,40px)",
            [imageLeft ? "right" : "left"]: "clamp(20px,4vw,60px)",

            fontSize: "clamp(5rem,12vw,9rem)",
            fontWeight: 800,
            color: "rgba(40, 231, 197,0.025)",
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
            {/* IMAGE */}
            <div style={{ ...slideImg, minWidth: 0 }} className="pcol">
              <ImageGallery images={course.images} imageLeft={imageLeft} />
            </div>

            {/* CONTENT */}
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
                  color: "#28E7C5",
                  marginBottom: "14px",
                }}
              >
                <Eyebrow label={course.eyebrow} />
                <span
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    border: "1px solid rgba(40, 231, 197,0.2)",
                    color: "#28E7C5",
                    background: "rgba(40, 231, 197,0.05)",
                  }}
                >
                  {course.tag}
                </span>
              </div>

              {/* Title */}
              <h2
                style={{
                  fontSize: "clamp(2rem,4.5vw,2.8rem)",
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  margin: "0 0 8px",
                }}
              >
                {course.title}
              </h2>

              {/* Tagline */}
              <p
                style={{
                  fontSize: "clamp(0.9rem,1.5vw,1rem)",
                  fontWeight: 600,
                  color: "#28E7C5",
                  margin: "0 0 14px",
                }}
              >
                {course.tagline}
              </p>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.88rem",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,1)",
                  margin: "0 0 18px",
                  maxWidth: "460px",
                }}
              >
                {course.description}
              </p>

              <div
                style={{
                  height: "1px",
                  background:
                    "linear-gradient(90deg, rgba(40, 231, 197,0.2), transparent)",
                  marginBottom: "16px",
                }}
              />

              {/* Features */}
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
                {course.features.map((f, i) => (
                  <FeatureRow
                    key={i}
                    icon={f.icon}
                    label={f.label}
                    desc={f.desc}
                  />
                ))}
              </ul>

              {/* Level 2 — Expandable content */}
              <ExpandableContent course={course} visible={expanded} />

              {/* Level 3 — Curriculum */}
              <CurriculumAccordion
                curriculum={course.curriculum}
                visible={expanded && showCurriculum}
              />

              <div
                style={{
                  height: "1px",
                  background:
                    "linear-gradient(90deg, rgba(40, 231, 197,0.12), transparent)",
                  margin: "16px 0",
                }}
              />

              {/* CTA row */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <CTAButton label={course.cta} />
                <button
                  onClick={() => {
                    setExpanded(!expanded);
                    if (expanded) setShowCurriculum(false);
                  }}
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    border: "1px solid rgba(40, 231, 197,0.2)",
                    color: "rgba(40, 231, 197,0.7)",
                    background: "transparent",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = "rgba(40, 231, 197,0.45)";
                    e.target.style.color = "#28e7c5";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = "rgba(40, 231, 197,0.2)";
                    e.target.style.color = "rgba(40, 231, 197,0.7)";
                  }}
                >
                  {expanded ? "↑ Less" : "↓ Curriculum"}
                </button>
                {expanded && (
                  <button
                    onClick={() => setShowCurriculum(!showCurriculum)}
                    style={{
                      fontSize: "0.72rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "10px 16px",
                      borderRadius: "8px",
                      border: "1px solid rgba(40, 231, 197,0.15)",
                      color: "rgba(255,255,255,0.35)",
                      background: "transparent",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = "rgba(40, 231, 197,0.3)";
                      e.target.style.color = "rgba(255,255,255,1)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = "rgba(40, 231, 197,0.15)";
                      e.target.style.color = "rgba(255,255,255,0.35)";
                    }}
                  >
                    {showCurriculum ? "▲ Hide Curriculum" : "▼ View Curriculum"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── NAV PILL ─────────────────────────────────────────────────────────────────
function NavPill({ href, label }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontSize: "0.82rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        padding: "6px 14px",
        borderRadius: "999px",
        textDecoration: "none",
        border: `1px solid ${hov ? "rgba(40, 231, 197,0.45)" : "rgba(40, 231, 197,0.15)"}`,
        color: hov ? "#28e7c5" : "rgba(255,255,255,1)",
        background: hov ? "rgba(40, 231, 197,0.06)" : "transparent",
        transition: "all 0.25s ease",
      }}
    >
      {label}
    </a>
  );
}

// ── PLACEMENT STRIP ───────────────────────────────────────────────────────────
function PlacementStrip() {
  const [ref, inView] = useInView(0.1);
  const items = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect
            x="3"
            y="1.5"
            width="13"
            height="17"
            rx="2"
            stroke="#1bd4a0"
            strokeWidth="1.4"
          />
          <line
            x1="6.5"
            y1="6"
            x2="12.5"
            y2="6"
            stroke="#1bd4a0"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <line
            x1="6.5"
            y1="9"
            x2="13.5"
            y2="9"
            stroke="#1bd4a0"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <line
            x1="6.5"
            y1="12"
            x2="11"
            y2="12"
            stroke="#1bd4a0"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle
            cx="16.5"
            cy="16.5"
            r="3.5"
            fill="#0d2a2a"
            stroke="#1bd4a0"
            strokeWidth="1.2"
          />
          <path
            d="M15.2 16.5l.9.9 1.6-1.6"
            stroke="#1bd4a0"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "ATS-Friendly Resume",
      desc: "Crafted to pass applicant tracking systems",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect
            x="2"
            y="2"
            width="18"
            height="18"
            rx="4"
            stroke="#1bd4a0"
            strokeWidth="1.4"
          />
          <circle cx="11" cy="9" r="2.8" stroke="#1bd4a0" strokeWidth="1.2" />
          <path
            d="M5.5 17c0-3 2.5-5 5.5-5s5.5 2 5.5 5"
            stroke="#1bd4a0"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <rect
            x="7.5"
            y="2"
            width="7"
            height="2"
            rx="1"
            fill="#1bd4a0"
            opacity="0.5"
          />
        </svg>
      ),
      title: "LinkedIn Optimization",
      desc: "Profile that attracts recruiter attention",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="8.5" stroke="#1bd4a0" strokeWidth="1.4" />
          <path
            d="M8.5 8.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 1.4-.8 2-1.8 2.5C10.7 11.5 10.5 12 10.5 12.5"
            stroke="#1bd4a0"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="11" cy="15.2" r="0.8" fill="#1bd4a0" />
        </svg>
      ),
      title: "Mock Interviews",
      desc: "Real scenario-based interview simulations",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect
            x="2"
            y="4"
            width="18"
            height="14"
            rx="2.5"
            stroke="#1bd4a0"
            strokeWidth="1.4"
          />
          <circle cx="11" cy="11" r="3" stroke="#1bd4a0" strokeWidth="1.2" />
          <circle cx="11" cy="11" r="1" fill="#1bd4a0" />
          <line
            x1="2"
            y1="7.5"
            x2="20"
            y2="7.5"
            stroke="#1bd4a0"
            strokeWidth="1"
            opacity="0.4"
          />
          <path
            d="M15 4v3M7 4v3"
            stroke="#1bd4a0"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      ),
      title: "Naukri Profile Setup",
      desc: "Recruiter-optimized profile for India market",
    },
  ];
  return (
    <div
      ref={ref}
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 clamp(20px,4vw,60px) clamp(40px,6vw,80px)",
      }}
    >
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(40, 231, 197,0.15), transparent)",
          marginBottom: "48px",
        }}
      />
      <div
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <Eyebrow label="Career Preparation" />
          <h2
            style={{
              fontSize: "clamp(1.6rem,3vw,2.2rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginTop: "12px",
            }}
          >
            100% Placement Support*
          </h2>
          <p
            style={{
              fontSize: "0.88rem",
              color: "rgba(255,255,255,1)",
              marginTop: "8px",
            }}
          >
            Along with technical training, we guide you for job placement
            success.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "12px",
          }}
        >
          {items.map((item, i) => (
            <PlacementCard key={i} item={item} delay={i * 80} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <CTAButton label="Book Free Counselling" />
          <p
            style={{
              fontSize: "0.65rem",
              color: "rgba(255,255,255,0.2)",
              marginTop: "10px",
              letterSpacing: "0.08em",
            }}
          >
            *T&C Apply · info@datagenix.in · 73852 56569
          </p>
        </div>
      </div>
    </div>
  );
}

function PlacementCard({ item }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "20px",
        borderRadius: "14px",
        border: `1px solid ${hov ? "rgba(40, 231, 197,0.25)" : "rgba(40, 231, 197,0.09)"}`,
        background: hov
          ? "linear-gradient(145deg, rgba(20,58,78,0.96), rgba(14,42,58,0.98))"
          : "linear-gradient(145deg, rgba(24,72,94,0.94), rgba(16,48,66,0.97))",
        boxShadow: hov
          ? "0 14px 40px rgba(0,0,0,0.45), 0 0 20px rgba(40,231,197,0.08)"
          : "0 10px 30px rgba(0,0,0,0.32)",
        transition: "all 0.3s ease",
        cursor: "default",
      }}
    >
      <div style={{ fontSize: "1.4rem", marginBottom: "8px" }}>{item.icon}</div>
      <div
        style={{
          fontSize: "0.85rem",
          fontWeight: 700,
          color: hov ? "#fff" : "rgba(255,255,255,1)",
          marginBottom: "5px",
          transition: "color 0.2s",
        }}
      >
        {item.title}
      </div>
      <div
        style={{
          fontSize: "0.75rem",
          color: "rgba(255,255,255,1)",
          lineHeight: 1.5,
        }}
      >
        {item.desc}
      </div>
    </div>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────
export default function CoursesPage() {
  return (
    <>
      <style>{`

        html { scroll-behavior: smooth; }
        *, *::before, *::after { box-sizing: border-box; }
        button { outline: none; }

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

        @media (min-width: 1024px) {
          .prow      { flex-direction: row !important; align-items: flex-start !important; }
          .prow--rev { flex-direction: row-reverse !important; }
          .pcol      { width: 50% !important; }
        }
      `}</style>

      <main
        className="bg-linear-to-r from-[#140c30] via-[#153D4C] to-[#16A085]"
        style={{
          minHeight: "90vh",
          position: "relative",
          overflowX: "hidden",
        }}
      >
        {/* HERO */}
        <header
          style={{
            position: "relative",
            zIndex: 1,
            minHeight: "80vh",
            maxWidth: "90%", // 🔥 full screen
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // horizontal center
            justifyContent: "center", // vertical center
            textAlign: "center", // center text
            padding: "0 20px", // only side padding
          }}
          className="mx-auto mt-16"
        >
          <div
            style={{
              display: "inline-block",
              padding: "6px 14px",
              borderRadius: "999px",
              marginBottom: "22px",

              background: "rgba(40, 231, 197,0.08)",
              border: "1px solid rgba(40, 231, 197,0.25)",
              boxShadow: "0 0 20px rgba(40, 231, 197,0.12)",
            }}
          >
            <Eyebrow label="AI & Data Courses" />
          </div>
          <h1
            style={{
              fontSize: "clamp(2.4rem,6vw,4.2rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              margin: "0 0 20px",
              animation: "heroFadeUp 0.8s ease 0.1s both",
            }}
          >
            <span style={{ fontWeight: 700 }}>Master</span>{" "}
            <span
              style={{
                color: "#28E7C5",
                fontWeight: 700,
              }}
            >
              AI & Data Skills
              <br />
            </span>{" "}
            <span style={{ fontWeight: 700 }}>
              that the world is hiring for
            </span>
          </h1>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.75,
              color: "rgba(255,255,255,1)",
              maxWidth: "520px",
              margin: "0 0 10px",
              animation: "heroFadeUp 0.8s ease 0.2s both",
            }}
          >
            170M+ AI jobs emerging by 2030. India saw a 33% rise in AI hiring in
            2025. The future belongs to those who understand AI & Data — and
            we'll take you there.
          </p>
          <div
            style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    margin: "0 0 28px",
    animation: "heroFadeUp 0.8s ease 0.25s both",
    justifyContent: "center",
    alignItems: "center",
  }}
          >
            {[
              { val: "170M+", label: "Jobs by 2030" },
              { val: "2.9L", label: "AI Jobs in India (2025)" },
              { val: "33%", label: "Rise in AI Hiring" },
              { val: "100%", label: "Placement Support*" },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: "#28E7C5",
                    lineHeight: 1,
                  }}
                >
                  {s.val}
                </span>
                <span
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,1)",
                    marginTop: "3px",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
          <div
          className="hidden xl:flex w-[75%] items-center justify-center"
            style={{
              flexWrap: "wrap",
              gap: "6px",
              animation: "heroFadeUp 0.8s ease 0.3s both",
              alignItems: "center",
            }}
            
          >
            {COURSES.map((c) => (
              <NavPill key={c.id} href={`#course-${c.id}`} label={c.title} />
            ))}
          </div>
        </header>

        {/* COURSE SECTIONS */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {COURSES.map((course, index) => (
            <CourseSection key={course.id} course={course} index={index} />
          ))}
        </div>

        {/* PLACEMENT STRIP */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <PlacementStrip />
        </div>

        <div id="enrollment-form" style={{ position: "relative", zIndex: 1 }} className="mb-8">
          <EnrollmentForm />
        </div>
      </main>
    </>
  );
}
