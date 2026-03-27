"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

function useReveal(delay = 0) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setOn(true); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return {
    ref,
    style: {
      opacity: on ? 1 : 0,
      transform: on ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    },
  };
}

const GRID_BG = {
  backgroundImage:
    "linear-gradient(rgba(33,198,207,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(33,198,207,0.03) 1px,transparent 1px)",
  backgroundSize: "60px 60px",
};

const CATEGORIES = ["All", "AI & Tech", "IoT", "Smart Cities", "Education", "Industry"];

const BLOGS = [
  {
    id: 1,
    slug: "ai-in-manufacturing",
    category: "Industry",
    tag: "AI & Tech",
    title: "How AI is Transforming Manufacturing Operations in India",
    excerpt: "From predictive maintenance to quality control, AI is rewriting the rulebook for Indian manufacturers. Here's how real factories are adopting intelligence at the floor level.",
    date: "March 18, 2025",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: 2,
    slug: "iot-smart-waste-management",
    category: "Smart Cities",
    tag: "IoT",
    title: "IoT-Powered Smart Waste Management: What Municipal Corporations Need to Know",
    excerpt: "Smart bins, route optimization, and real-time monitoring are no longer futuristic — they're deployable today. A deep-dive into how IoT is cleaning up our cities.",
    date: "March 5, 2025",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 3,
    slug: "ai-talent-gap-india",
    category: "Education",
    tag: "Education",
    title: "India's AI Talent Gap: Why Technical Degrees Alone Are Not Enough",
    excerpt: "Thousands of engineers graduate each year, yet companies struggle to find AI-ready professionals. The gap isn't just about skills — it's about practical exposure and mindset.",
    date: "February 20, 2025",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 4,
    slug: "embedded-ai-edge-computing",
    category: "AI & Tech",
    tag: "AI & Tech",
    title: "Embedded AI & Edge Computing: The Next Frontier for Industrial IoT",
    excerpt: "Why running AI on the device itself — rather than in the cloud — is becoming the gold standard for real-time industrial applications.",
    date: "February 10, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 5,
    slug: "responsible-ai-sdgs",
    category: "AI & Tech",
    tag: "AI & Tech",
    title: "Responsible AI and the SDGs: Building Technology That Serves Society",
    excerpt: "How aligning AI development with the United Nations Sustainable Development Goals isn't just ethical — it's smart business strategy for the decade ahead.",
    date: "January 28, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 6,
    slug: "airiaa-launch",
    category: "AI & Tech",
    tag: "AI & Tech",
    title: "AIRIAA: How We Built an AI-Powered Admission Assistant for College Campuses",
    excerpt: "Behind the scenes of building and deploying AIRIAA — the AI admission and information assistant that transformed student engagement at PVPIT.",
    date: "January 14, 2025",
    readTime: "9 min read",
    featured: false,
  },
  {
    id: 7,
    slug: "data-to-intelligence",
    category: "Industry",
    tag: "Industry",
    title: "From Data to Intelligence: Why Most Businesses Are Still Missing the Bridge",
    excerpt: "Collecting data is easy. Converting it into decisions that drive results is where most organisations still struggle. Here's the framework that changes that.",
    date: "December 30, 2024",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 8,
    slug: "ai-skill-india",
    category: "Education",
    tag: "Education",
    title: "AI Education and Skill India: Bridging the Gap Between Policy and Practice",
    excerpt: "Government initiatives are ambitious, but ground-level implementation is where the real challenge lies. How DatagenixAi is contributing to the Skill India mission.",
    date: "December 12, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 9,
    slug: "pollution-monitoring-ai",
    category: "Smart Cities",
    tag: "Smart Cities",
    title: "AI-Driven Environmental Monitoring: Tackling Pollution with Intelligent Sensors",
    excerpt: "Real-time air quality analysis, predictive pollution models, and automated alerts — how AI and IoT are being combined to fight environmental degradation in urban India.",
    date: "November 25, 2024",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 10,
    slug: "future-of-ai-professionals",
    category: "Education",
    tag: "Education",
    title: "The Future Belongs to AI-Skilled Professionals: A Roadmap for 2025 and Beyond",
    excerpt: "What skills, mindset, and experience do professionals need to thrive in an AI-driven world? A practical roadmap from our team's industry experience.",
    date: "November 8, 2024",
    readTime: "8 min read",
    featured: false,
  },
];

const TAG_COLORS = {
  "AI & Tech": { bg: "rgba(33,198,207,0.1)", text: "#21C6CF", border: "rgba(33,198,207,0.2)" },
  "IoT": { bg: "rgba(129,140,248,0.1)", text: "#818cf8", border: "rgba(129,140,248,0.2)" },
  "Smart Cities": { bg: "rgba(52,211,153,0.1)", text: "#34d399", border: "rgba(52,211,153,0.2)" },
  "Education": { bg: "rgba(251,191,36,0.1)", text: "#fbbf24", border: "rgba(251,191,36,0.2)" },
  "Industry": { bg: "rgba(248,113,113,0.1)", text: "#f87171", border: "rgba(248,113,113,0.2)" },
};

function TagPill({ tag }) {
  const c = TAG_COLORS[tag] || TAG_COLORS["AI & Tech"];
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.62rem] font-medium tracking-wide"
      style={{ fontFamily: "'DM Sans',sans-serif", background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
    >
      {tag}
    </span>
  );
}

function FeaturedCard({ blog }) {
  const r = useReveal(100);
  return (
    <div ref={r.ref} style={r.style}>
      <Link href={`/blog/${blog.slug}`} className="group block relative rounded-2xl border border-[rgba(33,198,207,0.15)] bg-[#0a0a0a] overflow-hidden hover:border-[rgba(33,198,207,0.3)] transition-all duration-300">
        {/* Top shimmer */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(33,198,207,0.5)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="flex flex-col lg:flex-row">
          {/* Image placeholder */}
          <div className="lg:w-[48%] min-h-[240px] sm:min-h-[280px] bg-[#0d0d0d] relative overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[rgba(33,198,207,0.08)]">
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center,rgba(33,198,207,0.06) 0%,transparent 70%)" }} />
            <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-[rgba(33,198,207,0.08)] border border-[rgba(33,198,207,0.15)] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="#21C6CF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 opacity-60">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <span className="text-[rgba(33,198,207,0.3)] text-[0.6rem] tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Sans',sans-serif" }}>Featured Post</span>
            </div>
            {/* Featured badge */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[rgba(33,198,207,0.12)] border border-[rgba(33,198,207,0.25)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#21C6CF] inline-block" style={{ boxShadow: "0 0 6px #21C6CF" }} />
              <span className="text-[#21C6CF] text-[0.58rem] tracking-widest uppercase font-medium" style={{ fontFamily: "'DM Sans',sans-serif" }}>Featured</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <TagPill tag={blog.tag} />
                <span className="text-[rgba(255,255,255,0.2)] text-[0.65rem]" style={{ fontFamily: "'DM Sans',sans-serif" }}>{blog.date} · {blog.readTime}</span>
              </div>
              <h2 className="text-white font-bold text-[1.3rem] sm:text-[1.6rem] leading-[1.3] tracking-[-0.02em] mb-4 group-hover:text-[#21C6CF] transition-colors duration-300" style={{ fontFamily: "'Syne',sans-serif" }}>
                {blog.title}
              </h2>
              <p className="text-[rgba(255,255,255,0.4)] text-[0.85rem] leading-[1.8]" style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>
                {blog.excerpt}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-7 text-[#21C6CF] text-[0.78rem] font-semibold tracking-wide" style={{ fontFamily: "'DM Sans',sans-serif" }}>
              Read Article
              <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1">
                <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

function BlogCard({ blog, delay = 0 }) {
  const r = useReveal(delay);
  return (
    <div ref={r.ref} style={r.style} className="h-full">
      <Link href={`/blog/${blog.slug}`} className="group h-full flex flex-col rounded-xl border border-[rgba(33,198,207,0.08)] bg-[#0a0a0a] overflow-hidden hover:border-[rgba(33,198,207,0.25)] transition-all duration-300 relative">
        {/* Top shimmer */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(33,198,207,0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Image placeholder */}
        <div className="h-[160px] bg-[#0d0d0d] relative overflow-hidden flex items-center justify-center flex-shrink-0">
          <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center,rgba(33,198,207,0.04) 0%,transparent 70%)" }} />
          <div className="relative z-10 w-12 h-12 rounded-xl bg-[rgba(33,198,207,0.07)] border border-[rgba(33,198,207,0.12)] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="#21C6CF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 opacity-50">
              <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          <div className="flex items-center gap-2 mb-4">
            <TagPill tag={blog.tag} />
          </div>
          <h3 className="text-white font-bold text-[0.92rem] sm:text-[0.98rem] leading-[1.45] tracking-[-0.01em] mb-3 group-hover:text-[#21C6CF] transition-colors duration-300 flex-1" style={{ fontFamily: "'Syne',sans-serif" }}>
            {blog.title}
          </h3>
          <p className="text-[rgba(255,255,255,0.35)] text-[0.77rem] leading-[1.7] mb-4 line-clamp-2" style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>
            {blog.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-[rgba(33,198,207,0.07)] mt-auto">
            <span className="text-[rgba(255,255,255,0.22)] text-[0.68rem]" style={{ fontFamily: "'DM Sans',sans-serif" }}>{blog.date}</span>
            <div className="flex items-center gap-1.5 text-[rgba(33,198,207,0.6)] text-[0.68rem]" style={{ fontFamily: "'DM Sans',sans-serif" }}>
              {blog.readTime}
              <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5">
                <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  const fade = (delay) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  });

  return (
    <section className="bg-[#050505] relative overflow-hidden pt-26 pb-12">
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse,rgba(33,198,207,0.06) 0%,transparent 70%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(33,198,207,0.3)] to-transparent" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <div style={fade(80)}>
          <div className="inline-flex items-center gap-2 text-[#21C6CF] text-[0.62rem] sm:text-[0.68rem] font-medium tracking-[0.18em] uppercase mb-4" style={{ fontFamily: "'DM Sans',sans-serif" }}>
            <span className="w-[5px] h-[5px] rounded-full bg-[#21C6CF] inline-block shrink-0" style={{ boxShadow: "0 0 8px #21C6CF" }} />
            Insights & Perspectives
          </div>
        </div>
        <div style={fade(160)}>
          <h1 className="text-[2.2rem] sm:text-[3rem] lg:text-[3.8rem] font-bold text-white leading-[1.1] tracking-[-0.03em] mb-5" style={{ fontFamily: "'Syne',sans-serif" }}>
            The DatagenixAi <span className="text-[#21C6CF]">Blog</span>
          </h1>
        </div>
        <div style={fade(240)}>
          <p className="text-[rgba(255,255,255,0.38)] text-[0.9rem] sm:text-[1rem] leading-[1.8] max-w-[520px] mx-auto" style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>
            Ideas, insights, and innovation from the intersection of AI, IoT, industry, and education. Written by practitioners, for practitioners.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(33,198,207,0.1)] to-transparent" />
    </section>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(false);
  const loadMoreRef = useRef(null);

  const featured = BLOGS[0];
  const rest = BLOGS.slice(1);

  const filtered = activeCategory === "All"
    ? rest
    : rest.filter((b) => b.tag === activeCategory || b.category === activeCategory);

  const visible = showAll ? filtered : filtered.slice(0, 6); // 1 featured + 5 = 6 total

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setShowAll(true);
      setLoading(false);
    }, 800);
  };

  const gridR = useReveal(0);
  const filterR = useReveal(0);

  return (
    <main className="bg-[#050505] min-h-screen">
      <Hero />

      <div className="relative bg-[#050505]">
        <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">

          {/* ── Featured ── */}
          <div className="mb-14">
            <FeaturedCard blog={featured} />
          </div>

          {/* ── Filter bar ── */}
          <div ref={filterR.ref} style={filterR.style} className="flex items-center gap-2 flex-wrap mb-10">
            <span className="text-[rgba(255,255,255,0.2)] text-[0.68rem] tracking-widest uppercase mr-1 shrink-0" style={{ fontFamily: "'DM Sans',sans-serif" }}>Filter:</span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setShowAll(false); }}
                className="px-4 py-1.5 rounded-full text-[0.72rem] font-medium tracking-wide transition-all duration-250"
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  background: activeCategory === cat ? "#21C6CF" : "rgba(33,198,207,0.05)",
                  color: activeCategory === cat ? "#050505" : "rgba(255,255,255,0.4)",
                  border: activeCategory === cat ? "1px solid #21C6CF" : "1px solid rgba(33,198,207,0.12)",
                  boxShadow: activeCategory === cat ? "0 0 16px rgba(33,198,207,0.25)" : "none",
                }}
              >
                {cat}
              </button>
            ))}

            {/* Post count */}
            <span className="ml-auto text-[rgba(255,255,255,0.18)] text-[0.68rem]" style={{ fontFamily: "'DM Sans',sans-serif" }}>
              {visible.length + 1} of {filtered.length + 1} articles
            </span>
          </div>

          {/* ── Grid ── */}
          <div ref={gridR.ref} style={gridR.style} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((blog, i) => (
              <BlogCard key={blog.id} blog={blog} delay={i * 60} />
            ))}
          </div>

          {/* Empty state */}
          {visible.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="w-14 h-14 rounded-full bg-[rgba(33,198,207,0.06)] border border-[rgba(33,198,207,0.12)] flex items-center justify-center text-[#21C6CF] opacity-50">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
              </div>
              <p className="text-[rgba(255,255,255,0.3)] text-[0.85rem]" style={{ fontFamily: "'DM Sans',sans-serif" }}>No articles in this category yet.</p>
              <button onClick={() => setActiveCategory("All")} className="text-[#21C6CF] text-[0.78rem] underline underline-offset-4" style={{ fontFamily: "'DM Sans',sans-serif" }}>View all articles</button>
            </div>
          )}

          {/* ── Load More ── */}
          {!showAll && filtered.length > 5 && (
            <div ref={loadMoreRef} className="flex flex-col items-center gap-4 mt-14">
              {/* Progress indicator */}
              <div className="flex items-center gap-3 mb-1">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-[rgba(33,198,207,0.3)]" />
                <span className="text-[rgba(255,255,255,0.2)] text-[0.68rem] tracking-widest" style={{ fontFamily: "'DM Sans',sans-serif" }}>
                  Showing {visible.length + 1} of {filtered.length + 1}
                </span>
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-[rgba(33,198,207,0.3)]" />
              </div>

              {/* Progress bar */}
              <div className="w-48 h-px bg-[rgba(33,198,207,0.08)] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#21C6CF] rounded-full transition-all duration-500"
                  style={{
                    width: `${((visible.length + 1) / (filtered.length + 1)) * 100}%`,
                    boxShadow: "0 0 8px rgba(33,198,207,0.5)",
                  }}
                />
              </div>

              <button
                onClick={handleLoadMore}
                disabled={loading}
                className="group relative overflow-hidden inline-flex items-center gap-3 px-8 py-3.5 border border-[rgba(33,198,207,0.25)] bg-[#0a0a0a] text-[rgba(255,255,255,0.6)] hover:border-[#21C6CF] hover:text-[#21C6CF] text-[0.82rem] font-semibold tracking-[0.06em] uppercase rounded-xl transition-all duration-300"
                style={{ fontFamily: "'DM Sans',sans-serif" }}
              >
                <span className="absolute inset-0 bg-[rgba(33,198,207,0.05)] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-[380ms] rounded-xl" />
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin relative z-[1] text-[#21C6CF]" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="32" strokeDashoffset="12" strokeLinecap="round" />
                    </svg>
                    <span className="relative z-[1]">Loading...</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-[1]">Load More Articles</span>
                    <svg className="relative z-[1] w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" viewBox="0 0 14 14" fill="none">
                      <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}

          {/* All loaded state */}
          {showAll && filtered.length > 0 && (
            <div className="flex flex-col items-center gap-3 mt-14">
              <div className="flex items-center gap-3">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-[rgba(33,198,207,0.2)]" />
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#21C6CF] inline-block" style={{ boxShadow: "0 0 6px #21C6CF" }} />
                  <span className="text-[rgba(255,255,255,0.2)] text-[0.68rem] tracking-widest" style={{ fontFamily: "'DM Sans',sans-serif" }}>All articles loaded</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#21C6CF] inline-block" style={{ boxShadow: "0 0 6px #21C6CF" }} />
                </div>
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-[rgba(33,198,207,0.2)]" />
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ── Newsletter strip ── */}
      <div className="bg-[#050505] relative border-t border-[rgba(33,198,207,0.08)]">
        <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] pointer-events-none" style={{ background: "radial-gradient(ellipse,rgba(33,198,207,0.04) 0%,transparent 70%)" }} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
          <div className="max-w-[600px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-[#21C6CF] text-[0.62rem] tracking-[0.18em] uppercase mb-4" style={{ fontFamily: "'DM Sans',sans-serif" }}>
              <span className="w-[5px] h-[5px] rounded-full bg-[#21C6CF] inline-block" style={{ boxShadow: "0 0 8px #21C6CF" }} />
              Stay Updated
            </div>
            <h3 className="text-white font-bold text-[1.5rem] sm:text-[1.9rem] tracking-[-0.02em] leading-[1.2] mb-3" style={{ fontFamily: "'Syne',sans-serif" }}>
              Get AI Insights Delivered to Your Inbox
            </h3>
            <p className="text-[rgba(255,255,255,0.35)] text-[0.85rem] leading-[1.75] mb-7" style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>
              No spam. Just practical AI insights, industry case studies, and innovation updates from our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5 max-w-[440px] mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[rgba(33,198,207,0.15)] text-white text-[0.83rem] placeholder-[rgba(255,255,255,0.2)] outline-none focus:border-[rgba(33,198,207,0.4)] transition-colors duration-200"
                style={{ fontFamily: "'DM Sans',sans-serif" }}
              />
              <button className="group relative overflow-hidden px-6 py-3 bg-[#21C6CF] text-[#050505] text-[0.8rem] font-semibold tracking-wide rounded-xl hover:shadow-[0_0_20px_rgba(33,198,207,0.3)] transition-shadow duration-300 shrink-0" style={{ fontFamily: "'DM Sans',sans-serif" }}>
                <span className="absolute inset-0 bg-[#0a2f33] scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-[380ms] rounded-xl" />
                <span className="relative z-[1]">Subscribe</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}  