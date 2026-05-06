import useReveal from "./useReveal";
import Eyebrow from "./Eyebrow";
import SectionHeading from "./Sectionheading";

const TIMELINE = [
  {
    year: "Roots",
    label: "Electronics & Embedded Systems",
    desc: "Deep expertise built across industrial R&D, hardware engineering, and embedded technology.",
  },
  {
    year: "Shift",
    label: "Data Without Intelligence",
    desc: "Witnessed how industries generated massive data but couldn't convert it into actionable intelligence.",
  },
  {
    year: "Gap",
    label: "AI Talent Shortage",
    desc: "Identified a growing disconnect between AI innovation and the skilled professionals needed to implement it.",
  },
  {
    year: "Birth",
    label: "DatagenixAi Founded",
    desc: "Created to bridge engineering depth with AI intelligence — for businesses and professionals alike.",
  },
  {
    year: "Birth",
    label: "DatagenixAi Founded",
    desc: "Created to bridge engineering depth with AI intelligence — for businesses and professionals alike.",
  },
];

export default function OriginStory() {
  const h = useReveal(0);
  const t = useReveal(120);

  return (
    <section className="bg-none relative overflow-hidden py-4 mb-12">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[rgba(33,198,207,0.1)] to-transparent" />

      <div className="relative z-10 max-w-300 mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">
          {/* Left: Story text */}
          <div
            ref={h.ref}
            style={h.style}
            className="lg:w-[48%] flex flex-col gap-0"
          >
            <Eyebrow>How We Started</Eyebrow>
            <SectionHeading>
              A Story Born from{" "}
              <span className="text-[#28E7C5]">Industry Reality</span>
            </SectionHeading>

            <div className="mt-8 flex flex-col gap-5">
              {[
                "Our journey began with deep roots in electronics, embedded systems, and industrial engineering. Over 12+ years, we worked closely with industries, understanding their operations from the inside out.",
                "We witnessed a recurring pattern — machines were generating data, businesses were generating data, but very few were able to convert it into intelligence.",
                "At the same time, a second challenge was emerging: a growing gap between AI innovation and the skilled talent needed to implement it in the real world.",
                "That is where DatagenixAi was born — not just to build AI products, but to build the entire ecosystem around AI.",
              ].map((para, i) => (
                <p
                  key={i}
                  className="text-[rgba(255,255,255,1)] text-[0.88rem] sm:text-[0.93rem] leading-[1.8]"
                  style={{
                    
                    fontWeight: 300,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Pull quote */}
            <div className="mt-8 pl-5 border-l-2 border-[#21C6CF]">
              <p
                className="text-[1rem] sm:text-[1.1rem] font-bold text-white leading-[1.6] italic "
                
              >
                "Machines were generating data. Businesses were generating data.
                But very few were able to convert it into{" "}
                <span className="text-[#28E7C5] not-italic">intelligence.</span>
                "
              </p>
            </div>
          </div>

          {/* Right: Timeline */}
          <div
            ref={t.ref}
            style={t.style}
            className="lg:w-[52%] flex flex-col gap-0 relative"
          >
            {/* Vertical line */}
            <div className="absolute left-4.75 top-6 bottom-6 w-px bg-linear-to-b from-[#21C6CF] via-[rgba(33,198,207,0.3)] to-transparent" />

            {TIMELINE.map((item, i) => (
              <div key={i} className="flex gap-5 pb-8 last:pb-0">
                {/* Dot */}
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-[rgba(33,198,207,0.25)] flex items-center justify-center z-1"
                    style={{ boxShadow: "0 0 16px rgba(33,198,207,0.1)" }}
                  >
                    <span
                      className="text-[#28e7c5] text-[0.6rem] font-bold tracking-wider"
                      
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1 pt-1.5 pb-2">
                  <div
                    className="text-[#28e7c5] text-[0.6rem] tracking-[0.18em] uppercase font-medium mb-1"
                    
                  >
                    {item.year}
                  </div>
                  <h4
                    className="text-white font-bold text-[0.95rem] mb-1.5 leading-snug"
                    
                  >
                    {item.label}
                  </h4>
                  <p
                    className="text-[rgba(255,255,255,1)] text-[0.8rem] leading-[1.65]"
                    style={{
                      
                      fontWeight: 300,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}