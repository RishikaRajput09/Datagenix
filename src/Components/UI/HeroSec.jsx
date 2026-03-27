"use client";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen w-full flex items-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-bg1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      {/* Ambient glow accents */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none bg-[radial-gradient(circle,#6633FF_0%,transparent_70%)]" />
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none bg-[radial-gradient(circle,#21C6CF_0%,transparent_70%)]" />

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex items-center">
        <div
          className="w-full max-w-[540px] sm:max-w-[600px] lg:max-w-xl"
          style={{ animation: "heroFadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both" }}
        >

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm font-['DM_Sans',sans-serif] text-[0.62rem] sm:text-[0.68rem] font-medium tracking-[0.18em] uppercase text-white/60">
            <span
              className="w-[5px] h-[5px] rounded-full bg-[#21C6CF] shadow-[0_0_8px_#21C6CF] inline-block shrink-0"
              style={{ animation: "pulse 2s infinite" }}
            />
            AI-Powered Solutions
          </div>

          {/* Heading */}
          <h1 className="font-['Syne',sans-serif] font-bold leading-[1.05] tracking-[-0.02em] text-[2.8rem] sm:text-5xl md:text-6xl lg:text-7xl">

            <span className="whitespace-nowrap">
              AI Innovation
            </span>

            <br />

            <span className="text-white/90 font-light">for Business</span>

            <br />

            <span
              style={{
                background: "linear-gradient(135deg, #21C6CF 0%, #818cf8 50%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
              }}
            >
              Growth.
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-5 sm:mt-6 font-['DM_Sans',sans-serif] font-light text-sm sm:text-base md:text-lg leading-relaxed text-[rgba(255,255,255,0.45)] max-w-sm sm:max-w-md">
            DatagenixAi builds intelligent products and customized AI solutions to help businesses thrive in the AI era.
          </p>

          {/* Buttons */}
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">

            {/* Primary CTA */}
            <button className="group relative overflow-hidden inline-block px-5 sm:px-[30px] py-3 sm:py-[13px] font-['DM_Sans',sans-serif] text-[0.75rem] sm:text-[0.82rem] font-semibold tracking-[0.06em] text-white bg-[#6633FF] border border-[#6633FF] cursor-pointer transition-shadow duration-300 hover:shadow-[0_6px_28px_rgba(102,51,255,0.55)]">
              <span className="absolute inset-0 bg-[#1a0066] scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-[380ms] ease-[cubic-bezier(0.76,0,0.24,1)]" />
              <span className="relative z-10 whitespace-nowrap">Book Free AI Consultation</span>
            </button>

            {/* Ghost CTA */}
            <button className="group relative overflow-hidden inline-block px-5 sm:px-[30px] py-3 sm:py-[13px] font-['DM_Sans',sans-serif] text-[0.75rem] sm:text-[0.82rem] font-semibold tracking-[0.06em] text-[rgba(255,255,255,0.75)] bg-transparent border border-[rgba(255,255,255,0.28)] cursor-pointer transition-all duration-300 hover:text-[#21C6CF] hover:border-[rgba(33,198,207,0.6)] hover:shadow-[0_0_20px_rgba(33,198,207,0.18)]">
              <span className="absolute inset-0 bg-[rgba(33,198,207,0.08)] scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-[380ms] ease-[cubic-bezier(0.76,0,0.24,1)]" />
              <span className="relative z-10 whitespace-nowrap">Start Learning AI</span>
            </button>

          </div>

          {/* Trust line */}
          <div className="mt-7 sm:mt-8 flex items-center gap-3">
            <div className="flex -space-x-2 shrink-0">
              {["#6633FF", "#21C6CF", "#a78bfa"].map((c, i) => (
                <div
                  key={i}
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-black/40 flex items-center justify-center font-['Syne',sans-serif] text-[0.6rem] sm:text-xs font-bold"
                  style={{ background: c, zIndex: 3 - i }}
                >
                  {["A", "B", "C"][i]}
                </div>
              ))}
            </div>
            <p className="font-['DM_Sans',sans-serif] text-[0.7rem] sm:text-xs text-[rgba(255,255,255,0.4)] leading-snug">
              Working toward responsible AI adoption aligned with global goals.
            </p>
          </div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;600&display=swap');

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.75); }
        }

        /* Mobile: shrink section min-height so content never clips */
        @media (max-width: 480px) {
          #hero-section {
            min-height: 100svh;
            height: auto;
            padding: 100px 0 60px;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}