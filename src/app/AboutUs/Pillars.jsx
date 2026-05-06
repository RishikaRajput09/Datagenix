import useReveal from "./useReveal";
import Eyebrow from "./Eyebrow";
import SectionHeading from "./Sectionheading";

const PILLARS = [
  {
    num: "01",
    title: "AI & IoT Product Innovation",
    desc: "Building intelligent hardware-software systems that bring AI into the physical world — from smart sensors to autonomous monitoring platforms. Building intelligent hardware-software systems that bring AI into the physical world — from smart sensors to autonomous monitoring platforms. Building intelligent hardware-software systems that bring AI into the physical world — from smart sensors to autonomous monitoring platforms. ",
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
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="15" x2="23" y2="15" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="15" x2="4" y2="15" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Custom AI Solutions for Businesses",
    desc: "Designing and deploying tailored AI and automation solutions that solve real operational challenges — improving efficiency, reducing costs, and enabling smarter decisions. Building intelligent hardware-software systems that bring AI into the physical world — from smart sensors to autonomous monitoring platforms. Building intelligent hardware-software systems that bring AI into the physical world — from smart sensors to autonomous monitoring platforms.",
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
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "AI Talent Development",
    desc: "Equipping professionals and students with practical AI skills through industry-oriented training, mentorship, and real-world project exposure. Building intelligent hardware-software systems that bring AI into the physical world — from smart sensors to autonomous monitoring platforms. Building intelligent hardware-software systems that bring AI into the physical world — from smart sensors to autonomous monitoring platforms.",
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
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
];

export default function ThreePillars() {
  const r = useReveal(0);

  return (
    <section className="bg-none relative overflow-hidden py-4 mb-12">
      <div
        ref={r.ref}
        style={r.style}
        className="relative z-10 max-w-300 mx-auto px-4 sm:px-6 lg:px-10"
      >
        <div className="text-center mb-12">
          <Eyebrow>What We Do</Eyebrow>
          <SectionHeading>
            Three Powerful <span className="text-[#28E7C5]">Pillars</span>
          </SectionHeading>
          <p
            className="text-[rgba(255,255,255,1)] text-[0.88rem] sm:text-[0.93rem] leading-[1.75] max-w-lg mx-auto mt-4"
            style={{  fontWeight: 300 }}
          >
            Today DatagenixAi works across three powerful pillars — each
            reinforcing the other to create a complete AI ecosystem.
          </p>
        </div>

        {/* Circles row — same ESG style */}
        <div className="flex items-center px-4 sm:px-10 lg:px-20 mb-10">
          {PILLARS.map((p, i) => (
            <div key={i} className="contents">
              <div className="flex flex-col items-center shrink-0">
                <div
                  className="w-18 h-18 sm:w-21 sm:h-21 rounded-full flex items-center justify-center font-bold text-[1.1rem] z-2"
                  style={{
                    
                    background: i === 1 ? "#28e7c5" : "#111418",
                    color: i === 1 ? "#050505" : "rgba(255,255,255,0.35)",
                    border:
                      i === 1 ? "none" : "1.5px solid rgba(33,198,207,0.15)",
                    boxShadow:
                      i === 1
                        ? "0 0 0 10px rgba(33,198,207,0.1), 0 0 40px rgba(33,198,207,0.2)"
                        : "none",
                  }}
                >
                  {p.num}
                </div>
              </div>
              {i < PILLARS.length - 1 && (
                <div
                  className="flex-1 h-px"
                  style={{ background: "rgba(33,198,207,0.15)" }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PILLARS.map((p, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                borderRadius: "18px",
                padding: "24px 24px 60px",
                minHeight: "280px",
                background: "rgba(10, 16, 35, 0.55)",
                overflow: "hidden",
                boxShadow: `
          0 10px 40px -10px rgba(33,198,207,0.25),
          0 20px 80px -20px rgba(33,198,207,0.18),
          inset 0 0 0 1px rgba(33,198,207,0.25),
          inset 0 1px 0 rgba(33,198,207,0.2)
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

              {/* Bottom teal flood glow */}
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

              {/* Content */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-[#28e7c5] mb-4"
                  style={{
                    background: "rgba(33,130,255,0.1)",
                    border: "1px solid rgba(33,130,255,0.2)",
                  }}
                >
                  {p.icon}
                </div>
                <h3
                  className="text-white font-bold text-[0.95rem] sm:text-[1rem] leading-[1.4] mb-3"
                  
                >
                  {p.title}
                </h3>
                <div
                  className="w-7 h-0.5 rounded-full mb-3"
                  style={{ background: "#28e7c5" }}
                />
                <p
                  className="text-[rgba(255,255,255,1)] text-[0.82rem] leading-[1.75]"
                  style={{
                    
                    fontWeight: 300,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
