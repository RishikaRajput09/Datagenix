"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/AboutUs" },
  { label: "Products", href: "/Products" },
  { label: "Services", href: "/Services" },
  { label: "Courses", href: "/Courses" },
  // { label: "Blog", href: "/Blogs" },
  { label: "Contact Us", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Products");
  const [isDarkSection, setIsDarkSection] = useState(false);

  useEffect(() => {
    const current = NAV_LINKS.find((link) => {
      if (link.href === "/") return pathname === "/";
      return pathname.startsWith(link.href);
    });

    if (current) setActive(current.label);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      if (window.scrollY <= 60) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDarkSection(entry.target.id === "dark-section");
      },
      { threshold: 0.3 },
    );

    const darkSection = document.getElementById("dark-section");
    if (darkSection) observer.observe(darkSection);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = [
      "hero",
      "about",
      "products",
      "services",
      "courses",
      "blogs",
      "contact",
      "vm",
      "values"
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;

            const match = NAV_LINKS.find(
              (link) =>
                link.href.includes(`#${id}`) ||
                (id === "hero" && link.href === "/"),
            );

            if (match) setActive(match.label);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <style>{`
        @keyframes hueRotate {
          0%   { filter: hue-rotate(0deg);   }
          100% { filter: hue-rotate(360deg); }
        }
        @keyframes pipPulse {
          0%, 100% { opacity: 1;   transform: scale(1);    }
          50%       { opacity: 0.4; transform: scale(0.75); }
        }
        .anim-hue { animation: hueRotate 3s linear      infinite; }
        .anim-pip { animation: pipPulse  2s ease-in-out infinite; }

        .nav-active-dot::after {
          content: '';
          position: absolute;
          bottom: 4px; left: 50%;
          transform: translateX(-50%);
          width: 4px; height: 4px;
          border-radius: 9999px;
          background: #00e5ff;
          box-shadow: 0 0 8px rgba(0,229,255,1), 0 0 16px rgba(0,229,255,0.55);
        }

        .bar-glint::before {
          content: '';
          position: absolute;
          top: 0; left: 30px; right: 30px; height: 0.5px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), rgba(255,255,255,0.18), transparent);
          border-radius: 9999px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .bar-glint.show-glint::before { opacity: 1; }

        .mob-link:not(:last-of-type) {
          border-bottom: 0.5px solid rgba(255,255,255,0.06);
        }

        /* Force hamburger on anything below 1280px — overrides Tailwind lg */
        @media (max-width: 1279px) {
          .nav-desktop-links { display: none !important; }
          .nav-desktop-cta   { display: none !important; }
          .nav-hamburger     { display: flex !important; }
          .nav-mobile-menu   { display: block; }
        }
        @media (min-width: 1280px) {
          .nav-desktop-links { display: flex; }
          .nav-desktop-cta   { display: flex; }
          .nav-hamburger     { display: none !important; }
          .nav-mobile-menu   { display: none; }
        }
      `}</style>

      <nav className="fixed inset-x-0 top-0 z-9999 pointer-events-none">
        {/* Outer padding wrapper */}
        <div
          className={`
transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]
${scrolled ? "translate-y-2" : "translate-y-0"}
          `}
        >
          {/* The bar */}
          <div
            className={`
    pointer-events-auto relative
    flex items-center justify-between
    bar-glint

    transform-gpu will-change-transform

    transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]

    ${
      scrolled
        ? "scale-[0.85] translate-y-1 show-glint"
        : "scale-97 translate-y-4"
    }

    h-24 px-10 rounded-[22px] max-w-full mx-auto

    ${
      isDarkSection
        ? `
    bg-[rgba(10,12,25,0.25)]
    border border-[rgba(255,255,255, 0)]
    text-white
  `
        : `
    bg-[rgba(255,255,255,0.08)]
    border border-[rgba(0,0,0,0.0)]
    text-black
  `
    }
backdrop-blur-[20px]
transition-all duration-500 ease-in-out
    shadow-[0_0_0_0.5px_rgba(0,229,255,0.05)_inset,0_1px_0_rgba(255,255,255,0.07)_inset,0_24px_60px_rgba(0,0,0,0.25),0_6px_20px_rgba(0,0,0,0.6)]
 saturate-150
  `}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 no-underline shrink-0 group"
            >
              <img
                src="/Images/logo-removebg.png"
                alt="Datagenix AI Logo"
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop center links — only show on xl+ (≥1280px) */}
            <div className="nav-desktop-links absolute left-1/2 -translate-x-1/2 items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setActive(link.label)}
                  className={`
  relative px-5 py-3 rounded-[11px]
  text-[18.5px] font-normal tracking-[-0.015em]
  whitespace-nowrap no-underline
  transition-all duration-300 ease-out

  before:absolute before:inset-0 before:rounded-[11px]
 
  before:opacity-0 before:transition-opacity before:duration-300

  hover:before:opacity-100
  hover:scale-[1.2]
  hover:-translate-y-px

  ${
    active === link.label
      ? "text-white nav-active-dot"
      : "text-white/80 hover:text-white"
  }
`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Desktop CTA — only show on xl+ (≥1280px) */}
              <Link
                href="/Courses"
                className="
                  nav-desktop-cta items-center
                  relative p-0.5 rounded-[15px] no-underline shrink-0
                  anim-hue
                  transition-[transform,box-shadow] duration-180
                  hover:-translate-y-px
                  hover:shadow-[0_16px_50px_rgba(0,229,255,0.22),0_0_60px_rgba(168,85,247,0.12)]
                  active:translate-y-0
                "
              >
                <div
                  className="
                    flex items-center gap-2.25 px-6 py-3.5
                    bg-[rgba(0,0,0,0.8)] rounded-[13px]
                    transition-colors duration-200
                    hover:bg-[#090c1a]
                  "
                >
                  <div className="w-1.75 h-1.75 rounded-full shrink-0 bg-[#00e5ff] shadow-[0_0_8px_rgba(0,229,255,0.9)] anim-pip" />
                  <span
                    className="
                      text-[15px] font-semibold tracking-[-0.01em] whitespace-nowrap
                      bg-linear-to-r from-[#00e5ff] to-[#b48fff]
                      bg-clip-text text-transparent
                    "
                  >
                    Explore Courses
                  </span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="shrink-0"
                  >
                    <defs>
                      <linearGradient
                        id="ag"
                        x1="2"
                        y1="10"
                        x2="10"
                        y2="2"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#00e5ff" />
                        <stop offset="1" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M2 10L10 2M10 2H4M10 2V8"
                      stroke="url(#ag)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>

              {/* Hamburger — shown below 1280px (mobile + tablet + iPad Pro) */}
              <button
                className="nav-hamburger flex-col justify-center items-center gap-1.25 w-9.5 h-9.5 bg-transparent border-none cursor-pointer p-0 shrink-0"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                <span
                  className={`block w-5 h-[1.5px] bg-[rgba(255,255,255,0.6)] rounded-sm origin-center transition-transform duration-300 ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`}
                />
                <span
                  className={`block w-5 h-[1.5px] bg-[rgba(255,255,255,0.6)] rounded-sm transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"}`}
                />
                <span
                  className={`block w-5 h-[1.5px] bg-[rgba(255,255,255,0.6)] rounded-sm origin-center transition-transform duration-300 ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`}
                />
              </button>
            </div>
          </div>

          {/* Mobile/tablet dropdown — shown below 1280px */}
          <div
            className={`
              nav-mobile-menu absolute left-6 right-6
              bg-[rgba(6,8,18,0.95)] rounded-[20px] overflow-hidden
              border border-[rgba(255,255,255,0.08)]
              backdrop-blur-2xl saturate-180
              shadow-[0_32px_80px_rgba(0,0,0,0.8)]
              transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)]
              ${
                menuOpen
                  ? "opacity-100 translate-y-4 pointer-events-auto"
                  : "opacity-0 translate-y-0 pointer-events-none"
              }
            `}
          >
            <div className="absolute top-0 left-5 right-5 h-px bg-linear-to-r from-transparent via-[rgba(255,255,255,0.14)] to-transparent" />
            <div className="px-3 pt-2.5 pb-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setMenuOpen(false);
                    setActive(link.label);
                  }}
                  className="
                    mob-link flex items-center justify-between
                    px-3 py-3.25 rounded-[10px]
                    text-[15px] font-normal text-[rgba(255,255,255,1)]
                    no-underline
                    transition-all duration-180
                    hover:text-[rgba(255,255,255,0.9)] hover:bg-[rgba(255,255,255,0.04)]
                    group
                  "
                >
                  <span>{link.label}</span>
                  <span className="text-[13px] text-[#28e7c5] transition-all duration-180 group-hover:translate-x-1 group-hover:text-[rgba(0,229,255,0.7)]">
                    →
                  </span>
                </Link>
              ))}

              <Link
                href="/Courses"
                onClick={() => setMenuOpen(false)}
                className="
                  block w-full mt-3 py-3.5 text-center
                  bg-[#28E7C5]
                  rounded-[14px] no-underline
                  text-[14px] font-semibold text-black tracking-[-0.01em]
                  transition-all duration-200
                  hover:shadow-[0_12px_40px_rgba(0,229,255,0.3)] hover:-translate-y-px
                  active:translate-y-0
                "
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}