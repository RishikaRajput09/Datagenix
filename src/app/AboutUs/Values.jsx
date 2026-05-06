import useReveal from "./useReveal";
import SectionHeading from "./Sectionheading";
import Eyebrow from "./Eyebrow";
const VALUES = [
  {
    symbol: "◈",
    title: "Innovation First",
    desc: "We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking.",
  },
  {
    symbol: "⬡",
    title: "Responsible AI",
    desc: "Aligned with IndiaAI, Skill India, and UN SDGs — we build technology that serves society, not just shareholders. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking.",
  },
  {
    symbol: "◎",
    title: "Industry Depth",
    desc: "12+ years of hands-on industrial experience informs every product and solution we build. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking.",
  },
  {
    symbol: "◆",
    title: "Social Impact",
    desc: "From smart cities to AI education for underserved communities — our mission is societal, not just technological. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking.",
  },
  {
    symbol: "⬢",
    title: "Practical Problem Solving",
    desc: "Every solution is designed to deliver measurable business impact — not theoretical results. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking.",
  },
  {
    symbol: "◉",
    title: "Talent Empowerment",
    desc: "We invest in people as much as products — building the next generation of AI-capable professionals. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking. We pursue novel, AI-native approaches to every challenge rather than adapting legacy thinking.",
  },
];

export default function CoreValues() {
  const r = useReveal(0);

  return (
    <section id="values" className="bg-[#EAEAEA] h-[95vh] w-[97%] rounded-3xl mx-auto relative overflow-scroll py-4 mb-12 md:overflow-hidden">
      <div
        ref={r.ref}
        style={r.style}
        className="relative z-10 max-w-300 mx-auto px-4 sm:px-6 lg:px-10"
      >
        <div className="text-center mb-12">
          <Eyebrow>What We Stand For</Eyebrow>
          <h2
      className="text-[1.9rem] sm:text-[2.4rem] lg:text-[3rem] font-bold text-balck leading-[1.1] tracking-[-0.02em]"
    >
            Core <span className="text-[#28E7C5]">Values</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {VALUES.map((v, i) => (
            <div
              key={i}
              className="group flex gap-4 p-5 rounded-xl relative overflow-hidden bg-white
    shadow-[-25px_30px_80px_rgba(0,0,0,0.18),-8px_12px_30px_rgba(0,0,0,0.12)]
    hover:shadow-[0_24px_56px_rgba(0,0,0,0.16),0_8px_20px_rgba(0,0,0,0.1)]
    transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-[rgba(33,198,207,0.08)] border border-[rgba(33,198,207,0.15)] flex items-center justify-center text-[#28e7c5] text-sm shrink-0">
                {v.symbol}
              </div>
              <div>
                <h4
                  className="text-[#111] font-bold text-[0.9rem] mb-1.5 leading-snug"
                  
                >
                  {v.title}
                </h4>
                <p
                  className="text-[rgba(0,0,0,1)] text-[0.78rem] leading-[1.65]"
                  style={{
                    
                    fontWeight: 300,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}