"use client";

import Link from "next/link";
import Image from "next/image";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "ESG", href: "/esg" },
  { label: "Contact", href: "/contact" },
];

const SERVICES = [
  { label: "AI & Automation", href: "/services/ai-automation" },
  { label: "Smart City Solutions", href: "/services/smart-cities" },
  { label: "IoT Integration", href: "/services/iot" },
  { label: "AI Training Programs", href: "/services/training" },
  { label: "Digital Transformation", href: "/services/digital" },
  { label: "Data Analytics", href: "/services/analytics" },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#030303] relative overflow-hidden">

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(33,198,207,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(33,198,207,0.025) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(33,198,207,0.3)] to-transparent" />

      {/* Top ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse,rgba(33,198,207,0.04) 0%,transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* ── Main footer grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 py-14 sm:py-16">

          {/* ── Col 1: Brand ── */}
          <div className="lg:col-span-1 flex flex-col gap-5">

            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <Image
                src="/Images/logo.png"
                alt="Datagenix AI Logo"
                width={130}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </div>

            {/* Brand line */}
            <p
              className="text-[rgba(255,255,255,0.35)] text-[0.8rem] leading-[1.75]"
              style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}
            >
              Bridging intelligence and industry — building AI-powered solutions that drive sustainable, inclusive, and impactful growth.
            </p>

            {/* Teal pill tag */}
            <div className="inline-flex items-center gap-1.5 w-fit">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#21C6CF] shrink-0"
                style={{ boxShadow: "0 0 6px #21C6CF" }}
              />
              <span
                className="text-[#21C6CF] text-[0.62rem] tracking-[0.16em] uppercase font-medium"
                style={{ fontFamily: "'DM Sans',sans-serif" }}
              >
                Innovation · ESG · AI
              </span>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2.5 mt-1">
              {SOCIALS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[rgba(255,255,255,0.4)] border border-[rgba(33,198,207,0.1)] bg-[#0a0a0a] hover:border-[#21C6CF] hover:text-[#21C6CF] transition-all duration-300"
                  style={{ boxShadow: "none" }}
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div className="flex flex-col gap-4">
            <FooterColHeading>Quick Links</FooterColHeading>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-2 text-[rgba(255,255,255,0.38)] hover:text-[#21C6CF] text-[0.82rem] transition-colors duration-300"
                    style={{ fontFamily: "'DM Sans',sans-serif" }}
                  >
                    <span
                      className="w-1 h-1 rounded-full bg-[rgba(33,198,207,0.35)] shrink-0 group-hover:bg-[#21C6CF] transition-colors duration-300"
                    />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Services ── */}
          <div className="flex flex-col gap-4">
            <FooterColHeading>Our Services</FooterColHeading>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-2 text-[rgba(255,255,255,0.38)] hover:text-[#21C6CF] text-[0.82rem] transition-colors duration-300"
                    style={{ fontFamily: "'DM Sans',sans-serif" }}
                  >
                    <span className="w-1 h-1 rounded-full bg-[rgba(33,198,207,0.35)] shrink-0 group-hover:bg-[#21C6CF] transition-colors duration-300" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact ── */}
          <div className="flex flex-col gap-4">
            <FooterColHeading>Get In Touch</FooterColHeading>

            <div className="flex flex-col gap-4">

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[rgba(33,198,207,0.07)] border border-[rgba(33,198,207,0.12)] flex items-center justify-center text-[#21C6CF] shrink-0 mt-0.5">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <rect x="1" y="3" width="14" height="10" rx="2" />
                    <path d="M1 5l7 5 7-5" />
                  </svg>
                </div>
                <div>
                  <p className="text-[rgba(255,255,255,0.25)] text-[0.65rem] uppercase tracking-widest mb-0.5" style={{ fontFamily: "'DM Sans',sans-serif" }}>Email</p>
                  <a
                    href="mailto:contact@datagenixai.com"
                    className="text-[rgba(255,255,255,0.55)] hover:text-[#21C6CF] text-[0.8rem] transition-colors duration-300"
                    style={{ fontFamily: "'DM Sans',sans-serif" }}
                  >
                    contact@datagenixai.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[rgba(33,198,207,0.07)] border border-[rgba(33,198,207,0.12)] flex items-center justify-center text-[#21C6CF] shrink-0 mt-0.5">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M2 2.5C2 2.5 3.5 1 5 2.5c.8.8 1.5 2 1 2.5-.5.5-.5 1 0 2s1.5 1.5 2 1c.5-.5 1.7.2 2.5 1C12 10.5 10.5 12 10.5 12 8 14.5 1.5 8 2 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[rgba(255,255,255,0.25)] text-[0.65rem] uppercase tracking-widest mb-0.5" style={{ fontFamily: "'DM Sans',sans-serif" }}>Phone</p>
                  <a
                    href="tel:+91XXXXXXXXXX"
                    className="text-[rgba(255,255,255,0.55)] hover:text-[#21C6CF] text-[0.8rem] transition-colors duration-300"
                    style={{ fontFamily: "'DM Sans',sans-serif" }}
                  >
                    +91 XXXXX XXXXX
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[rgba(33,198,207,0.07)] border border-[rgba(33,198,207,0.12)] flex items-center justify-center text-[#21C6CF] shrink-0 mt-0.5">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M8 1C5.8 1 4 2.8 4 5c0 3.5 4 9 4 9s4-5.5 4-9c0-2.2-1.8-4-4-4z" />
                    <circle cx="8" cy="5" r="1.2" />
                  </svg>
                </div>
                <div>
                  <p className="text-[rgba(255,255,255,0.25)] text-[0.65rem] uppercase tracking-widest mb-0.5" style={{ fontFamily: "'DM Sans',sans-serif" }}>Location</p>
                  <p
                    className="text-[rgba(255,255,255,0.55)] text-[0.8rem] leading-[1.55]"
                    style={{ fontFamily: "'DM Sans',sans-serif" }}
                  >
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(33,198,207,0.15)] to-transparent" />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5">

          {/* Copyright */}
          <p
            className="text-[rgba(255,255,255,0.22)] text-[0.72rem] text-center sm:text-left"
            style={{ fontFamily: "'DM Sans',sans-serif" }}
          >
            © {new Date().getFullYear()} DatagenixAi. All rights reserved.
          </p>

          {/* Legal links */}
          <div className="flex items-center gap-1 flex-wrap justify-center">
            {["Terms & Conditions", "Privacy Policy", "Cookie Policy"].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-1">
                <Link
                  href="#"
                  className="text-[rgba(255,255,255,0.22)] hover:text-[#21C6CF] text-[0.72rem] transition-colors duration-300"
                  style={{ fontFamily: "'DM Sans',sans-serif" }}
                >
                  {item}
                </Link>
                {i < arr.length - 1 && (
                  <span className="text-[rgba(255,255,255,0.12)] text-[0.65rem]">·</span>
                )}
              </span>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}

function FooterColHeading({ children }) {
  return (
    <div className="flex flex-col gap-2">
      <h4
        className="text-white font-bold text-[0.88rem] tracking-[-0.01em]"
        style={{ fontFamily: "'Syne',sans-serif" }}
      >
        {children}
      </h4>
      <div
        className="w-6 h-[2px] rounded-full bg-[#21C6CF]"
        style={{ boxShadow: "0 0 6px rgba(33,198,207,0.5)" }}
      />
    </div>
  );
}