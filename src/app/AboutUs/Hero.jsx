"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Eyebrow from "./Eyebrow";


export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  return (
    <section className="bg-[none] relative overflow-hidden min-h-[90vh] flex items-center py-12">
      {/* Top shimmer */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[rgba(33,198,207,0.3)] to-transparent" />

      <div className="relative z-10 max-w-300 mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 w-full">
        <div className="max-w-195">
          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.65s ease 100ms, transform 0.65s ease 100ms",
            }}
          >
            <Eyebrow>About DatagenixAi</Eyebrow>
          </div>

          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transition:
                "opacity 0.65s ease 200ms, transform 0.65s ease 200ms",
            }}
          >
            <h1
              className="text-[2.4rem] sm:text-[3.2rem] lg:text-[4.2rem] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-6"
            >
              Where Engineering Meets{" "}
              <span className="text-[#28E7C5]">Intelligence</span>
            </h1>
          </div>

          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transition:
                "opacity 0.65s ease 320ms, transform 0.65s ease 320ms",
            }}
          >
            <p
              className="text-[rgba(255,255,255,1)] text-[0.95rem] sm:text-[1.05rem] leading-[1.8] max-w-145 mb-10"
            >
              Founded on a simple but powerful belief — Artificial Intelligence
              should not remain limited to large technology companies. It should
              empower businesses, industries, and individuals everywhere.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-3"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transition:
                "opacity 0.65s ease 420ms, transform 0.65s ease 420ms",
            }}
          >
            <Link
              href="/Products"
              className="group relative overflow-hidden inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#28E7C5] text-[#050505] rounded-[13px] text-[0.82rem] font-semibold tracking-[0.06em] uppercase transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(33,198,207,0.35)]"
            >
              <span className="absolute inset-0 bg-[none] scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-380" />
              <span className="relative z-1">Our Work</span>
              <svg
                className="relative z-1 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
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
            <Link
              href="/#contact"
              className="group relative overflow-hidden inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent rounded-[13px] border border-[rgba(33,198,207,0.3)] text-[#28E7C5] text-[0.82rem] font-semibold tracking-[0.06em] uppercase hover:border-[#21C6CF] transition-all duration-300"
              
            >
              <span className="absolute inset-0 bg-[rgba(33,198,207,0.08)] scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-380" />
              <span className="relative z-1">Contact Us</span>
              <svg
                className="relative z-1 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
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
      </div>

      {/* Bottom shimmer */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[rgba(33,198,207,0.15)] to-transparent" />
    </section>
  );
}