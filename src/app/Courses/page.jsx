"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// ── COURSE DATA ──────────────────────────────────────────────────────────────
const COURSES = [
  {
    id: 1,
    eyebrow: "Most Popular · No Coding Needed",
    title: "AI for Everyone",
    tagline: "Understand, use, and profit from AI — starting today.",
    description:
      "AI is reshaping every career. This course strips away the jargon and gives you practical mastery of ChatGPT and modern AI tools — so you can boost productivity, explore new income streams, and future-proof your career. No technical background required.",
    features: [
      { icon: "◈", label: "What is AI (Simple & Clear)", desc: "Demystify AI, LLMs, and GenAI in plain language" },
      { icon: "⬡", label: "ChatGPT & AI Tools", desc: "Hands-on with the tools that are changing every industry" },
      { icon: "◉", label: "AI for Studies, Job & Business", desc: "Real use-cases across education, careers, and entrepreneurship" },
      { icon: "◆", label: "Productivity Hacks", desc: "Automate repetitive tasks and multiply your output" },
      { icon: "▣", label: "Career Opportunities in AI", desc: "Discover roles and income paths emerging right now" },
    ],
    whoCanJoin: ["Students (9th–12th, UG, PG)", "Teachers & Professors", "Business Owners", "Working Professionals", "Anyone curious about AI"],
    outcomes: ["Confidently use AI tools in daily work", "Automate repetitive tasks", "Identify AI career opportunities", "Apply AI to your specific domain"],
    curriculum: [
      { module: "Module 1", title: "AI Foundations", topics: ["What is AI, ML, GenAI", "History & evolution", "Key players & tools"] },
      { module: "Module 2", title: "ChatGPT Mastery", topics: ["Prompting techniques", "Use-cases by profession", "Custom GPTs"] },
      { module: "Module 3", title: "AI for Productivity", topics: ["Automating daily tasks", "AI writing & research", "Time optimization"] },
      { module: "Module 4", title: "Career & Business", topics: ["AI job roles", "Freelancing with AI", "Business use-cases"] },
    ],
    cta: "Explore Course",
    tag: "Beginner Friendly",
    duration: "4–6 Weeks",
    mode: "Online / Offline",
    images: [
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=85",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=85",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=85",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=85",
    ],
    imageLeft: true,
  },
  {
    id: 2,
    eyebrow: "Most Popular · Job-Focused",
    title: "Data Analyst Program",
    tagline: "From raw data to powerful business insights — in 3 months.",
    description:
      "Master Excel, SQL, Python, and Power BI with real industry datasets. Build a capstone project, get placement support, and become job-ready with the skills companies are actively hiring for right now.",
    features: [
      { icon: "◈", label: "Excel for Data Analytics", desc: "From basics to advanced pivot tables and dashboards" },
      { icon: "⬡", label: "SQL for Data Analysis", desc: "Query databases like a professional analyst" },
      { icon: "◉", label: "Python & Libraries", desc: "Pandas, NumPy, Matplotlib for data wrangling" },
      { icon: "◆", label: "Power BI Dashboards", desc: "Visual storytelling with enterprise BI tools" },
      { icon: "▣", label: "Capstone Industry Project", desc: "Real-world project to showcase to employers" },
    ],
    whoCanJoin: ["Students & Graduates (any stream)", "Teachers & Faculty", "Working Professionals & Career Switchers", "Entrepreneurs & Business Owners", "Anyone curious about the Data domain"],
    outcomes: ["Analyze and visualize real datasets", "Build professional dashboards", "Present data-driven insights to stakeholders", "Land a data analyst role with placement support"],
    curriculum: [
      { module: "Module 1", title: "Excel Mastery", topics: ["Data cleaning", "Pivot tables", "Advanced formulas", "Charts & dashboards"] },
      { module: "Module 2", title: "SQL Deep Dive", topics: ["Queries & joins", "Aggregations", "Subqueries", "Database design basics"] },
      { module: "Module 3", title: "Python for Data", topics: ["Pandas & NumPy", "Data visualization", "EDA techniques", "Automation scripts"] },
      { module: "Module 4", title: "Power BI & Capstone", topics: ["DAX formulas", "Interactive dashboards", "Industry project", "Presentation skills"] },
    ],
    cta: "Enroll Now",
    tag: "3 Months · 100% Placement Support*",
    duration: "~3 Months",
    mode: "Online / Offline",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=85",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200&q=85",
    ],
    imageLeft: false,
  },
  {
    id: 3,
    eyebrow: "Advanced · Industry-Grade",
    title: "Data Science & Machine Learning",
    tagline: "Build models that think. Deploy systems that scale.",
    description:
      "Go beyond analysis. Learn to engineer ML pipelines, build predictive models, and deploy AI solutions used in production. Mentored by industry practitioners — with real data, real projects.",
    features: [
      { icon: "◈", label: "ML Algorithms", desc: "Regression, classification, clustering — from scratch" },
      { icon: "⬡", label: "Deep Learning Basics", desc: "Neural networks, CNNs, and NLP fundamentals" },
      { icon: "◉", label: "Model Deployment", desc: "Flask APIs, cloud deployment, and MLOps basics" },
      { icon: "◆", label: "Feature Engineering", desc: "The real craft behind high-performing models" },
      { icon: "▣", label: "Industry Projects", desc: "Build portfolio-ready ML solutions end-to-end" },
    ],
    whoCanJoin: ["Python programmers wanting to level up", "Data Analysts moving into ML", "CS/IT graduates", "Researchers & academics", "Professionals in analytics roles"],
    outcomes: ["Build and evaluate ML models", "Work with real-world datasets", "Deploy models to production", "Create a strong ML portfolio"],
    curriculum: [
      { module: "Module 1", title: "Python & Statistics", topics: ["Python for ML", "Probability & stats", "Data preprocessing"] },
      { module: "Module 2", title: "Supervised Learning", topics: ["Regression & classification", "Decision trees", "Ensemble methods"] },
      { module: "Module 3", title: "Unsupervised & NLP", topics: ["Clustering", "Dimensionality reduction", "Text processing basics"] },
      { module: "Module 4", title: "Deep Learning & Deploy", topics: ["Neural networks", "CNNs & RNNs", "Model deployment", "Capstone project"] },
    ],
    cta: "Explore Course",
    tag: "Intermediate–Advanced",
    duration: "4–5 Months",
    mode: "Online",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=85",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=85",
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=85",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=85",
    ],
    imageLeft: true,
  },
  {
    id: 4,
    eyebrow: "Business Intelligence · No Code",
    title: "Power BI & Business Intelligence",
    tagline: "Turn spreadsheets into strategic dashboards.",
    description:
      "Learn to design interactive dashboards and BI reports that executives actually use. From data modeling to DAX to publishing — master the full Power BI workflow with business-focused projects.",
    features: [
      { icon: "◈", label: "Data Modeling", desc: "Star schema, relationships, and clean data architecture" },
      { icon: "⬡", label: "DAX Formulas", desc: "Calculated columns, measures, and time intelligence" },
      { icon: "◉", label: "Interactive Reports", desc: "Drill-throughs, bookmarks, and dynamic visuals" },
      { icon: "◆", label: "Power Query (ETL)", desc: "Data transformation with M language" },
      { icon: "▣", label: "Publishing & Sharing", desc: "Power BI Service, workspaces, and scheduled refresh" },
    ],
    whoCanJoin: ["Business analysts", "Finance & operations professionals", "HR and management teams", "Anyone who works with Excel reports", "Entrepreneurs & founders"],
    outcomes: ["Build executive-ready dashboards", "Master DAX and data modeling", "Publish and share BI reports", "Replace static Excel reports with live visuals"],
    curriculum: [
      { module: "Module 1", title: "Power BI Foundations", topics: ["Interface & workflow", "Connecting data sources", "Basic visuals"] },
      { module: "Module 2", title: "Data Modeling", topics: ["Relationships", "Star schema design", "Data cleaning with Power Query"] },
      { module: "Module 3", title: "DAX & Analytics", topics: ["Measures vs columns", "Time intelligence", "Advanced calculations"] },
      { module: "Module 4", title: "Reports & Projects", topics: ["Report design principles", "Publishing to service", "Industry dashboard project"] },
    ],
    cta: "Explore Course",
    tag: "Business-Focused",
    duration: "6–8 Weeks",
    mode: "Online / Offline",
    images: [
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=85",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=85",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=85",
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&q=85",
    ],
    imageLeft: false,
  },
  {
    id: 5,
    eyebrow: "Programming · Beginner to Pro",
    title: "Python Programming",
    tagline: "The most in-demand language — mastered the practical way.",
    description:
      "Python powers AI, data science, automation, and web backends. This course builds you from zero to job-ready with real projects, clean code practices, and hands-on problem-solving.",
    features: [
      { icon: "◈", label: "Core Python", desc: "Data types, loops, functions, OOP, and file handling" },
      { icon: "⬡", label: "Libraries & APIs", desc: "NumPy, Pandas, Requests, and automation tools" },
      { icon: "◉", label: "Real Projects", desc: "Automation scripts, web scrapers, data tools" },
      { icon: "◆", label: "Problem Solving", desc: "Coding challenges and algorithmic thinking" },
      { icon: "▣", label: "Bridge to Data/AI", desc: "Pathway into data science and ML with Python" },
    ],
    whoCanJoin: ["Complete beginners — no coding experience needed", "Students in any technical stream", "Working professionals wanting to automate tasks", "Aspiring data scientists", "Developers from other languages"],
    outcomes: ["Write clean, production-quality Python", "Build automation and data tools", "Understand libraries for data & AI", "Solve real-world programming challenges"],
    curriculum: [
      { module: "Module 1", title: "Python Basics", topics: ["Syntax & data types", "Conditionals & loops", "Functions & scope"] },
      { module: "Module 2", title: "Intermediate Python", topics: ["OOP concepts", "File handling", "Error handling", "Modules & packages"] },
      { module: "Module 3", title: "Libraries & Automation", topics: ["NumPy & Pandas", "Web scraping", "API integration", "Automation scripts"] },
      { module: "Module 4", title: "Projects & Pathways", topics: ["Mini-projects", "Code review practices", "Bridge to data science"] },
    ],
    cta: "Start Learning",
    tag: "Beginner–Intermediate",
    duration: "6–8 Weeks",
    mode: "Online / Offline",
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=85",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=85",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=85",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=85",
    ],
    imageLeft: true,
  },
  {
    id: 6,
    eyebrow: "Data · Foundation Skill",
    title: "SQL for Data Analysis",
    tagline: "Query any database. Answer any business question.",
    description:
      "SQL is the universal language of data. Learn to write queries that extract insights, aggregate trends, and answer critical business questions — used by analysts, developers, and PMs worldwide.",
    features: [
      { icon: "◈", label: "Core SQL Queries", desc: "SELECT, WHERE, GROUP BY, ORDER BY mastery" },
      { icon: "⬡", label: "Joins & Relationships", desc: "INNER, LEFT, RIGHT joins across multiple tables" },
      { icon: "◉", label: "Aggregations & Windows", desc: "SUM, COUNT, RANK, and window functions" },
      { icon: "◆", label: "Subqueries & CTEs", desc: "Advanced query patterns for complex analysis" },
      { icon: "▣", label: "Real Business Cases", desc: "Sales, HR, and e-commerce analysis projects" },
    ],
    whoCanJoin: ["Aspiring data analysts", "Business professionals who need data access", "Developers learning backend data", "Finance & operations teams", "Students preparing for analytics roles"],
    outcomes: ["Write professional SQL queries", "Analyze real business datasets", "Combine SQL with Excel/Python for full analysis", "Interview-ready for data analyst roles"],
    curriculum: [
      { module: "Module 1", title: "SQL Fundamentals", topics: ["Database concepts", "Basic queries", "Filtering & sorting"] },
      { module: "Module 2", title: "Joins & Aggregations", topics: ["Types of joins", "GROUP BY", "HAVING clause"] },
      { module: "Module 3", title: "Advanced SQL", topics: ["Subqueries", "CTEs", "Window functions"] },
      { module: "Module 4", title: "Projects & Integration", topics: ["Business case projects", "SQL + Python integration", "Interview prep"] },
    ],
    cta: "Explore Course",
    tag: "High Demand Skill",
    duration: "4–6 Weeks",
    mode: "Online",
    images: [
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&q=85",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=85",
      "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?w=1200&q=85",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85",
    ],
    imageLeft: false,
  },
  {
    id: 7,
    eyebrow: "AI Skills · High ROI",
    title: "Prompt Engineering",
    tagline: "Get more from AI by saying the right thing.",
    description:
      "Prompt engineering is the fastest-growing meta-skill of the AI era. Learn to design prompts that get precise, high-quality outputs from ChatGPT, Claude, Gemini, and other LLMs — for any use case.",
    features: [
      { icon: "◈", label: "Prompt Anatomy", desc: "Role, context, instruction, format — the full framework" },
      { icon: "⬡", label: "Advanced Techniques", desc: "Chain-of-thought, few-shot, and system prompts" },
      { icon: "◉", label: "Use-Case Libraries", desc: "Prompt templates for marketing, coding, research, HR" },
      { icon: "◆", label: "AI Tool Integration", desc: "ChatGPT, Claude, Gemini, Midjourney, and more" },
      { icon: "▣", label: "Prompt-to-Product", desc: "Build AI-powered workflows and mini-automations" },
    ],
    whoCanJoin: ["Marketers, writers, and content creators", "Business professionals using AI tools", "Developers building AI-powered apps", "Students wanting an edge in the AI era", "Entrepreneurs automating operations"],
    outcomes: ["Write prompts that get consistent results", "Build reusable prompt libraries", "Automate workflows with LLMs", "Save hours weekly using AI intelligently"],
    curriculum: [
      { module: "Module 1", title: "Foundations", topics: ["How LLMs work (simplified)", "Anatomy of a prompt", "Common pitfalls"] },
      { module: "Module 2", title: "Core Techniques", topics: ["Zero-shot vs few-shot", "Chain-of-thought", "Role prompting"] },
      { module: "Module 3", title: "Domain Applications", topics: ["Content creation", "Code generation", "Research & analysis prompts"] },
      { module: "Module 4", title: "Advanced & Automation", topics: ["System prompts", "API-based prompting", "Workflow automation project"] },
    ],
    cta: "Learn Prompt Engineering",
    tag: "In-Demand Skill 2025",
    duration: "3–4 Weeks",
    mode: "Online",
    images: [
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=85",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=85",
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&q=85",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=85",
    ],
    imageLeft: true,
  },
  {
    id: 8,
    eyebrow: "Foundation · AI & Data",
    title: "Probability & Statistics for AI",
    tagline: "The math behind every model — made intuitive.",
    description:
      "Statistics is the backbone of data science and AI. This course makes probability, distributions, and hypothesis testing genuinely intuitive — with visual explanations and real datasets, not just formulas.",
    features: [
      { icon: "◈", label: "Probability Foundations", desc: "Events, distributions, Bayes theorem — made clear" },
      { icon: "⬡", label: "Descriptive Statistics", desc: "Mean, variance, correlation, and data summarization" },
      { icon: "◉", label: "Inferential Statistics", desc: "Hypothesis testing, confidence intervals, p-values" },
      { icon: "◆", label: "Distributions for ML", desc: "Normal, binomial, Poisson — and when to use each" },
      { icon: "▣", label: "Python Implementation", desc: "Apply stats concepts with NumPy, SciPy, and Pandas" },
    ],
    whoCanJoin: ["Aspiring data scientists needing math foundations", "ML learners who skipped statistics", "Students in engineering or commerce", "Working professionals moving into AI roles", "Data analysts wanting deeper analytical skills"],
    outcomes: ["Understand the math behind ML algorithms", "Interpret statistical outputs correctly", "Apply hypothesis testing to real data", "Build a strong foundation for data science"],
    curriculum: [
      { module: "Module 1", title: "Probability Basics", topics: ["Sample spaces", "Conditional probability", "Bayes theorem"] },
      { module: "Module 2", title: "Statistics Foundations", topics: ["Descriptive stats", "Data distributions", "Correlation & causation"] },
      { module: "Module 3", title: "Inferential Statistics", topics: ["Sampling", "Hypothesis testing", "t-tests, chi-square, ANOVA"] },
      { module: "Module 4", title: "Stats for AI/ML", topics: ["Probability in ML", "Python implementation", "Real-world case studies"] },
    ],
    cta: "Build Your Foundation",
    tag: "Essential for Data Science",
    duration: "4–6 Weeks",
    mode: "Online / Offline",
    images: [
      "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=1200&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=85",
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
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function useInterval(cb, delay, active) {
  const saved = useRef(cb);
  useEffect(() => { saved.current = cb; }, [cb]);
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

  const goTo = useCallback((idx) => {
    if (idx === active || transitioning) return;
    setDir(idx > active ? 1 : -1);
    setPrev(active);
    setActive(idx);
    setTransitioning(true);
    setTimeout(() => { setPrev(null); setTransitioning(false); }, 600);
  }, [active, transitioning]);

  const next = useCallback(() => goTo((active + 1) % images.length), [goTo, active, images.length]);
  const goBack = useCallback(() => goTo((active - 1 + images.length) % images.length), [goTo, active, images.length]);

  useInterval(next, 3800, !hovered);

  return (
    <div style={{ position: "relative", width: "100%" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        position: "relative", width: "100%", height: "480px",
        borderRadius: "20px", overflow: "hidden",
        border: "1px solid rgba(33,198,207,0.12)", background: "#0a0a0a",
        boxShadow: hovered
          ? "0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(33,198,207,0.15)"
          : "0 12px 48px rgba(0,0,0,0.5)",
        transition: "box-shadow 0.5s ease",
      }}>
        {prev !== null && (
          <img src={images[prev]} alt="" style={{
            position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
            opacity: transitioning ? 0 : 1,
            transform: transitioning ? `translateX(${dir * -8}%)` : "translateX(0)",
            transition: "opacity 0.55s ease, transform 0.55s ease",
          }} />
        )}
        <img key={active} src={images[active]} alt="" style={{
          position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
          animation: transitioning ? `slideIn${dir > 0 ? "R" : "L"} 0.55s ease forwards` : "none",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.2) 45%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,5,5,0.3) 0%, transparent 50%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, right: 0, width: "180px", height: "180px", borderRadius: "50%", background: "radial-gradient(circle, rgba(33,198,207,0.18) 0%, transparent 70%)", opacity: hovered ? 1 : 0.4, transition: "opacity 0.5s ease", pointerEvents: "none" }} />
        <div style={{
          position: "absolute", top: "16px", left: "16px",
          display: "flex", alignItems: "center", gap: "6px",
          background: "rgba(5,5,5,0.7)", backdropFilter: "blur(10px)",
          border: "1px solid rgba(33,198,207,0.18)", borderRadius: "999px",
          padding: "5px 12px",
          fontFamily: "'DM Sans',sans-serif", fontSize: "0.65rem",
          letterSpacing: "0.12em", textTransform: "uppercase", color: "#21C6CF",
        }}>
          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#21C6CF", boxShadow: "0 0 6px #21C6CF", animation: "pulse 2s ease-in-out infinite" }} />
          {active + 1} / {images.length}
        </div>
        <ArrowBtn side="left" onClick={goBack} visible={hovered} />
        <ArrowBtn side="right" onClick={next} visible={hovered} />
        <div style={{ position: "absolute", bottom: "14px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "6px", alignItems: "center" }}>
          {images.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} style={{
              width: i === active ? "20px" : "6px", height: "6px", borderRadius: "999px",
              border: "none", cursor: "pointer", padding: 0,
              background: i === active ? "#21C6CF" : "rgba(255,255,255,0.3)",
              boxShadow: i === active ? "0 0 8px rgba(33,198,207,0.8)" : "none",
              transition: "all 0.35s ease",
            }} />
          ))}
        </div>
      </div>
      <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
        {images.map((src, i) => (
          <button key={i} onClick={() => goTo(i)}
            onMouseEnter={() => setThumbHov(i)} onMouseLeave={() => setThumbHov(null)}
            style={{
              flex: 1, aspectRatio: "16/9", borderRadius: "8px", overflow: "hidden", padding: 0, cursor: "pointer",
              border: i === active ? "1.5px solid #21C6CF" : thumbHov === i ? "1.5px solid rgba(33,198,207,0.4)" : "1.5px solid rgba(33,198,207,0.08)",
              boxShadow: i === active ? "0 0 12px rgba(33,198,207,0.35)" : "none",
              transition: "border-color 0.25s, box-shadow 0.25s",
              position: "relative", background: "#0a0a0a",
            }}
          >
            <img src={src} alt="" style={{
              width: "100%", height: "100%", objectFit: "cover",
              opacity: i === active ? 1 : thumbHov === i ? 0.75 : 0.45,
              transform: thumbHov === i ? "scale(1.05)" : "scale(1)",
              transition: "opacity 0.25s, transform 0.3s",
            }} />
            {i === active && <div style={{ position: "absolute", inset: 0, background: "rgba(33,198,207,0.08)" }} />}
          </button>
        ))}
      </div>
    </div>
  );
}

function ArrowBtn({ side, onClick, visible }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        position: "absolute", top: "50%", [side]: "14px",
        transform: `translateY(-50%) translateX(${visible ? "0" : side === "left" ? "-8px" : "8px"})`,
        opacity: visible ? 1 : 0,
        width: "38px", height: "38px", borderRadius: "50%",
        background: hov ? "rgba(33,198,207,0.25)" : "rgba(5,5,5,0.65)",
        backdropFilter: "blur(10px)",
        border: `1px solid ${hov ? "rgba(33,198,207,0.5)" : "rgba(33,198,207,0.2)"}`,
        color: "#21C6CF", fontSize: "1rem", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.3s ease", zIndex: 5,
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
    <li onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", gap: "12px", alignItems: "flex-start",
        padding: "10px 14px", borderRadius: "10px",
        background: hov ? "rgba(33,198,207,0.04)" : "transparent",
        border: `1px solid ${hov ? "rgba(33,198,207,0.14)" : "transparent"}`,
        cursor: "default", transition: "all 0.25s ease", listStyle: "none",
      }}
    >
      <div style={{
        flexShrink: 0, width: "30px", height: "30px", borderRadius: "7px",
        background: "rgba(33,198,207,0.08)",
        border: `1px solid ${hov ? "rgba(33,198,207,0.3)" : "rgba(33,198,207,0.12)"}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#21C6CF", fontSize: "0.8rem", transition: "border-color 0.25s",
      }}>{icon}</div>
      <div>
        <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "0.82rem", fontWeight: 700, color: hov ? "#fff" : "rgba(255,255,255,0.85)", marginBottom: "2px", transition: "color 0.2s" }}>{label}</div>
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem", lineHeight: 1.5, color: "rgba(255,255,255,0.38)" }}>{desc}</div>
      </div>
    </li>
  );
}

// ── EYEBROW ──────────────────────────────────────────────────────────────────
function Eyebrow({ label }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "'DM Sans',sans-serif", fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#21C6CF" }}>
      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#21C6CF", boxShadow: "0 0 8px #21C6CF", flexShrink: 0 }} />
      {label}
    </div>
  );
}

// ── CTA BUTTON ───────────────────────────────────────────────────────────────
function CTAButton({ label, secondary }) {
  const [hov, setHov] = useState(false);
  return (
    <button onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: "10px",
        fontFamily: "'Syne',sans-serif", fontSize: "0.78rem", fontWeight: 700,
        letterSpacing: "0.06em", textTransform: "uppercase",
        color: secondary ? (hov ? "#21C6CF" : "rgba(255,255,255,0.6)") : "#050505",
        background: secondary ? "transparent" : (hov ? "#fff" : "#21C6CF"),
        padding: "11px 22px", borderRadius: "8px", cursor: "pointer",
        border: secondary ? `1px solid ${hov ? "rgba(33,198,207,0.5)" : "rgba(33,198,207,0.2)"}` : "none",
        boxShadow: secondary ? "none" : (hov ? "0 0 36px rgba(33,198,207,0.55)" : "0 0 20px rgba(33,198,207,0.28)"),
        transition: "all 0.3s ease",
      }}
    >
      {label}
      {!secondary && (
        <span style={{ fontSize: "1rem", display: "inline-block", transform: hov ? "translateX(3px)" : "translateX(0)", transition: "transform 0.25s ease" }}>→</span>
      )}
    </button>
  );
}

// ── EXPANDABLE SECTION (Level 2) ─────────────────────────────────────────────
function ExpandableContent({ course, visible }) {
  return (
    <div style={{
      overflow: "hidden", maxHeight: visible ? "600px" : "0",
      opacity: visible ? 1 : 0,
      transition: "max-height 0.6s ease, opacity 0.5s ease",
    }}>
      <div style={{ paddingTop: "16px" }}>
        {/* Meta pills */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "18px" }}>
          {[
            { label: "⏱ " + course.duration },
            { label: "📍 " + course.mode },
          ].map((p, i) => (
            <span key={i} style={{
              fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem", letterSpacing: "0.08em",
              padding: "5px 12px", borderRadius: "999px",
              border: "1px solid rgba(33,198,207,0.2)", color: "rgba(33,198,207,0.75)",
              background: "rgba(33,198,207,0.05)",
            }}>{p.label}</span>
          ))}
        </div>

        {/* Outcomes */}
        <div style={{ marginBottom: "16px" }}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "0.72rem", fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "10px" }}>
            Learning Outcomes
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {course.outcomes.map((o, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "#21C6CF", fontSize: "0.75rem", marginTop: "2px", flexShrink: 0 }}>✓</span>
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{o}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: "1px", background: "linear-gradient(90deg, rgba(33,198,207,0.12), transparent)", marginBottom: "16px" }} />

        {/* Who can join */}
        <div>
          <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "0.72rem", fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "10px" }}>
            Who Should Join
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {course.whoCanJoin.map((w, i) => (
              <span key={i} style={{
                fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem",
                padding: "4px 10px", borderRadius: "6px",
                background: "rgba(33,198,207,0.06)",
                border: "1px solid rgba(33,198,207,0.12)",
                color: "rgba(255,255,255,0.5)",
              }}>{w}</span>
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
    <div style={{
      overflow: "hidden", maxHeight: visible ? "800px" : "0",
      opacity: visible ? 1 : 0,
      transition: "max-height 0.7s ease, opacity 0.5s ease",
    }}>
      <div style={{ paddingTop: "16px" }}>
        <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "0.72rem", fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px" }}>
          Full Curriculum
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {curriculum.map((mod, i) => {
            const isOpen = openModule === i;
            return (
              <div key={i} style={{
                borderRadius: "10px", overflow: "hidden",
                border: `1px solid ${isOpen ? "rgba(33,198,207,0.25)" : "rgba(33,198,207,0.1)"}`,
                background: isOpen ? "rgba(33,198,207,0.04)" : "transparent",
                transition: "border-color 0.25s, background 0.25s",
              }}>
                <button onClick={() => setOpenModule(isOpen ? null : i)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "10px 14px", background: "transparent", border: "none", cursor: "pointer",
                  }}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#21C6CF", flexShrink: 0 }}>{mod.module}</span>
                    <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "0.8rem", fontWeight: 700, color: "rgba(255,255,255,0.8)" }}>{mod.title}</span>
                  </div>
                  <span style={{ color: "#21C6CF", fontSize: "0.8rem", transform: isOpen ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.25s ease" }}>+</span>
                </button>
                <div style={{
                  maxHeight: isOpen ? "200px" : "0", overflow: "hidden",
                  transition: "max-height 0.4s ease",
                }}>
                  <div style={{ padding: "0 14px 12px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {mod.topics.map((t, j) => (
                      <span key={j} style={{
                        fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem",
                        padding: "3px 9px", borderRadius: "5px",
                        background: "rgba(33,198,207,0.06)", border: "1px solid rgba(33,198,207,0.12)",
                        color: "rgba(255,255,255,0.5)",
                      }}>{t}</span>
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
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px,4vw,60px)" }}>
          <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(33,198,207,0.15), transparent)" }} />
        </div>
      )}

      <section style={{ padding: "clamp(50px,4vw,100px) 0", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", width: "700px", height: "700px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(33,198,207,0.04) 0%, transparent 65%)",
          top: "50%", [imageLeft ? "right" : "left"]: "-200px",
          transform: "translateY(-50%)", opacity: inView ? 1 : 0,
          transition: "opacity 1.2s ease", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "clamp(20px,4vw,40px)",
          [imageLeft ? "right" : "left"]: "clamp(20px,4vw,60px)",
          fontFamily: "'Syne',sans-serif", fontSize: "clamp(5rem,12vw,9rem)",
          fontWeight: 800, color: "rgba(33,198,207,0.025)",
          lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em",
        }}>0{index + 1}</div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px,4vw,60px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(28px,4vw,56px)", alignItems: "stretch" }} className={`prow ${imageLeft ? "" : "prow--rev"}`}>

            {/* IMAGE */}
            <div style={{ ...slideImg, minWidth: 0 }} className="pcol">
              <ImageGallery images={course.images} imageLeft={imageLeft} />
            </div>

            {/* CONTENT */}
            <div style={{ ...slideContent, minWidth: 0, display: "flex", flexDirection: "column", gap: "0" }} className="pcol">

              {/* Eyebrow + tag */}
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <Eyebrow label={course.eyebrow} />
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "4px 10px", borderRadius: "999px", border: "1px solid rgba(33,198,207,0.2)", color: "rgba(33,198,207,0.7)", background: "rgba(33,198,207,0.05)" }}>
                  {course.tag}
                </span>
              </div>

              {/* Title */}
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,4.5vw,2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 8px" }}>
                {course.title}
              </h2>

              {/* Tagline */}
              <p style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(0.9rem,1.5vw,1rem)", fontWeight: 600, color: "#21C6CF", margin: "0 0 14px" }}>
                {course.tagline}
              </p>

              {/* Description */}
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.88rem", lineHeight: 1.75, color: "rgba(255,255,255,0.38)", margin: "0 0 18px", maxWidth: "460px" }}>
                {course.description}
              </p>

              <div style={{ height: "1px", background: "linear-gradient(90deg, rgba(33,198,207,0.2), transparent)", marginBottom: "16px" }} />

              {/* Features */}
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px", display: "flex", flexDirection: "column", gap: "2px" }}>
                {course.features.map((f, i) => (
                  <FeatureRow key={i} icon={f.icon} label={f.label} desc={f.desc} />
                ))}
              </ul>

              {/* Level 2 — Expandable content */}
              <ExpandableContent course={course} visible={expanded} />

              {/* Level 3 — Curriculum */}
              <CurriculumAccordion curriculum={course.curriculum} visible={expanded && showCurriculum} />

              <div style={{ height: "1px", background: "linear-gradient(90deg, rgba(33,198,207,0.12), transparent)", margin: "16px 0" }} />

              {/* CTA row */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
                <CTAButton label={course.cta} />
                <button
                  onClick={() => { setExpanded(!expanded); if (expanded) setShowCurriculum(false); }}
                  style={{
                    fontFamily: "'DM Sans',sans-serif", fontSize: "0.72rem", letterSpacing: "0.08em",
                    textTransform: "uppercase", padding: "10px 16px", borderRadius: "8px",
                    border: "1px solid rgba(33,198,207,0.2)", color: "rgba(33,198,207,0.7)",
                    background: "transparent", cursor: "pointer", transition: "all 0.25s ease",
                  }}
                  onMouseEnter={e => { e.target.style.borderColor = "rgba(33,198,207,0.45)"; e.target.style.color = "#21C6CF"; }}
                  onMouseLeave={e => { e.target.style.borderColor = "rgba(33,198,207,0.2)"; e.target.style.color = "rgba(33,198,207,0.7)"; }}
                >
                  {expanded ? "↑ Less" : "↓ Who Should Join"}
                </button>
                {expanded && (
                  <button
                    onClick={() => setShowCurriculum(!showCurriculum)}
                    style={{
                      fontFamily: "'DM Sans',sans-serif", fontSize: "0.72rem", letterSpacing: "0.08em",
                      textTransform: "uppercase", padding: "10px 16px", borderRadius: "8px",
                      border: "1px solid rgba(33,198,207,0.15)", color: "rgba(255,255,255,0.35)",
                      background: "transparent", cursor: "pointer", transition: "all 0.25s ease",
                    }}
                    onMouseEnter={e => { e.target.style.borderColor = "rgba(33,198,207,0.3)"; e.target.style.color = "rgba(255,255,255,0.6)"; }}
                    onMouseLeave={e => { e.target.style.borderColor = "rgba(33,198,207,0.15)"; e.target.style.color = "rgba(255,255,255,0.35)"; }}
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
    <a href={href}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: "'DM Sans',sans-serif", fontSize: "0.72rem", letterSpacing: "0.08em",
        textTransform: "uppercase", padding: "6px 14px", borderRadius: "999px",
        textDecoration: "none",
        border: `1px solid ${hov ? "rgba(33,198,207,0.45)" : "rgba(33,198,207,0.15)"}`,
        color: hov ? "#21C6CF" : "rgba(255,255,255,0.4)",
        background: hov ? "rgba(33,198,207,0.06)" : "transparent",
        transition: "all 0.25s ease",
      }}
    >{label}</a>
  );
}

// ── PLACEMENT STRIP ───────────────────────────────────────────────────────────
function PlacementStrip() {
  const [ref, inView] = useInView(0.1);
  const items = [
    { icon: "📄", title: "ATS-Friendly Resume", desc: "Crafted to pass applicant tracking systems" },
    { icon: "💼", title: "LinkedIn Optimization", desc: "Profile that attracts recruiter attention" },
    { icon: "🎯", title: "Mock Interviews", desc: "Real scenario-based interview simulations" },
    { icon: "🌐", title: "Naukri Profile Setup", desc: "Recruiter-optimized profile for India market" },
  ];
  return (
    <div ref={ref} style={{
      maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px,4vw,60px) clamp(40px,6vw,80px)",
    }}>
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(33,198,207,0.15), transparent)", marginBottom: "48px" }} />
      <div style={{
        opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.9s ease, transform 0.9s ease",
      }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <Eyebrow label="Career Preparation" />
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em", marginTop: "12px" }}>
            100% Placement Support*
          </h2>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.35)", marginTop: "8px" }}>
            Along with technical training, we guide you for job placement success.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
          {items.map((item, i) => (
            <PlacementCard key={i} item={item} delay={i * 80} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <CTAButton label="Book Free Counselling" />
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.65rem", color: "rgba(255,255,255,0.2)", marginTop: "10px", letterSpacing: "0.08em" }}>
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
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        padding: "20px", borderRadius: "14px",
        border: `1px solid ${hov ? "rgba(33,198,207,0.25)" : "rgba(33,198,207,0.09)"}`,
        background: hov ? "rgba(33,198,207,0.04)" : "#0a0a0a",
        transition: "all 0.3s ease", cursor: "default",
      }}
    >
      <div style={{ fontSize: "1.4rem", marginBottom: "8px" }}>{item.icon}</div>
      <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "0.85rem", fontWeight: 700, color: hov ? "#fff" : "rgba(255,255,255,0.75)", marginBottom: "5px", transition: "color 0.2s" }}>{item.title}</div>
      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.5 }}>{item.desc}</div>
    </div>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────
export default function CoursesPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
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

      <main className="bg-linear-to-r from-[#140c30] via-[#153D4C] to-[#16A085]" style={{minHeight: "100vh", position: "relative", overflowX: "hidden" }}>

        {/* HERO */}
        <header style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "clamp(60px,10vw,100px) clamp(20px,4vw,60px) clamp(4px,1.5vw,8px)" }}>
          <div style={{ marginBottom: "16px", animation: "heroFadeUp 0.7s ease forwards" }}>
            <Eyebrow label="AI & Data Courses" />
          </div>
          <h1 style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "clamp(2.4rem,6vw,4.2rem)", fontWeight: 800,
            color: "#fff", lineHeight: 1.08, letterSpacing: "-0.03em", margin: "0 0 20px",
            animation: "heroFadeUp 0.8s ease 0.1s both",
          }}>
            Master <span style={{ color: "#21C6CF" }}>AI & Data Skills</span>{" "}
            that the world is hiring for
          </h1>
          <p style={{
            fontFamily: "'DM Sans',sans-serif", fontSize: "0.95rem", lineHeight: 1.75,
            color: "rgba(255,255,255,0.38)", maxWidth: "520px", margin: "0 0 10px",
            animation: "heroFadeUp 0.8s ease 0.2s both",
          }}>
            170M+ AI jobs emerging by 2030. India saw a 33% rise in AI hiring in 2025.
            The future belongs to those who understand AI & Data — and we'll take you there.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", margin: "0 0 28px", animation: "heroFadeUp 0.8s ease 0.25s both" }}>
            {[
              { val: "170M+", label: "Jobs by 2030" },
              { val: "2.9L", label: "AI Jobs in India (2025)" },
              { val: "33%", label: "Rise in AI Hiring" },
              { val: "100%", label: "Placement Support*" },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.4rem", fontWeight: 800, color: "#21C6CF", lineHeight: 1 }}>{s.val}</span>
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginTop: "3px" }}>{s.label}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", animation: "heroFadeUp 0.8s ease 0.3s both" }}>
            {COURSES.map(c => <NavPill key={c.id} href={`#course-${c.id}`} label={c.title} />)}
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

      </main>
    </>
  );
}