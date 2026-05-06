"use client";

import Link from "next/link";
import { HexBackgroundLight } from "./HexBackgroundLight";

const CTASection = () => {
  return (
    <section
      id="cta"
      className="relative w-full overflow-hidden py-24 bg-transparent"
    >
      {/* ================= BACKGROUND LAYER ================= */}

      {/* Seamless gradient continuation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,18,0)_0%,rgba(3,12,20,0.9)_40%,rgba(3,12,20,1)_100%)]" />
      </div>

      {/* Hex background */}
      <HexBackgroundLight />

      {/* Top blend (merges with previous section) */}
      {/* <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-[#020617]/80 to-transparent pointer-events-none" /> */}

      {/* Ambient glow (main) */}
      <div className="pointer-events-none absolute left-1/2 -top-3000px] w-225 -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(33,198,207,0.12)_0%,transparent_70%)]" />

      {/* Ambient glow (secondary) */}
      <div className="pointer-events-none absolute -bottom-25t-1/3 h-100000px] bg-[radial-gradient(ellipse_at_center,rgba(33,198,207,0.08)_0%,transparent_70%)]" />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 text-center">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(33,198,207,0.35)] bg-[rgba(33,198,207,0.08)] backdrop-blur-md shadow-[0_0_14px_rgba(33,198,207,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#21C6CF] shadow-[0_0_10px_#21C6CF]" />
            <span className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-[#28E7C5]">
              Let’s Work Together
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-bold text-white leading-[1.15] tracking-[-0.02em] text-[1.8rem] sm:text-[2.4rem] lg:text-[3rem] max-w-3xl mx-auto mb-5">
          The Future Won’t{" "}
          <span className="text-[#28E7C5]">Wait.</span> Why Should You?
        </h2>

        {/* Description */}
        <p className="font-['DM_Sans',sans-serif] text-[0.9rem] sm:text-[1rem] leading-[1.75] text-white max-w-xl mx-auto mb-10">
          AI is already transforming industries, careers, and opportunities.
          Those who act now will lead. Those who delay will follow.
          Let’s help you take the first step toward smarter growth and innovation.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Primary */}
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#28E7C5] text-[#071E26] font-['DM_Sans',sans-serif] text-[0.85rem] font-semibold tracking-[0.06em] uppercase rounded-[13px] transition-all duration-300 hover:bg-[#21C6CF] hover:shadow-[0_6px_25px_rgba(33,198,207,0.4)]"
          >
            <span>• Get Started Now</span>
            <svg
              className="transition-transform duration-300 group-hover:translate-x-1"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M2 7H12M8 3L12 7L8 11"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Secondary */}
          <Link
            href="/Courses"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 text-[#28E7C5] font-['DM_Sans',sans-serif] text-[0.85rem] font-semibold tracking-[0.06em] uppercase rounded-[13px] border border-[rgba(33,198,207,0.35)] transition-all duration-300 hover:border-[#21C6CF] hover:bg-[rgba(33,198,207,0.08)] hover:shadow-[0_0_20px_rgba(33,198,207,0.25)]"
          >
            <span>• Explore Our Courses</span>
            <svg
              className="transition-transform duration-300 group-hover:translate-x-1"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M2 7H12M8 3L12 7L8 11"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default CTASection;