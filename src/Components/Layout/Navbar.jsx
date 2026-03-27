"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About Us", href: "AboutUs" },
  { label: "Products", href: "Products" },
  { label: "Services", href: "Services" },
  { label: "Courses", href: "Courses" },
  { label: "Blog", href: "Blogs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        .logo-highlight {
          background: linear-gradient(135deg, #00d2ff 0%, #7b61ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-link-underline {
          position: relative;
        }
        .nav-link-underline::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #00d2ff, #7b61ff);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link-underline:hover::after { width: 100%; }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        .pulse-dot { animation: pulse-dot 2s infinite; }

        @keyframes scan {
          0%, 100% { opacity: 0; transform: scaleX(0); }
          50% { opacity: 0.4; transform: scaleX(1); }
        }
        .scan-line { animation: scan 4s ease-in-out infinite; }

        .ham-open .ham-line-1 { transform: translateY(6.5px) rotate(45deg); }
        .ham-open .ham-line-2 { opacity: 0; transform: scaleX(0); }
        .ham-open .ham-line-3 { transform: translateY(-6.5px) rotate(-45deg); }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 font-['Syne',sans-serif]">

        {/* ── Main bar ── */}
        <div
          className={`relative transition-all duration-400 ease-in-out ${
            scrolled
              ? "bg-[rgba(4,10,28,0.88)] backdrop-blur-xl border-b border-[rgba(0,210,255,0.12)] shadow-[0_4px_40px_rgba(0,0,0,0.4)]"
              : "bg-transparent backdrop-blur-none border-b border-transparent"
          }`}
        >
          {/* Scan line */}
          <div className="scan-line absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d2ff] to-transparent" />

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-[70px]">

              {/* ── Logo ── */}
              <Link href="/" className="flex items-center gap-2.5 group shrink-0">  
                {/* Wordmark */}
                <span className="font-['Syne',sans-serif] font-extrabold text-white text-[1.2rem] sm:text-[1.25rem] leading-none tracking-[-0.02em]">
                  Data<span className="logo-highlight">genix</span>Ai
                </span>
              </Link>

              {/* ── Desktop links ── */}
              <div className="hidden lg:flex items-center gap-7 xl:gap-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="nav-link-underline font-['DM_Sans',sans-serif] font-medium text-[0.875rem] tracking-[0.02em] text-[rgba(200,220,255,0.75)] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* ── Desktop actions ── */}
              <div className="hidden lg:flex items-center gap-3">
                {/* AI Live badge */}
                <div className="flex items-center gap-1.5 mr-1">
                  <span className="pulse-dot w-[4px] h-[4px] rounded-full bg-[#00d2ff] shadow-[0_0_6px_#00d2ff] inline-block shrink-0" />
                  <span className="font-['DM_Sans',sans-serif] text-[0.68rem] text-[rgba(0,210,255,0.6)] tracking-[0.06em] uppercase">
                    AI LIVE
                  </span>
                </div>

                {/* CTA button */}
                <Link
                  href="#consultation"
                  className="group relative overflow-hidden inline-block px-[22px] py-[10px] font-['DM_Sans',sans-serif] text-[0.8rem] font-semibold tracking-[0.06em] text-white bg-[#6633FF] border border-[#6633FF] transition-shadow duration-300 hover:shadow-[0_6px_28px_rgba(102,51,255,0.55)]"
                >
                  <span className="absolute inset-0 bg-[#1a0066] scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-[380ms] ease-[cubic-bezier(0.76,0,0.24,1)]" />
                  <span className="relative z-10">Book Free Call</span>
                </Link>
              </div>

              {/* ── Hamburger ── */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                className={`lg:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 shrink-0 ${menuOpen ? "ham-open" : ""}`}
              >
                <span className="ham-line-1 block w-[22px] h-[1.5px] bg-[rgba(200,220,255,0.85)] rounded-sm transition-all duration-300 origin-center" />
                <span className="ham-line-2 block w-[22px] h-[1.5px] bg-[rgba(200,220,255,0.85)] rounded-sm transition-all duration-300 origin-center" />
                <span className="ham-line-3 block w-[22px] h-[1.5px] bg-[rgba(200,220,255,0.85)] rounded-sm transition-all duration-300 origin-center" />
              </button>

            </div>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        <div
          className={`lg:hidden absolute w-full bg-[rgba(4,10,28,0.97)] backdrop-blur-[30px] border-b border-[rgba(0,210,255,0.06)] transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-6 py-1">

            {/* Nav links */}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between py-[14px] border-b border-[rgba(255,255,255,0.04)] font-['DM_Sans',sans-serif] font-medium text-[0.9375rem] text-[rgba(200,220,255,0.75)] hover:text-white transition-colors duration-200"
              >
                <span>{link.label}</span>
                <span className="text-[rgba(0,210,255,0.5)] text-xs group-hover:translate-x-1 group-hover:text-[#00d2ff] transition-all duration-200">→</span>
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="py-5">
              <Link
                href="#consultation"
                onClick={() => setMenuOpen(false)}
                className="group relative overflow-hidden block text-center px-6 py-3 font-['DM_Sans',sans-serif] text-[0.82rem] font-semibold tracking-[0.06em] text-white bg-[#6633FF] border border-[#6633FF] transition-shadow duration-300 hover:shadow-[0_6px_28px_rgba(102,51,255,0.55)]"
              >
                <span className="absolute inset-0 bg-[#1a0066] scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-[380ms] ease-[cubic-bezier(0.76,0,0.24,1)]" />
                <span className="relative z-10">Book Free AI Consultation</span>
              </Link>
            </div>

            {/* Mobile footer tag */}
            <div className="pb-4 flex items-center gap-2">
              <span className="pulse-dot w-[4px] h-[4px] rounded-full bg-[#00d2ff] shadow-[0_0_6px_#00d2ff] inline-block shrink-0" />
              <span className="font-['DM_Sans',sans-serif] text-[0.65rem] text-[rgba(0,210,255,0.5)] tracking-[0.06em] uppercase">
                Responsible AI · Global Standards
              </span>
            </div>

          </div>
        </div>

      </nav>
    </>
  );
}