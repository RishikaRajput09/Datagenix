"use client";

import { useState, useEffect, useCallback } from "react";

const AWARDS = [
    {
        id: 1,
        tag: "Media Coverage",
        symbol: "◈",
        heading: "Felicitation for 'AIRIAA' in Pudhari Newspaper",
        body: "Launch of 'AIRIAA' — an AI-powered Admission & Information Assistant. Coverage on the launch of AI-driven admission assistance at PVPIT, recognising the innovation in student outreach.",
        image: "/Images/Pudhari.jpg",
        imageAlt: "Pudhari Newspaper coverage of AIRIAA launch",
        imageLabel: "Pudhari Newspaper",
        footer: "AI transforming admissions, one student at a time.",
    },
    {
        id: 2,
        tag: "Media Coverage",
        symbol: "⬡",
        heading: "Launch of 'AIRIAA' Featured in Sakal Newspaper",
        body: "Feature on AI making the admission process smarter and more inclusive. AIRIAA was designed to transform student engagement and streamline institutional processes across campuses.",
        image: "/Images/Sakal.jpg",
        imageAlt: "Sakal Newspaper feature on AIRIAA",
        imageLabel: "Sakal Newspaper",
        footer: "Smarter admissions, broader reach.",
    },
    {
        id: 3,
        tag: "Digital Media",
        symbol: "◎",
        heading: "Higher Education & Digital News Portals",
        body: "We built and deployed 'AIRIAA' and received recognition from Infimit and digital higher-education portals for strengthening industry-academia collaboration through applied AI.",
        image: "/Images/Infimit.jpg",
        imageAlt: "Infimit digital news portal coverage",
        imageLabel: "Infimit News Portal",
        footer: "Industry-academia bridges, built with AI.",
    },
    {
        id: 4,
        tag: "Award",
        symbol: "◆",
        heading: "Prize at AI in Media Hackathon, Pune",
        body: "We won the prize at the 'AI in Media Hackathon, Pune' for presenting an innovative AI-driven solution — recognised for clarity of vision, real-world applicability, and impactful presentation.",
        image: "/Images/Media.jpg",
        imageAlt: "AI in Media Hackathon award ceremony",
        imageLabel: "AI in Media Hackathon",
        footer: "Innovation recognised, vision validated.",
    },
    {
        id: 5,
        tag: "Community Impact",
        symbol: "⬢",
        heading: "Leadership & Community Impact",
        body: "Our Founder & Director serves as Chartered President of the Rotaract Club of Sangli Midtown Synergy, leading social, professional, and community initiatives in collaboration with Rotaract and DatagenixAi.",
        image: "/Images/Impact.jpg",
        imageAlt: "Rotaract Club leadership and community impact",
        imageLabel: "Rotaract Club Sangli",
        footer: "Leading communities, shaping futures.",
    },
    {
        id: 6,
        tag: "Appreciation",
        symbol: "◉",
        heading: "Appreciation from AMIEE Association",
        body: "Received appreciation from AMIEE Association for conducting a Faculty Development Program on Applications of AI & ML in Electrical Engineering — empowering educators and professionals with AI-driven insights.",
        image: "/Images/FDP.jpg",
        imageAlt: "AMIEE Association appreciation certificate",
        imageLabel: "AMIEE Association",
        footer: "Empowering educators with AI knowledge.",
    },
];

export default function AwardsSection() {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState("next");
    const [imgErrors, setImgErrors] = useState({});
    const total = AWARDS.length;

    const goTo = useCallback(
        (index, dir = "next") => {
            if (animating) return;
            setDirection(dir);
            setAnimating(true);
            setTimeout(() => {
                setCurrent(index);
                setAnimating(false);
            }, 350);
        },
        [animating]
    );

    const prev = () => goTo((current - 1 + total) % total, "prev");
    const next = () => goTo((current + 1) % total, "next");

    useEffect(() => {
        const t = setInterval(() => {
            goTo((current + 1) % total, "next");
        }, 6000);
        return () => clearInterval(t);
    }, [current, goTo, total]);

    const award = AWARDS[current];

    return (
        <section
            id="awards"
            className="bg-[#050505] relative overflow-hidden py-8"
        >
            {/* Grid background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(33,198,207,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(33,198,207,0.04) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />
            {/* Ambient glow — left side */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(33,198,207,0.06)_0%,transparent_70%)] pointer-events-none" />

            {/* ── Header ── */}
            <div className="relative z-[2] text-center mb-8 px-4">
                <div className="inline-flex items-center gap-2 font-['DM_Sans',sans-serif] text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-[#21C6CF] mb-4">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#21C6CF] shadow-[0_0_8px_#21C6CF] inline-block shrink-0" />
                    Awards and Recognition
                </div>

                <h2 className="font-['Syne',sans-serif] text-[clamp(1.9rem,3.2vw,3rem)] font-bold text-white leading-[1.2] tracking-[-0.02em] max-w-[640px] mx-auto m-0">
                    Awards and <span className="text-[#21C6CF]">Media Coverage</span>
                </h2>
            </div>

            {/* ── Two-column split ── */}
            <div className="relative z-[2] flex flex-col lg:flex-row gap-0">

                {/* ── LEFT: Content panel ── */}
                <div className="flex flex-col justify-between w-full lg:w-[48%] px-6 sm:px-10 lg:px-16 pt-6 pb-10 lg:pb-12">

                    {/* Card content */}
                    <div
                        className="flex-1 flex flex-col justify-center"
                        style={{
                            opacity: animating ? 0 : 1,
                            transform: animating
                                ? direction === "next"
                                    ? "translateY(18px)"
                                    : "translateY(-18px)"
                                : "translateY(0)",
                            transition: "opacity 0.35s ease, transform 0.35s ease",
                        }}
                    >
                        {/* Tag */}
                        <div className="inline-flex items-center gap-1.5 mb-5">
                            <span className="w-1 h-1 rounded-full bg-[#21C6CF] shadow-[0_0_5px_rgba(33,198,207,0.8)] inline-block shrink-0" />
                            <span className="font-['DM_Sans',sans-serif] text-[0.58rem] sm:text-[0.63rem] font-medium tracking-[0.16em] uppercase text-[rgba(33,198,207,0.65)]">
                                {award.tag}
                            </span>
                        </div>

                        {/* Large quote mark */}
                        <div
                            className="font-['Syne',sans-serif] text-[5rem] sm:text-[6rem] leading-none text-[rgba(33,198,207,0.15)] mb-2 select-none"
                            aria-hidden="true"
                        >
                            "
                        </div>

                        {/* Heading */}
                        <h2 className="font-['Syne',sans-serif] text-[1.45rem] sm:text-[1.7rem] lg:text-[1.9rem] font-bold text-white leading-[1.25] tracking-[-0.02em] mb-5">
                            {award.heading}
                        </h2>

                        {/* Divider */}
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-px bg-[rgba(33,198,207,0.35)]" />
                            <span className="w-1 h-1 rounded-full bg-[#21C6CF] inline-block" />
                            <div className="w-10 h-px bg-[rgba(33,198,207,0.35)]" />
                        </div>

                        {/* Body */}
                        <p
                            className="font-['DM_Sans',sans-serif] text-[0.875rem] sm:text-[0.95rem] leading-7 sm:leading-8 text-[rgba(255,255,255,0.45)] mb-7 max-w-[500px]"
                            style={{ fontStyle: "italic" }}
                        >
                            {award.body}
                        </p>

                        {/* Footer attribution */}
                        <div className="border-t border-[rgba(255,255,255,0.05)] pt-5">
                            <p className="font-['DM_Sans',sans-serif] text-[0.78rem] sm:text-[0.82rem] italic text-[rgba(33,198,207,0.6)] leading-[1.5]">
                                {award.footer}
                            </p>
                        </div>
                    </div>

                    {/* Nav controls */}
                    <div className="flex items-center gap-5 mt-8">
                        <button
                            onClick={prev}
                            className="w-11 h-11 rounded-none border border-[rgba(33,198,207,0.2)] bg-transparent flex items-center justify-center text-[rgba(33,198,207,0.6)] hover:border-[#21C6CF] hover:text-[#21C6CF] hover:bg-[rgba(33,198,207,0.06)] transition-all duration-200"
                            aria-label="Previous"
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <button
                            onClick={next}
                            className="w-11 h-11 rounded-none border border-[rgba(33,198,207,0.2)] bg-transparent flex items-center justify-center text-[rgba(33,198,207,0.6)] hover:border-[#21C6CF] hover:text-[#21C6CF] hover:bg-[rgba(33,198,207,0.06)] transition-all duration-200"
                            aria-label="Next"
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <div className="flex items-center gap-2">
                            {AWARDS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i, i > current ? "next" : "prev")}
                                    className={`rounded-full transition-all duration-300 ${i === current
                                        ? "w-5 h-[4px] bg-[#21C6CF] shadow-[0_0_8px_rgba(33,198,207,0.7)]"
                                        : "w-[4px] h-[4px] bg-[rgba(33,198,207,0.2)] hover:bg-[rgba(33,198,207,0.45)]"
                                        }`}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>

                        <span className="font-['DM_Sans',sans-serif] text-[0.7rem] tracking-[0.12em] text-[rgba(255,255,255,0.2)] ml-1">
                            {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                        </span>
                    </div>
                </div>

                {/* ── RIGHT: Image panel ── */}
                <div className="relative w-full lg:w-[52%] h-64 sm:h-80 lg:h-auto min-h-[420px] overflow-hidden">
                    <div
                        className="absolute inset-0"
                        style={{
                            opacity: animating ? 0 : 1,
                            transform: animating
                                ? direction === "next"
                                    ? "scale(1.04)"
                                    : "scale(0.97)"
                                : "scale(1)",
                            transition: "opacity 0.5s ease, transform 0.5s ease",
                        }}
                    >
                        {!imgErrors[current] ? (
                            <img
                                src={award.image}
                                alt={award.imageAlt}
                                onError={() => setImgErrors((prev) => ({ ...prev, [current]: true }))}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-[#0d0d0d] flex flex-col items-center justify-center gap-4">
                                <span className="text-[4rem] text-[#21C6CF] opacity-20">{award.symbol}</span>
                                <span className="font-['DM_Sans',sans-serif] text-[0.6rem] tracking-[0.2em] uppercase text-[rgba(33,198,207,0.3)]">
                                    {award.tag}
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none hidden lg:block" />

                    <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-[rgba(5,5,5,0.85)] to-transparent">
                        <span className="font-['DM_Sans',sans-serif] text-[0.58rem] font-medium tracking-[0.18em] uppercase text-[rgba(33,198,207,0.55)]">
                            {award.imageLabel}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}