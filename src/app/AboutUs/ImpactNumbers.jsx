import useReveal from "./useReveal";
import Eyebrow from "./Eyebrow";
import SectionHeading from "./Sectionheading";

const STATS = [
  {
    value: "12+",
    label: "Years Experience",
    desc: "Deep industrial R&D background",
  },
  {
    value: "500+",
    label: "Businesses Impacted",
    desc: "Across diverse industries",
  },
  {
    value: "3",
    label: "Core Pillars",
    desc: "Products · Solutions · Training",
  },
  { value: "∞", label: "Community Reach", desc: "Growing impact nationwide" },
];

export default function ImpactNumbers() {
  const r = useReveal(0);

  return (
    <section className="bg-none relative overflow-hidden py-6 lg:mb-12">
      {/* <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[rgba(33,198,207,0.15)] to-transparent" /> */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[rgba(33,198,207,0.1)] to-transparent" /> */}

      <div
        ref={r.ref}
        style={r.style}
        className="relative z-10 max-w-300 mx-auto px-4 sm:px-6 lg:px-10"
      >
        <div className="text-center mb-12">
          <Eyebrow>By The Numbers</Eyebrow>
          <SectionHeading>
            Our <span className="text-[#28E7C5]">Impact</span> in Numbers
          </SectionHeading>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="group rounded-xl p-6 sm:p-7 text-center transition-all duration-300"
              style={{
                position: "relative",
                background: "rgba(10, 16, 35, 0.55)",
              }}
            >
              {/* Top shimmer */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "20%",
                  right: "20%",
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, rgba(100,160,255,0.4), transparent)",
                  pointerEvents: "none",
                }}
              />              

              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  className="text-[2.6rem] sm:text-[3.2rem] font-extrabold text-[#28E7C5] leading-none mb-2"
                  style={{
                    
                    textShadow: "0 0 30px rgba(33,198,207,0.3)",
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="text-white font-bold text-[0.85rem] mb-1.5 leading-snug"
                  
                >
                  {s.label}
                </div>
                <p
                  className="text-[rgba(255,255,255,1)] text-[0.72rem] leading-[1.55]"
                  
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}