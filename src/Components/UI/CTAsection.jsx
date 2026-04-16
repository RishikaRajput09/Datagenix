"use client";
import Link from "next/link";
import { HoverBorderGradient } from "./noiseEffectButton";
import { HexBackgroundLight } from "./HexBackgroundLight";

const CTASection = () => {
    return (
        <section
            id="cta"
            className="bg-[#f5f2ee] w-[97%] rounded-2xl mx-auto relative overflow-hidden py-4"
        >
            {/* Hex background */}
            <HexBackgroundLight />

            {/* Center glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-[radial-gradient(ellipse_at_center,rgba(13,155,163,0.08)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10 max-w-300 mx-auto px-4 sm:px-6 lg:px-10 text-center">

                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 font-['DM_Sans',sans-serif] text-[0.62rem] sm:text-[0.68rem] font-medium tracking-[0.18em] uppercase text-[#0d9ba3] mb-4">
                    <span className="w-1.25 h-1.25 rounded-full bg-[#0d9ba3] shadow-[0_0_8px_rgba(13,155,163,0.5)] inline-block shrink-0" />
                    Let's Work Together
                </div>

                {/* Headline */}
                <h2 className="font-['Syne',sans-serif] font-bold text-[#111111] leading-[1.15] tracking-[-0.02em] text-[1.7rem] sm:text-[2.2rem] lg:text-[2.8rem] max-w-190 mx-auto mb-4">
                    The Future Will Belong to{" "}
                    <span className="text-[#0d9ba3]">AI-Driven</span>{" "}
                    Organizations &{" "}
                    <span className="text-[#0d9ba3]">AI-Skilled</span>{" "}
                    Professionals
                </h2>

                {/* Short info */}
                <p className="font-['DM_Sans',sans-serif] text-[0.82rem] sm:text-[0.9rem] leading-[1.75] text-[rgba(0,0,0,0.45)] max-w-130 mx-auto mb-7" style={{ fontWeight: 300 }}>
                    Whether you are a business leader looking to innovate or a professional
                    aiming to future-proof your career, DatagenixAi helps you unlock the
                    power of Artificial Intelligence.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">

                    {/* Primary — For Business */}
                    <Link
                        href="#contact"
                        className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#0d9ba3] text-white font-['DM_Sans',sans-serif] text-[0.82rem] font-semibold tracking-[0.06em] uppercase rounded-full transition-all duration-300 hover:bg-[#0b8a92] hover:shadow-[0_4px_20px_rgba(13,155,163,0.3)]"
                    >
                        <span>For Business</span>
                        <svg className="transition-transform duration-300 group-hover:translate-x-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>

                    {/* Secondary — For Learners */}
                    <Link
                        href="#courses"
                        className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent text-[#0d9ba3] font-['DM_Sans',sans-serif] text-[0.82rem] font-semibold tracking-[0.06em] uppercase rounded-full border border-[rgba(13,155,163,0.35)] transition-all duration-300 hover:border-[#0d9ba3] hover:bg-[rgba(13,155,163,0.06)]"
                    >
                        <span>For Learners</span>
                        <svg className="transition-transform duration-300 group-hover:translate-x-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>

                </div>

            </div>
        </section>
    );
};

export default CTASection;