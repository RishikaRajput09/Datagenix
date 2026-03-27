"use client";

const FEATURES = [
  {
    symbol: "◈",
    heading: "Businesses & Industries",
    points: [
      "Limited integration between hardware, IoT, software, and AI",
      "Lack of practical AI implementation expertise",
      "Fragmented technology solutions",
      "Inefficient operations and manual workflows",
    ],
  },
  {
    symbol: "⬡",
    heading: "Professionals",
    points: [
      "Learning AI theoretically without real applications",
      "Lack of mentorship and industry exposure",
    ],
  },
];

const STATS = [
  {
    value: "500+",
    label: "Businesses Impacted",
    desc: "Organizations across industries adopting AI with our guidance.",
  },
  {
    value: "10x",
    label: "Faster AI Adoption",
    desc: "Our structured approach cuts implementation time drastically.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#050505] relative overflow-hidden py-2 sm:py-2">

      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(33,198,207,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(33,198,207,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* ── Header block ── */}
        <div className="mb-2 sm:mb-12">

          {/* Eyebrow */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 font-['DM_Sans',sans-serif] text-[0.62rem] sm:text-[0.68rem] font-medium tracking-[0.18em] uppercase text-[#21C6CF] mb-3">
              <span className="w-[5px] h-[5px] rounded-full bg-[#21C6CF] shadow-[0_0_8px_#21C6CF] inline-block shrink-0" />
              Why Choose Us
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-['Syne',sans-serif] text-[1.8rem] sm:text-[2.4rem] lg:text-[3rem] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-4 max-w-2xl mx-auto text-center">
            The World Is Adopting AI.{" "}
            <span className="text-[#21C6CF]">Are You Ready?</span>
          </h2>
        </div>

        {/* ── Main layout: image left + features right ── */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-5">

          {/* Left: image block */}
          <div className="relative lg:w-[45%] rounded-2xl overflow-hidden min-h-[300px] sm:min-h-[380px] lg:min-h-0 border border-[rgba(33,198,207,0.1)]">
            <img
              src="/images/whychoose.png"
              alt="AI collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />

            {/* Floating card */}
            <div className="absolute bottom-4 left-4 w-[200px] sm:w-[220px] bg-[rgba(5,5,5,0.88)] backdrop-blur-md border border-[rgba(33,198,207,0.15)] rounded-xl p-3.5">
              <div className="flex items-center justify-between mb-2.5">
                <span className="font-['Syne',sans-serif] text-[0.78rem] font-bold text-white">AI Adoption</span>
                <span className="font-['DM_Sans',sans-serif] text-[0.58rem] tracking-widest uppercase text-[#21C6CF]">Live</span>
              </div>
              <div className="flex items-end gap-1 h-9">
                {[40, 55, 45, 70, 60, 85, 75].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm" style={{
                    height: `${h}%`,
                    background: i === 5 ? "#21C6CF" : "rgba(33,198,207,0.22)",
                  }} />
                ))}
              </div>
              <div className="flex justify-between mt-1.5">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <span key={i} className="font-['DM_Sans',sans-serif] text-[0.52rem] text-[rgba(255,255,255,0.3)]">{d}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: features + stats */}
          <div className="lg:flex-1 flex flex-col gap-3">

            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 sm:p-5 rounded-xl border border-[rgba(33,198,207,0.08)] bg-[#0a0a0a] hover:border-[rgba(33,198,207,0.22)] transition-colors duration-300"
              >
                <div className="shrink-0 w-9 h-9 rounded-lg bg-[rgba(33,198,207,0.08)] border border-[rgba(33,198,207,0.15)] flex items-center justify-center text-[#21C6CF] text-base">
                  {f.symbol}
                </div>
                <div className="min-w-0">
                  <h3 className="font-['Syne',sans-serif] text-[0.95rem] font-bold text-white mb-2 leading-snug">
                    {f.heading}
                  </h3>
                  <ul className="flex flex-col gap-1.5">
                    {f.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2 font-['DM_Sans',sans-serif] text-[0.8rem] leading-[1.55] text-[rgba(255,255,255,0.38)]">
                        <span className="w-1 h-1 rounded-full bg-[#21C6CF] shrink-0 mt-[6px] shadow-[0_0_4px_rgba(33,198,207,0.5)]" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((s, i) => (
                <div key={i} className="p-4 sm:p-5 rounded-xl border border-[rgba(33,198,207,0.08)] bg-[#0a0a0a] hover:border-[rgba(33,198,207,0.22)] transition-colors duration-300">
                  <div className="font-['Syne',sans-serif] text-[2rem] sm:text-[2.4rem] font-extrabold text-[#21C6CF] leading-none mb-1.5">
                    {s.value}
                  </div>
                  <div className="font-['Syne',sans-serif] text-[0.82rem] font-bold text-white mb-1 leading-snug">
                    {s.label}
                  </div>
                  <p className="font-['DM_Sans',sans-serif] text-[0.75rem] leading-[1.55] text-[rgba(255,255,255,0.35)]">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}