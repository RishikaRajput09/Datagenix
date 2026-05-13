import SectionHeading from "./Sectionheading";
import Eyebrow from "./Eyebrow";
import useReveal from "./useReveal";
export default function FounderSpotlight() {
  const r = useReveal(0);

  return (
    <section className="bg-none relative overflow-hidden py-2 lg:pb-12">
      {/* subtle divider */}
      {/* <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[rgba(40,231,197,0.12)] to-transparent" /> */}

      {/* radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-100 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(40,231,197,0.05) 0%, transparent 70%)",
        }}
      />

      <div
        ref={r.ref}
        style={r.style}
        className="relative z-10 max-w-300 mx-auto px-4 sm:px-6 lg:px-10"
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <Eyebrow>Leadership</Eyebrow>
          <SectionHeading>
            The People Behind{" "}
            <span className="text-[#28E7C5]">DatagenixAi</span>
          </SectionHeading>
        </div>

        {/* 🔥 CARD */}
        <div
          className="max-w-195 mx-auto rounded-xl overflow-hidden relative"
          style={{
            background: "rgba(10,16,35,0.7)",
            backdropFilter: "blur(10px)",
            boxShadow: `
              0 10px 40px -10px rgba(40,231,197,0.25),
              0 20px 80px -20px rgba(40,231,197,0.15),
              inset 0 0 0 1px rgba(40,231,197,0.2),
              inset 0 1px 0 rgba(40,231,197,0.15)
            `,
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
                "linear-gradient(90deg, transparent, rgba(40,231,197,0.4), transparent)",
              pointerEvents: "none",
            }}
          />

          <div className="flex flex-col sm:flex-row">
            {/* LEFT SIDE */}
            <div className="sm:w-55 shrink-0 flex items-center justify-center min-h-50 relative border-b sm:border-b-0 sm:border-r border-[rgba(40,231,197,0.12)]">
              <div className="flex flex-col items-center gap-3">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-[#06201c] text-[1.4rem] font-extrabold"
                  style={{
                    
                    background: "none",
                    boxShadow: "0 0 25px rgba(40,231,197,0.35)",
                  }}
                >
                  <img src="/Images/Founder.jpeg" className="rounded-full"/>
                </div>

                <span
                  className="text-[#28E7C5] text-[0.58rem] tracking-[0.16em] uppercase"
                  
                >
                  Founder & Director
                </span>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex-1 p-7 sm:p-8">
              {/* mini eyebrow */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span
                  className="w-1.25 h-1.25 rounded-full bg-[#28E7C5]"
                  style={{ boxShadow: "0 0 6px #28E7C5" }}
                />
                <span
                  className="text-[#28E7C5] text-[0.62rem] tracking-[0.18em] uppercase"
                  
                >
                  Founder & Director
                </span>
              </div>

              <h3
                className="text-white font-bold text-[1.3rem] sm:text-[1.5rem] mb-1 tracking-[-0.01em]"
                
              >
                Mr. Vinay Khilare
              </h3>

              <p
                className="text-[#28E7C5] text-[0.78rem] mb-5"
                
              >
                DatagenixAi · Sangli, Maharashtra
              </p>

              <p
                className="text-[rgba(255,255,255,1)] text-[0.95rem] leading-[1.8] mb-6"
                style={{  fontWeight: 300 }}
              >
                With 12+ years of hands-on industrial R&D experience spanning
                Electronics, Embedded Systems, IoT, and AI — a deep commitment
                to making intelligent technology practical, accessible, and
                impactful across industries and communities.
              </p>

              {/* tags */}
              <div className="flex flex-wrap gap-2">
                {[
                  "Electronics & IoT",
                  "AI Strategy",
                  "Industry R&D",
                  "Community Leadership",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[0.68rem] text-[#28E7C5] border border-[rgba(40,231,197,0.2)] bg-[rgba(40,231,197,0.06)]"
                    
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}