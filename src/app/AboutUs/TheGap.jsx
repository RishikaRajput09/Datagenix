import useReveal from "./useReveal";
import Eyebrow from "./Eyebrow";
import SectionHeading from "./Sectionheading";


export default function TheGap() {
  const r = useReveal(0);

  return (
    <section className="bg-none w-[97%] mx-auto rounded-2xl relative overflow-hidden py-8">
      <div
        ref={r.ref}
        style={r.style}
        className="relative z-10 max-w-325 mx-auto px-4 sm:px-6 lg:px-10"
      >
        <div className="text-center mb-12">
          <Eyebrow>The Problem We Solved</Eyebrow>
          <SectionHeading>
            The Gap We Set Out to <span className="text-[#28E7C5]">Fill</span>
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              num: "01",
              title: "Industries Couldn't Convert Data into Intelligence",
              body: "Machines and businesses were generating enormous amounts of data across every operation. Yet the tools, expertise, and systems to turn that data into actionable decisions simply didn't exist at the ground level.",
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              ),
            },
            {
              num: "02",
              title: "Growing Gap Between AI Innovation & Skilled Talent",
              body: "AI was advancing rapidly in research labs and large tech companies, but the professionals and organizations who needed it most lacked practical skills, mentorship, and real-world exposure to implement it effectively.",
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              ),
            },
            {
              num: "03",
              title: "Lack of Scalable Real-World Implementation",
              body: "Even when solutions existed, they were not scalable or adaptable for diverse industries, creating a disconnect between innovation and execution.",
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              ),
            },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                borderRadius: "18px",
                padding: "36px 28px 60px",
                minHeight: "320px",
                background: "rgba(10, 16, 35, 0.55)",
                overflow: "hidden",
                boxShadow: `
                0 10px 40px -10px rgba(33,198,207,0.25),
                0 20px 80px -20px rgba(33,198,207,0.18),
                inset 0 0 0 1px rgba(33,198,207,0.25),
                inset 0 1px 0 rgba(33,198,207,0.2),
              `,
              }}
            >
              {/* Subtle top shimmer */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "20%",
                  right: "20%",
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, rgba(100,160,255,0.4), transparent)",
                }}
              />

              {/* BOTTOM BLUE FLOOD — tight, bright, white-blue tint */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "50px",
                  background:
                    "linear-gradient(to top, rgba(33,198,207,0.75) 0%, rgba(33,198,207,0.45) 30%, rgba(33,198,207,0.18) 60%, transparent 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Content stays above glow */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-[#21C6CF] shrink-0"
                    style={{
                      background: "rgba(33,130,255,0.1)",
                      border: "1px solid rgba(33,130,255,0.2)",
                    }}
                  >
                    {card.icon}
                  </div>
                  <span
                    className="text-[0.65rem] tracking-[0.2em] uppercase font-semibold mt-2.5"
                    style={{
                      color: "rgba(120,170,255,0.4)",
                      
                    }}
                  >
                    {card.num}
                  </span>
                </div>
                <h3
                  className="text-white font-bold text-[1.05rem] sm:text-[1.15rem] leading-[1.4] mb-3"
                  
                >
                  {card.title}
                </h3>
                <div
                  className="w-7 h-0.5 rounded-full mb-3"
                  style={{ background: "#21C6CF" }}
                />
                <p
                  className="text-white text-[0.82rem] leading-[1.75]"
                  style={{
                    
                    fontWeight: 300,
                  }}
                >
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}